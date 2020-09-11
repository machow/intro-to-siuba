<section class=""><section class="">

# Using plotnine Geoms


```python
(billie
 >> ggplot(aes("energy", "valence"))
  + geom_point()
)
```


![png](02b-slides_files/02b-slides_3_0.png)








<aside class="notes">


In the previous lesson,
you created this scatter plot
comparing the energy of each song to its valence.

This plot communicates some interesting information: we can see
that higher income countries tend to have higher life expectancy.

One problem with this plot, however, is that it's impossible to tell which song is which.
Adding labels to the point will let us identify songs in the plot.

</aside></section></section><section class=""><section class="">

# Using geom_label

```python
(billie
 >> ggplot(aes("energy", "valence", label = "track_name"))
  + geom_label()
)
```

    /Users/machow/.virtualenvs/siublocks-org/lib/python3.7/site-packages/plotnine/utils.py:1246: FutureWarning: is_categorical is deprecated and will be removed in a future version.  Use is_categorical_dtype instead
      if pdtypes.is_categorical(arr):



![png](02b-slides_files/02b-slides_6_1.png)








<aside class="notes">


The first option for plotting text is using `geom_label()`. This plots the text with a filled in box around it.

Unlike scanning a DataFrame of results, it's easy to see pick out songs across a range of valence and energy.

For example, relative to other songs:

* "i love you" is low valence and low energy 
* "bad guy" is high valence and high energy
* "bellyache" is extremely high energe and a moderate amount of valence



</aside></section></section><section class=""><section class="">

# Using geom_text

```python
(billie
 >> ggplot(aes("energy", "valence", label = "track_name"))
  + geom_text()
)
```

    /Users/machow/.virtualenvs/siublocks-org/lib/python3.7/site-packages/plotnine/utils.py:1246: FutureWarning: is_categorical is deprecated and will be removed in a future version.  Use is_categorical_dtype instead
      if pdtypes.is_categorical(arr):



![png](02b-slides_files/02b-slides_9_1.png)








<aside class="notes">


A second option for plotting text is with `geom_text()`. This plots text by itself, without a background box.

Notice the words in front don't cover other words as much, but it can also be harder to read them.

</aside></section></section><section class=""><section class="">

# Combining geoms

```python
(billie
 >> ggplot(aes("energy", "valence", label = "track_name"))
  + geom_text(nudge_y = .1)
  + geom_point()
)
```

    /Users/machow/.virtualenvs/siublocks-org/lib/python3.7/site-packages/plotnine/utils.py:1246: FutureWarning: is_categorical is deprecated and will be removed in a future version.  Use is_categorical_dtype instead
      if pdtypes.is_categorical(arr):



![png](02b-slides_files/02b-slides_12_1.png)








<aside class="notes">


When you plot multiple geoms--like in this plot--ggplot goes line-by-line, from top to bottom.

For example, in the code here, it first puts down the words from `geom_text()`, then the points from `geom_point()`.

Notice also that `geom_text()` has an option passed to it, `nudge_y = ,1`.

</aside></section></section><section class=""><section class="">

# More on geom options


![](./plotnine-geom-doc.png)
<aside class="notes">


In general, there are many arguments you can pass to geoms, and different geoms can take different arguments.

The easiest way to understand what arguments geoms can take, and what they do, is to look at the plotnine documentation website.

Here are two useful parts of the docs:

* [list of available geoms](https://plotnine.readthedocs.io/en/stable/api.html)
* [help document on geom_text](https://plotnine.readthedocs.io/en/stable/generated/plotnine.geoms.geom_text.html#plotnine.geoms.geom_text)

</aside></section></section><section class=""><section class="">

# Let's practice!
<aside class="notes">


In the exercises, you'll practice creating other scatter plots to compare variables across
countries, and in the rest of this chapter you'll learn more ways to communicate information in a graph.


</aside></section></section>