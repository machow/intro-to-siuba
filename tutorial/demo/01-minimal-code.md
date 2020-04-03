---
description: ''
sidebar: 'docs'
chunk: 
  test
---

<Notebook
  v-slot="nb"
  branch="master"
  repo="machow/purview"
  url="https://mybinder.org"
  useBinder="1"
  >


# Code Example

## setup





<code-cell :status="nb.status" :onExecute="nb.execute" language="python">

    import pandas as pd



</code-cell>


## input-details



<details v-fix-codemirror>



<code-cell :status="nb.status" :onExecute="nb.execute" language="python">

    print("some detail code")


<template v-slot:output>

    some detail code


</template>


</code-cell>

</details>


## input-hide tag





<code-cell :status="nb.status" :onExecute="nb.execute" language="python">

    print(pd.DataFrame({'a': [1,2,3]}))


<template v-slot:output>

       a
    0  1
    1  2
    2  3


</template>


</code-cell>


## input-lock tag





<code-cell :status="nb.status" :onExecute="nb.execute" language="python">

    from plotnine import *
    from siuba.data import mtcars
    
    ggplot(mtcars, aes("mpg", "hp")) + geom_point()


<template v-slot:output>


![png](./01-minimal-code_files/01-minimal-code_8_0.png)





    <ggplot: (293548103)>



</template>


</code-cell>



</Notebook>

