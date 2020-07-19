---
description: ''
sidebar: 'docs'
chunk: 
  test
---
# Code Example


```python
from plotnine import *
from siuba.data import mtcars

ggplot(mtcars, aes("mpg", "hp")) + geom_point()
```


![png](01-minimal-code_files/01-minimal-code_2_0.png)





    <ggplot: (-9223372036570553582)>


