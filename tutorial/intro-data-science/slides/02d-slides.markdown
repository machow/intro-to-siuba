<section class=""><section class="">

# Faceting


You've learned to use color in your scatterplots.

Now you'll learn another way to explore your data.
plotnine lets you divide your plot into subplots to get one smaller graph for each level of a variable.

This is called faceting, and it's another powerful way to communicate relationships within your data.
</section></section><section class="font-size-sm"><section class="font-size-sm">

# Faceting

```python
asia_top200 = (
  music_top200
  >> filter(_.continent == "Asia")
)
asia_top200
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
      <th>4600</th>
      <td>Hong Kong</td>
      <td>1</td>
      <td>WANNABE</td>
      <td>ITZY</td>
      <td>112648</td>
      <td>191.242</td>
      <td>Asia</td>
    </tr>
    <tr>
      <th>4601</th>
      <td>Hong Kong</td>
      <td>2</td>
      <td>Intentions (feat. Quavo)</td>
      <td>Justin Bieber</td>
      <td>104467</td>
      <td>212.867</td>
      <td>Asia</td>
    </tr>
    <tr>
      <th>4602</th>
      <td>Hong Kong</td>
      <td>3</td>
      <td>Señorita</td>
      <td>Shawn Mendes</td>
      <td>84196</td>
      <td>190.960</td>
      <td>Asia</td>
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
      <th>12197</th>
      <td>Viet Nam</td>
      <td>198</td>
      <td>Đưa Nhau Đi Trốn (Chill Version)</td>
      <td>Đen</td>
      <td>20750</td>
      <td>241.959</td>
      <td>Asia</td>
    </tr>
    <tr>
      <th>12198</th>
      <td>Viet Nam</td>
      <td>199</td>
      <td>Hôm Nay Tôi Buồn</td>
      <td>Phùng Khánh Linh</td>
      <td>20580</td>
      <td>275.000</td>
      <td>Asia</td>
    </tr>
    <tr>
      <th>12199</th>
      <td>Viet Nam</td>
      <td>200</td>
      <td>Kick It</td>
      <td>NCT 127</td>
      <td>20495</td>
      <td>233.013</td>
      <td>Asia</td>
    </tr>
  </tbody>
</table>
<p>2600 rows × 7 columns</p>
</div>


<aside class="notes">


For this example, we'll use Spotify top 200 track data for countries in Asia.

</aside></section></section><section class=""><section class="">

# Faceting


```python
(asia_top200
  >> ggplot(aes("position", "streams", color = "country"))
   + geom_point()
)
```


![png](02d-slides_files/02d-slides_8_0.png)





    <ggplot: (272006166)>


<aside class="notes">


This plot shows the number of streams for each top 200 track in Asian countries.

There are so many countries that the plot hits two issues:

1. it has to use many different colors.
2. many points are on top of each other.

A facetted plot could help here, by giving each country its own small panel.

</aside></section></section><section class=""><section class="">

# Faceting

```python
(asia_top200
  >> ggplot(aes("position", "streams", color = "country"))
   + geom_point()
   + facet_wrap('~country')
)
```


![png](02d-slides_files/02d-slides_11_0.png)





    <ggplot: (-9223372036561595844)>


<aside class="notes">


You facet a plot by adding another option, with a +, to the end of your code, after geom_point.

You add facet underscore wrap, then "tilde continent" within the parentheses.

In R, the tilde symbol typically means "by", meaning that we're splitting the
plot by continent, and you can usually find it on the upper left of your keyboard.
This tells ggplot2 to divide the data into subplots based on the continent variable.

Faceting is a powerful tool, and in
the exercises you'll see how you can use faceting
not just to compare among continents, but to compare between all of the years in our dataset.


</aside></section></section><section class=""><section class="">

# Let's practice!
<aside class="notes">


Scroll down to get started with practice!

</aside></section></section>