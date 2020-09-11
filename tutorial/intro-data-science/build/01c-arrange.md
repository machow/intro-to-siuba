---
title: "Arrange"
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

import slides from '../slides/01c-slides.markdown'

<RevealSlides :slides="slides" />

### Exercise 1:

Modify the code below to arrange by artist name in **descending** order.

<details><summary>hint</summary>

> You can sort something in descending order, using the `-` operator.

<details><summary>another hint</summary>

> Start by using the pipe operator with `arrange()`. You will need to specify what to arrange by.

</details>
</details>

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (music_top200
    
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
      <th>0</th>
      <td>Argentina</td>
      <td>1</td>
      <td>Tusa</td>
      <td>KAROL G</td>
      <td>1858666</td>
      <td>200.960</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Argentina</td>
      <td>2</td>
      <td>Tattoo</td>
      <td>Rauw Alejandro</td>
      <td>1344382</td>
      <td>202.887</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Argentina</td>
      <td>3</td>
      <td>Hola - Remix</td>
      <td>Dalex</td>
      <td>1330011</td>
      <td>249.520</td>
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
      <th>12397</th>
      <td>South Africa</td>
      <td>198</td>
      <td>Black And White</td>
      <td>Niall Horan</td>
      <td>11771</td>
      <td>193.090</td>
      <td>Africa</td>
    </tr>
    <tr>
      <th>12398</th>
      <td>South Africa</td>
      <td>199</td>
      <td>When I See U</td>
      <td>Fantasia</td>
      <td>11752</td>
      <td>217.347</td>
      <td>Africa</td>
    </tr>
    <tr>
      <th>12399</th>
      <td>South Africa</td>
      <td>200</td>
      <td>Psycho!</td>
      <td>MASN</td>
      <td>11743</td>
      <td>197.217</td>
      <td>Africa</td>
    </tr>
  </tbody>
</table>
<p>12400 rows × 7 columns</p>



</template>

</code-cell>

<prompt-expandable header="What artist is the last observation (row) in the result?">

<q-multiple-choice>
  <q-opt text="$NOT"><span>Great job!</span></q-opt>
  <q-opt text="黃宣"><span>That's not right. Did you arrange in ascending, rather than descending order?</span></q-opt>
  <q-opt text="Aaron Smith"><span>Incorrect</span></q-opt>
  <q-opt text="Y2K"><span>Incorrect</span></q-opt>    
</q-multiple-choice>

</prompt-expandable>

### Exercise 2:

What is the first track, if you filter to keep only observations from the country Mexico, and then sort in **ascending order** by track name?

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (music_top200
      >> ___
      >> arrange(___)
    )


<template v-slot:output>




⚠️: <b>Don't forget to replace all the blanks!</b>



</template>

</code-cell>

<prompt-expandable header="">

<q-multiple-choice>
  <q-opt text="11 PM"><span>Great job!</span></q-opt>
  <q-opt text="一天 (電視劇《想見你》插曲)"><span>Incorrect</span></q-opt>
  <q-opt text="everything i wanted"><span>Incorrect</span></q-opt>
  <q-opt text="#24"><span>Be sure to filter where country is Mexico</span></q-opt>    
</q-multiple-choice>

</prompt-expandable>

### Exercise 3: 

Below is code with the arrange verb removed. Modify it to arrange in ascending order..

* first by position
* second by streams

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (music_top200
      >> ___
    )


<template v-slot:output>




⚠️: <b>Don't forget to replace all the blanks!</b>



</template>

</code-cell>


<prompt-expandable header="What country has the position 1 track (The Box) with fewest streams?">

<q-multiple-choice>
  <q-opt text="Cyprus"><span>That's right! Make sure to double check that the track is named The Box by Roddy Ricch.</span></q-opt>
  <q-opt text="United States"><span>Incorrect</span></q-opt>
  <q-opt text="Brazil"><span>Incorrect</span></q-opt>
    <q-opt text="Luxembou"><span>Incorrect</span></q-opt>
</q-multiple-choice>

</prompt-expandable>

### Exercise 4

What's the shortest song in the top position in the `music_top200` data?

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


<pre><code># add code below this line



</code></pre>


</code-cell>


<prompt-expandable header="">

<q-multiple-choice>
  <q-opt text="Bad Girls, Good Vibes"><span>That's right!</span></q-opt>
  <q-opt text="Klop Klop"><span>Incorrect. This is the shortest track in any position. Can you sort to get top position tracks first?</span></q-opt>
  <q-opt text="Susamam"><span>Incorrect. This is the longest track in any position. Can you sort to get top position tracks first?</span></q-opt>
    <q-opt text="Blockparty"><span>Incorrect. This is the shortest track in the last position.</span></q-opt>
</q-multiple-choice>

</prompt-expandable>


</Notebook>

