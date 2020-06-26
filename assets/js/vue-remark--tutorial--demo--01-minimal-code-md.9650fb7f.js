(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1018:function(t,e,o){"use strict";o.r(e);var n=o(9),a=o(834),i=o(7);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var r={VueRemarkRoot:a.a},u=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===s(r[t])&&"function"==typeof r[t].render?e[t]=r[t]:o[t]=function(){return r[t]}}))},c=i.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",b={excerpt:null,description:"",sidebar:"docs",chunk:"test"};var l=function(t){t.options[p]&&(t.options[p]=b),i.a.util.defineReactive(t.options,p,b),t.options.computed=c.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},A=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("h1",{attrs:{id:"code-example"}},[n("a",{attrs:{href:"#code-example","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),t._v("Code Example")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[n("p",[n("g-image",{attrs:{src:o(982),alt:"png"}})],1),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<ggplot: (284667407)>")])])]},proxy:!0}],null,!0)},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",{pre:!0,attrs:{class:"language-text"}},[t._v('from plotnine import *\nfrom siuba.data import mtcars\n\nggplot(mtcars, aes("mpg", "hp")) + geom_point()')])])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof u&&u(A),"function"==typeof l&&l(A);e.default=A.exports},834:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},982:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/intro-to-siuba/assets/static/01-minimal-code_1_0.794a8e9.0442e19e1b5767e839983de0e6345145.png",size:{width:573,height:430},sizes:"(max-width: 573px) 100vw, 573px",srcset:["/intro-to-siuba/assets/static/01-minimal-code_1_0.794a8e9.0442e19e1b5767e839983de0e6345145.png 573w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 573 430' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-1256666babcbbeb156b967a572871d68'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-1256666babcbbeb156b967a572871d68)' width='573' height='430' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAGMElEQVRo3t2aV0s1PRCA/fP%2bAC%2b98UZeBPVCVERREawoKPbee%2b%2b95eMJzGEcky2nvN8570LI7uxsMplMz9Y5c31/fxf6LO3r66vQf35%2b/oBVaxP6uOpiDPj4%2bHBXV1fu5ubGXV9f%2b3vdNOzy8tLd3t6619dXfx/D0zDGTRpTWpb5NW4IL4TLZqUy4Pz83CNfXFz4e2k8C%2bzs7MzjbGxsuKGhIT8ZsBCuhsEoDaPFYPZ7GcPCoCOEF8JlfakM4EPNAN1rYln01taWGxkZ8fcaVy9Aw4RYIVDG1M%2byKJnL4toFCq0aFsP9wQCr9zEJiA0qeE9PT78mysqAGK5lQNKiYrSG7n9JgCxcrjwMsAsolQFJElARBsjiMQzv7%2b%2b%2bp1kVSNOrrDqY1wZkxc1Da5ABDw8PbmJiws3MzLjT01M/Sciy5rXCMS%2bQ5jFk/op7AWEA/vHx8dE9Pz97fYZzfCyiqXvhtuwQTXCliQTZ74Uw%2b73g6u%2bF%2bBCuhmlaNSx2/8sNWhsAQl6xyqMCIdysKhBToZJVoBQvoHdbE1cTRjBrIJTEABo6eHh46Ju8rxk3mDcShACJ%2bOgxmtiO/v5%2bNzAw4A0q8FAkV3UqkBQJaiOoozAaBpP%2b/v6%2bYIG1obGGR8Ns1KZdroXZ70NRo9AawgvhZmKAtuzWC7Dgrq4ud3Jy4nd8eXnZM8ISWDNeIK8KAB8dHfUMmJqacsfHx54BOhGqGS%2bQlgzZDEwGRc/pUYXe3l53cHDww7jVXCgccoOIFQsNESC7zTOZIFJgia0JL6AXLj05AZOwqL6%2bvsQUkx4mYReKzQbLmQ5nYVaBAToC1PeExQyIT29vb0/VKymMVCIZqnhBhN17eXnxbXFx0a2trRXEHyPX09NTkWSoakpi4%2bPjPoB5e3tz%2b/v77ujoqODSGFSMXVoyJBleLBnSu1pVbpBa3vz8/A9vgAqIWGV1bVqEbV1QAiaKp3d3dyXVA8rqBq0NkJJxnlyAxbKwlpYWt7m56dbX111bW5tbWFjwPan17u6ujxemp6fd3Nzcj9phVSRD1gsUkw1iL2AGDTUiP6Bnx1dWVlxzc7NrbW31ESTqot1o1bnBYhiAFITCXhkHW4Ia0NdkNpjGAHaUuEHrnD1DkF23EePfYkCuUFistbXOumYnhKDnjY2NrqGhoVAeD1l2gVmLHcMNzR/DtV4oRKu0TMlQloMRDROdtxKge6kR/HMVIYkZLJwdlCyRsTCI2jb8UzbA6jXPuD9K7Sx8e3vb32tGITV6zFIYIOpSUjZYTBwQYwAEcWhKqkzKvLq66u%2b1FBB%2b4z1KUQHdE8nGjHCuo7G8ZfFQkQOxZ7dZIN5BqwM90Wd9fb0bGxvzTBEvYT2DTr1jkSDzwGCCMebTMUaukyFEFkPGzqTVBC3M1uQgAo/Q3d3tq0eMLydOEMluERTNzs76BSAlUnuwuYTNCUL1Q42TVhMMngwxANngzs5OQSzpbTYVy7Bi2ZgucOrvYQ4q0tHR4Wmg7jA4OOiry7p2CA3QhBTJHGX/QcKqALbgbxyOsihKaagEVSWtDoKPZMAkcgl5V9Z6QKknQ7GydtaKkOg4CxUbISokY2pjqDPHrG5QxhNYxY7GiimJ6W%2bESLETduEhdxdigI1NxPBKFlq2X2TKwQANlx7VIHW2DOD5z58/3ibY33HEYGsYGSjGFuPa2dnpU3SYUvLRWNZafzHnAvR7e3u%2bFmkZwLf8jxSyA%2bBJYCVNcGEOdQi8HHi5T4ayJi5Z8NJOhoRBkjbbMaROqKNHjKPEARJoaTUSHPkuswTIB1l2VUQyDVerQFJJjN0M2YBQVVgWjOok/dIncLxcIgNAIBgSf809/pkmFWR7DwEabt/Lsxym8mNlEi7vmZ%2bdE9wQnjQJrWP0yTPehjGDDLA/TfG/EAtLuxA1IjoJMJIukqKlpaVfv%2bSG6CBcptSWdrG4yclJrzZpF1ICrYwflADNADn3T/p/mAvO6kJDEq5EbDHm6/nl/8O0MTnJQsSRlDRcxoMGpLwuxiW7I6EdKhUXQiiWIhFUkpEiy4RKzp%2bqApZzMTHNgqvfiQHCOA0PD/swt6mpyYulfl/O%2bWO4de5/ujSBiLoYqLQdLPf1H0roh6CRDNBBAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}}}]);