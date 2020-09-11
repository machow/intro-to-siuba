NOTEBOOKS:=$(subst /Rmd/,/build/,$(patsubst %.Rmd,%.md,$(wildcard tutorial/intro-data-science/Rmd/0*.Rmd)))
SLIDES_DIR:=tutorial/intro-data-science/slides
INTRO_DS_DIR:=tutorial/intro-data-science
SLIDES:=$(patsubst %.ipynb,%.markdown,$(wildcard $(SLIDES_DIR)/*.ipynb))


$(INTRO_DS_DIR)/notebooks/%.Rmd: $(INTRO_DS_DIR)/setup.py
	# update setup code
	jupytext --sync $@
	jupyter nbconvert --to ipynb --inplace \
		--NotebookExporter.preprocessors="['nbmarkbook.SetupCodePreprocessor']" \
		$@
	jupytext --sync $@


$(INTRO_DS_DIR)/build/%.md: $(INTRO_DS_DIR)/Rmd/%.Rmd
	jupytext --sync --execute $<
	jupyter nbconvert \
		--to nbmarkbook --template utils/nbmarkbook/notebook_template.j2 \
		--output-dir $(dir $@) \
		--output $(notdir $@) \
		--TagRemovePreprocessor.remove_cell_tags="{'solution-code', 'hide-cell'}" \
		--TagRemovePreprocessor.remove_input_tags="{'hide-input'}" \
		--TagRemovePreprocessor.remove_single_output_tags="{'hide-output'}" \
		$(INTRO_DS_DIR)/notebooks/$*.ipynb


$(INTRO_DS_DIR)/slides/%.markdown: $(SLIDES_DIR)/%.ipynb $(SLIDES_DIR)/slides_template.j2
	# there is a bug making it impossible to exclude outputs when you execute,
	# so execute and then convert in two steps
	#jupyter nbconvert --execute --inplace $<
	jupyter nbconvert --to metaexporter --template $(SLIDES_DIR)/slides_template.j2 --execute $<
	# for some reason, uses extension .slides.html :/
	#mv $(patsubst %.html,%.slides.html,$@) $@


notebooks: $(NOTEBOOKS)

slides: $(SLIDES)

data:
	cp ../intro-tidyverse/tutorial/music_top200.csv tutorial/intro-data-science/data
	cp ../intro-tidyverse/tutorial/track_features.csv tutorial/intro-data-science/data

build:
	BUILD_ENV=production gridsome build

build-staging:
	BUILD_ENV=staging gridsome build

deploy:
	gh-pages -d dist

deploy-staging:
	gh-pages -d dist/staging --dest staging -a

clear-output:
	jupyter nbconvert --ClearOutputPreprocessor.enabled=True --inplace $(SLIDES_DIR)/*.ipynb

clean:
	rm -rf $(INTRO_DS_DIR)/build/*
