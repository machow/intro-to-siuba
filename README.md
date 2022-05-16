# Introduction to Data Science with siuba

![Deploy Website](https://github.com/machow/intro-to-siuba/workflows/Deploy%20Website/badge.svg)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/machow/purview/master?urlpath=lab)

## Content

* [Rmd folder with lesson content](tutorial/intro-data-science/Rmd)
* [slides folder](tutorial/intro-data-science/slides)

## How to Make Updates

This course is automatically staged and deployed using github actions.

* [Staging site](http://staging-learn.siuba.org/): updated when a change is made on the master or staging branches.
* [Production site](http://learn.siuba.org/): updated when a release is made.

### Deploying

1. Commit your changes to master or staging.
2. Once the github action runs, look for the entry called `🐣: Check content diff`, showing which files changed after content rebuild.
3. For changed files, look on http://staging-learn.siuba.org/ to see that the changes make sense.
4. Create a release, which will trigger a rebuild and deployment!

> ⚠️: Every time you change the master branch, when someone clicks "run" binder will need to rebuild! This process can take over a minute. If you make changes on staging, binder will not need to rebuild after every change.

## Development

In order to build this course locally, you can run the following (for MacOSX).

```shell
# install this font, which supports many asian characters
# you have to clear matplotlib's cache, or it won't see the new font.
brew install font-noto-sans-cjk-jp
rm ~/.matplotlib/fontlist*

# install requirements
pip install -r tutorial/requirements-dev.txt


# regenerate everything
make notebooks

# note that if you want to force everything to regenerate, use this flag
make notebook -B
```

## Roadmap

### Before release

* Formatting cleanup
  - Exercise headings
  - Clearly marking the slides
  - Some typos / markdown getting mangled
  - Few places where details element is used instead of a question box
  - Better slide transitions when user clicks down (i.e. appears immediately)
* Run some people through chapters 2 and 3
* Intro page? (could punt to down the road)
* A couple of screencasts showing 10 minute analyses, using skills from course
  (could also use verbs like count(), and refer to docs).
* Suggested Tidy Tuesdays to try
* A "next steps" outro lesson (could put at end of chapter 3 for now)
* Figure out and add license
* Remove /build/ from lesson urls


### Down the road

* Record video for slides
* Clicking up key terms brings up definitions
* A big cheatsheet showing everything taught
* Chapter 4
  - first 2 lessons on plots, then 1 on bridge material (e.g. simple pandas read_csv)?


