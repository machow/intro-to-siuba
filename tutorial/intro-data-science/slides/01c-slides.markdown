<section class="hide-cell"><section class="hide-cell">

# The arrange verb

![](model-arrange.png)
<aside class="notes">


In the last video you learned the filter verb, for extracting a subset of your observations based on a condition.

Now you'll learn the arrange verb.

Arrange sorts the observations in a dataset, in ascending or descending order based on one of its variables.

This is useful, for example, when you want to know the most extreme values in a dataset.


</aside></section></section><section class=""><section class="">

## Sorting with arrange

```python
(music_top200
  >> arrange(_.duration)
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
      <th>10868</th>
      <td>Slovakia</td>
      <td>69</td>
      <td>Klop Klop</td>
      <td>Karlo</td>
      <td>17222</td>
      <td>65.631</td>
      <td>Europe</td>
    </tr>
    <tr>
      <th>4586</th>
      <td>Greece</td>
      <td>187</td>
      <td>FENDI</td>
      <td>iLLEOo</td>
      <td>16786</td>
      <td>76.099</td>
      <td>Europe</td>
    </tr>
    <tr>
      <th>9937</th>
      <td>Poland</td>
      <td>138</td>
      <td>Mistrz ping-ponga</td>
      <td>PRO8L3M</td>
      <td>145143</td>
      <td>83.360</td>
      <td>Europe</td>
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
      <th>535</th>
      <td>Australia</td>
      <td>136</td>
      <td>Innerbloom</td>
      <td>RÜFÜS DU SOL</td>
      <td>260092</td>
      <td>578.041</td>
      <td>Oceania</td>
    </tr>
    <tr>
      <th>1302</th>
      <td>Brazil</td>
      <td>103</td>
      <td>Poesia Acústica #8: Amor e Samba</td>
      <td>Pineapple StormTv</td>
      <td>839192</td>
      <td>614.615</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>11557</th>
      <td>Turkey</td>
      <td>158</td>
      <td>Susamam</td>
      <td>Şanışer</td>
      <td>194804</td>
      <td>851.871</td>
      <td>Asia</td>
    </tr>
  </tbody>
</table>
<p>12400 rows × 7 columns</p>
</div>


<aside class="notes">


Just like filter, you use the arrange verb after the pipe operator.

You would type music, then the pipe operator (two greater than symbols) and then arrange.
Within those parentheses, you tell it what column you want to arrange by.

The observations are now sorted in ascending order, with the lowest duration songs appearing first.

Look at the second to rightmost column: it starts with 65.631, the smallest value in the dataset, then keeps increasing.
Looking at the track name column, this track is called Klop Klop, and is the shortest track in the data.

Just like with filter, the music object itself is unchanged: arrange is just giving you a new, sorted dataset.


</aside></section></section><section class=""><section class="">

## arrange descending

```python
(music_top200
  >> arrange(-_.duration)
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
      <th>11557</th>
      <td>Turkey</td>
      <td>158</td>
      <td>Susamam</td>
      <td>Şanışer</td>
      <td>194804</td>
      <td>851.871</td>
      <td>Asia</td>
    </tr>
    <tr>
      <th>1302</th>
      <td>Brazil</td>
      <td>103</td>
      <td>Poesia Acústica #8: Amor e Samba</td>
      <td>Pineapple StormTv</td>
      <td>839192</td>
      <td>614.615</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>535</th>
      <td>Australia</td>
      <td>136</td>
      <td>Innerbloom</td>
      <td>RÜFÜS DU SOL</td>
      <td>260092</td>
      <td>578.041</td>
      <td>Oceania</td>
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
      <th>9937</th>
      <td>Poland</td>
      <td>138</td>
      <td>Mistrz ping-ponga</td>
      <td>PRO8L3M</td>
      <td>145143</td>
      <td>83.360</td>
      <td>Europe</td>
    </tr>
    <tr>
      <th>4586</th>
      <td>Greece</td>
      <td>187</td>
      <td>FENDI</td>
      <td>iLLEOo</td>
      <td>16786</td>
      <td>76.099</td>
      <td>Europe</td>
    </tr>
    <tr>
      <th>10868</th>
      <td>Slovakia</td>
      <td>69</td>
      <td>Klop Klop</td>
      <td>Karlo</td>
      <td>17222</td>
      <td>65.631</td>
      <td>Europe</td>
    </tr>
  </tbody>
</table>
<p>12400 rows × 7 columns</p>
</div>


<aside class="notes">


arrange also lets you sort in **descending order**.
To do that, you'd put a **negative sign** next to the variable you're sorting by.

This lets us see that the track with the longest duration is Susamam, which is a hit in at least Turkey. It's almost 15 minutes long!

However, we might be interested in looking at duration within a specific country.


</aside></section></section><section class=""><section class="">

## arrange and filter

```python
(music_top200
  >> filter(_.country == "United States")
  >> arrange(-_.duration)
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
      <th>7841</th>
      <td>United States</td>
      <td>42</td>
      <td>After Hours</td>
      <td>The Weeknd</td>
      <td>3672033</td>
      <td>361.027</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7915</th>
      <td>United States</td>
      <td>116</td>
      <td>Life Is Good (feat. Drake, DaBaby &amp; Lil Baby) ...</td>
      <td>Future</td>
      <td>2181930</td>
      <td>315.346</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7923</th>
      <td>United States</td>
      <td>124</td>
      <td>SICKO MODE</td>
      <td>Travis Scott</td>
      <td>2085268</td>
      <td>312.820</td>
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
      <th>7832</th>
      <td>United States</td>
      <td>33</td>
      <td>Strawberry Peels (feat. Young Thug &amp; Gunna)</td>
      <td>Lil Uzi Vert</td>
      <td>4007781</td>
      <td>115.350</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7853</th>
      <td>United States</td>
      <td>54</td>
      <td>CITY OF ANGELS</td>
      <td>24kGoldn</td>
      <td>3443366</td>
      <td>112.493</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7971</th>
      <td>United States</td>
      <td>172</td>
      <td>Skechers</td>
      <td>DripReport</td>
      <td>1731265</td>
      <td>106.000</td>
      <td>Americas</td>
    </tr>
  </tbody>
</table>
<p>200 rows × 7 columns</p>
</div>


<aside class="notes">


Suppose you wanted to find the longest duration song in the United States.

To do that, you can combine the two verbs you've already learned: filter, and arrange.

</aside></section><section class="">

## arrange and filter

```python
(music_top200
  >> filter(_.country == "United States")

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
      <th>7800</th>
      <td>United States</td>
      <td>1</td>
      <td>The Box</td>
      <td>Roddy Ricch</td>
      <td>12987027</td>
      <td>196.653</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7801</th>
      <td>United States</td>
      <td>2</td>
      <td>Myron</td>
      <td>Lil Uzi Vert</td>
      <td>9163134</td>
      <td>224.955</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7802</th>
      <td>United States</td>
      <td>3</td>
      <td>Blueberry Faygo</td>
      <td>Lil Mosey</td>
      <td>8043475</td>
      <td>162.547</td>
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
      <th>7997</th>
      <td>United States</td>
      <td>198</td>
      <td>Lights Up</td>
      <td>Harry Styles</td>
      <td>1606234</td>
      <td>172.227</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7998</th>
      <td>United States</td>
      <td>199</td>
      <td>Without Me</td>
      <td>Halsey</td>
      <td>1606153</td>
      <td>201.661</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7999</th>
      <td>United States</td>
      <td>200</td>
      <td>Enemies (feat. DaBaby)</td>
      <td>Post Malone</td>
      <td>1597824</td>
      <td>196.760</td>
      <td>Americas</td>
    </tr>
  </tbody>
</table>
<p>200 rows × 7 columns</p>
</div>


<aside class="notes">


**Longest duration song in the United States.**

You start with the music dataset, then a pipe to give the dataset to filter.
Then you specify that you want to filter for country equals equals United States.

Then you use another pipe step.

</aside></section><section class="">

## arrange and filter

```python
(music_top200
  >> filter(_.country == "United States")
  >> arrange(-_.duration)
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
      <th>7841</th>
      <td>United States</td>
      <td>42</td>
      <td>After Hours</td>
      <td>The Weeknd</td>
      <td>3672033</td>
      <td>361.027</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7915</th>
      <td>United States</td>
      <td>116</td>
      <td>Life Is Good (feat. Drake, DaBaby &amp; Lil Baby) ...</td>
      <td>Future</td>
      <td>2181930</td>
      <td>315.346</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7923</th>
      <td>United States</td>
      <td>124</td>
      <td>SICKO MODE</td>
      <td>Travis Scott</td>
      <td>2085268</td>
      <td>312.820</td>
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
      <th>7832</th>
      <td>United States</td>
      <td>33</td>
      <td>Strawberry Peels (feat. Young Thug &amp; Gunna)</td>
      <td>Lil Uzi Vert</td>
      <td>4007781</td>
      <td>115.350</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7853</th>
      <td>United States</td>
      <td>54</td>
      <td>CITY OF ANGELS</td>
      <td>24kGoldn</td>
      <td>3443366</td>
      <td>112.493</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7971</th>
      <td>United States</td>
      <td>172</td>
      <td>Skechers</td>
      <td>DripReport</td>
      <td>1731265</td>
      <td>106.000</td>
      <td>Americas</td>
    </tr>
  </tbody>
</table>
<p>200 rows × 7 columns</p>
</div>


<aside class="notes">


**Longest duration song in the United States.**

The added pipe line takes the result of the filter, and gives it to arrange.
You specify that you want to sort in descending order of duration.

</aside></section></section><section class=""><section class="">

## arrange and filter

```python
(music_top200
  >> filter(_.country == "United States")
  >> arrange(-_.duration)
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
      <th>7841</th>
      <td>United States</td>
      <td>42</td>
      <td>After Hours</td>
      <td>The Weeknd</td>
      <td>3672033</td>
      <td>361.027</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7915</th>
      <td>United States</td>
      <td>116</td>
      <td>Life Is Good (feat. Drake, DaBaby &amp; Lil Baby) ...</td>
      <td>Future</td>
      <td>2181930</td>
      <td>315.346</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7923</th>
      <td>United States</td>
      <td>124</td>
      <td>SICKO MODE</td>
      <td>Travis Scott</td>
      <td>2085268</td>
      <td>312.820</td>
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
      <th>7832</th>
      <td>United States</td>
      <td>33</td>
      <td>Strawberry Peels (feat. Young Thug &amp; Gunna)</td>
      <td>Lil Uzi Vert</td>
      <td>4007781</td>
      <td>115.350</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7853</th>
      <td>United States</td>
      <td>54</td>
      <td>CITY OF ANGELS</td>
      <td>24kGoldn</td>
      <td>3443366</td>
      <td>112.493</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>7971</th>
      <td>United States</td>
      <td>172</td>
      <td>Skechers</td>
      <td>DripReport</td>
      <td>1731265</td>
      <td>106.000</td>
      <td>Americas</td>
    </tr>
  </tbody>
</table>
<p>200 rows × 7 columns</p>
</div>


<aside class="notes">


The result shows that the longest duration track in the United States is After Hours by The Weeknd.

We can explore many such questions with various combinations of dplyr verbs.

Over the course of these lessons, you'll
learn to pipe together
multiple simple operations to create a rich and informative data analysis.


</aside></section></section><section class=""><section class="">

# Let's practice!
</section></section>