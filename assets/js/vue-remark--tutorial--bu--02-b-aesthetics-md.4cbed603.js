(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{833:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},993:function(t,e,a){"use strict";a.r(e);var d=a(9),o=a(833),_=a(7);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}_.a.config.optionMergeStrategies;var n={VueRemarkRoot:o.a},s=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(n).forEach((function(t){"object"===v(n[t])&&"function"==typeof n[t].render?e[t]=n[t]:a[t]=function(){return n[t]}}))},i=_.a.config.optionMergeStrategies,r="__vueRemarkFrontMatter",p={excerpt:null,title:"Aesthetics",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"data-viz"};var c=function(t){t.options[r]&&(t.options[r]=p),_.a.util.defineReactive(t.options,r,p),t.options.computed=i.computed({$frontmatter:function(){return t.options[r]}},t.options.computed)},l=Object(d.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("h1",{attrs:{id:"aesthetics"}},[a("a",{attrs:{href:"#aesthetics","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Aesthetics")]),a("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"}]},[a("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\nimport pandas as pd\nfrom siuba import arrange, select, mutate, filter, _\nfrom plotnine import ggplot, geom_point, coord_flip, aes, labs\n\n# temporary until I figure out where to put data\nurl = "https://siublocks.s3.us-east-2.amazonaws.com/music_top200.csv"\nmusic_top200 = pd.read_csv(url)\n\n\n# TODO: shift into a package or file\nfrom siuba import pipe\nfrom IPython.display import HTML, display\n___ = pipe(lambda x: display(HTML("⚠️: <b>Don\'t forget to replace all the blanks!</b>")) and _)\n\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# when you see a Shout object, call the shout_html function on it\nhtml_formatter.for_type(pd.DataFrame, lambda df: df.to_html(classes = "dataframe", max_rows = pd.get_option("display.max_rows")))')])])])],1),a("h2",{attrs:{id:"color"}},[a("a",{attrs:{href:"#color","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Color")]),a("p",[t._v("TODO: fill in explanation")]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("country_code")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("streams")]),a("th",[t._v("track_id")]),a("th",[t._v("danceability")]),a("th",[t._v("energy")]),a("th",[t._v("key")]),a("th",[t._v("loudness")]),a("th",[t._v("mode")]),a("th",[t._v("speechiness")]),a("th",[t._v("acousticness")]),a("th",[t._v("instrumentalness")]),a("th",[t._v("liveness")]),a("th",[t._v("valence")]),a("th",[t._v("tempo")]),a("th",[t._v("track_href")]),a("th",[t._v("analysis_url")]),a("th",[t._v("duration_ms")]),a("th",[t._v("time_signature")])])]),a("tbody",[a("tr",[a("th",[t._v("6617")]),a("td",[t._v("Italy")]),a("td",[t._v("it")]),a("td",[t._v("1")]),a("td",[t._v("Bando")]),a("td",[t._v("ANNA")]),a("td",[t._v("2228788")]),a("td",[t._v("0kzGjSRHGVcaWxagzQwAyD")]),a("td",[t._v("0.970")]),a("td",[t._v("0.739")]),a("td",[t._v("10.0")]),a("td",[t._v("-4.917")]),a("td",[t._v("0.0")]),a("td",[t._v("0.2950")]),a("td",[t._v("0.155000")]),a("td",[t._v("0.000000")]),a("td",[t._v("0.111")]),a("td",[t._v("0.414")]),a("td",[t._v("120.061")]),a("td",[t._v("https://api.spotify.com/v1/tracks/0kzGjSRHGVcaWxagzQwAyD")]),a("td",[t._v("https://api.spotify.com/v1/audio-analysis/0kzGjSRHGVcaWxagzQwAyD")]),a("td",[t._v("168000.0")]),a("td",[t._v("4.0")])]),a("tr",[a("th",[t._v("10817")]),a("td",[t._v("Slovakia")]),a("td",[t._v("sk")]),a("td",[t._v("1")]),a("td",[t._v("Viac")]),a("td",[t._v("Nerieš")]),a("td",[t._v("107047")]),a("td",[t._v("2eLTkjdcbBCTew9qvn6hzz")]),a("td",[t._v("0.915")]),a("td",[t._v("0.388")]),a("td",[t._v("6.0")]),a("td",[t._v("-5.587")]),a("td",[t._v("1.0")]),a("td",[t._v("0.0382")]),a("td",[t._v("0.058300")]),a("td",[t._v("0.000229")]),a("td",[t._v("0.106")]),a("td",[t._v("0.760")]),a("td",[t._v("110.004")]),a("td",[t._v("https://api.spotify.com/v1/tracks/2eLTkjdcbBCTew9qvn6hzz")]),a("td",[t._v("https://api.spotify.com/v1/audio-analysis/2eLTkjdcbBCTew9qvn6hzz")]),a("td",[t._v("212727.0")]),a("td",[t._v("4.0")])]),a("tr",[a("th",[t._v("1417")]),a("td",[t._v("Bolivia, Plurinational State of")]),a("td",[t._v("bo")]),a("td",[t._v("1")]),a("td",[t._v("Si Veo a Tu Mamá")]),a("td",[t._v("Bad Bunny")]),a("td",[t._v("148430")]),a("td",[t._v("41wtwzCZkXwpnakmwJ239F")]),a("td",[t._v("0.900")]),a("td",[t._v("0.603")]),a("td",[t._v("2.0")]),a("td",[t._v("-5.313")]),a("td",[t._v("1.0")]),a("td",[t._v("0.0646")]),a("td",[t._v("0.402000")]),a("td",[t._v("0.000005")]),a("td",[t._v("0.134")]),a("td",[t._v("0.824")]),a("td",[t._v("129.928")]),a("td",[t._v("https://api.spotify.com/v1/tracks/41wtwzCZkXwpnakmwJ239F")]),a("td",[t._v("https://api.spotify.com/v1/audio-analysis/41wtwzCZkXwpnakmwJ239F")]),a("td",[t._v("170972.0")]),a("td",[t._v("4.0")])]),a("tr",[a("th",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),a("tr",[a("th",[t._v("12016")]),a("td",[t._v("Uruguay")]),a("td",[t._v("uy")]),a("td",[t._v("200")]),a("td",[t._v("Creo")]),a("td",[t._v("Callejeros")]),a("td",[t._v("11300")]),a("td",[t._v("5Bi9Cq5oVFy1OtUgecbegZ")]),a("td",[t._v("0.382")]),a("td",[t._v("0.912")]),a("td",[t._v("2.0")]),a("td",[t._v("-2.898")]),a("td",[t._v("1.0")]),a("td",[t._v("0.0551")]),a("td",[t._v("0.001690")]),a("td",[t._v("0.000008")]),a("td",[t._v("0.233")]),a("td",[t._v("0.560")]),a("td",[t._v("187.941")]),a("td",[t._v("https://api.spotify.com/v1/tracks/5Bi9Cq5oVFy1OtUgecbegZ")]),a("td",[t._v("https://api.spotify.com/v1/audio-analysis/5Bi9Cq5oVFy1OtUgecbegZ")]),a("td",[t._v("289760.0")]),a("td",[t._v("4.0")])]),a("tr",[a("th",[t._v("7816")]),a("td",[t._v("Malta")]),a("td",[t._v("mt")]),a("td",[t._v("200")]),a("td",[t._v("Wonderwall - Remastered")]),a("td",[t._v("Oasis")]),a("td",[t._v("1976")]),a("td",[t._v("5qqabIl2vWzo9ApSC317sa")]),a("td",[t._v("0.378")]),a("td",[t._v("0.896")]),a("td",[t._v("2.0")]),a("td",[t._v("-4.066")]),a("td",[t._v("1.0")]),a("td",[t._v("0.0407")]),a("td",[t._v("0.000452")]),a("td",[t._v("0.000000")]),a("td",[t._v("0.194")]),a("td",[t._v("0.469")]),a("td",[t._v("174.302")]),a("td",[t._v("https://api.spotify.com/v1/tracks/5qqabIl2vWzo9ApSC317sa")]),a("td",[t._v("https://api.spotify.com/v1/audio-analysis/5qqabIl2vWzo9ApSC317sa")]),a("td",[t._v("258773.0")]),a("td",[t._v("4.0")])]),a("tr",[a("th",[t._v("6816")]),a("td",[t._v("Italy")]),a("td",[t._v("it")]),a("td",[t._v("200")]),a("td",[t._v("7 miliardi")]),a("td",[t._v("Massimo Pericolo")]),a("td",[t._v("240815")]),a("td",[t._v("67vjEOTkBppbVLUUq5mEJz")]),a("td",[t._v("0.307")]),a("td",[t._v("0.740")]),a("td",[t._v("1.0")]),a("td",[t._v("-4.089")]),a("td",[t._v("1.0")]),a("td",[t._v("0.1400")]),a("td",[t._v("0.032400")]),a("td",[t._v("0.000678")]),a("td",[t._v("0.486")]),a("td",[t._v("0.362")]),a("td",[t._v("142.920")]),a("td",[t._v("https://api.spotify.com/v1/tracks/67vjEOTkBppbVLUUq5mEJz")]),a("td",[t._v("https://api.spotify.com/v1/audio-analysis/67vjEOTkBppbVLUUq5mEJz")]),a("td",[t._v("167090.0")]),a("td",[t._v("3.0")])])])])]},proxy:!0}],null,!0)},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> arrange(_.position, -_.danceability)\n)")])])]),a("h2",{attrs:{id:"size"}},[a("a",{attrs:{href:"#size","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Size")]),a("p",[t._v("TODO: fill in explanation")]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("energy")])])]),a("tbody",[a("tr",[a("th",[t._v("0")]),a("td",[t._v("United States")]),a("td",[t._v("1")]),a("td",[t._v("The Box")]),a("td",[t._v("Roddy Ricch")]),a("td",[t._v("0.586")])]),a("tr",[a("th",[t._v("1")]),a("td",[t._v("United States")]),a("td",[t._v("2")]),a("td",[t._v("Myron")]),a("td",[t._v("Lil Uzi Vert")]),a("td",[t._v("0.655")])]),a("tr",[a("th",[t._v("2")]),a("td",[t._v("United States")]),a("td",[t._v("3")]),a("td",[t._v("Blueberry Faygo")]),a("td",[t._v("Lil Mosey")]),a("td",[t._v("0.554")])]),a("tr",[a("th",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),a("tr",[a("th",[t._v("12414")]),a("td",[t._v("South Africa")]),a("td",[t._v("198")]),a("td",[t._v("Black And White")]),a("td",[t._v("Niall Horan")]),a("td",[t._v("0.582")])]),a("tr",[a("th",[t._v("12415")]),a("td",[t._v("South Africa")]),a("td",[t._v("199")]),a("td",[t._v("When I See U")]),a("td",[t._v("Fantasia")]),a("td",[t._v("0.596")])]),a("tr",[a("th",[t._v("12416")]),a("td",[t._v("South Africa")]),a("td",[t._v("200")]),a("td",[t._v("Psycho!")]),a("td",[t._v("MASE")]),a("td",[t._v("0.365")])])])])]},proxy:!0}],null,!0)},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> select(_.country, _.position, _.track_name, _.artist, _.energy)\n)")])])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof s&&s(l),"function"==typeof c&&c(l);e.default=l.exports}}]);