---
description: ''
sidebar: 'docs'
prev: null
next: '/tutorial/demo/01-minimal-mcq'
other:
  my_setting: c
---

<Notebook
  v-slot="nb"
  branch="master"
  repo="machow/purview"
  url="https://mybinder.org"
  useBinder="1"
  >


# Minimal Code Example



<code-cell :kernel="nb.kernel" :onExecute="nb.execute" language="python">

    from plotnine import *
    from siuba.data import mtcars
    
    ggplot(mtcars, aes("mpg", "hp")) + geom_point()


<template v-slot:output>


![png](./01-minimal-code_files/01-minimal-code_1_0.png)





    <ggplot: (-9223372036570553582)>



</template>


</code-cell>


</Notebook>

