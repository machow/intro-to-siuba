<section class=""><section class="">

# Visualizing summarized data
<aside class="notes">


In this chapter you learned to use the group by and summarize verbs to summarize the music_top200 data
by year, by continent, or by both.

Now you'll learn how to turn those summaries into informative
visualizations, by returning to the plotnine package from Chapter 2.

</aside></section></section><section class=""><section class="">

# When visualizing raw data doesn't work


```python
(music_top200
  >> ggplot(aes("position", "streams", color = "country"))
   + geom_point()
)
```


![png](03c-slides_files/03c-slides_4_0.png)





    <ggplot: (287351293)>


<aside class="notes">


Suppose we want to look at how many streams countries have.
We could make a scatterplot showing each track in each country, like in the plot on the slide.

However, there are so many countries that it is hard to read, and half the plot is the legend that shows what color each country is.

</aside></section></section><section class=""><section class="">

# Calculating min and max streams

```python
by_position = (
  music_top200
  >> group_by(_.position)
  >> summarize(max_streams = _.streams.max(),
               min_streams = _.streams.min())
)
by_position
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
      <th>position</th>
      <th>max_streams</th>
      <th>min_streams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>12987027</td>
      <td>13604</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>9163134</td>
      <td>10801</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>8043475</td>
      <td>9510</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>197</th>
      <td>198</td>
      <td>1606234</td>
      <td>1472</td>
    </tr>
    <tr>
      <th>198</th>
      <td>199</td>
      <td>1606153</td>
      <td>1470</td>
    </tr>
    <tr>
      <th>199</th>
      <td>200</td>
      <td>1597824</td>
      <td>1470</td>
    </tr>
  </tbody>
</table>
<p>200 rows × 3 columns</p>
</div>


<aside class="notes">


Rather than plotting the raw data, we can plot a summary.

For example, previously we summarized data by continent and position, to find the max and min streams.

Let's do that again, but instead of viewing the summarized data as a table, let's save it as an object called by_continent_position, so you can visualize the data using plotnine.


</aside></section></section><section class="font-size-sm img-height-300"><section class="font-size-sm img-height-300">

# Plotting


```python
(by_position
  >> ggplot(aes("position", "max_streams"))
   + geom_point()
   + labs(title = "Top 200 hits - max streams overall")
)
```
<aside class="notes">


You would
construct the graph with the three steps of plotnine:

* The data, which is by_year.
* The aesthetics, which puts year on the x-axis and total population on the y-axis.
* The type of graph, which in this case is a scatter plot, represented by geom_point.

Notice that the steps are the same as when you were
graphing countries in a scatter plot, even though it's a new dataset.

</aside></section></section><section class="font-size-sm img-height-300"><section class="font-size-sm img-height-300">

# Plotting (result)

```python
(by_position
  >> ggplot(aes("position", "max_streams"))
   + geom_point()
   + labs(title = "Top 200 hits - max streams overall")
)
```


![png](03c-slides_files/03c-slides_13_0.png)





    <ggplot: (287351104)>


<aside class="notes">


The resulting graph of max streams by position, which is much easier to read than the previous plot with all the raw data.

The top track is (by definition) the most streamed, with about 100 million streams!

You might notice that the graph is a little misleading because it doesn't include zero:
It's hard to get a a sense of how many streams the last position track had, since it is at the bottom of the graph.


</aside></section></section><section class="font-size-sm img-height-300"><section class="font-size-sm img-height-300">

# Starting y-axis at 0


<pre><code class="language-python">(by_position
  >> ggplot(aes("position", "max_streams"))
   + geom_point()
   <mark>+ expand_limits(y = 0)</mark>
   + labs(title = "Top 200 hits - max streams overall"))</code></pre>


![png](03c-slides_files/03c-slides_17_0.png)





    <ggplot: (308512425)>


<aside class="notes">


This is a good time to introduce another graphing option.
By adding "expand underscore limits y = 0" to the end of the
ggplot call, you can specify that you want the y-axis to start at zero.

Notice that you added it to the end just like you would with facet_wrap.

Now the graph makes it clearer that the top position track has over three times as many streams, as the lowest position one.

You could have created other graphs of summarized data, such as a
graph of the average streams rather than max, by changing the y aesthetic.


</aside><aside class="notes">




</aside></section></section><section class=""><section class="">

# Calculating min and max streams

```python
by_continent_position = (
  music_top200
  >> group_by(_.continent, _.position)
  >> summarize(max_streams = _.streams.max(),
               min_streams = _.streams.min())
)
by_continent_position
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
      <th>continent</th>
      <th>position</th>
      <th>max_streams</th>
      <th>min_streams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Africa</td>
      <td>1</td>
      <td>94422</td>
      <td>94422</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Africa</td>
      <td>2</td>
      <td>74689</td>
      <td>74689</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Africa</td>
      <td>3</td>
      <td>67552</td>
      <td>67552</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>997</th>
      <td>Oceania</td>
      <td>198</td>
      <td>225951</td>
      <td>44570</td>
    </tr>
    <tr>
      <th>998</th>
      <td>Oceania</td>
      <td>199</td>
      <td>225492</td>
      <td>44364</td>
    </tr>
    <tr>
      <th>999</th>
      <td>Oceania</td>
      <td>200</td>
      <td>225179</td>
      <td>44291</td>
    </tr>
  </tbody>
</table>
<p>1000 rows × 4 columns</p>
</div>


<aside class="notes">


So far you've been graphing the by-position summarized data.
But you have also learned to summarize after grouping by both position and continent,
to see how much countries are streaming top tracks on different continents continents.

</aside></section></section><section class="font-size-sm img-height-300"><section class="font-size-sm img-height-300">

# Visualize

```python
(by_continent_position
  >> ggplot(aes("position", "max_streams", color = "continent"))
   + geom_point()
   + expand_limits(y = 0)
   + labs(title = "Top 200 hits - max streams overall"))
```


![png](03c-slides_files/03c-slides_24_0.png)





    <ggplot: (-9223372036546276271)>


<aside class="notes">


Since you now have data over position within each continent, you need a way to separate it in a visualization. 

To do that you can use the color aesthetic you learned about in chapter two.

By setting color equals continent, you can show five separate trends on the same graph.

This lets us see that a country in the Americas has a hit tracks with a large number of streams, while there aren't any countries in Africa doing a lot of streaming spotify hits (for more on companies competing to stream in Africa, see [this article](https://weetracker.com/2020/05/13/music-streaming-africa/)).

</aside></section></section><section class=""><section class="">

# Let's practice!
<aside class="notes">


You'll often combine siuba verbs and plotnine visualizations as part of an exploratory
analysis, so it's important to get into the habit of visualizing summarized or processed data.


Scroll down to investigate the music data with filter.

</aside></section></section>