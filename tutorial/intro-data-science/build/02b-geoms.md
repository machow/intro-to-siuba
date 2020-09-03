---
title: "Geoms"
output: html_document
editor_options: 
  chunk_output_type: console
chunk: visualize
exercise_pars:
  - size: 
      label: 'Size'
      options: [11, 5, 7, 14]
    ha:
      label: 'Horizontal align'
      options: ['center', 'left', 'right']      
    nudge:
      label: 'Nudge'
      options: ['nudge_y = 0', 'nudge_y = .05', 'nudge_y = -.05', 'nudge_x = .05']
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
    
    




</code-cell>
</details>

import slides from '../slides/02b-slides.markdown'

<RevealSlides :slides="slides" />

### Exercise 1:

The options below let you change different arguments to `geom_text()`. Try changing them and running the code, in order to get a readable plot. Then, answer the questions underneath the plot.

import CodeCellTemplater from '~/components/Cell/CodeCellTemplater.vue'

<CodeCellTemplater
    :templateVars="$frontmatter.exercise_pars[0]"
    :status="nb.status" :onExecute="nb.execute" language="python"
    >

    (track_features
      >> filter(_.artist == "Queen")
      >> ggplot(aes("energy", "valence", label = "track_name"))
       + geom_point()
       + geom_text(size = ${this.size}, ha = "${this.ha}", ${this.nudge})
    )    
    
<template v-slot:output>

![](../assets/02b-queen-plot.png)


</template>    

</CodeCellTemplater>

<p>Below are three songs at different corners of the graph. Can you tell whether they have high or low energy? Valence? Which do you think has low energy and low valence?</p>


<div style="display: flex; width: 100%; flex-grow: 1;">
<div style="flex: 1 0;">
<p>Hammer to Fall</p>

<iframe width="200" src="https://www.youtube.com/embed/JU5LMG3WFBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div style="flex: 1 0;">
<p>Crazy Little Thing Called Love</p>

<iframe width="200" src="https://www.youtube.com/embed/zO6D_BAuYCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div style="flex: 1 0;">
<p>Love of My Life</p>

<iframe width="200" src="https://www.youtube.com/embed/7hFeER3_ZRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

### Exercise 2:

This exercise is a case study on selecting extreme differences between two features, such as energy and acousticness.

At the end of the case study, you'll be prompted to add code!

Generally tracks with higher energy tend to be less acoustic, as shown in the plot below.

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (track_features
      >> filter(_.popularity > 33)
      >> ggplot(aes("energy", "acousticness"))
       + geom_point()
    )


<template v-slot:output>


![png](./02b-geoms_files/02b-geoms_7_0.png)





    <ggplot: (-9223372036581161272)>



</template>

</code-cell>


But notice that in the plot above, there's a point in the top right, that is high energy and high acousticness.

In order to find high energy and acousticness songs like this, I used the following code.

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (track_features
      >> filter(_.energy > .9, _.popularity > 33)
      >> arrange(-_.acousticness)
    )


<template v-slot:output>




<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>artist</th>
      <th>album</th>
      <th>track_name</th>
      <th>energy</th>
      <th>valence</th>
      <th>danceability</th>
      <th>speechiness</th>
      <th>acousticness</th>
      <th>popularity</th>
      <th>duration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>23990</th>
      <td>MC Kevin o Chris</td>
      <td>Vamos pra Gaiola</td>
      <td>Vamos pra Gaiola</td>
      <td>0.971</td>
      <td>0.521</td>
      <td>0.872</td>
      <td>0.2810</td>
      <td>0.917000</td>
      <td>61</td>
      <td>161.600</td>
    </tr>
    <tr>
      <th>5211</th>
      <td>ScHoolboy Q</td>
      <td>CrasH Talk</td>
      <td>Black Folk</td>
      <td>0.902</td>
      <td>0.400</td>
      <td>0.734</td>
      <td>0.3960</td>
      <td>0.831000</td>
      <td>51</td>
      <td>147.040</td>
    </tr>
    <tr>
      <th>24929</th>
      <td>MC Kevin o Chris</td>
      <td>Eu Vou pro Baile da Gaiola</td>
      <td>Eu Vou pro Baile da Gaiola</td>
      <td>0.957</td>
      <td>0.642</td>
      <td>0.832</td>
      <td>0.1050</td>
      <td>0.824000</td>
      <td>52</td>
      <td>123.220</td>
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
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>18951</th>
      <td>Foo Fighters</td>
      <td>There Is Nothing Left To Lose</td>
      <td>Learn to Fly</td>
      <td>0.919</td>
      <td>0.537</td>
      <td>0.465</td>
      <td>0.0408</td>
      <td>0.000018</td>
      <td>74</td>
      <td>235.293</td>
    </tr>
    <tr>
      <th>20425</th>
      <td>Foo Fighters</td>
      <td>One By One (Expanded Edition)</td>
      <td>Times Like These</td>
      <td>0.908</td>
      <td>0.265</td>
      <td>0.377</td>
      <td>0.0899</td>
      <td>0.000014</td>
      <td>68</td>
      <td>265.560</td>
    </tr>
    <tr>
      <th>21871</th>
      <td>Turmion Kätilöt</td>
      <td>Global Warning</td>
      <td>Jumalauta</td>
      <td>0.939</td>
      <td>0.549</td>
      <td>0.454</td>
      <td>0.0618</td>
      <td>0.000010</td>
      <td>42</td>
      <td>210.107</td>
    </tr>
  </tbody>
</table>
<p>812 rows × 10 columns</p>



</template>

</code-cell>


Can you plot songs by MC Kevin o Chris, with both points and text?

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (track_features
      >> filter(_.artist == "MC Kevin o Chris")
      >> ___
    )


<template v-slot:output>




⚠️: <b>Don't forget to replace all the blanks!</b>



</template>

</code-cell>


Why do you think Vamos pra Gaiola is high energy and high acousticness?

<iframe width="200" src="https://www.youtube.com/embed/0R6zBcV9JiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details><summary>answer</summary>
My best guess is because the drums are done by a persons voice, there are few instruments, but it is still a pretty fast tempo. It would be interesting to look at their other tracks for a comparison.
</details>

Can you modify each code block in the case study to be about high energy and low danceability songs?


</Notebook>

