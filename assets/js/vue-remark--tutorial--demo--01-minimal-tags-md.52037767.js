(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1011:function(t,e,a){"use strict";a.r(e);var s=a(9),n=a(833),o=a(7);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o.a.config.optionMergeStrategies;var r={VueRemarkRoot:n.a},u=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===i(r[t])&&"function"==typeof r[t].render?e[t]=r[t]:a[t]=function(){return r[t]}}))},c=o.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",l={excerpt:null,description:"",sidebar:"docs",chunk:"test"};var d=function(t){t.options[p]&&(t.options[p]=l),o.a.util.defineReactive(t.options,p,l),t.options.computed=c.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},g=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("h1",{attrs:{id:"minimal-tags"}},[s("a",{attrs:{href:"#minimal-tags","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("Minimal Tags")]),s("h2",{attrs:{id:"setup"}},[s("a",{attrs:{href:"#setup","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("setup")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("import pandas as pd")])])]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("   a\n0  1\n1  2\n2  3")])])]},proxy:!0}],null,!0)},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("print(pd.DataFrame({'a': [1,2,3]}))")])])]),s("h2",{attrs:{id:"input-details"}},[s("a",{attrs:{href:"#input-details","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("input-details")]),s("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"}]},[s("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("some detail code")])])]},proxy:!0}],null,!0)},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('print("some detail code")')])])])],1),s("h2",{attrs:{id:"input-hide-tag"}},[s("a",{attrs:{href:"#input-hide-tag","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("input-hide tag")]),s("p",[t._v("Example 1 - Code")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("   a\n0  1\n1  2\n2  3")])]),s("p",[t._v("Example 2 - MCQ")]),s("p",[t._v("What is the capital of Idaho?")]),s("q-multiple-choice",[s("q-opt",{attrs:{text:"Salt Lake City"}},[s("span",[t._v("No, that's not right")])]),s("q-opt",{attrs:{text:"Boise"}},[s("span",[t._v("Nailed it!")])])],1),s("h2",{attrs:{id:"input-lock-tag"}},[s("a",{attrs:{href:"#input-lock-tag","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("input-lock tag")]),s("code-cell",{attrs:{locked:"",status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("p",[s("g-image",{attrs:{src:a(976),alt:"png"}})],1),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<ggplot: (285153968)>")])])]},proxy:!0}],null,!0)},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('from plotnine import *\nfrom siuba.data import mtcars\n\nggplot(mtcars, aes("mpg", "hp")) + geom_point()')])])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof u&&u(g),"function"==typeof d&&d(g);e.default=g.exports},833:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},976:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/intro-to-siuba/assets/static/01-minimal-tags_12_0.794a8e9.0442e19e1b5767e839983de0e6345145.png",size:{width:573,height:430},sizes:"(max-width: 573px) 100vw, 573px",srcset:["/intro-to-siuba/assets/static/01-minimal-tags_12_0.794a8e9.0442e19e1b5767e839983de0e6345145.png 573w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 573 430' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-1256666babcbbeb156b967a572871d68'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-1256666babcbbeb156b967a572871d68)' width='573' height='430' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAGMElEQVRo3t2aV0s1PRCA/fP%2bAC%2b98UZeBPVCVERREawoKPbee%2b%2b95eMJzGEcky2nvN8570LI7uxsMplMz9Y5c31/fxf6LO3r66vQf35%2b/oBVaxP6uOpiDPj4%2bHBXV1fu5ubGXV9f%2b3vdNOzy8tLd3t6619dXfx/D0zDGTRpTWpb5NW4IL4TLZqUy4Pz83CNfXFz4e2k8C%2bzs7MzjbGxsuKGhIT8ZsBCuhsEoDaPFYPZ7GcPCoCOEF8JlfakM4EPNAN1rYln01taWGxkZ8fcaVy9Aw4RYIVDG1M%2byKJnL4toFCq0aFsP9wQCr9zEJiA0qeE9PT78mysqAGK5lQNKiYrSG7n9JgCxcrjwMsAsolQFJElARBsjiMQzv7%2b%2b%2bp1kVSNOrrDqY1wZkxc1Da5ABDw8PbmJiws3MzLjT01M/Sciy5rXCMS%2bQ5jFk/op7AWEA/vHx8dE9Pz97fYZzfCyiqXvhtuwQTXCliQTZ74Uw%2b73g6u%2bF%2bBCuhmlaNSx2/8sNWhsAQl6xyqMCIdysKhBToZJVoBQvoHdbE1cTRjBrIJTEABo6eHh46Ju8rxk3mDcShACJ%2bOgxmtiO/v5%2bNzAw4A0q8FAkV3UqkBQJaiOoozAaBpP%2b/v6%2bYIG1obGGR8Ns1KZdroXZ70NRo9AawgvhZmKAtuzWC7Dgrq4ud3Jy4nd8eXnZM8ISWDNeIK8KAB8dHfUMmJqacsfHx54BOhGqGS%2bQlgzZDEwGRc/pUYXe3l53cHDww7jVXCgccoOIFQsNESC7zTOZIFJgia0JL6AXLj05AZOwqL6%2bvsQUkx4mYReKzQbLmQ5nYVaBAToC1PeExQyIT29vb0/VKymMVCIZqnhBhN17eXnxbXFx0a2trRXEHyPX09NTkWSoakpi4%2bPjPoB5e3tz%2b/v77ujoqODSGFSMXVoyJBleLBnSu1pVbpBa3vz8/A9vgAqIWGV1bVqEbV1QAiaKp3d3dyXVA8rqBq0NkJJxnlyAxbKwlpYWt7m56dbX111bW5tbWFjwPan17u6ujxemp6fd3Nzcj9phVSRD1gsUkw1iL2AGDTUiP6Bnx1dWVlxzc7NrbW31ESTqot1o1bnBYhiAFITCXhkHW4Ia0NdkNpjGAHaUuEHrnD1DkF23EePfYkCuUFistbXOumYnhKDnjY2NrqGhoVAeD1l2gVmLHcMNzR/DtV4oRKu0TMlQloMRDROdtxKge6kR/HMVIYkZLJwdlCyRsTCI2jb8UzbA6jXPuD9K7Sx8e3vb32tGITV6zFIYIOpSUjZYTBwQYwAEcWhKqkzKvLq66u%2b1FBB%2b4z1KUQHdE8nGjHCuo7G8ZfFQkQOxZ7dZIN5BqwM90Wd9fb0bGxvzTBEvYT2DTr1jkSDzwGCCMebTMUaukyFEFkPGzqTVBC3M1uQgAo/Q3d3tq0eMLydOEMluERTNzs76BSAlUnuwuYTNCUL1Q42TVhMMngwxANngzs5OQSzpbTYVy7Bi2ZgucOrvYQ4q0tHR4Wmg7jA4OOiry7p2CA3QhBTJHGX/QcKqALbgbxyOsihKaagEVSWtDoKPZMAkcgl5V9Z6QKknQ7GydtaKkOg4CxUbISokY2pjqDPHrG5QxhNYxY7GiimJ6W%2bESLETduEhdxdigI1NxPBKFlq2X2TKwQANlx7VIHW2DOD5z58/3ibY33HEYGsYGSjGFuPa2dnpU3SYUvLRWNZafzHnAvR7e3u%2bFmkZwLf8jxSyA%2bBJYCVNcGEOdQi8HHi5T4ayJi5Z8NJOhoRBkjbbMaROqKNHjKPEARJoaTUSHPkuswTIB1l2VUQyDVerQFJJjN0M2YBQVVgWjOok/dIncLxcIgNAIBgSf809/pkmFWR7DwEabt/Lsxym8mNlEi7vmZ%2bdE9wQnjQJrWP0yTPehjGDDLA/TfG/EAtLuxA1IjoJMJIukqKlpaVfv%2bSG6CBcptSWdrG4yclJrzZpF1ICrYwflADNADn3T/p/mAvO6kJDEq5EbDHm6/nl/8O0MTnJQsSRlDRcxoMGpLwuxiW7I6EdKhUXQiiWIhFUkpEiy4RKzp%2bqApZzMTHNgqvfiQHCOA0PD/swt6mpyYulfl/O%2bWO4de5/ujSBiLoYqLQdLPf1H0roh6CRDNBBAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}}}]);