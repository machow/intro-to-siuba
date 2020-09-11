---
title: "Filter"
output: html_document
editor_options: 
  chunk_output_type: console
chunk: wrangle
---

<Notebook
  v-slot="nb"
  branch="master"
  repo="machow/purview"
  url="https://mybinder.org"
  useBinder="1"
  useStorage="1"
  >


<details v-fix-codemirror v-show="nb.debut">
<code-cell  :status="nb.status" :onExecute="nb.execute" :onReady="nb.updateSetupCode"  language="python">


    # TODO: explain how to run this, and that they only need the gist (loads tools)
    
    # wranglign ---------
    import pandas as pd
    from siuba import *
    
    # plotting ----------
    from plotnine import *
    
    theme_set(theme_classic(base_family = "Noto Sans CJK JP"))
    
    # data --------------
    #fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/music200.csv"
    fname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"
    music_top200 = pd.read_csv(fname)
    
    # tracks
    #fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/track_features.csv"
    fname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"
    track_features = pd.read_csv(fname)
    
    # student support ----------
    from siuba import pipe
    from IPython.display import HTML, display
    from siututor import Blank
    ___ = Blank()
    
    # DataFrame display --------
    pd.set_option("display.max_rows", 6)
    
    from IPython import get_ipython
    # special ipython function to get the html formatter
    html_formatter = get_ipython().display_formatter.formatters['text/html']
    
    # here, we avoid the default df._repr_html_ method, since it inlines css
    # (style tags make vue angry)
    html_formatter.for_type(
        pd.DataFrame,
        lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)
    )
    
    # remove the <ggplot: (528...)> printout
    html_formatter.for_type(ggplot, lambda g: "")
    




</code-cell>
</details>

import slides from '../slides/01b-slides.markdown'

<RevealSlides :slides="slides" />

### Exercise 1: 

The code below is filtering to keep only hits where `country` is United States.
Change the filter to get hits from Canada.


<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (music_top200
      >> filter(_.country == "United States")
    )


<template v-slot:output>




<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>country</th>
      <th>position</th>
      <th>track_name</th>
      <th>artist</th>
      <th>streams</th>
      <th>duration</th>
      <th>continent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>7800</th>
      <td>United States</td>
      <td>1</td>
      <td>The Box</td>
      <td>Roddy Ricch</td>
      <td>12987027</td>
      <td>196.653</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7801</th>
      <td>United States</td>
      <td>2</td>
      <td>Myron</td>
      <td>Lil Uzi Vert</td>
      <td>9163134</td>
      <td>224.955</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7802</th>
      <td>United States</td>
      <td>3</td>
      <td>Blueberry Faygo</td>
      <td>Lil Mosey</td>
      <td>8043475</td>
      <td>162.547</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>7997</th>
      <td>United States</td>
      <td>198</td>
      <td>Lights Up</td>
      <td>Harry Styles</td>
      <td>1606234</td>
      <td>172.227</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7998</th>
      <td>United States</td>
      <td>199</td>
      <td>Without Me</td>
      <td>Halsey</td>
      <td>1606153</td>
      <td>201.661</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7999</th>
      <td>United States</td>
      <td>200</td>
      <td>Enemies (feat. DaBaby)</td>
      <td>Post Malone</td>
      <td>1597824</td>
      <td>196.760</td>
      <td>Americas</td>
    </tr>
  </tbody>
</table>
<p>200 rows × 7 columns</p>



</template>

</code-cell>

<prompt-expandable header="Comparing results, which artist is in the top 3 in both (the) United States and Canada?">

<q-multiple-choice>
  <q-opt text="Roddy Ricch"><span>Nailed it!</span></q-opt>
  <q-opt text="The Weeknd"><span>That artist is only top 3 in the United States</span></q-opt>
  <q-opt text="Tones And I"><span>That artist is only top 3 in the Canada</span></q-opt>
</q-multiple-choice>

</prompt-expandable>

### Exercise 2: 

* Filter to keep tracks where position equals 5.

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (music_top200
      >> filter(___)
    )


<template v-slot:output>




⚠️: <b>Don't forget to replace all the blanks!</b>



</template>

</code-cell>

<prompt-expandable header="Which artist is in position 5 in South Africa?">

<q-multiple-choice>
  <q-opt text="Bad Bunny"><span></span></q-opt>
  <q-opt text="Eminem"><span>That's right!</span></q-opt>
  <q-opt text="BTS"><span></span></q-opt>
  <q-opt text="Selena Gomes"><span></span></q-opt>  
</q-multiple-choice>

</prompt-expandable>

### Exercise 3:

Find the top 5 songs in Hong Kong.

In the slides we discussed the `==` operator. Here is a longer list of some options!

| operator | meaning |
| -------- | ------- |
| `==`     | is equal to |
| `<`      | is less than |
| `>`      | is greater than |


<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (music_top200
      >> filter(___, ___)
    )


<template v-slot:output>




⚠️: <b>Don't forget to replace all the blanks!</b>



</template>

</code-cell>


### Exercise 4: looking at The Weeknd's streams

How many times has The Weeknd had over 1,000,000 streams?

<details>
    <summary>Hint:</summary>
    Do in steps. Run first to get all rows where the artist is The Weeknd, and then modify your code to get where he has over 1,000,000 streams.
</details>

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (
    
    )


<template v-slot:output>




    ()



</template>

</code-cell>



</Notebook>

