(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1016:function(t,e,o){"use strict";o.r(e);var s=o(9),a=o(836),n=o.n(a),i=o(992),r=o.n(i),d=o(993),c=o.n(d),l=o(994),p=o.n(l),h=o(995),u=o.n(h),g='<section class=""><section class=""> <h1 id=using-plotnine-aesthetics>Using plotnine Aesthetics</h1> <aside class=notes> <p>In this lesson, you&#39;ll use plotnine aesthetics to set more than just the position of points on a plot, but other features too--such as size and color.</p> </aside></section></section><section class=img-height-300><section class=img-height-300> <h1 id=scatterplots>Scatterplots</h1> <pre><code class=language-python>(billie\n  &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;))\n   + geom_point()\n)</code></pre> <p><img src='+n()(r.a)+" alt=png></p> <pre><code>&lt;ggplot: (8771309309553)&gt;</code></pre><aside class=notes> <p>You&#39;ve learned how to create a scatter plot to compare two variables within your data using two visual aesthetics: energy x-axis, and valence on the y-axis.</p> </aside> <h1 id=additional-variables>Additional variables</h1> <pre><code class=language-python>billie</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>artist</th> <th>album</th> <th>track_name</th> <th>energy</th> <th>valence</th> <th>danceability</th> <th>speechiness</th> <th>acousticness</th> <th>popularity</th> <th>duration</th> </tr> </thead> <tbody> <tr> <th>1273</th> <td>Billie Eilish</td> <td>dont smile ...</td> <td>my boy</td> <td>0.3940</td> <td>0.3240</td> <td>0.692</td> <td>0.2070</td> <td>0.472</td> <td>44</td> <td>170.852</td> </tr> <tr> <th>2900</th> <td>Billie Eilish</td> <td>WHEN WE ALL...</td> <td>listen befo...</td> <td>0.0561</td> <td>0.0820</td> <td>0.319</td> <td>0.0450</td> <td>0.935</td> <td>79</td> <td>242.652</td> </tr> <tr> <th>2951</th> <td>Billie Eilish</td> <td>lovely (wit...</td> <td>lovely (wit...</td> <td>0.2960</td> <td>0.1200</td> <td>0.351</td> <td>0.0333</td> <td>0.934</td> <td>89</td> <td>200.186</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>24858</th> <td>Billie Eilish</td> <td>WHEN WE ALL...</td> <td>ilomilo</td> <td>0.4230</td> <td>0.5720</td> <td>0.855</td> <td>0.0585</td> <td>0.724</td> <td>79</td> <td>156.371</td> </tr> <tr> <th>24998</th> <td>Billie Eilish</td> <td>WHEN I WAS ...</td> <td>WHEN I WAS ...</td> <td>0.3320</td> <td>0.0628</td> <td>0.696</td> <td>0.0425</td> <td>0.853</td> <td>71</td> <td>270.520</td> </tr> <tr> <th>25148</th> <td>Billie Eilish</td> <td>come out an...</td> <td>come out an...</td> <td>0.3210</td> <td>0.1770</td> <td>0.640</td> <td>0.0931</td> <td>0.693</td> <td>74</td> <td>210.376</td> </tr> </tbody> </table> <p>27 rows × 10 columns</p> </div> <aside class=notes> <p>But these aren&#39;t the only variables in the <code>track_features</code> dataset: for example, you also have acousticness and popularity. You may want to examine relationships among all these variables in the same plot.</p> <p>You already used the x-axis to represent energy and the y-axis to valence Now you&#39;ll learn to add two more aesthetics--color and size--to communicate even more information in your scatter plot.</p> </aside></section></section><section class=img-height-300><section class=img-height-300> <h1 id=the-color-aesthetic>The color aesthetic</h1> <pre><code class=language-python>(billie\n  &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, color = &quot;acousticness&quot;))\n   + geom_point()\n)</code></pre> <p><img src="+n()(c.a)+' alt=png></p> <pre><code>&lt;ggplot: (8771240264541)&gt;</code></pre><aside class=notes> <p>The scatterplot shows that songs with higher energy, tend to have higher valence. Another variable that might be related to energy is <code>acousticness</code>.</p> <p>You can explore this relationship by setting the color of your points, like you see here. To use this aesthetic, you add color equals acousticness inside the aes, next to x equals energy and y equals valence.</p> <p>Notice that ggplot2 automatically adds a legend to the plot, indicating which color represents which acousticness.</p> <p>This communicates that lower energy tracks (toward the left of the plot) tend to be more acoustic. Note that brighter colors indicate more acoustic tracks.</p> </aside></section></section><section class="img-height-300 font-size-sm"><section class="img-height-300 font-size-sm"> <h1 id=the-size-aesthetic>The size aesthetic</h1> <pre><code class=language-python>(billie\n  &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, color = &quot;acousticness&quot;, size = &quot;popularity&quot;))\n   + geom_point()\n)</code></pre> <p><img src='+n()(p.a)+" alt=png></p> <pre><code>&lt;ggplot: (8771310401757)&gt;</code></pre><aside class=notes> <p>Another variable you may want to include in the graph is population, represented by the pop variable in the dataset.</p> <p>One way to represent it is with the size of the points in the scatterplot, with higher popularity songs getting larger points.</p> <p>Just like x, y, and color, you add size = &quot;popularity&quot; within the aes parentheses.</p> <details> <p>Note that to keep the length of each of the code lines reasonable, we put the size aesthetic on a second line, but this doesn&#39;t make any difference, and you don&#39;t have to do that in the exercises. You&#39;ve now learned to use four aesthetics in a plot: x, y, color, and size: to communicate information about four variables in your dataset.</p> </details> </aside> <h1 id=aesthetics-with-multiple-geoms>Aesthetics with multiple geoms</h1> <pre><code class=language-python>(billie\n  &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, \n                color = &quot;acousticness&quot;, size = &quot;popularity&quot;,\n                label = &quot;track_name&quot;))\n   + geom_point()\n   + geom_text(nudge_y = .1)\n)</code></pre> <p><img src="+n()(u.a)+' alt=png></p> <pre><code>&lt;ggplot: (8771240118117)&gt;</code></pre><aside class=notes> <p>Notice that in this plot, the aesthetics set effect both the points and the text.</p> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> <p>In the exercises, you&#39;ll learn to mix and match aesthetics and variables to further explore the track features.</p> </aside></section></section>',m=o(835),y=o(7);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}y.a.config.optionMergeStrategies;var b={slides:g,VueRemarkRoot:m.a},v=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(b).forEach((function(t){"object"===f(b[t])&&"function"==typeof b[t].render?e[t]=b[t]:o[t]=function(){return b[t]}}))},w=y.a.config.optionMergeStrategies,x="__vueRemarkFrontMatter",_={excerpt:null,title:"Aesthetics",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"visualize"};var A=function(t){t.options[x]&&(t.options[x]=_),y.a.util.defineReactive(t.options,x,_),t.options.computed=w.computed({$frontmatter:function(){return t.options[x]}},t.options.computed)},q=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[s("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[s("pre",[s("code",{pre:!0},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/music200.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/track_features.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n')])])])],1),s("RevealSlides",{attrs:{slides:t.slides}}),s("p",[t._v("The plot below shows all top 200 hundred hits for Eric Chou across countries. \nUse the code cell below to recreate it.")]),s("p",[t._v("(Note: running the code won't delete the plot!).")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"}},[s("pre",[s("code",{pre:!0},[t._v("# your code here\n\n\n\n#\n")])])]),s("pre",[s("code",{pre:!0},[t._v("/Users/machow/.virtualenvs/siublocks-org/lib/python3.7/site-packages/plotnine/utils.py:1246: FutureWarning: is_categorical is deprecated and will be removed in a future version.  Use is_categorical_dtype instead\n  if pdtypes.is_categorical(arr):\n")])]),s("p",[s("g-image",{attrs:{src:o(991),alt:"png"}})],1),s("pre",[s("code",{pre:!0},[t._v("<ggplot: (-9223372036567986274)>\n")])]),s("h3",{attrs:{id:"exercise-2"}},[s("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[s("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),s("p",[t._v("Use plots of the data for the artists Snelle, Bazzi, and Davyi, to answer the questions below.")]),s("p",[t._v("You may need to write and run code multiple times, and produce multiple plots.")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("pre",[s("code",{pre:!0},[t._v("()\n")])])]},proxy:!0}],null,!0)},[s("pre",[s("code",{pre:!0},[t._v("(\n    \n)\n")])])]),s("prompt-expandable",{attrs:{header:"Which of these artists have hit tracks in the most continents?"}},[s("q-multiple-choice",[s("q-opt",{attrs:{text:"Snelle"}},[s("span",[t._v("Incorrect. Did you try using the color aesthetic?")])]),s("q-opt",{attrs:{text:"Bazzi"}},[s("span",[t._v("That's right. Bazzi has hits on every continent.")])]),s("q-opt",{attrs:{text:"Dayvi"}},[s("span",[t._v("Incorrect. Did you try using the color aesthetic?")])])],1)],1),s("prompt-expandable",{attrs:{header:"How many *countries* does Dayvi have hit tracks in?"}},[s("q-multiple-choice",[s("q-opt",{attrs:{text:"1"}},[s("span",[t._v("Incorrect.")])]),s("q-opt",{attrs:{text:"2"}},[s("span",[t._v("That's right.")])]),s("q-opt",{attrs:{text:"3"}},[s("span",[t._v("Incorrect.")])])],1)],1)]}}])})],1)}),[],!1,null,null,null);"function"==typeof v&&v(q),"function"==typeof A&&A(q);e.default=q.exports},835:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},991:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/02c-aesthetics_4_1.ae6f016.4a5ab6876085b0d3c61f93441539a5d4.png",size:{width:804,height:459},sizes:"(max-width: 804px) 100vw, 804px",srcset:["/assets/static/02c-aesthetics_4_1.82a2fbd.4a5ab6876085b0d3c61f93441539a5d4.png 480w","/assets/static/02c-aesthetics_4_1.ae6f016.4a5ab6876085b0d3c61f93441539a5d4.png 804w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 804 459' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-f7db30a2a2c85612f2965fbe05290973'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-f7db30a2a2c85612f2965fbe05290973)' width='804' height='459' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAlCAYAAADyUO83AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAFGklEQVRo3uVae1PiMBDv9/8s/uWMzqjjW0fPt6Ij6jmeCpycokAptOljL7/AcrH0eVJg7uJk0pQ02Wz28duNBmklCIJhq1eUZrNJnU6HfN8n27ZV3zRNarfbqnVdV71D22q1VBVCULfbVc%2be56lvUTHGcRzVcp8rxqNiDZ2eoooRt2F%2bDwJRnp%2bfaWlpidbX1%2bns7Izm5uZoY2ODtra2aGFhgY6OjmhlZYX29vbo5OREjcO78/NzWl1dVWPx2%2bbmJu3v79POzo76DmNPT0/V3IuLi7S8vKzGzc/PU7VaLZ4BUZPjJCQrRhbHqfFpYgyfqt5X38pv%2bJl/hzTge5wsj8Uz3rNEoK9LCMZMRAKwqGVZSsR7vR49PT2pd6LnF05AWil6bcUAbP76%2bpouLy/p/v5ePXuuT82qE2kTJlmnogKPj49D3Z/m6U%2bijBhBFFaBgRn4p5mQzAD6TxgQ3ujDw8OICkxKJ6cqAbzpJAn416Qh0ggC9IQloOVKvz2DhvGrEqokAGCkUqko5PXy8qJcYZgB78KlnjcbDNA3yvCaa14mKAYAgUHsUWu12icbMKsqkERHHhxh6BtNUoFZMoK8Pg7u4uKCbm5u6Pj4WAE4QOgw3V82grNWdAZcl8v0Xars3d2dqoDzUaoSywCIe3hgWAXGZXAKUYG3V3LlqV9dXdGpjCwRqaIiykRQlcqA7e3tkUl1KJyke1PdPA4Bf45LrjTiyEm8v7%2braBVq8PHxkQnOG2trayObjVMBnqjuCOpO2SP0mUDUcCtkWm36tv%2bNDg8PVb29vc18SAYSFBwSc3yvG8EoBliI9WdABfqCICSt/dwCKsJ5uPU4Ix7uG8jMIAUFHYIVZWOSRwWmYRP66wT0bLtkSvqP5Mkj63RwcKD0H%2b6cDzZMs06rgVPn7Azn6eJsQNqGJ8kQlbFC5km2rqQftMMOcOaJs0lceI9hWo2oybO4wU/RY8%2bOVIkipYEloFURZJldKl2WhjlIeDG08AZ4B4lGsgeYAdKB/lACojIweRngDMSs0nNUCqFVc0h0/UhpCEtGOBGb1w16Tj9vgZOH/rMN0HOQaPXcow6WUsPhPJCUY4XGD5vMXyIejCToZB7J%2bTPu7xlohAOLzBKQ0yaooEtKhe9Fn3xeuxF3h5E312hELZiGA/KItf4M1QhEQG1pkF7svoR0pAtruCKTRBRhXIcSAORUr9cVmoryAkmbHhKTEqFx8eUzG03TcqllBWT7TWqLxh8bn5HZY2MA/CasI04/Dw5IIyqeWQO78eGSaEsQRo6qtny2GiLRo4zTu0SqQBQS/GT1f9bIF07m%2bJylIw6VKW4MHnEZE/Ygw/vJqjP2y5rMRlAnxO9aFAyAhlORzBIit/EaYQoFqaAKm9eNaGFZYdgAIKdYK6oR5klm%2bElj9Qq8IL91Oyb56v5xwHjH7v%2bWarmDeJUad1q8yOL9quMGdth3f9bGmhL7MgOQFAUTkCiFPUALqYBqoM/v9JYrxul9JFr1PuoT3mnfVWSfk7Jpc4EGeKpCJQBwEgQBOuqwkiElw8pyuUyNRkOpC/%2bmj4EdgXdBlNn/ZjBXCJ4iGgV2f3t7i5wLLebC5kul0qdr80IYgMUYLycV5N9cTZT1wvf8r6%2bvKtWOjcQRi7H47xIhROJ6uMVGxmecamBk9fNxcDI8jr0H1Aj/JcL/RbK7u6tOOmreuJR22rhxMMHIm/RMQ4Tcx2ahShyB6RIQB3Hj4oks4/62/AYmJnZ4a4v/3QAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},992:function(t,e,o){t.exports=o.p+"assets/img/02c-slides_5_0.8fcb5e0c.png"},993:function(t,e,o){t.exports=o.p+"assets/img/02c-slides_11_0.3ec3cdc6.png"},994:function(t,e,o){t.exports=o.p+"assets/img/02c-slides_14_0.bcdae138.png"},995:function(t,e,o){t.exports=o.p+"assets/img/02c-slides_17_0.856e87e3.png"}}]);