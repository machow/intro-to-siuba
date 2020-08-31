"""
some string
"""

# set version ----
__version__ = "0.0.1"


# main ----
import os
from nbconvert.exporters import MarkdownExporter, Exporter, SlidesExporter, get_exporter
from traitlets.config import Config
from traitlets import List
from copy import deepcopy
from nbformat.notebooknode import NotebookNode


# tool to cut out yaml headers in first cell of notebook ----------------------

import re

_HEADER_RE = re.compile(r"^---\s*$")


def split_metadata(notebook):
    """
    Return the text header corresponding to a notebook, long with copy of other cells.

    Modified from https://github.com/mwouts/jupytext/blob/d6abab533d989495bded9d85cf8ea9797488840a/jupytext/header.py
    """

    cell = notebook.cells[0]
    if cell.cell_type == 'raw':
        lines = cell.source.strip('\n\t ').splitlines()
        if len(lines) >= 2 \
                and _HEADER_RE.match(lines[0]) \
                and _HEADER_RE.match(lines[-1]):
            return "\n".join(lines), notebook.cells[1:]

    return "", notebook.cells[:]


# filter to use relative path -------------------------------------------------

try:
    from urllib.parse import quote  # Py 3
except ImportError:
    from urllib2 import quote  # Py 2


def path2url(path):
    parts = path.split(os.path.sep)
    return './' + '/'.join(quote(part) for part in parts)



# new exporter ----------------------------------------------------------------
from string import ascii_lowercase
from nbconvert.preprocessors.base import Preprocessor

# preprocessor for exercises, that run code cells togethers
class ExerciseMetadataPreprocessor(Preprocessor):
    # A custom preprocessor adding convenience metadata to cells
    # NOTE: AFAICT nbconvert largely gives itself special access to set preprocessors
    # for specific templates, so I just configure it in the CLI in the Makefile for now..

    def preprocess(self, nb, resources=None):
        nb = deepcopy(nb)

        ex_indx = 0
        ex_name = ascii_lowercase[ex_indx]
        ex_sub_indx = 0
        for cell in nb.cells:
            if "exercise" in cell.metadata.get('tags', []):
                ex_sub_indx = 0
                ex_name = ascii_lowercase[ex_indx]

                cell.metadata.exercise_start = True

            cell.metadata.exercise_index = str(ex_sub_indx)    # I forgot how to use str() in a jinja template
            cell.metadata.exercise_name = ex_name

            ex_sub_indx += 1

        return nb, resources

class SetupCodePreprocessor(Preprocessor):
    def preprocess(self, nb, resources=None):

        nb = deepcopy(nb)
        
        setup_code = open("./tutorial/intro-data-science/setup.py", "r").read()

        for ii, cell in enumerate(nb.cells):
            if 'setup' in cell.metadata.get('tags', []):
                nb.cells[ii] = NotebookNode(**{**cell, 'source': setup_code})

        return nb, resources


class NbMarkbookExporter(MarkdownExporter):
    # this is not ideal, but I don't know how to get into the template machinary
    #preprocessors = List([
    #    ExerciseMetadataPreprocessor,
    #    SetupCodePreprocessor]
    #    )

    def _init_preprocessors(self):
        self.register_preprocessor(SetupCodePreprocessor, enabled = True)
        self.register_preprocessor(ExerciseMetadataPreprocessor, enabled = True)
        super()._init_preprocessors()

    def default_filters(self):
        # funky, but the recommended way to add filters...
        # https://github.com/jupyter/nbconvert/blob/5.5.0/nbconvert/exporters/templateexporter.py#L376
        for pair in super().default_filters():
            if pair[0] != 'path2url':
                yield pair
        yield ('path2url', path2url)

    def from_notebook_node(self, nb, resources=None, **kw):
        # Copied from TemplateExporter
        nb = deepcopy(nb)
        #nb.metadata['purview']['url'] = "http://localhost:8888"
        #nb.metadata['purview']['useBinder'] = ""
        #nb.metadata['purview']['token'] = "b29b8674304df1f06d9e8245f145a71810055d7c18669885"
        header, cells = split_metadata(nb)

        nb.cells = cells

        output, resources = super().from_notebook_node(nb, resources, **kw)
        return header + "\n\n" + output, resources
    

# https://nbconvert.readthedocs.io/en/latest/removing_cells.html#removing-pieces-of-cells-using-cell-tags
# https://github.com/jupyter/nbconvert/blob/1fd7e3b970335ff13ad8a1e5d065285571474850/nbconvert/nbconvertapp.py#L508-L518
class MetaExporter(Exporter):
    def from_notebook_node(self, nb, resources = None, **kw):
        config = nb['metadata'].get('nbconvert')
        exporter_name = config.get('exporter', None)
        if exporter_name is None:
            raise ValueError("Must specify exporter field for nbconvert metadata")

        cls = get_exporter(exporter_name)
        exporter = cls(Config(config))

        return exporter.from_notebook_node(nb = nb, resources = resources, **kw)


from traitlets import Bool, Unicode, default
from nbconvert.exporters.slides import prepare
from nbconvert.postprocessors.base import PostProcessorBase
from nbconvert.filters.markdown import markdown2html

class HtmlPostProcessor(PostProcessorBase):

    def __call__(self, input):
        """
        See def postprocess() ...
        """
        self.to_html(input)


    def to_html(self, input):
        """
        Post-process output from a writer.
        """
        print("WOHOOO")
        raise NotImplementedError("WALHTS")
        return markdown2html(input)


class SlidesSimpleExporter(MarkdownExporter):
    @property
    def default_config(self):
        c = Config({
            'HtmlPostProcessor': {
                'enabled': True
                },
            })
        c.merge(super().default_config)
        return c

    def from_notebook_node(self, nb, resources=None, **kw):
        nb = prepare(nb)

        out = super().from_notebook_node(nb, resources=resources, **kw)

        return markdown2html(out[0]), out[1]

    @default('file_extension')
    def _file_extension_default(self):
        return '.markdown'
