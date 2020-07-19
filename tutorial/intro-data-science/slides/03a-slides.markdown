<section class=""><section class="">

# Summarizing data

<aside class="notes">


In this chapter, you'll return to the topic of data transformation with siuba to learn more ways to explore your data.

</aside></section></section><section class=""><section class="">

# Data analysis


![](model-workflow.png)
<aside class="notes">


Analyses will usually involve a cycle between these steps of data transformation and visualization, as well as additional components of the data science workflow, like modeling (that this course won't focus on).


</aside></section></section><section class=""><section class="">

# Extracting data

```python
(music_top200
  >> filter(_.country == "Japan", _.position == 1)
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
      <th>6400</th>
      <td>Japan</td>
      <td>1</td>
      <td>I LOVE...</td>
      <td>Official HIGE DANdism</td>
      <td>1591844</td>
      <td>282.027</td>
      <td>Asia</td>
    </tr>
  </tbody>
</table>
</div>


<aside class="notes">


You've learned to use the
filter verb to pull out individual
observations, such as the track in the first position for Japan.

Notice that the track's duration is about 280 seconds.
Is this is shorter or longer than the average track.

You'll learn to answer this question by summarizing many observations into a single data point.

</aside></section></section><section class=""><section class="">

# The summarize verb


![](./model-summarize.png)

```python
(music_top200
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
      <th>avg_duration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>205.990073</td>
    </tr>
  </tbody>
</table>
</div>


<aside class="notes">


You might want to know if the 280 seconds we saw is longer than the average track across all countries.

You would do this with the summarize verb. Notice that summarize collapses the entire table down into one row.

In the output, we see the answer to our question: mean (or average) duration was around 205 seconds.


**(Click down for a breakdown of the code)**

</aside></section><section class="">

# The summarize verb


![](./model-summarize.png)


<pre><code class="language-python">(music_top200
  >> summarize(<mark>avg_duration =</mark> _.duration.mean())
)</code></pre>




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
      <td>205.990073</td>
    </tr>
  </tbody>
</table>
</div>


<aside class="notes">


Take your `music_top200` data, pipe it into summarize.

Then, specify that you're creating a summary column called avg_duration.

Notice that the highlighted code is similar to when created a new column with the mutate verb.

</aside></section><section class="">

# The summarize verb


![](./model-summarize.png)


<pre><code class="language-python">(music_top200
  >> summarize(avg_duration = _.duration<mark>.mean()</mark>)
)</code></pre>




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
      <td>205.990073</td>
    </tr>
  </tbody>
</table>
</div>


<aside class="notes">


The "duration dot mean, followed by open and close parentheses" is worth examining.

This is calling the **method** mean on the variable duration.
The mean method calculates the average of a set of values.

</aside></section></section><section class=""><section class="">

# Summarizing one country

```python
(music_top200
  >> filter(_.country == "Japan")
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


If you think about it, it doesn't really make sense to summarize across all countries.
It may make more sense to ask compare our track to averages in the same country: Japan.

To answer this, you can combine the summarize verb with filter:
filter your data for a particular country first, then summarize the result.
This shows you that the average track duration in the Japan top 200 chart was about 250 seconds.


</aside></section></section><section class=""><section class="">

# Summarizing into multiple columns

```python
(music_top200
  >> filter(_.country == "Japan")
  >> summarize(
      avg_duration = _.duration.mean(),
      ttl_streams = _.streams.sum()
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
      <th>avg_duration</th>
      <th>ttl_streams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>250.53499</td>
      <td>48942067</td>
    </tr>
  </tbody>
</table>
</div>


<aside class="notes">


You can create multiple summaries at once with the summarize verb.

For example, suppose that along with finding the average track duration in Japan,
you want to find their chart's total streams.

To do that, add a comma after the mean of the duration.
Then, specify another column you're creating.

You could give it a useful name like ttl_streams, and say that it's
equal to the sum--that's another built-in function--of the pop variable.

</aside></section></section><section class=""><section class="">

# Methods for summarizing

E.g. `_.some_column.mean()`

* `.mean()`
* `.sum()`
* `.median()`
* `.min()`
* `.max()`

<aside class="notes">


The mean and sum are just two methods you could use to summarize a variable within a dataset.

Another example is median: the median represents
the point in a set of numbers where half the numbers are above that point and half of the numbers are below.

Two others are min, for minimum, and max, for maximum.

In the exercises, you'll use several of these functions to answer questions about the `music_top200` dataset.


</aside></section></section><section class=""><section class="">

# Let's practice!
<aside class="notes">




</aside></section></section>