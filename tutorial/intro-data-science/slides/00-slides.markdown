<section class=""><section class="">

# Introduction to siuba
<aside class="notes">


Hi, I'm Michael--the creator of siuba, a library for data analysis in Python.

In this course, you'll use Python to explore and visualize data.

The course is designed for people who have never programmed before,
and anyone interested in siuba!



</aside></section></section><section class=""><section class="">

# Data Analysis

![](model-workflow.png)
<aside class="notes">


Data analysis is the act of using data to produce effective communication.
Communication that leads to meaningful action.

In this course, we'll focus on one area of data analysis where siuba shines: transforming data.

We'll also combine siuba with a library called plotnine to visualize data. Together, these libraries make a powerful combo.

</aside></section></section><section class=""><section class="">

# Meet the data: Spotify top 200

![](spotify_site.png)
<aside class="notes">


We'll use data that Spotify publishes every week on the 200 most streamed songs, in 62 different countries.

You can check it out on <a href="https://spotifycharts.com/regional/global/weekly/latest" target ="_blank">spotifycharts.com</a>

</aside></section></section><section class=""><section class="">

# Meet the data: Spotify top 200

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

Notice that in the bottom-left of the table, it shows the number of rows and columns. This data has 12,000 rows and 6 columns.


</aside></section><section data-transition="none-in slide-out" class="">

# Meet the data: Spotify top 200


```python
music_top200
```





<style>
table.dataframe.slides-df__highlight1 tr:nth-child(2) {
    background-color: yellow;
}
</style>


<table border="1" class="dataframe slides-df__highlight1">
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


<aside class="notes">


Every observation--or row--in the DataFrame is a track in the top 200 for a country.

For example, in the highlighted code is the track in position 2 (second most streamed) in Argentina. The track name is Tattoo, and has been streamed 1,344,382 times, and is 202 seconds long!

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


<aside class="notes">


The skills you'll build doing transformation and visualization in this course will allow you to start analyzing your own data.

The course is interactive: between short lessons you'll complete interactive exercises by typing your own code.


</aside></section></section><section class=""><section class="">

# How code is structured

```python
(track_features
  >> filter(_.artist == "The Weeknd")
  >> ggplot(aes("energy", "valence"))
   + geom_point()
)
```


![png](00-slides_files/00-slides_19_0.png)





    <ggplot: (-9223372036552900590)>


<aside class="notes">


Here's an example of plotting the energy and valence of tracks by The Weeknd. Each point is a single track (for example, the song "Blinding Lights").

The top line of the code is the data. Every additional line is an action applied to the data.

**Click down to see what each line of code does.**

</aside></section><section data-transition="none-in none-out" class="">

# How code is structured

```python
(track_features
  >> filter(_.artist == "The Weeknd")


)
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
      <th>568</th>
      <td>The Weeknd</td>
      <td>My Dear Melancholy,</td>
      <td>Call Out My Name</td>
      <td>0.593</td>
      <td>0.175</td>
      <td>0.461</td>
      <td>0.0356</td>
      <td>0.17000</td>
      <td>82</td>
      <td>228.373</td>
    </tr>
    <tr>
      <th>2754</th>
      <td>The Weeknd</td>
      <td>Blinding Lights</td>
      <td>Blinding Lights</td>
      <td>0.796</td>
      <td>0.345</td>
      <td>0.513</td>
      <td>0.0629</td>
      <td>0.00147</td>
      <td>75</td>
      <td>201.573</td>
    </tr>
    <tr>
      <th>3005</th>
      <td>The Weeknd</td>
      <td>In Your Eyes (Remix)</td>
      <td>In Your Eyes (with Doja Cat) - Remix</td>
      <td>0.731</td>
      <td>0.727</td>
      <td>0.679</td>
      <td>0.0319</td>
      <td>0.00518</td>
      <td>81</td>
      <td>237.912</td>
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
      <th>23967</th>
      <td>The Weeknd</td>
      <td>Beauty Behind The Madness</td>
      <td>The Hills</td>
      <td>0.564</td>
      <td>0.137</td>
      <td>0.585</td>
      <td>0.0515</td>
      <td>0.06710</td>
      <td>83</td>
      <td>242.253</td>
    </tr>
    <tr>
      <th>24689</th>
      <td>The Weeknd</td>
      <td>Starboy</td>
      <td>Starboy</td>
      <td>0.587</td>
      <td>0.486</td>
      <td>0.679</td>
      <td>0.2760</td>
      <td>0.14100</td>
      <td>84</td>
      <td>230.453</td>
    </tr>
    <tr>
      <th>24983</th>
      <td>The Weeknd</td>
      <td>After Hours</td>
      <td>In Your Eyes</td>
      <td>0.719</td>
      <td>0.717</td>
      <td>0.667</td>
      <td>0.0346</td>
      <td>0.00285</td>
      <td>91</td>
      <td>237.520</td>
    </tr>
  </tbody>
</table>
<p>23 rows × 10 columns</p>
</div>


<aside class="notes">


The first action is filtering the data, to keep only observations (rows) where `artist` is The Weeknd.

Don't worry to much about the details for now. Filter is the first thing you'll learn, once you start the first chapter!

</aside></section><section data-transition="none-in none-out" class="">

# How code is structured

```python
(track_features
  >> filter(_.artist == "The Weeknd")
  >> ggplot(aes("energy", "valence"))

)
```


![png](00-slides_files/00-slides_25_0.png)





    <ggplot: (301903971)>


<aside class="notes">


The next action, `ggplot(...)`, gets ready to make a plot, based on the data in the previous step.

</aside></section><section data-transition="none-in slide-out" class="">

# How code is structured

```python
(track_features
  >> filter(_.artist == "The Weeknd")
  >> ggplot(aes("energy", "valence"))
   + geom_point()
)
```


![png](00-slides_files/00-slides_28_0.png)





    <ggplot: (302057592)>


<aside class="notes">


Finally, `geom_point()` adds points to the plot. Each point comes from a row of data.

So in this case each point is a track by The Weeknd.

</aside></section></section><section class=""><section class="">

# Let's practice!

<video width="500" data-autoplay loop controls src="./siuba-intro-controls-500px.mp4" />
<aside class="notes">


For the practice below, you'll get to explore the two datasets by testing out different options.

This is to make sure you get the big picture, before we dive into the specifics of how each piece of code works!

</aside></section></section>