<section><section>

# The filter verb

<aside class="notes">


Now that you've seen some code in action on the music data, we'll focus on writing your own code.

In this chapter, you'll learn about the "verbs" in the siuba package. The first verb you'll use is filter.

</aside></section></section><section><section>

# The filter verb

![](model-filter.png)
<aside class="notes">


You use filter when you want to keep only at a subset of your observations, based on a particular condition.

Filtering data is a common first step in an analysis.

</aside></section></section><section data-transition="slide-in none-out"><section data-transition="slide-in none-out">

## Filter for top songs


```python
(music_top200
  >> filter(_.position == 1)
)
```
<aside class="notes">


Every time you apply a verb, you'll use a pipe.
A pipe is a block of commands, surrounded by parentheses.

For example, let's say we want to keep only songs in the first position on the music charts.
This is done by using the pipe shown on the slide.

**Click the down arrow** on the slideshow to see broken into 3 steps:

1. start the block
2. write the pipe operator and verb name
3. write the operation

</aside></section><section data-transition="none-in none-out">

## Filter step 1: start the block

```python
(music_top200

)
```
<aside class="notes">


A block is written with opening and closing parentheses, and the name of your data in the middle.

Press enter twice after the name of your data, to make an empty line.

</aside></section><section data-transition="none-in none-out">

## Filter step 2: pipe operator and verb name

```python
(music_top200
  >> filter()
)
```
<aside class="notes">


Next, write a pipe operator using two greater than signs.
It says "take whatever is before the pipe operator, and feed it into the next step."

In this case, the next step will be filter.

</aside></section><section data-transition="none-in none-out">

## Filter step 3: write the operation

```python
(music_top200
  >> filter(_.position == 1)
)
```

<aside class="notes">


Finally, we can complete our first verb.

We have all 200 hit songs on the charts, but just want to get the first.

The "position equals equals 1" is the condition we are using to filter observations. The "equals equals" may be surprising: it's what we call a "logical
equals"- an operation to compare two values: each position, and the number 1.

A single equals here would mean something different in python, which you'll see later.

Let's see what this code outputs.


</aside></section></section><section data-transition="none-in slide-out"><section data-transition="none-in slide-out">

## Filter for top songs

```python
(music_top200
  >> filter(_.position == 1)
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
      <td>1858666</td>
      <td>200.960</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>200</th>
      <td>Austria</td>
      <td>1</td>
      <td>Blinding Lights</td>
      <td>The Weeknd</td>
      <td>229576</td>
      <td>201.573</td>
      <td>Europe</td>
    </tr>
    <tr>
      <th>400</th>
      <td>Australia</td>
      <td>1</td>
      <td>Blinding Lights</td>
      <td>The Weeknd</td>
      <td>1757343</td>
      <td>201.573</td>
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
      <th>11800</th>
      <td>Uruguay</td>
      <td>1</td>
      <td>Tusa</td>
      <td>KAROL G</td>
      <td>120175</td>
      <td>200.960</td>
      <td>Americas</td>
    </tr>
    <tr>
      <th>12000</th>
      <td>Viet Nam</td>
      <td>1</td>
      <td>Sweet Night</td>
      <td>V</td>
      <td>189261</td>
      <td>214.259</td>
      <td>Asia</td>
    </tr>
    <tr>
      <th>12200</th>
      <td>South Africa</td>
      <td>1</td>
      <td>The Box</td>
      <td>Roddy Ricch</td>
      <td>94422</td>
      <td>196.653</td>
      <td>Africa</td>
    </tr>
  </tbody>
</table>
<p>62 rows × 7 columns</p>
</div>


<aside class="notes">


Notice that now, we have only 62 rows: that's how many countries are in the dataset.

It's important to note that you're not removing any rows from the original `music` data.
You can still use the `music` object for other analyses, and it won't be any different than it was before.

Instead, filter is returning a new dataset, one with fewer rows, that then gets printed to the screen.


</aside></section></section><section><section>

## Filter for country


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


You could choose another condition to filter on, besides the position. For example, suppose we wanted to get only the observations from the United States.

We would write this as "filter country equals equals quote United
States endquote", resulting in only the 200 observations from that country.

The quotes around United States are important: otherwise Python won't understand that the
words "Hong" and "Kong" are the content of a text variable, as opposed to variable names.
You didn't need quotes around a number like 1, but you do around text.


</aside></section></section><section><section>

## Filter with two variables


```python
(music_top200
  >> filter(_.position == 1, _.country == "United States")
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
  </tbody>
</table>
</div>


<aside class="notes">


We can specify multiple conditions in the filter.

Each of the conditions is separated by a comma: here we are saying we want only
the one observation for poisition 1, comma, where the country is the United States.

Each of these equals equals expressions is called an argument.
This kind of double filter is useful for extracting a single observation you're interested in.

You'll be able to practice this in the exercises.


</aside></section></section><section><section>

# Let's practice!
<aside class="notes">


Scroll down to investigate the music data with filter.

</aside></section></section>