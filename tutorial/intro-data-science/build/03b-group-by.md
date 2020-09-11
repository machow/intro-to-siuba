---
title: "Group by"
output: html_document
editor_options: 
  chunk_output_type: console
chunk: summarize
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
    from music_top200 import music_top200, track_features
    
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


import slides from '../slides/03b-slides.markdown'

<RevealSlides :slides="slides" />

### Exercise 1:

Modify the code below so it calculates max popularity and average danceability **for each artist**.

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    artists = (track_features
      >> summarize(
          max_popularity = _.popularity.max(),
          avg_danceability = _.danceability.mean()
      )
    )
    artists


<template v-slot:output>




<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>max_popularity</th>
      <th>avg_danceability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>99</td>
      <td>0.677937</td>
    </tr>
  </tbody>
</table>
<p>1 rows × 2 columns</p>



</template>

</code-cell>


Make a scatterplot of the data.

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


<pre><code>



</code></pre>


</code-cell>


In the plot above, what strange thing is going on with the distribution of max popularity?

<details>
<summary>possible answer</summary>

There are many artists with a max popularity of 0! 
  
</details>    

### Exercise 2:

In the last exercise of the facets chapter, you examined track features for three artists.

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    # This code keeps the 3 artists listed ----
    
    artists_to_keep = ["Billie Eilish", "ITZY", "Roddy Ricch"]
    
    some_artists = (
      track_features
      >> filter(_.artist.isin(artists_to_keep))
    )
    
    #uncomment line below to see data
    #some_artists




</code-cell>


We used a plot and intuition to judge who tended to have highest energy and valence tracks.

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    # This code plots the data ----
    (some_artists
      >> ggplot(aes("energy", "valence", color = "artist"))
       + geom_point()
       + facet_wrap("~artist", nrow = 1)
       + labs(title = "Song features across 3 artists")
    )


<template v-slot:output>


![png](./03b-group-by_files/03b-group-by_11_0.png)









</template>

</code-cell>


Now you should be able to answer the question more directly!

**Use a grouped summarize to calculate the mean energy and valence for each artist**.

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


<pre><code># summarizing mean energy and valence for each artist



</code></pre>


</code-cell>


Q: In this data, which artist has the lowest average energy, and what is its value?

<details><summary>answer</summary>Billie Eilish, 0.321004</details>

Q: What about for lowest average valence?

<details><summary>answer</summary>Billie Eilish, 0.266948</details>


</Notebook>

