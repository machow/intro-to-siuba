---
description: ''
sidebar: 'docs'
chunk:
  test
---

<Notebook
  v-slot="nb"
  >


# Multiple Choice Example





<code-cell :status="nb.status" :onExecute="nb.execute" language="python">

    %%html
    
    <p>What is the capital of Idaho?</p>
    
    <q-multiple-choice>
      <q-opt text="Salt Lake City"><span>No, that's not right</span></q-opt>
      <q-opt text="Boise"><span>Nailed it!</span></q-opt>  
    </q-multiple-choice>
    


<template v-slot:output>



<p>What is the capital of Idaho?</p>

<q-multiple-choice>
  <q-opt text="Salt Lake City"><span>No, that's not right</span></q-opt>
  <q-opt text="Boise"><span>Nailed it!</span></q-opt>  
</q-multiple-choice>



</template>


</code-cell>



</Notebook>

