<section class=""><section class="">

# Introduction to siuba
<aside class="notes">


In this chapter, you'll start writing data analysis code.

We'll focus on basic actions--called verbs--that you can perform on a DataFrame.

</aside></section></section><section class=""><section class="">

# Data Analysis

![](model-workflow.png)
<aside class="notes">


Data analysis is the act of using data to produce effective communication.
Communication that leads to meaningful action.

In this course, we'll focus on one area of data analysis where siuba shines: transforming data.

We'll also combine siuba with a library called plotnine to visualize data.

</aside></section></section><section class=""><section class="">

# Meet the data: Spotify top 200

![](spotify_site.png)
<aside class="notes">


We'll use data that Spotify publishes every week on the top 200 songs in 62 different countries.

You can check it out on <a href="https://spotifycharts.com/regional/global/weekly/latest" target ="_blank">spotifycharts.com</a>

</aside></section></section><section class=""><section class="">

# Meet the data: Spotify top 200

<div style="width: 70%">

<img src="plot-line.png">

</div>

<aside class="notes">


For example, this line plot shows the top 200 hits in the United States.

</aside></section></section><section class=""><section class="">

# Meet the data: Spotify song features

<div style="width: 70%">

![](plot-weeknd-features.png)

</div>
<aside class="notes">


Later in the course, we'll look at measures Spotify calculates for each song.

Their measures for a song include:

* energy
* valence (how happy or positive)
* danceability
* speechiness
* acousticness

</aside></section></section><section class=""><section class="">

# Data Analysis

<div>
<style scoped>
.container{
    display: flex;
}
.col{
    flex: 1;
    height: 450px;
}
img {
    max-height: 50%;
}
</style>

<div class="container" height="450px">

<div class="col" width="50%">
<img src="plot-line.png">
<img src="plot-hist.png">

</div>

<div class="col" width="50%">
<img src="plot-point.png">
<img src="plot-box.png">

</div>

</div>
</div>


</section></section><section class=""><section class="">

# Music data

```python
music_top200
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
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
</div>


<aside class="notes">


The data we'll use is held in a **DataFrame**. A DataFrame is a big table of data, made up of rows and columns. In the example below, the **variable** called `music_top200` lets us refer to and work on the data.

Notice that in the bottom-left of the table, it shows the number of rows and columns. This data has 12,417 rows and 22 columns.


</aside></section></section><section data-transition="none none" class=""><section data-transition="none none" class="">

# How code is structured

![](model-structure-code-1.png)
<aside class="notes">


Here is the first code we'll use in our analyses.
It loads the tools we need from the siuba and plotnine libraries.

It's said out loud as, "from siuba import star".

</aside></section><section data-transition="none none" class="">

# How code is structured

![](model-structure-code-2.png)
</section><section data-transition="none none" class="">

# How code is structured

![](model-structure-code-3.png)
</section><section data-transition="none none" class="">

# How code is structured

![](model-structure-code-4.png)
</section><section data-transition="none none" class="">

# How code is structured

![](model-structure-code-5.png)
</section><section data-transition="none none" class="">

# How code is structured

![](model-structure-code-6.png)
</section></section><section class=""><section class="">

# Let's practice!
</section></section>