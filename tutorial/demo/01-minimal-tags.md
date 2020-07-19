---
description: ''
sidebar: 'docs'
chunk: 
  test
---
# Minimal Tags

## setup


```python
import pandas as pd
```


```python
print(pd.DataFrame({'a': [1,2,3]}))
```

## input-details


```python
print("some detail code")
```

    some detail code


## input-hide tag

Example 1 - Code


```python
print(pd.DataFrame({'a': [1,2,3]}))
```

       a
    0  1
    1  2
    2  3


Example 2 - MCQ


```python
%%html

<p>What is the capital of Idaho?</p>

<q-multiple-choice>
  <q-opt text="Salt Lake City"><span>No, that's not right</span></q-opt>
  <q-opt text="Boise"><span>Nailed it!</span></q-opt>  
</q-multiple-choice>

```



<p>What is the capital of Idaho?</p>

<q-multiple-choice>
  <q-opt text="Salt Lake City"><span>No, that's not right</span></q-opt>
  <q-opt text="Boise"><span>Nailed it!</span></q-opt>  
</q-multiple-choice>



## input-lock tag


```python
from plotnine import *
from siuba.data import mtcars

ggplot(mtcars, aes("mpg", "hp")) + geom_point()
```


![png](01-minimal-tags_files/01-minimal-tags_13_0.png)





    <ggplot: (-9223372036570553582)>


