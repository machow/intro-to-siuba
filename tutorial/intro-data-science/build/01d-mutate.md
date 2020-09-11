---
title: "Mutate"
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

import slides from '../slides/01d-slides.markdown'

<RevealSlides :slides="slides" />

### Exercise 0:

Delete the `#` symbol on the line `# music_top200`. This symbol is called a comment, and causes everything to the right of it to be ignored.

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    # I am a helpful not. I am not code!
    
    # music_top200




</code-cell>


### Exercise 1:

Currently, the `duration` is calculated in seconds.

* Delete (uncomment) the `#` symbol in the code.
* Complete the code to convert duration to milliseconds.

<details>
  <summary>hint</summary>
  
  > Delete the # symbol. This is called a comment. When it is the first non-blank on a line, it stops that line from being run.
  
  > 1 second is 1000 milliseconds. So you would multiply the duration by 1000.
</details>

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (music_top200
      # >> mutate(___ = ___)
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


### Exercise 2:

Uncomment the mutate in the pipe below. Can you fix the two errors in it?

It should return data with a new column on the right, that divides position by 200.


<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (music_top200
      # >> mutate(new position = position / 200)
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


### Exercise 3: 

The mutate below uses code from a future chapter to calculate how many letters are in each artist's name.

Which artist with the shortest name has the most streams?

<details>
  <summary>hint</summary>
  
  > You'll need to use an arrange in the pipe with 2 arguments.
</details>

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (music_top200
      >> mutate(artist_length = _.artist.str.len())
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
      <th>artist_length</th>
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
      <td>7</td>
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
      <td>14</td>
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
      <td>5</td>
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
      <td>11</td>
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
      <td>8</td>
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
      <td>4</td>
    </tr>
  </tbody>
</table>
<p>12400 rows × 8 columns</p>



</template>

</code-cell>


<prompt-expandable header="">

<q-multiple-choice>
  <q-opt text="V, for their track in Indonesia"><span>That's right!</span></q-opt>
  <q-opt text="V, for their track in Hong Kong"><span>That's the right artist, but did you sort by most streams first?</span></q-opt>
  <q-opt text="F, for their track in Finland"><span>Incorrect. Did you sort by most streams first?</span></q-opt>
    <q-opt text="F, for their track in Hong Kong"><span>Incorrect. Did you sort by most streams first?</span></q-opt>
</q-multiple-choice>

</prompt-expandable>


</Notebook>

