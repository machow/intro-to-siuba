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


# Minimal Tags

## setup

<code-cell  :status="nb.status" :onExecute="nb.execute" :onReady="nb.updateSetupCode" language="python">


    import pandas as pd




</code-cell>


<code-cell  :status="nb.status" :onExecute="nb.execute"  language="python">


    print(pd.DataFrame({'a': [1,2,3]}))


<template v-slot:output>

       a
    0  1
    1  2
    2  3


</template>

</code-cell>


## input-details

<details v-fix-codemirror>
<code-cell  :status="nb.status" :onExecute="nb.execute"  language="python">


    print("some detail code")


<template v-slot:output>

    some detail code


</template>

</code-cell>
</details>


## input-hide tag

Example 1 - Code




       a
    0  1
    1  2
    2  3




Example 2 - MCQ






<p>What is the capital of Idaho?</p>

<q-multiple-choice>
  <q-opt text="Salt Lake City"><span>No, that's not right</span></q-opt>
  <q-opt text="Boise"><span>Nailed it!</span></q-opt>  
</q-multiple-choice>





## input-lock tag

<code-cell locked :status="nb.status" :onExecute="nb.execute"  language="python">


    from plotnine import *
    from siuba.data import mtcars
    
    ggplot(mtcars, aes("mpg", "hp")) + geom_point()


<template v-slot:output>


![png](./01-minimal-tags_files/01-minimal-tags_12_0.png)





    <ggplot: (-9223372036569706836)>



</template>

</code-cell>



</Notebook>

