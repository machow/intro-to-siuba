<section class=""><section class="">

# Visualization with plotnine

<aside class="notes">


In the last chapter, you used the dplyr package to answer some questions about the gapminder dataset.

You've been able to..

* filter for particular observations.
* arrange to find the highest or lowest values.
* mutate to add new columns.

However, most of the code so far has only printed out results as a table.
Often a better way to understand and present this kind of data is as a graph.

In this chapter, you'll learn the essential skill of data visualization using the plotnine package.


</aside></section></section><section class=""><section class="">

# Visualizing with plotnine

    /Users/machow/.virtualenvs/siublocks-org/lib/python3.7/site-packages/plotnine/utils.py:1246: FutureWarning: is_categorical is deprecated and will be removed in a future version.  Use is_categorical_dtype instead
      if pdtypes.is_categorical(arr):



![png](02-slides_files/02-slides_6_1.png)





    <ggplot: (-9223372036580219339)>


<aside class="notes">


In particular, this chapter will show you how to create scatterplots, like the one you see here.

Scatterplots compare two variables on an x- and y- axis.

Visualization and data wrangling are often intertwined, so you'll see how
the siuba and plotnine packages work closely together to create informative graphs.


</aside></section></section><section class=""><section class="">

# Importing plotnine


<pre><code class="language-python">
from siuba import *
from plotnine import *
</code></pre>

<aside class="notes">


You'll be creating plots using the plotnine package.

Just like the siuba package, you'll have to load it with `import`.


</aside></section></section><section class=""><section class="">

# Variables

```python
billie = (
  track_features
  >> filter(_.artist == "Billie Eilish")
)
```
<aside class="notes">


In this chapter, you'll sometimes be visualizing subsets of the `track_features` data.
For example, this code gets only tracks by the artist Billie Eilish.

When you're working with just that subset, sometimes it's useful to save the filtered data, as a new data frame.

To do this, you use the assignment operator.

**Click down for a breakdown of assignment**

</aside></section><section class="">

# Variables


```python
(
  track_features
  >> filter(_.artist == "Billie Eilish")
)
```
<aside class="notes">


First, write out the pipe with the filter verb.

This is the same as you did in the previous chapter.

Note that whether the name of the data, `track_features` is right after the `(` or on its own line, the code works the same.

</aside></section><section class="">

# Variables


<pre><code class="language-python">
<mark>billie = </mark>(
  track_features
  >> filter(_.artist == "Billie Eilish")
)
</code></pre>
<aside class="notes">


Then, write the variable name, followed by the variable operator (an equal sign).

In this case, the variable name is `billie`.

</aside></section></section><section class=""><section class="">

# Variables (result)

```python
billie
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
      <th>1273</th>
      <td>Billie Eilish</td>
      <td>dont smile ...</td>
      <td>my boy</td>
      <td>0.3940</td>
      <td>0.3240</td>
      <td>0.692</td>
      <td>0.2070</td>
      <td>0.472</td>
      <td>44</td>
      <td>170.852</td>
    </tr>
    <tr>
      <th>2900</th>
      <td>Billie Eilish</td>
      <td>WHEN WE ALL...</td>
      <td>listen befo...</td>
      <td>0.0561</td>
      <td>0.0820</td>
      <td>0.319</td>
      <td>0.0450</td>
      <td>0.935</td>
      <td>79</td>
      <td>242.652</td>
    </tr>
    <tr>
      <th>2951</th>
      <td>Billie Eilish</td>
      <td>lovely (wit...</td>
      <td>lovely (wit...</td>
      <td>0.2960</td>
      <td>0.1200</td>
      <td>0.351</td>
      <td>0.0333</td>
      <td>0.934</td>
      <td>89</td>
      <td>200.186</td>
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
      <th>24858</th>
      <td>Billie Eilish</td>
      <td>WHEN WE ALL...</td>
      <td>ilomilo</td>
      <td>0.4230</td>
      <td>0.5720</td>
      <td>0.855</td>
      <td>0.0585</td>
      <td>0.724</td>
      <td>79</td>
      <td>156.371</td>
    </tr>
    <tr>
      <th>24998</th>
      <td>Billie Eilish</td>
      <td>WHEN I WAS ...</td>
      <td>WHEN I WAS ...</td>
      <td>0.3320</td>
      <td>0.0628</td>
      <td>0.696</td>
      <td>0.0425</td>
      <td>0.853</td>
      <td>71</td>
      <td>270.520</td>
    </tr>
    <tr>
      <th>25148</th>
      <td>Billie Eilish</td>
      <td>come out an...</td>
      <td>come out an...</td>
      <td>0.3210</td>
      <td>0.1770</td>
      <td>0.640</td>
      <td>0.0931</td>
      <td>0.693</td>
      <td>74</td>
      <td>210.376</td>
    </tr>
  </tbody>
</table>
<p>27 rows × 10 columns</p>
</div>

<aside class="notes">


Now if you print the `billie` dataset, we can see that it's another table.

But this one has only 27 rows: one for each track by Billie Eilish in the original data.

</aside></section></section><section class="font-size-sm img-height-300"><section class="font-size-sm img-height-300">

# Visualizing with plotnine

```python
(billie
 >> ggplot(aes("energy", "valence"))
  + geom_point()
  + labs(title = "Billie Eilish hit track features")
)
```


![png](02-slides_files/02-slides_24_0.png)





    <ggplot: (-9223372036558685717)>


<aside class="notes">


Suppose you want to examine the energy and valence of Billie Eilish's songs.

You could do this with a scatterplot comparing two variables in our
track_features dataset: energy on the x-axis and valence on the y-axis.

There are three parts to a plotnine graph.

**(Click the down button to see a breakdown of the code)**

</aside></section><section class="font-size-sm">

# Visualizing with plotnine


<pre><code class="language-python">(<mark>billie</mark>
 >> ggplot(aes("energy", "valence"))
  + geom_point()
  + labs(title = "Billie Eilish hit track features")  
)
</code></pre>
<aside class="notes">


First is the data that we're visualizing.
In this case, that is the `billie` variable you just created.

</aside></section><section class="font-size-sm">

# Visualizing with plotnine


<pre><code class="language-python">(billie
 >> ggplot(<mark>aes("energy", "valence")</mark>)
  + geom_point()
  + labs(title = "Billie Eilish hit track features")
)
</code></pre>
<aside class="notes">


Second is the mapping of variables in your dataset to aesthetics in your graph.

An aesthetic is a visual dimension of a graph that can be used to communicate information.

In a scatterplot, your two dimensions are the x axis and the y axis, so you write aes (for
"aesthetic"), parentheses, x equals gdpPerCap, y = lifeExp, telling it which variables to place on which axes.


</aside></section><section class="font-size-sm">

# Visualizing with plotnine


<pre><code class="language-python">(billie
 >> ggplot(aes("energy", "valence"))
  <mark>+ geom_point()</mark>
  + labs(title = "Billie Eilish hit track features")
)
</code></pre>
<aside class="notes">


The third step is specifying the type of graph you're creating.
You do that by adding a layer to the graph: use a plus after the ggplot, and then geom underscore point.

The "geom" means you're adding a type of geometric object to the graph, the
"point" indicates it's a scatter plot, where each observation corresponds to one point.

Together, these three parts of the code--the data, the
aesthetic mapping, and the layer--construct the scatter plot you see here.


</aside></section></section><section class=""><section class="">

# Let's practice!
<aside class="notes">


Scroll down to get started with practice!

</aside></section></section>