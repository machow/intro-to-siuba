(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1001:function(t,s,a){"use strict";a.r(s);var n=a(9),e=a(983),d=a.n(e),o=a(833),r=a(7);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var p={slides:d.a,VueRemarkRoot:o.a},l=function(t){var s=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===i(p[t])&&"function"==typeof p[t].render?s[t]=p[t]:a[t]=function(){return p[t]}}))},c=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",h={excerpt:null,title:"Filter",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"basics"};var _=function(t){t.options[u]&&(t.options[u]=h),r.a.util.defineReactive(t.options,u,h),t.options.computed=c.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("VueRemarkRoot",[a("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("h1",{attrs:{id:"filter"}},[a("a",{attrs:{href:"#filter","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Filter")]),a("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"}]},[a("code-cell",{attrs:{status:s.status,onExecute:s.execute,onReady:s.updateSetupCode,language:"python"}},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\nimport pandas as pd\nfrom siuba import arrange, select, mutate, filter, _\nfrom plotnine import ggplot, geom_point, coord_flip, aes, labs\n\n# temporary until I figure out where to put data\ncols_to_drop = ["track_id", ""]\nurl = "https://siublocks.s3.us-east-2.amazonaws.com/music_top200.csv"\nmusic_top200 = pd.read_csv(url)[["country", "country_code", "position", "track_name", "artist", "streams", "duration_ms"]]\n\n# tracks\ntrack_features = pd.read_csv("/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/track_features.csv")\n\n# TODO: shift into a package or file\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# when you see a Shout object, call the shout_html function on it\nhtml_formatter.for_type(pd.DataFrame, lambda df: df.to_html(max_rows = pd.get_option("display.max_rows")))')])])])],1),a("RevealSlides",{attrs:{slides:t.slides}}),t._v("\n### Exercise 1: \n"),a("ul",[a("li",[t._v("replace name in filter, who is the top artist? How many streams do they have?")])]),a("code-cell",{attrs:{status:s.status,onExecute:s.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("country_code")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("streams")]),a("th",[t._v("duration_ms")])])]),a("tbody",[a("tr",[a("th",[t._v("7817")]),a("td",[t._v("Mexico")]),a("td",[t._v("mx")]),a("td",[t._v("1")]),a("td",[t._v("Safaera")]),a("td",[t._v("Bad Bunny")]),a("td",[t._v("7948565")]),a("td",[t._v("295177.0")])]),a("tr",[a("th",[t._v("7818")]),a("td",[t._v("Mexico")]),a("td",[t._v("mx")]),a("td",[t._v("2")]),a("td",[t._v("Si Veo a Tu Mamá")]),a("td",[t._v("Bad Bunny")]),a("td",[t._v("7535381")]),a("td",[t._v("170972.0")])]),a("tr",[a("th",[t._v("7819")]),a("td",[t._v("Mexico")]),a("td",[t._v("mx")]),a("td",[t._v("3")]),a("td",[t._v("La Difícil")]),a("td",[t._v("Bad Bunny")]),a("td",[t._v("5459673")]),a("td",[t._v("163084.0")])]),a("tr",[a("th",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),a("tr",[a("th",[t._v("8014")]),a("td",[t._v("Mexico")]),a("td",[t._v("mx")]),a("td",[t._v("198")]),a("td",[t._v("Vete Ya")]),a("td",[t._v("Valentín Elizalde")]),a("td",[t._v("559399")]),a("td",[t._v("157760.0")])]),a("tr",[a("th",[t._v("8015")]),a("td",[t._v("Mexico")]),a("td",[t._v("mx")]),a("td",[t._v("199")]),a("td",[t._v("El Mundo a Tus Pies")]),a("td",[t._v("Grupo Firme")]),a("td",[t._v("559065")]),a("td",[t._v("176227.0")])]),a("tr",[a("th",[t._v("8016")]),a("td",[t._v("Mexico")]),a("td",[t._v("mx")]),a("td",[t._v("200")]),a("td",[t._v("Verte Ir")]),a("td",[t._v("DJ Luian")]),a("td",[t._v("558925")]),a("td",[t._v("267500.0")])])])])]},proxy:!0}],null,!0)},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v('(music_top200\n  >> filter(_.country == "Mexico")\n)')])])]),a("h3",{attrs:{id:"exercise-2"}},[a("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Exercise 2:")]),a("ul",[a("li",[t._v("Filter to keep songs in the 5th "),a("code",{pre:!0},[t._v("position")]),t._v(".")])]),a("code-cell",{attrs:{status:s.status,onExecute:s.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("p",[t._v("⚠️: "),a("b",[t._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> filter(___)\n)")])])]),a("p",[t._v("TODO: MCQ - Which artist does it say is 5th in the UK?")]),a("h3",{attrs:{id:"exercise-3"}},[a("a",{attrs:{href:"#exercise-3","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Exercise 3:")]),a("ul",[a("li",[t._v("What are the top 5 songs in the United States?")])]),a("code-cell",{attrs:{status:s.status,onExecute:s.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("p",[t._v("⚠️: "),a("b",[t._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> filter(___, ___)\n)")])])]),a("h3",{attrs:{id:"exercise-4-looking-at-the-weeknds-streams"}},[a("a",{attrs:{href:"#exercise-4-looking-at-the-weeknds-streams","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Exercise 4: looking at The Weeknd's streams")]),a("p",[t._v("How many times has The Weeknd had over 1,000,000 streams?")]),a("details",[a("summary",[t._v("Hint:")]),t._v("\n    Do in steps. Run first to get all rows where the artist is The Weeknd, and then modify your code to get where he has over 1,000,000 streams.\n")]),a("code-cell",{attrs:{status:s.status,onExecute:s.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v("()")])])]},proxy:!0}],null,!0)},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(\n\n)")])])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof l&&l(v),"function"==typeof _&&_(v);s.default=v.exports},833:function(t,s,a){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},834:function(t,s,a){"use strict";t.exports=function(t,s){return s||(s={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(s.hash&&(t+=s.hash),s.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},983:function(t,s,a){var n='<section><section> <div class="cell border-box-sizing code_cell rendered"> <div class=input> <div class=inner_cell> <div class=input_area> <div class="highlight hl-ipython3"><pre><span></span><span class=kn>import</span> <span class=nn>pandas</span> <span class=k>as</span> <span class=nn>pd</span>\n<span class=kn>from</span> <span class=nn>siuba</span> <span class=kn>import</span> <span class=n>arrange</span><span class=p>,</span> <span class=n>select</span><span class=p>,</span> <span class=n>mutate</span><span class=p>,</span> <span class=nb>filter</span><span class=p>,</span> <span class=n>_</span>\n<span class=kn>from</span> <span class=nn>plotnine</span> <span class=kn>import</span> <span class=n>ggplot</span><span class=p>,</span> <span class=n>geom_point</span><span class=p>,</span> <span class=n>coord_flip</span><span class=p>,</span> <span class=n>aes</span><span class=p>,</span> <span class=n>labs</span>\n\n\n<span class=n>to_keep</span> <span class=o>=</span> <span class=p>[</span><span class=s2>&quot;country&quot;</span><span class=p>,</span> <span class=s2>&quot;continent&quot;</span><span class=p>,</span> <span class=s2>&quot;position&quot;</span><span class=p>,</span> <span class=s2>&quot;artist&quot;</span><span class=p>,</span> <span class=s2>&quot;track_name&quot;</span><span class=p>,</span> <span class=s2>&quot;streams&quot;</span><span class=p>]</span>\n<span class=n>fname</span> <span class=o>=</span> <span class=s2>&quot;/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/music_top200.csv&quot;</span>\n<span class=n>music_top200</span> <span class=o>=</span> <span class=n>pd</span><span class=o>.</span><span class=n>read_csv</span><span class=p>(</span><span class=n>fname</span><span class=p>)[</span><span class=n>to_keep</span><span class=p>]</span>\n\n<span class=n>pd</span><span class=o>.</span><span class=n>set_option</span><span class=p>(</span><span class=s2>&quot;display.max_rows&quot;</span><span class=p>,</span> <span class=mi>6</span><span class=p>)</span>\n</pre></div> </div> </div> </div> </div></section></section><section><section> <div class="cell border-box-sizing text_cell rendered"><div class=inner_cell> <div class="text_cell_render border-box-sizing rendered_html"> <h1 id=The-filter-verb>The filter verb<a class=anchor-link href=#The-filter-verb>&#182;</a></h1><p><img src='+a(834)(a(984))+' alt=""></p> </div> </div> </div></section></section><section><section> <div class="cell border-box-sizing text_cell rendered"><div class=inner_cell> <div class="text_cell_render border-box-sizing rendered_html"> <h2 id=Filter-for-top-songs>Filter for top songs<a class=anchor-link href=#Filter-for-top-songs>&#182;</a></h2> </div> </div> </div> <div class="cell border-box-sizing code_cell rendered"> <div class=input> <div class=inner_cell> <div class=input_area> <div class="highlight hl-ipython3"><pre><span></span><span class=p>(</span><span class=n>music_top200</span>\n  <span class=o>&gt;&gt;</span> <span class=nb>filter</span><span class=p>(</span><span class=n>_</span><span class=o>.</span><span class=n>position</span> <span class=o>==</span> <span class=mi>1</span><span class=p>)</span>\n<span class=p>)</span>\n</pre></div> </div> </div> </div> <div class=output_wrapper> <div class=output> <div class=output_area> <div class="output_html rendered_html output_subarea output_execute_result"> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe tbody tr th{vertical-align:top}.dataframe thead th{text-align:right}</style> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>continent</th> <th>position</th> <th>artist</th> <th>track_name</th> <th>streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Argentina</td> <td>Americas</td> <td>1</td> <td>KAROL G</td> <td>Tusa</td> <td>1858666</td> </tr> <tr> <th>200</th> <td>Austria</td> <td>Europe</td> <td>1</td> <td>The Weeknd</td> <td>Blinding Lights</td> <td>229576</td> </tr> <tr> <th>400</th> <td>Australia</td> <td>Oceania</td> <td>1</td> <td>The Weeknd</td> <td>Blinding Lights</td> <td>1757343</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>11800</th> <td>Uruguay</td> <td>Americas</td> <td>1</td> <td>KAROL G</td> <td>Tusa</td> <td>120175</td> </tr> <tr> <th>12000</th> <td>Viet Nam</td> <td>Asia</td> <td>1</td> <td>V</td> <td>Sweet Night</td> <td>189261</td> </tr> <tr> <th>12200</th> <td>South Africa</td> <td>Africa</td> <td>1</td> <td>Roddy Ricch</td> <td>The Box</td> <td>94422</td> </tr> </tbody> </table> <p>62 rows × 6 columns</p> </div> </div> </div> </div> </div> </div></section></section><section><section> <div class="cell border-box-sizing text_cell rendered"><div class=inner_cell> <div class="text_cell_render border-box-sizing rendered_html"> <h2 id=Filter-for-country>Filter for country<a class=anchor-link href=#Filter-for-country>&#182;</a></h2> </div> </div> </div> <div class="cell border-box-sizing code_cell rendered"> <div class=input> <div class=inner_cell> <div class=input_area> <div class="highlight hl-ipython3"><pre><span></span><span class=p>(</span><span class=n>music_top200</span>\n  <span class=o>&gt;&gt;</span> <span class=nb>filter</span><span class=p>(</span><span class=n>_</span><span class=o>.</span><span class=n>country</span> <span class=o>==</span> <span class=s2>&quot;Hong Kong&quot;</span><span class=p>)</span>\n<span class=p>)</span>\n</pre></div> </div> </div> </div> <div class=output_wrapper> <div class=output> <div class=output_area> <div class="output_html rendered_html output_subarea output_execute_result"> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe tbody tr th{vertical-align:top}.dataframe thead th{text-align:right}</style> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>continent</th> <th>position</th> <th>artist</th> <th>track_name</th> <th>streams</th> </tr> </thead> <tbody> <tr> <th>4800</th> <td>Hong Kong</td> <td>Asia</td> <td>1</td> <td>ITZY</td> <td>WANNABE</td> <td>112648</td> </tr> <tr> <th>4801</th> <td>Hong Kong</td> <td>Asia</td> <td>2</td> <td>Justin Bieber</td> <td>Intentions (feat. Quavo)</td> <td>104467</td> </tr> <tr> <th>4802</th> <td>Hong Kong</td> <td>Asia</td> <td>3</td> <td>Shawn Mendes</td> <td>Señorita</td> <td>84196</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>4997</th> <td>Hong Kong</td> <td>Asia</td> <td>198</td> <td>高爾宣 OSN</td> <td>Without You</td> <td>19956</td> </tr> <tr> <th>4998</th> <td>Hong Kong</td> <td>Asia</td> <td>199</td> <td>Charlie Puth</td> <td>Attention</td> <td>19872</td> </tr> <tr> <th>4999</th> <td>Hong Kong</td> <td>Asia</td> <td>200</td> <td>Taylor Swift</td> <td>The Man</td> <td>19868</td> </tr> </tbody> </table> <p>200 rows × 6 columns</p> </div> </div> </div> </div> </div> </div></section></section><section><section> <div class="cell border-box-sizing text_cell rendered"><div class=inner_cell> <div class="text_cell_render border-box-sizing rendered_html"> <h2 id=Filter-with-two-variables>Filter with two variables<a class=anchor-link href=#Filter-with-two-variables>&#182;</a></h2> </div> </div> </div> <div class="cell border-box-sizing code_cell rendered"> <div class=input> <div class=inner_cell> <div class=input_area> <div class="highlight hl-ipython3"><pre><span></span><span class=p>(</span><span class=n>music_top200</span>\n  <span class=o>&gt;&gt;</span> <span class=nb>filter</span><span class=p>(</span><span class=n>_</span><span class=o>.</span><span class=n>artist</span> <span class=o>==</span> <span class=s2>&quot;Roddy Ricch&quot;</span><span class=p>,</span> <span class=n>_</span><span class=o>.</span><span class=n>position</span> <span class=o>==</span> <span class=mi>3</span><span class=p>)</span>\n<span class=p>)</span>\n</pre></div> </div> </div> </div> <div class=output_wrapper> <div class=output> <div class=output_area> <div class="output_html rendered_html output_subarea output_execute_result"> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe tbody tr th{vertical-align:top}.dataframe thead th{text-align:right}</style> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>continent</th> <th>position</th> <th>artist</th> <th>track_name</th> <th>streams</th> </tr> </thead> <tbody> <tr> <th>4402</th> <td>United Kingdom</td> <td>Europe</td> <td>3</td> <td>Roddy Ricch</td> <td>The Box</td> <td>2711921</td> </tr> <tr> <th>4602</th> <td>Greece</td> <td>Europe</td> <td>3</td> <td>Roddy Ricch</td> <td>The Box</td> <td>139125</td> </tr> <tr> <th>5602</th> <td>Ireland</td> <td>Europe</td> <td>3</td> <td>Roddy Ricch</td> <td>The Box</td> <td>351836</td> </tr> <tr> <th>6802</th> <td>Lithuania</td> <td>Europe</td> <td>3</td> <td>Roddy Ricch</td> <td>The Box</td> <td>35134</td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div></section></section> ';t.exports=n},984:function(t,s,a){t.exports=a.p+"assets/img/model-filter.84c9d727.png"}}]);