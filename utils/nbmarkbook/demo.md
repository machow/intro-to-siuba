---
description: ''
sidebar: 'docs'
prev: '/docs/writing-content/'
next: '/docs/settings/'
---
# Some title


<code-cell :kernel="sp.kernel" language="python">
from plotnine import *
from siuba.data import mtcars

ggplot(mtcars, aes("mpg", "hp")) + geom_point()
</code-cell>


![png](./demo_files/demo_2_0.png)





    <ggplot: (-9223372036550634850)>



## Unevaluated markdown

* what will happen?
* who knows

