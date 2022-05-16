<section class="hide-cell"><section class="hide-cell">

# The mutate verb

![](model-mutate.png)
<aside class="notes">


You've already learned two verbs for manipulating data: filter for
extracting a subset of the observations, and arrange for sorting them.

Suppose you want to change one of the variables in your dataset, based on the other ones.
Or suppose you want to add a new variable.

For that, you would use the mutate verb.


</aside></section></section><section data-transition="slide-in none-out" class=""><section data-transition="slide-in none-out" class="">

## Using mutate to change a variable


```python
(music_top200
  >> mutate(streams = _.streams / 1000)
)
```
<aside class="notes">


First you'll learn how to change an existing variable.

You use mutate like you would filter or arrange, after a pipe operator.

Inside this mutate statement, what's on the right of the equals sign is
what's being calculated, and what's on the left is what's being replaced.
Here, you're calculating streams slash one thousand.

**(Click the down arrow for a breakdown)**

</aside></section><section data-transition="none-in none-out" class="">

## Using mutate to change a variable


<pre><code class="language-python">(music_top200
  >> mutate(streams = <mark>_.streams / 1000</mark>)
)
</code></pre>
<aside class="notes">


The slash in Python performs division, so "streams divided by one thousand".

</aside></section><section data-transition="none-in none-out" class="">

## Using mutate to change a variable


<pre><code class="language-python">(music_top200
  >> mutate(<mark>streams =</mark> _.streams / 1000)
)
</code></pre>
<aside class="notes">


On the left, you're saying you want to replace the existing streams column, by writing streams equals.

</aside></section></section><section data-transition="none-in slide-out" class=""><section data-transition="none-in slide-out" class="">

## Using mutate to change a variable (result)

