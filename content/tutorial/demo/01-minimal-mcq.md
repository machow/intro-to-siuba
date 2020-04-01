---
description: ''
sidebar: 'docs'
prev: '/tutorial/demo/01-minimal-code'
next: '/tutorial/demo/02-code-input'
---

<Notebook
  v-slot="nb"
  branch="master"
  repo="machow/purview"
  url="https://mybinder.org"
  useBinder="1"
  >



<code-cell :kernel="nb.kernel" :onExecute="nb.execute" language="python">

    from IPython.display import display, HTML
    
    # def javascript(*st,file=None):
    #     if len(st) == 1 and file is None:
    #         s = st[0]
    #     elif len(st) == 0 and file is not None:
    #         s = open(file).read()
    #     else:
    #         raise ValueError('Pass either a string or file=.')
    #     display(HTML("<script type='text/javascript'>\n" + s + "</script>"))
    # javascript(open("../../../dist/q.js").read())
    
    from IPython.display import display, HTML
    display(HTML("""<script src="https://siublocks.s3.us-east-2.amazonaws.com/q.js"></script>"""))


</code-cell>



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
  <q-opt text="Salt Lake City"><div><span>No, that's not right</span></div></q-opt>
  <q-opt text="Boise"><div><span>Nailed it!</span></div></q-opt>  
</q-multiple-choice>




</template>


</code-cell>


</Notebook>

