(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1007:function(t,a,v){"use strict";v.r(a);var _=v(9),d=v(834),e=v(7);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a.config.optionMergeStrategies;var o={VueRemarkRoot:d.a},n=function(t){var a=t.options.components=t.options.components||{},v=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===s(o[t])&&"function"==typeof o[t].render?a[t]=o[t]:v[t]=function(){return o[t]}}))},i=e.a.config.optionMergeStrategies,r="__vueRemarkFrontMatter",p={excerpt:null,title:"Facets",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"data-viz"};var c=function(t){t.options[r]&&(t.options[r]=p),e.a.util.defineReactive(t.options,r,p),t.options.computed=i.computed({$frontmatter:function(){return t.options[r]}},t.options.computed)},u=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("VueRemarkRoot",[v("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1"},scopedSlots:t._u([{key:"default",fn:function(a){return[v("h1",{attrs:{id:"facets"}},[v("a",{attrs:{href:"#facets","aria-hidden":"true"}},[v("span",{staticClass:"fa fa-link"})]),t._v("Facets")]),v("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"}]},[v("code-cell",{attrs:{status:a.status,onExecute:a.execute,onReady:a.updateSetupCode,language:"python"}},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\nimport pandas as pd\nfrom siuba import arrange, select, mutate, filter, _\nfrom plotnine import ggplot, geom_point, coord_flip, aes, labs\n\n# temporary until I figure out where to put data\nurl = "https://siublocks.s3.us-east-2.amazonaws.com/music_top200.csv"\nmusic_top200 = pd.read_csv(url)\n\n\n# TODO: shift into a package or file\nfrom siuba import pipe\nfrom IPython.display import HTML, display\n___ = pipe(lambda x: display(HTML("⚠️: <b>Don\'t forget to replace all the blanks!</b>")) and _)\n\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# when you see a Shout object, call the shout_html function on it\nhtml_formatter.for_type(pd.DataFrame, lambda df: df.to_html(classes = "dataframe", max_rows = pd.get_option("display.max_rows")))')])])])],1),v("h2",{attrs:{id:"wrapping"}},[v("a",{attrs:{href:"#wrapping","aria-hidden":"true"}},[v("span",{staticClass:"fa fa-link"})]),t._v("Wrapping")]),v("p",[t._v("TODO: fill in explanation")]),v("code-cell",{attrs:{status:a.status,onExecute:a.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[v("table",{staticClass:"dataframe dataframe",attrs:{border:"1"}},[v("thead",[v("tr",{staticStyle:{"text-align":"right"}},[v("th"),v("th",[t._v("country")]),v("th",[t._v("country_code")]),v("th",[t._v("position")]),v("th",[t._v("track_name")]),v("th",[t._v("artist")]),v("th",[t._v("streams")]),v("th",[t._v("track_id")]),v("th",[t._v("danceability")]),v("th",[t._v("energy")]),v("th",[t._v("key")]),v("th",[t._v("loudness")]),v("th",[t._v("mode")]),v("th",[t._v("speechiness")]),v("th",[t._v("acousticness")]),v("th",[t._v("instrumentalness")]),v("th",[t._v("liveness")]),v("th",[t._v("valence")]),v("th",[t._v("tempo")]),v("th",[t._v("track_href")]),v("th",[t._v("analysis_url")]),v("th",[t._v("duration_ms")]),v("th",[t._v("time_signature")])])]),v("tbody",[v("tr",[v("th",[t._v("6617")]),v("td",[t._v("Italy")]),v("td",[t._v("it")]),v("td",[t._v("1")]),v("td",[t._v("Bando")]),v("td",[t._v("ANNA")]),v("td",[t._v("2228788")]),v("td",[t._v("0kzGjSRHGVcaWxagzQwAyD")]),v("td",[t._v("0.970")]),v("td",[t._v("0.739")]),v("td",[t._v("10.0")]),v("td",[t._v("-4.917")]),v("td",[t._v("0.0")]),v("td",[t._v("0.2950")]),v("td",[t._v("0.155000")]),v("td",[t._v("0.000000")]),v("td",[t._v("0.111")]),v("td",[t._v("0.414")]),v("td",[t._v("120.061")]),v("td",[t._v("https://api.spotify.com/v1/tracks/0kzGjSRHGVcaWxagzQwAyD")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/0kzGjSRHGVcaWxagzQwAyD")]),v("td",[t._v("168000.0")]),v("td",[t._v("4.0")])]),v("tr",[v("th",[t._v("10817")]),v("td",[t._v("Slovakia")]),v("td",[t._v("sk")]),v("td",[t._v("1")]),v("td",[t._v("Viac")]),v("td",[t._v("Nerieš")]),v("td",[t._v("107047")]),v("td",[t._v("2eLTkjdcbBCTew9qvn6hzz")]),v("td",[t._v("0.915")]),v("td",[t._v("0.388")]),v("td",[t._v("6.0")]),v("td",[t._v("-5.587")]),v("td",[t._v("1.0")]),v("td",[t._v("0.0382")]),v("td",[t._v("0.058300")]),v("td",[t._v("0.000229")]),v("td",[t._v("0.106")]),v("td",[t._v("0.760")]),v("td",[t._v("110.004")]),v("td",[t._v("https://api.spotify.com/v1/tracks/2eLTkjdcbBCTew9qvn6hzz")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/2eLTkjdcbBCTew9qvn6hzz")]),v("td",[t._v("212727.0")]),v("td",[t._v("4.0")])]),v("tr",[v("th",[t._v("1417")]),v("td",[t._v("Bolivia, Plurinational State of")]),v("td",[t._v("bo")]),v("td",[t._v("1")]),v("td",[t._v("Si Veo a Tu Mamá")]),v("td",[t._v("Bad Bunny")]),v("td",[t._v("148430")]),v("td",[t._v("41wtwzCZkXwpnakmwJ239F")]),v("td",[t._v("0.900")]),v("td",[t._v("0.603")]),v("td",[t._v("2.0")]),v("td",[t._v("-5.313")]),v("td",[t._v("1.0")]),v("td",[t._v("0.0646")]),v("td",[t._v("0.402000")]),v("td",[t._v("0.000005")]),v("td",[t._v("0.134")]),v("td",[t._v("0.824")]),v("td",[t._v("129.928")]),v("td",[t._v("https://api.spotify.com/v1/tracks/41wtwzCZkXwpnakmwJ239F")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/41wtwzCZkXwpnakmwJ239F")]),v("td",[t._v("170972.0")]),v("td",[t._v("4.0")])]),v("tr",[v("th",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")])]),v("tr",[v("th",[t._v("12016")]),v("td",[t._v("Uruguay")]),v("td",[t._v("uy")]),v("td",[t._v("200")]),v("td",[t._v("Creo")]),v("td",[t._v("Callejeros")]),v("td",[t._v("11300")]),v("td",[t._v("5Bi9Cq5oVFy1OtUgecbegZ")]),v("td",[t._v("0.382")]),v("td",[t._v("0.912")]),v("td",[t._v("2.0")]),v("td",[t._v("-2.898")]),v("td",[t._v("1.0")]),v("td",[t._v("0.0551")]),v("td",[t._v("0.001690")]),v("td",[t._v("0.000008")]),v("td",[t._v("0.233")]),v("td",[t._v("0.560")]),v("td",[t._v("187.941")]),v("td",[t._v("https://api.spotify.com/v1/tracks/5Bi9Cq5oVFy1OtUgecbegZ")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/5Bi9Cq5oVFy1OtUgecbegZ")]),v("td",[t._v("289760.0")]),v("td",[t._v("4.0")])]),v("tr",[v("th",[t._v("7816")]),v("td",[t._v("Malta")]),v("td",[t._v("mt")]),v("td",[t._v("200")]),v("td",[t._v("Wonderwall - Remastered")]),v("td",[t._v("Oasis")]),v("td",[t._v("1976")]),v("td",[t._v("5qqabIl2vWzo9ApSC317sa")]),v("td",[t._v("0.378")]),v("td",[t._v("0.896")]),v("td",[t._v("2.0")]),v("td",[t._v("-4.066")]),v("td",[t._v("1.0")]),v("td",[t._v("0.0407")]),v("td",[t._v("0.000452")]),v("td",[t._v("0.000000")]),v("td",[t._v("0.194")]),v("td",[t._v("0.469")]),v("td",[t._v("174.302")]),v("td",[t._v("https://api.spotify.com/v1/tracks/5qqabIl2vWzo9ApSC317sa")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/5qqabIl2vWzo9ApSC317sa")]),v("td",[t._v("258773.0")]),v("td",[t._v("4.0")])]),v("tr",[v("th",[t._v("6816")]),v("td",[t._v("Italy")]),v("td",[t._v("it")]),v("td",[t._v("200")]),v("td",[t._v("7 miliardi")]),v("td",[t._v("Massimo Pericolo")]),v("td",[t._v("240815")]),v("td",[t._v("67vjEOTkBppbVLUUq5mEJz")]),v("td",[t._v("0.307")]),v("td",[t._v("0.740")]),v("td",[t._v("1.0")]),v("td",[t._v("-4.089")]),v("td",[t._v("1.0")]),v("td",[t._v("0.1400")]),v("td",[t._v("0.032400")]),v("td",[t._v("0.000678")]),v("td",[t._v("0.486")]),v("td",[t._v("0.362")]),v("td",[t._v("142.920")]),v("td",[t._v("https://api.spotify.com/v1/tracks/67vjEOTkBppbVLUUq5mEJz")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/67vjEOTkBppbVLUUq5mEJz")]),v("td",[t._v("167090.0")]),v("td",[t._v("3.0")])])])])]},proxy:!0}],null,!0)},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> arrange(_.position, -_.danceability)\n)")])])]),v("h3",{attrs:{id:"exercise-1"}},[v("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[v("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),v("p",[t._v("Below is code with the arrange verb removed. Modify it to arrange by artist name and popularity.")]),v("code-cell",{attrs:{status:a.status,onExecute:a.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[v("p",[t._v("⚠️: "),v("b",[t._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> ___\n)")])])]),v("h3",{attrs:{id:"exercise-2"}},[v("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[v("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),v("p",[t._v("Modify the code below to arrange by artist name in "),v("strong",[t._v("descending")]),t._v(" order.")]),v("code-cell",{attrs:{status:a.status,onExecute:a.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[v("table",{staticClass:"dataframe dataframe",attrs:{border:"1"}},[v("thead",[v("tr",{staticStyle:{"text-align":"right"}},[v("th"),v("th",[t._v("country")]),v("th",[t._v("country_code")]),v("th",[t._v("position")]),v("th",[t._v("track_name")]),v("th",[t._v("artist")]),v("th",[t._v("streams")]),v("th",[t._v("track_id")]),v("th",[t._v("danceability")]),v("th",[t._v("energy")]),v("th",[t._v("key")]),v("th",[t._v("loudness")]),v("th",[t._v("mode")]),v("th",[t._v("speechiness")]),v("th",[t._v("acousticness")]),v("th",[t._v("instrumentalness")]),v("th",[t._v("liveness")]),v("th",[t._v("valence")]),v("th",[t._v("tempo")]),v("th",[t._v("track_href")]),v("th",[t._v("analysis_url")]),v("th",[t._v("duration_ms")]),v("th",[t._v("time_signature")])])]),v("tbody",[v("tr",[v("th",[t._v("0")]),v("td",[t._v("United States")]),v("td",[t._v("us")]),v("td",[t._v("1")]),v("td",[t._v("The Box")]),v("td",[t._v("Roddy Ricch")]),v("td",[t._v("12987027")]),v("td",[t._v("0nbXyq5TXYPCO7pr3N8S4I")]),v("td",[t._v("0.896")]),v("td",[t._v("0.586")]),v("td",[t._v("10.0")]),v("td",[t._v("-6.687")]),v("td",[t._v("0.0")]),v("td",[t._v("0.0559")]),v("td",[t._v("0.1040")]),v("td",[t._v("0.00000")]),v("td",[t._v("0.790")]),v("td",[t._v("0.642")]),v("td",[t._v("116.971")]),v("td",[t._v("https://api.spotify.com/v1/tracks/0nbXyq5TXYPCO7pr3N8S4I")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/0nbXyq5TXYPCO7pr3N8S4I")]),v("td",[t._v("196653.0")]),v("td",[t._v("4.0")])]),v("tr",[v("th",[t._v("1")]),v("td",[t._v("United States")]),v("td",[t._v("us")]),v("td",[t._v("2")]),v("td",[t._v("Myron")]),v("td",[t._v("Lil Uzi Vert")]),v("td",[t._v("9163134")]),v("td",[t._v("56uXDJRCuoS7abX3SkzHKQ")]),v("td",[t._v("0.770")]),v("td",[t._v("0.655")]),v("td",[t._v("8.0")]),v("td",[t._v("-6.976")]),v("td",[t._v("0.0")]),v("td",[t._v("0.2960")]),v("td",[t._v("0.0537")]),v("td",[t._v("0.00000")]),v("td",[t._v("0.215")]),v("td",[t._v("0.584")]),v("td",[t._v("155.039")]),v("td",[t._v("https://api.spotify.com/v1/tracks/56uXDJRCuoS7abX3SkzHKQ")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/56uXDJRCuoS7abX3SkzHKQ")]),v("td",[t._v("224955.0")]),v("td",[t._v("4.0")])]),v("tr",[v("th",[t._v("2")]),v("td",[t._v("United States")]),v("td",[t._v("us")]),v("td",[t._v("3")]),v("td",[t._v("Blueberry Faygo")]),v("td",[t._v("Lil Mosey")]),v("td",[t._v("8043475")]),v("td",[t._v("22LAwLoDA5b4AaGSkg6bKW")]),v("td",[t._v("0.774")]),v("td",[t._v("0.554")]),v("td",[t._v("0.0")]),v("td",[t._v("-7.909")]),v("td",[t._v("1.0")]),v("td",[t._v("0.0383")]),v("td",[t._v("0.2070")]),v("td",[t._v("0.00000")]),v("td",[t._v("0.132")]),v("td",[t._v("0.349")]),v("td",[t._v("99.034")]),v("td",[t._v("https://api.spotify.com/v1/tracks/22LAwLoDA5b4AaGSkg6bKW")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/22LAwLoDA5b4AaGSkg6bKW")]),v("td",[t._v("162547.0")]),v("td",[t._v("4.0")])]),v("tr",[v("th",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")]),v("td",[t._v("...")])]),v("tr",[v("th",[t._v("12414")]),v("td",[t._v("South Africa")]),v("td",[t._v("za")]),v("td",[t._v("198")]),v("td",[t._v("Black And White")]),v("td",[t._v("Niall Horan")]),v("td",[t._v("11771")]),v("td",[t._v("7rpNuuoMbid56XkDsx2FjE")]),v("td",[t._v("0.443")]),v("td",[t._v("0.582")]),v("td",[t._v("2.0")]),v("td",[t._v("-6.020")]),v("td",[t._v("1.0")]),v("td",[t._v("0.0482")]),v("td",[t._v("0.0301")]),v("td",[t._v("0.00000")]),v("td",[t._v("0.127")]),v("td",[t._v("0.239")]),v("td",[t._v("147.589")]),v("td",[t._v("https://api.spotify.com/v1/tracks/7rpNuuoMbid56XkDsx2FjE")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/7rpNuuoMbid56XkDsx2FjE")]),v("td",[t._v("193090.0")]),v("td",[t._v("4.0")])]),v("tr",[v("th",[t._v("12415")]),v("td",[t._v("South Africa")]),v("td",[t._v("za")]),v("td",[t._v("199")]),v("td",[t._v("When I See U")]),v("td",[t._v("Fantasia")]),v("td",[t._v("11752")]),v("td",[t._v("4iuNZTcvT9diFySSzVsnVS")]),v("td",[t._v("0.569")]),v("td",[t._v("0.596")]),v("td",[t._v("8.0")]),v("td",[t._v("-6.486")]),v("td",[t._v("1.0")]),v("td",[t._v("0.1710")]),v("td",[t._v("0.4570")]),v("td",[t._v("0.00009")]),v("td",[t._v("0.205")]),v("td",[t._v("0.757")]),v("td",[t._v("93.134")]),v("td",[t._v("https://api.spotify.com/v1/tracks/4iuNZTcvT9diFySSzVsnVS")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/4iuNZTcvT9diFySSzVsnVS")]),v("td",[t._v("217347.0")]),v("td",[t._v("4.0")])]),v("tr",[v("th",[t._v("12416")]),v("td",[t._v("South Africa")]),v("td",[t._v("za")]),v("td",[t._v("200")]),v("td",[t._v("Psycho!")]),v("td",[t._v("MASE")]),v("td",[t._v("11743")]),v("td",[t._v("5LKkteRQ1wWv7XCIEA5F2q")]),v("td",[t._v("0.868")]),v("td",[t._v("0.365")]),v("td",[t._v("7.0")]),v("td",[t._v("-9.510")]),v("td",[t._v("1.0")]),v("td",[t._v("0.0383")]),v("td",[t._v("0.4330")]),v("td",[t._v("0.00000")]),v("td",[t._v("0.207")]),v("td",[t._v("0.471")]),v("td",[t._v("114.979")]),v("td",[t._v("https://api.spotify.com/v1/tracks/5LKkteRQ1wWv7XCIEA5F2q")]),v("td",[t._v("https://api.spotify.com/v1/audio-analysis/5LKkteRQ1wWv7XCIEA5F2q")]),v("td",[t._v("197217.0")]),v("td",[t._v("4.0")])])])])]},proxy:!0}],null,!0)},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n\n)")])])]),v("p",[t._v("What's the name of the *NSYNC song in the resulting data?")]),v("q-multiple-choice",[v("q-opt",{attrs:{text:"This I Promise You"}},[v("span",[t._v('"Great job!"')])]),v("q-opt",{attrs:{text:"I Want You Back"}},[v("span",[t._v('"Try again"')])]),v("q-opt",{attrs:{text:"Bye Bye Bye"}},[v("span",[t._v('"Try again"')])]),v("q-opt",{attrs:{text:"It's Gonna Be Me"}},[v("span",[t._v('"Try again"')])])],1),v("details",[v("summary",[t._v("solution")]),v("pre",{pre:!0,attrs:{class:"language-python"}},[v("code",{pre:!0,attrs:{class:"language-python"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("music_top200\n  "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" arrange"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("_"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("artist"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof n&&n(u),"function"==typeof c&&c(u);a.default=u.exports},834:function(t,a,v){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);