```python
(music_top200
  >> mutate(streams = _.streams / 1000)
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
      <td>1858.666</td>
      <td>200.960</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Argentina</td>
      <td>2</td>
      <td>Tattoo</td>
      <td>Rauw Alejandro</td>
      <td>1344.382</td>
      <td>202.887</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Argentina</td>
      <td>3</td>
      <td>Hola - Remix</td>
      <td>Dalex</td>
      <td>1330.011</td>
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
      <td>11.771</td>
      <td>193.090</td>
      <td>Africa</td>
    </tr>
    <tr>
      <th>12398</th>
      <td>South Africa</td>
      <td>199</td>
      <td>When I See U</td>
      <td>Fantasia</td>
      <td>11.752</td>
      <td>217.347</td>
      <td>Africa</td>
    </tr>
    <tr>
      <th>12399</th>
      <td>South Africa</td>
      <td>200</td>
      <td>Psycho!</td>
      <td>MASN</td>
      <td>11.743</td>
      <td>197.217</td>
      <td>Africa</td>
    </tr>
  </tbody>
</table>
<p>12400 rows × 7 columns</p>
</div>


<aside class="notes">


The result is the same table, but with streams replaced with a new value, one that's much smaller than it was before.

This is how you manipulate existing variables in the table.
That's often necessary during data processing and cleaning.

Just like filter and arrange, you're not altering the original music_top200
data, you're just changing the value in this new data frame that's being returned.

</aside></section></section><section data-transition="slide-in none-out" class=""><section data-transition="slide-in none-out" class="">

## Using mutate to add a new variable

```python
(music_top200
  >> mutate(ttl_stream_time = _.streams * _.duration)
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
      <th>country</th>
      <th>position</th>
      <th>track_name</th>
      <th>artist</th>
      <th>streams</th>
      <th>duration</th>
      <th>continent</th>
      <th>ttl_stream_time</th>
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
      <td>3.735175e+08</td>
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
      <td>2.727576e+08</td>
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
      <td>3.318643e+08</td>
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
      <td>2.272862e+06</td>
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
      <td>2.554262e+06</td>
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
      <td>2.315919e+06</td>
    </tr>
  </tbody>
</table>
<p>12400 rows × 8 columns</p>
</div>


<aside class="notes">


Alternatively, you may want to add a new variable.

For instance, suppose you want to know the total seconds people have listened to a track.


In the data you have a tracks duration in seconds, and its number of streams.
This means **total time listened is duration multiplied by streams**.

You would use mutate in almost the same way.
You pipe your music data to the mutate verb.

The asterisk in Python represents multiplication, so you write streams asterisk duration to multiply the two columns.

</aside></section></section><section data-transition="none-in slide-out" class=""><section data-transition="none-in slide-out" class="">

## Using mutate to add a new variable (result)


<pre><code class="language-python">(music_top200
  >> mutate(<mark>ttl_stream_time</mark> = _.streams * _.duration)
)
</code></pre>




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
      <th>ttl_stream_time</th>
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
      <td>3.735175e+08</td>
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
      <td>2.727576e+08</td>
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
      <td>3.318643e+08</td>
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
      <td>2.272862e+06</td>
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
      <td>2.554262e+06</td>
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
      <td>2.315919e+06</td>
    </tr>
  </tbody>
</table>
<p>12400 rows × 8 columns</p>
</div>


<aside class="notes">


Notice that to be informative, we have named the column `ttl_stream_time`, that's what's to the left of the equals sign in our code.

Column names need to be one word like this: you can't use spaces.

Notice that in the results, there's a brand new `ttl_stream_time` column, which is much larger than `streams`.


</aside></section></section><section data-transition="slide-in none-out" class=""><section data-transition="slide-in none-out" class="">

# Answering a question


```python
(music_top200
  >> mutate(ttl_stream_time = _.streams * _.duration)
  >> filter(_.country == "Costa Rica")
  >> arrange(-_.ttl_stream_time)
)
```
<aside class="notes">


Let's put together the three verbs you learned in this chapter to answer a question about our data.

Suppose we wanted to know for a country, like Costa Rica, what songs were listened to longest.

We would do this in three steps: 

* create the column
* filter for country
* then sort

**(Click the down arrow for a breakdown)**

</aside></section><section data-transition="none-in none-out" class="">

# Answering a question

```python
(music_top200
  >> mutate(ttl_stream_time = _.streams * _.duration)


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
      <th>country</th>
      <th>position</th>
      <th>track_name</th>
      <th>artist</th>
      <th>streams</th>
      <th>duration</th>
      <th>continent</th>
      <th>ttl_stream_time</th>
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
      <td>3.735175e+08</td>
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
      <td>2.727576e+08</td>
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
      <td>3.318643e+08</td>
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
      <td>2.272862e+06</td>
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
      <td>2.554262e+06</td>
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
      <td>2.315919e+06</td>
    </tr>
  </tbody>
</table>
<p>12400 rows × 8 columns</p>
</div>


<aside class="notes">


We use mutate to create the ttl_stream_time column. 

</aside></section><section data-transition="none-in none-out" class="">

# Answering a question

```python
(music_top200
  >> mutate(ttl_stream_time = _.streams * _.duration)
  >> filter(_.country == "Costa Rica")

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
      <th>country</th>
      <th>position</th>
      <th>track_name</th>
      <th>artist</th>
      <th>streams</th>
      <th>duration</th>
      <th>continent</th>
      <th>ttl_stream_time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2200</th>
      <td>Costa Rica</td>
      <td>1</td>
      <td>Safaera</td>
      <td>Bad Bunny</td>
      <td>338078</td>
      <td>295.177</td>
      <td>Americas</td>
      <td>9.979285e+07</td>
    </tr>
    <tr>
      <th>2201</th>
      <td>Costa Rica</td>
      <td>2</td>
      <td>Si Veo a Tu Mamá</td>
      <td>Bad Bunny</td>
      <td>244932</td>
      <td>170.972</td>
      <td>Americas</td>
      <td>4.187651e+07</td>
    </tr>
    <tr>
      <th>2202</th>
      <td>Costa Rica</td>
      <td>3</td>
      <td>Ignorantes</td>
      <td>Bad Bunny</td>
      <td>233113</td>
      <td>210.607</td>
      <td>Americas</td>
      <td>4.909523e+07</td>
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
      <th>2397</th>
      <td>Costa Rica</td>
      <td>198</td>
      <td>Ride It</td>
      <td>Regard</td>
      <td>21731</td>
      <td>157.606</td>
      <td>Americas</td>
      <td>3.424936e+06</td>
    </tr>
    <tr>
      <th>2398</th>
      <td>Costa Rica</td>
      <td>199</td>
      <td>Sola</td>
      <td>Manuel Turizo</td>
      <td>21704</td>
      <td>195.044</td>
      <td>Americas</td>
      <td>4.233235e+06</td>
    </tr>
    <tr>
      <th>2399</th>
      <td>Costa Rica</td>
      <td>200</td>
      <td>Nena Maldición (feat. Lenny Tavárez)</td>
      <td>Paulo Londra</td>
      <td>21684</td>
      <td>228.875</td>
      <td>Americas</td>
      <td>4.962926e+06</td>
    </tr>
  </tbody>
</table>
<p>200 rows × 8 columns</p>
</div>


<aside class="notes">


Then we'd use filter to restrict our analysis to only Costa Rica. 

</aside></section><section data-transition="none-in none-out" class="">

# Answering a question

```python
(music_top200
  >> mutate(ttl_stream_time = _.streams * _.duration)
  >> filter(_.country == "Costa Rica") 
  >> arrange(-_.ttl_stream_time) 
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
      <th>country</th>
      <th>position</th>
      <th>track_name</th>
      <th>artist</th>
      <th>streams</th>
      <th>duration</th>
      <th>continent</th>
      <th>ttl_stream_time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2200</th>
      <td>Costa Rica</td>
      <td>1</td>
      <td>Safaera</td>
      <td>Bad Bunny</td>
      <td>338078</td>
      <td>295.177</td>
      <td>Americas</td>
      <td>9.979285e+07</td>
    </tr>
    <tr>
      <th>2202</th>
      <td>Costa Rica</td>
      <td>3</td>
      <td>Ignorantes</td>
      <td>Bad Bunny</td>
      <td>233113</td>
      <td>210.607</td>
      <td>Americas</td>
      <td>4.909523e+07</td>
    </tr>
    <tr>
      <th>2222</th>
      <td>Costa Rica</td>
      <td>23</td>
      <td>René</td>
      <td>Residente</td>
      <td>101872</td>
      <td>457.592</td>
      <td>Americas</td>
      <td>4.661581e+07</td>
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
      <th>2377</th>
      <td>Costa Rica</td>
      <td>178</td>
      <td>Dónde Estás</td>
      <td>KHEA</td>
      <td>23177</td>
      <td>153.560</td>
      <td>Americas</td>
      <td>3.559060e+06</td>
    </tr>
    <tr>
      <th>2394</th>
      <td>Costa Rica</td>
      <td>195</td>
      <td>Blueberry Faygo</td>
      <td>Lil Mosey</td>
      <td>21771</td>
      <td>162.547</td>
      <td>Americas</td>
      <td>3.538811e+06</td>
    </tr>
    <tr>
      <th>2397</th>
      <td>Costa Rica</td>
      <td>198</td>
      <td>Ride It</td>
      <td>Regard</td>
      <td>21731</td>
      <td>157.606</td>
      <td>Americas</td>
      <td>3.424936e+06</td>
    </tr>
  </tbody>
</table>
<p>200 rows × 8 columns</p>
</div>


<aside class="notes">


Then we'd use arrange to sort the data in descending order of our new ttl_stream_time variable.

</aside></section></section><section data-transition="none-in slide-out" class=""><section data-transition="none-in slide-out" class="">

# Answering a question (result)

```python
(music_top200
  >> mutate(ttl_stream_time = _.streams * _.duration)
  >> filter(_.country == "Costa Rica") 
  >> arrange(-_.ttl_stream_time) 
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
      <th>country</th>
      <th>position</th>
      <th>track_name</th>
      <th>artist</th>
      <th>streams</th>
      <th>duration</th>
      <th>continent</th>
      <th>ttl_stream_time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2200</th>
      <td>Costa Rica</td>
      <td>1</td>
      <td>Safaera</td>
      <td>Bad Bunny</td>
      <td>338078</td>
      <td>295.177</td>
      <td>Americas</td>
      <td>9.979285e+07</td>
    </tr>
    <tr>
      <th>2202</th>
      <td>Costa Rica</td>
      <td>3</td>
      <td>Ignorantes</td>
      <td>Bad Bunny</td>
      <td>233113</td>
      <td>210.607</td>
      <td>Americas</td>
      <td>4.909523e+07</td>
    </tr>
    <tr>
      <th>2222</th>
      <td>Costa Rica</td>
      <td>23</td>
      <td>René</td>
      <td>Residente</td>
      <td>101872</td>
      <td>457.592</td>
      <td>Americas</td>
      <td>4.661581e+07</td>
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
      <th>2377</th>
      <td>Costa Rica</td>
      <td>178</td>
      <td>Dónde Estás</td>
      <td>KHEA</td>
      <td>23177</td>
      <td>153.560</td>
      <td>Americas</td>
      <td>3.559060e+06</td>
    </tr>
    <tr>
      <th>2394</th>
      <td>Costa Rica</td>
      <td>195</td>
      <td>Blueberry Faygo</td>
      <td>Lil Mosey</td>
      <td>21771</td>
      <td>162.547</td>
      <td>Americas</td>
      <td>3.538811e+06</td>
    </tr>
    <tr>
      <th>2397</th>
      <td>Costa Rica</td>
      <td>198</td>
      <td>Ride It</td>
      <td>Regard</td>
      <td>21731</td>
      <td>157.606</td>
      <td>Americas</td>
      <td>3.424936e+06</td>
    </tr>
  </tbody>
</table>
<p>200 rows × 8 columns</p>
</div>


<aside class="notes">


This gives us the answer we're looking for.

The most streamed track in Costa Rica is still the first in our result.

However, it looks like the track normally in the 23rd position--René by Residente--is third, since it's over 7 minutes long!

</aside></section></section><section class=""><section class="">

# Let's practice!
</section></section>