<section class=""><section class="">

# Using plotnine Aesthetics

<aside class="notes">


In this lesson, you'll use plotnine aesthetics to set more than just the position of points on a plot, but other features too--such as size and color.

</aside></section></section><section class="img-height-300"><section class="img-height-300">

# Scatterplots

```python
(billie
  >> ggplot(aes("energy", "valence"))
   + geom_point()
)
```



![png](02c-slides_files/02c-slides_5_0.png)









<aside class="notes">


You've learned how to create a scatter plot to compare
two variables within your data
using two visual aesthetics: energy x-axis, and valence on the y-axis.



</aside>

# Additional variables

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
      <th>2899</th>
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
      <th>2950</th>
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
      <th>24857</th>
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
      <th>24997</th>
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
      <th>25147</th>
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


But these aren't the only variables in the `track_features` dataset: for example, you also have acousticness and popularity.
You may want to examine relationships among all these variables in the same plot.

You already used the x-axis to represent energy and the y-axis to valence
Now you'll learn to add two more aesthetics--color and size--to communicate even more information in your scatter plot.


</aside></section></section><section class="img-height-300"><section class="img-height-300">

# The color aesthetic

```python
(billie
  >> ggplot(aes("energy", "valence", color = "acousticness"))
   + geom_point()
)
```



![png](02c-slides_files/02c-slides_11_0.png)









<aside class="notes">


The scatterplot shows that songs with higher energy, tend to have higher valence. Another variable that might be related to energy is `acousticness`.

You can explore this relationship by setting the color of your points, like you see here. 
To use this aesthetic, you add color equals acousticness inside
the aes, next to x equals energy and y equals valence.

Notice that ggplot2 automatically adds a legend to the plot, indicating which color represents which acousticness.

This communicates that lower energy tracks (toward the left of the plot) tend to be more acoustic. Note that brighter colors indicate more acoustic tracks.


</aside></section></section><section class="img-height-300 font-size-sm"><section class="img-height-300 font-size-sm">

# The size aesthetic

```python
(billie
  >> ggplot(aes("energy", "valence", color = "acousticness", size = "popularity"))
   + geom_point()
)
```



![png](02c-slides_files/02c-slides_14_0.png)









<aside class="notes">


Another variable you may want to include in the graph is population, represented by the pop variable in the dataset.

One way to represent it is with the size of the points in the scatterplot,
with higher popularity songs getting larger points.

Just like x, y, and color, you add size = "popularity" within the aes parentheses.

<details>

Note that to keep the length of each of the code lines reasonable, we put the size aesthetic on
a second line, but this doesn't make any difference, and you don't have to do that in the exercises.
You've now learned to use four aesthetics in a plot: x, y, color,
and size: to communicate information about four variables in your dataset.

</details>

</aside>

# Aesthetics with multiple geoms

```python
(billie
  >> ggplot(aes("energy", "valence", 
                color = "acousticness", size = "popularity",
                label = "track_name"))
   + geom_point()
   + geom_text(nudge_y = .1)
)
```



![png](02c-slides_files/02c-slides_17_0.png)









<aside class="notes">


Notice that in this plot, the aesthetics set effect both the points and the text.

</aside></section></section><section class=""><section class="">

# Let's practice!
<aside class="notes">


In the exercises,
you'll learn to mix and match aesthetics and
variables to further explore the track features.


</aside></section></section>