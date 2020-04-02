---
description: ''
sidebar: 'demo'
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


# Code Example

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

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

