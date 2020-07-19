<section class=""><section class="">

# The group_by verb



In the last lesson, you used the summarize verb to calculate an average either,

* across all countries (the entire dataset)
* within a particular country (filtered data)

In this lesson you'll learn the group_by verb, which opens up a new option for calculating an average:

* within each country
</section></section><section class=""><section class="">

# The group_by verb


![](./model_group_by.png)
<aside class="notes">


You use group_by to define groupings of data (blue and green chunks in diagram).

Then, you would follow it with summarize to convert those groups to a single value (like a mean).

</aside></section></section><section class=""><section class="">

# The summarize verb


```python
(music_top200
  >> filter(_.country == "Japan")
  >> summarize(avg_duration = _.duration.mean()))
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
      <th>avg_duration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>250.53499</td>
    </tr>
  </tbody>
</table>
</div>


<aside class="notes">


For example, here you're finding the average track duration in Japan.

What if we weren't interested just in the average duration for Japan, but for each country in the dataset?

You could rerun this code and change the country each time, but that's very tedious.


</aside></section></section><section class=""><section class="">

# Summarizing by country

```python
(music_top200
  >> group_by(_.country)
  >> summarize(avg_duration = _.duration.mean())
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
      <th>avg_duration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Argentina</td>
      <td>212.847855</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Australia</td>
      <td>204.795300</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Austria</td>
      <td>184.894870</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>59</th>
      <td>United States</td>
      <td>190.827500</td>
    </tr>
    <tr>
      <th>60</th>
      <td>Uruguay</td>
      <td>210.796985</td>
    </tr>
    <tr>
      <th>61</th>
      <td>Viet Nam</td>
      <td>217.222830</td>
    </tr>
  </tbody>
</table>
<p>62 rows × 2 columns</p>
</div>


<aside class="notes">


Instead, you can use the group_by verb, which tells siuba to summarize within groups instead of summarizing the entire dataset.
Notice that this replaces the filter country equals Japan with group_by country.

`group_by(_.country)` tells the summarize step that it should perform the summary within
each country: within Argentina, then within Australia, and so on through Viet Nam, then combine the results.

Instead of getting one row overall, you now get **one row for each country**.
There's now a year variable along with the new avg_duration variable.

</aside></section></section><section class=""><section class="">

# Summarizing by continent and position

```python
(music_top200
  >> group_by(_.continent, _.position)
  >> summarize(
      min_streams = _.streams.min(),
      max_streams = _.streams.max()
  )
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
      <th>continent</th>
      <th>position</th>
      <th>min_streams</th>
      <th>max_streams</th>
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
      <td>44570</td>
      <td>225951</td>
    </tr>
    <tr>
      <th>998</th>
      <td>Oceania</td>
      <td>199</td>
      <td>44364</td>
      <td>225492</td>
    </tr>
    <tr>
      <th>999</th>
      <td>Oceania</td>
      <td>200</td>
      <td>44291</td>
      <td>225179</td>
    </tr>
  </tbody>
</table>
<p>1000 rows × 4 columns</p>
</div>


<aside class="notes">


You can also group by multiple variables.

Suppose you're interested calculating
min and max streams
within each continent, and each position.

Now the output has one row for each combination of a continent and position.

**(Click down to see what the steps leading to this code might look like)**

</aside></section><section class="">

# Summarizing by continent and position

```python
(music_top200

  >> summarize(
      min_streams = _.streams.min(),
      max_streams = _.streams.max()
  )
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
      <th>min_streams</th>
      <th>max_streams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1470</td>
      <td>12987027</td>
    </tr>
  </tbody>
</table>
</div>


<aside class="notes">


You might start by summarizing min and max streams across all the data.

</aside></section><section class="">

# Summarizing by continent and position

```python
(music_top200
  >> filter(_.continent == "Oceania", _.position == 1)
  >> summarize(
      min_streams = _.streams.min(),
      max_streams = _.streams.max()
  )
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
      <th>min_streams</th>
      <th>max_streams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>321272</td>
      <td>1757343</td>
    </tr>
  </tbody>
</table>
</div>


<aside class="notes">


Then, you might add a filter, so your summarize is over one specific grouping (position 1 tracks in Oceania).

</aside></section><section class="">

# Summarizing by continent and position

```python
(music_top200
  >> group_by(_.continent, _.position)
  >> summarize(
      min_streams = _.streams.min(),
      max_streams = _.streams.max()
  )
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
      <th>continent</th>
      <th>position</th>
      <th>min_streams</th>
      <th>max_streams</th>
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
      <td>44570</td>
      <td>225951</td>
    </tr>
    <tr>
      <th>998</th>
      <td>Oceania</td>
      <td>199</td>
      <td>44364</td>
      <td>225492</td>
    </tr>
    <tr>
      <th>999</th>
      <td>Oceania</td>
      <td>200</td>
      <td>44291</td>
      <td>225179</td>
    </tr>
  </tbody>
</table>
<p>1000 rows × 4 columns</p>
</div>


<aside class="notes">


Finally, you might replace the filter with a group_by.

Note that you might save this result as a variable and use it in a new pipe or visualization. For example, the new pipe might filter to keep where position is 1, so you can inspect min and max streams for the top tracks across continents.

</aside><aside class="notes">




</aside></section></section><section class=""><section class="">

# Let's practice!
</section></section>