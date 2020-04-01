---
description: ''
sidebar: 'docs'
prev: '/tutorial/demo/01-minimal-code'
next: '/tutorial/demo/02-code-input'
---

<Notebook
  v-slot="nb"
  >




<code-cell :kernel="nb.kernel" :onExecute="nb.execute" language="python">

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

