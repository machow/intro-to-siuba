(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1015:function(t,e,o){"use strict";o.r(e);var s=o(9),a=o(836),i=o.n(a),n=o(991),d=o.n(n),r=o(992),c=o.n(r),l=o(993),p=o.n(l),h=o(994),u=o.n(h),m='<section class=""><section class=""> <h1 id=using-plotnine-aesthetics>Using plotnine Aesthetics</h1> <aside class=notes> <p>In this lesson, you&#39;ll use plotnine aesthetics to set more than just the position of points on a plot, but other features too--such as size and color.</p> </aside></section></section><section class=img-height-300><section class=img-height-300> <h1 id=scatterplots>Scatterplots</h1> <pre><code class=language-python>(billie\n  &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;))\n   + geom_point()\n)</code></pre> <p><img src='+i()(d.a)+" alt=png></p> <aside class=notes> <p>You&#39;ve learned how to create a scatter plot to compare two variables within your data using two visual aesthetics: energy x-axis, and valence on the y-axis.</p> </aside> <h1 id=additional-variables>Additional variables</h1> <pre><code class=language-python>billie</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>artist</th> <th>album</th> <th>track_name</th> <th>energy</th> <th>valence</th> <th>danceability</th> <th>speechiness</th> <th>acousticness</th> <th>popularity</th> <th>duration</th> </tr> </thead> <tbody> <tr> <th>1273</th> <td>Billie Eilish</td> <td>dont smile ...</td> <td>my boy</td> <td>0.3940</td> <td>0.3240</td> <td>0.692</td> <td>0.2070</td> <td>0.472</td> <td>44</td> <td>170.852</td> </tr> <tr> <th>2899</th> <td>Billie Eilish</td> <td>WHEN WE ALL...</td> <td>listen befo...</td> <td>0.0561</td> <td>0.0820</td> <td>0.319</td> <td>0.0450</td> <td>0.935</td> <td>79</td> <td>242.652</td> </tr> <tr> <th>2950</th> <td>Billie Eilish</td> <td>lovely (wit...</td> <td>lovely (wit...</td> <td>0.2960</td> <td>0.1200</td> <td>0.351</td> <td>0.0333</td> <td>0.934</td> <td>89</td> <td>200.186</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>24857</th> <td>Billie Eilish</td> <td>WHEN WE ALL...</td> <td>ilomilo</td> <td>0.4230</td> <td>0.5720</td> <td>0.855</td> <td>0.0585</td> <td>0.724</td> <td>79</td> <td>156.371</td> </tr> <tr> <th>24997</th> <td>Billie Eilish</td> <td>WHEN I WAS ...</td> <td>WHEN I WAS ...</td> <td>0.3320</td> <td>0.0628</td> <td>0.696</td> <td>0.0425</td> <td>0.853</td> <td>71</td> <td>270.520</td> </tr> <tr> <th>25147</th> <td>Billie Eilish</td> <td>come out an...</td> <td>come out an...</td> <td>0.3210</td> <td>0.1770</td> <td>0.640</td> <td>0.0931</td> <td>0.693</td> <td>74</td> <td>210.376</td> </tr> </tbody> </table> <p>27 rows × 10 columns</p> </div> <aside class=notes> <p>But these aren&#39;t the only variables in the <code>track_features</code> dataset: for example, you also have acousticness and popularity. You may want to examine relationships among all these variables in the same plot.</p> <p>You already used the x-axis to represent energy and the y-axis to valence Now you&#39;ll learn to add two more aesthetics--color and size--to communicate even more information in your scatter plot.</p> </aside></section></section><section class=img-height-300><section class=img-height-300> <h1 id=the-color-aesthetic>The color aesthetic</h1> <pre><code class=language-python>(billie\n  &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, color = &quot;acousticness&quot;))\n   + geom_point()\n)</code></pre> <p><img src="+i()(c.a)+' alt=png></p> <aside class=notes> <p>The scatterplot shows that songs with higher energy, tend to have higher valence. Another variable that might be related to energy is <code>acousticness</code>.</p> <p>You can explore this relationship by setting the color of your points, like you see here. To use this aesthetic, you add color equals acousticness inside the aes, next to x equals energy and y equals valence.</p> <p>Notice that ggplot2 automatically adds a legend to the plot, indicating which color represents which acousticness.</p> <p>This communicates that lower energy tracks (toward the left of the plot) tend to be more acoustic. Note that brighter colors indicate more acoustic tracks.</p> </aside></section></section><section class="img-height-300 font-size-sm"><section class="img-height-300 font-size-sm"> <h1 id=the-size-aesthetic>The size aesthetic</h1> <pre><code class=language-python>(billie\n  &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, color = &quot;acousticness&quot;, size = &quot;popularity&quot;))\n   + geom_point()\n)</code></pre> <p><img src='+i()(p.a)+" alt=png></p> <aside class=notes> <p>Another variable you may want to include in the graph is population, represented by the pop variable in the dataset.</p> <p>One way to represent it is with the size of the points in the scatterplot, with higher popularity songs getting larger points.</p> <p>Just like x, y, and color, you add size = &quot;popularity&quot; within the aes parentheses.</p> <details> <p>Note that to keep the length of each of the code lines reasonable, we put the size aesthetic on a second line, but this doesn&#39;t make any difference, and you don&#39;t have to do that in the exercises. You&#39;ve now learned to use four aesthetics in a plot: x, y, color, and size: to communicate information about four variables in your dataset.</p> </details> </aside> <h1 id=aesthetics-with-multiple-geoms>Aesthetics with multiple geoms</h1> <pre><code class=language-python>(billie\n  &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, \n                color = &quot;acousticness&quot;, size = &quot;popularity&quot;,\n                label = &quot;track_name&quot;))\n   + geom_point()\n   + geom_text(nudge_y = .1)\n)</code></pre> <p><img src="+i()(u.a)+' alt=png></p> <aside class=notes> <p>Notice that in this plot, the aesthetics set effect both the points and the text.</p> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> <p>In the exercises, you&#39;ll learn to mix and match aesthetics and variables to further explore the track features.</p> </aside></section></section>',g=o(835),f=o(7);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}f.a.config.optionMergeStrategies;var b={slides:m,VueRemarkRoot:g.a},x=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(b).forEach((function(t){"object"===y(b[t])&&"function"==typeof b[t].render?e[t]=b[t]:o[t]=function(){return b[t]}}))},v=f.a.config.optionMergeStrategies,w="__vueRemarkFrontMatter",A={excerpt:null,title:"Aesthetics",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"visualize"};var _=function(t){t.options[w]&&(t.options[w]=A),f.a.util.defineReactive(t.options,w,A),t.options.computed=v.computed({$frontmatter:function(){return t.options[w]}},t.options.computed)},q=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[s("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[s("pre",[s("code",{pre:!0},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\nfrom music_top200 import music_top200, track_features\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n\n# remove the <ggplot: (528...)> printout\nhtml_formatter.for_type(ggplot, lambda g: "")\n')])])])],1),s("RevealSlides",{attrs:{slides:t.slides}}),s("p",[t._v("The plot below shows all top 200 hundred hits for Eric Chou across countries. \nUse the code cell below to recreate it.")]),s("p",[t._v("(Note: running the code won't delete the plot!).")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"}},[s("pre",[s("code",{pre:!0},[t._v("# your code here\n\n\n\n#\n")])])]),s("p",[s("g-image",{attrs:{src:o(990),alt:"png"}})],1),s("h3",{attrs:{id:"exercise-2"}},[s("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[s("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),s("p",[t._v("Use plots of the data for the artists Snelle, Bazzi, and Davyi, to answer the questions below.")]),s("p",[t._v("You may need to write and run code multiple times, and produce multiple plots.")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("pre",[s("code",{pre:!0},[t._v("()\n")])])]},proxy:!0}],null,!0)},[s("pre",[s("code",{pre:!0},[t._v("(\n    \n)\n")])])]),s("prompt-expandable",{attrs:{header:"Which of these artists have hit tracks in the most continents?"}},[s("q-multiple-choice",[s("q-opt",{attrs:{text:"Snelle"}},[s("span",[t._v("Incorrect. Did you try using the color aesthetic?")])]),s("q-opt",{attrs:{text:"Bazzi"}},[s("span",[t._v("That's right. Bazzi has hits on every continent.")])]),s("q-opt",{attrs:{text:"Dayvi"}},[s("span",[t._v("Incorrect. Did you try using the color aesthetic?")])])],1)],1),s("prompt-expandable",{attrs:{header:"How many *countries* does Dayvi have hit tracks in?"}},[s("q-multiple-choice",[s("q-opt",{attrs:{text:"1"}},[s("span",[t._v("Incorrect.")])]),s("q-opt",{attrs:{text:"2"}},[s("span",[t._v("That's right.")])]),s("q-opt",{attrs:{text:"3"}},[s("span",[t._v("Incorrect.")])])],1)],1)]}}])})],1)}),[],!1,null,null,null);"function"==typeof x&&x(q),"function"==typeof _&&_(q);e.default=q.exports},835:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},990:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/02c-aesthetics_4_0.7135616.6a80f7e6344ed3f19eeed935f19be2ba.png",size:{width:805,height:458},sizes:"(max-width: 805px) 100vw, 805px",srcset:["/assets/static/02c-aesthetics_4_0.82a2fbd.6a80f7e6344ed3f19eeed935f19be2ba.png 480w","/assets/static/02c-aesthetics_4_0.7135616.6a80f7e6344ed3f19eeed935f19be2ba.png 805w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 805 458' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-043f74d0532d88e774115a54f3e061b5'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-043f74d0532d88e774115a54f3e061b5)' width='805' height='458' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAkCAYAAAA5DDySAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAE90lEQVRo3uVZaVPqPBTu//8xflRHx/06buO%2bgooCFQQEyto1nDdPNLWUhhak4HtvZkLSkq0nz3lyzolGgTQYDPwyqt5oNKjf7xNjjHq9HhmGQZ1Oh1qtlni2LEvUHccRbbvdLrmu6//veZ7oi9K2bZHxP96hjvemaYo5kPEcXFcaSQt/aNTHY4FIj4%2bPtLy8TAcHB3R0dERLS0u0v79PGxsbtL6%2bTmdnZ7S6ukoXFxd0eHhI29vbdHNzI9pubW3R7u4uHR8f0%2bbmpmi7trYm6nd3d7S3t0crKytifIyJ/zCGnDstIWiqwbGbYWQgYYews3InUcq6zHhGn%2bAzSiBD7jze4RkZKEDGnLK9/C%2b4GakiABMDzu12W3xgPp%2bnAUeg2fZGVGHeaS4qgI9%2beHig%2b/t7yuVylM1miLlE7Xc7UkXmmReiAoVCYS47sOgUSYLQwWKxOHIy/BMCQIIAXl9f/w0BRJENBAASHGcT/C0CGUKAPL5QSg6I%2buC/CQ1KEgxygPy/bNnksN%2bFgJ%2bi00cADJzn52dxBAL%2bqIcH7sKw%2bQUqEOYridxphOALANZZtVqlWq1G9Xr9f6ECqnVMIgxNZeEFBfDbSDC4jusvX%2bPk5ET4KNi8SaxILUpqUSQ4XucWJ4BquUQlXaciz1DfSqUiPEmodBJHSgP04Y0FG6Hjy8uLsvNvUAd/Xu5q86%2blHOetq6sr4WXCpIcnCXc9VgDw0%2bGmTooAtkB1CCLAHbicmF0ymoaA/8fHh4g9wJNMhADAZWdnZywHRAkgb1p88sXxgZyz7dSo77XoMfNEp6enIhZxe3sr3OtEHAD3F4ELSAt1ZLjFSThgUsadrQDEL98E7srzLF15lEAAyiRepkDA5eWl6ARXOJvNCjJ5enqK5YDwCeI/D9L3IeS4NQ51g9snBc5Ze3/%2biIjT9fW1b8rHjaGpyCzsDcZZXuaXvs0LFf7YDucsh1G31xUxDWwo4C8DOygRaUIJOwfxSbTxEaCKAapUIGoRLjePddMeEcQ8ENCpOdQ3OAL0vOAAnAKwYjOZjIhHnp%2bfi1gmTgaUeAeky4CrFqUXYW8wqTXW9xiVOSSJ78rbVY9cmyWKNk%2bLlp8Kd0gFwu5wOB6Q1BH5pCaOhBb3G1w1V6jqSQWhimZPGmpTqoCKA4YWESOIkTPbYtSpOp/Hl%2bv5xyiLEtAg3t7/Hp%2bmF8AkJBh39MXBmnFEWN1P3avaDllffFGwLeFmu8xUzpeWLzKEABAfCAJmsMoUHrfDSdQlXGf8w40SJ1Aui7qt8/%2b4a8uihZsGsQ4JAMdGs9kUR0WUAIaiR3zXki5KiRD6fHZMNtS/kbeIeaN9wCloO1METKUCuNsr6d%2bcYZnTEVeQNgMCUamA1fF8DklFBVR2gPKy4ksYVrEwGSNHqE%2bS/pIZR%2bspRoVTSbgLfC9/z8utONYyZhYR%2brEAUMKaktfUMsNfCL8T19mh9%2bF2aBO89u5xrumKq3b%2bDpetRpN6jTpZtj0yjmqsWZ0GmorRy%2bWyMB1RlkolkXVdp7e3N/8ZdZwa4XdoJ%2bvIMEtHxpJ9ePleqVCOG15oFzcfXF2Us7o211SwQkABDkRcErfIMYvA4uPGQjBWWp%2bqhDXBpgcSUleBSW9uwxElKRwgBE4Kwm44WoOXL0nGGtcmVQSMmyTOIpQCAKQRp8PHow6BhKGbJLAyrb%2bQJP0H9Tt4YgU92U8AAAAASUVORK5CYII=' /%3e%3c/svg%3e"}},991:function(t,e,o){t.exports=o.p+"assets/img/02c-slides_5_0.8fcb5e0c.png"},992:function(t,e,o){t.exports=o.p+"assets/img/02c-slides_11_0.3ec3cdc6.png"},993:function(t,e,o){t.exports=o.p+"assets/img/02c-slides_14_0.bcdae138.png"},994:function(t,e,o){t.exports=o.p+"assets/img/02c-slides_17_0.856e87e3.png"}}]);