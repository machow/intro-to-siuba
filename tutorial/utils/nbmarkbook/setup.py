from setuptools import setup, find_packages

# parse version ---------------------------------------------------------------

import re
import ast
_version_re = re.compile(r'__version__\s+=\s+(.*)')

with open('nbmarkbook.py', 'rb') as f:
    version = str(ast.literal_eval(_version_re.search(
        f.read().decode('utf-8')).group(1)))

# setup -----------------------------------------------------------------------

setup(
    name='nbmarkbook',
    py_modules=['nbmarkbook'],
    version=version,
    description='TODO',
    author='Michael Chow',
    license='MIT',
    author_email='mc_al_gh@fastmail.com',
    url='https://github.com/machow/nbmarkbook',
    keywords=['package', ],
    entry_points={
        'nbconvert.exporters': [
            "nbmarkbook = nbmarkbook:NbMarkbookExporter",
            "metaexporter = nbmarkbook:MetaExporter",
            "slidessimple = nbmarkbook:SlidesSimpleExporter",
        ],
    },
    install_requires=[
        "nbconvert",
    ],
    python_requires=">=3.0",
    classifiers=[
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
    ],
)
