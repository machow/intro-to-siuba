(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1007:function(t,e,a){"use strict";a.r(e);var o=a(9),s=a(833),n=a(7);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a.config.optionMergeStrategies;var r={VueRemarkRoot:s.a},d=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===i(r[t])&&"function"==typeof r[t].render?e[t]=r[t]:a[t]=function(){return r[t]}}))},v=n.a.config.optionMergeStrategies,_="__vueRemarkFrontMatter",l={excerpt:null,title:"Meet the data",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"basics"};var c=function(t){t.options[_]&&(t.options[_]=l),n.a.util.defineReactive(t.options,_,l),t.options.computed=v.computed({$frontmatter:function(){return t.options[_]}},t.options.computed)},p=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("h1",{attrs:{id:"introduction-to-data-analysis-with-siuba-basics"}},[o("a",{attrs:{href:"#introduction-to-data-analysis-with-siuba-basics","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Introduction to Data Analysis with Siuba: Basics")]),o("p",[t._v("MC NOTE: below is some code that will be run every time we start / reset the kernel")]),o("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"}]},[o("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\nimport pandas as pd\nfrom siuba import arrange, select, mutate, filter, _\nfrom plotnine import ggplot, geom_point, coord_flip, aes, labs\n\n# temporary until I figure out where to put data\nurl = "https://siublocks.s3.us-east-2.amazonaws.com/music_top200.csv"\nmusic_top200 = pd.read_csv(url)\n\n\n# TODO: shift into a package or file\nfrom siuba import pipe\nfrom IPython.display import HTML, display\n___ = pipe(lambda x: display(HTML("⚠️: <b>Don\'t forget to replace all the blanks!<b>")) and _)\n\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# when you see a Shout object, call the shout_html function on it\nhtml_formatter.for_type(pd.DataFrame, lambda df: df.to_html(classes = "dataframe", max_rows = pd.get_option("display.max_rows")))')])])])],1),o("h2",{attrs:{id:"introduction-to-spotify-data"}},[o("a",{attrs:{href:"#introduction-to-spotify-data","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Introduction to Spotify data")]),o("p",[t._v("The data we'll use is held in a "),o("strong",[t._v("DataFrame")]),t._v(". A DataFrame is a big table of data, made up of rows and columns. In the example below, the "),o("strong",[t._v("variable")]),t._v(" called "),o("code",{pre:!0},[t._v("music_top200")]),t._v(" lets us refer to and work on the data.")]),o("p",[t._v("Notice that in the bottom-left of the table, it shows the number of rows and columns. This data has 12,417 rows and 22 columns.")]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("table",{staticClass:"dataframe dataframe",attrs:{border:"1"}},[o("thead",[o("tr",{staticStyle:{"text-align":"right"}},[o("th"),o("th",[t._v("country")]),o("th",[t._v("country_code")]),o("th",[t._v("position")]),o("th",[t._v("track_name")]),o("th",[t._v("artist")]),o("th",[t._v("streams")]),o("th",[t._v("track_id")]),o("th",[t._v("danceability")]),o("th",[t._v("energy")]),o("th",[t._v("key")]),o("th",[t._v("loudness")]),o("th",[t._v("mode")]),o("th",[t._v("speechiness")]),o("th",[t._v("acousticness")]),o("th",[t._v("instrumentalness")]),o("th",[t._v("liveness")]),o("th",[t._v("valence")]),o("th",[t._v("tempo")]),o("th",[t._v("track_href")]),o("th",[t._v("analysis_url")]),o("th",[t._v("duration_ms")]),o("th",[t._v("time_signature")])])]),o("tbody",[o("tr",[o("th",[t._v("0")]),o("td",[t._v("United States")]),o("td",[t._v("us")]),o("td",[t._v("1")]),o("td",[t._v("The Box")]),o("td",[t._v("Roddy Ricch")]),o("td",[t._v("12987027")]),o("td",[t._v("0nbXyq5TXYPCO7pr3N8S4I")]),o("td",[t._v("0.896")]),o("td",[t._v("0.586")]),o("td",[t._v("10.0")]),o("td",[t._v("-6.687")]),o("td",[t._v("0.0")]),o("td",[t._v("0.0559")]),o("td",[t._v("0.1040")]),o("td",[t._v("0.00000")]),o("td",[t._v("0.790")]),o("td",[t._v("0.642")]),o("td",[t._v("116.971")]),o("td",[t._v("https://api.spotify.com/v1/tracks/0nbXyq5TXYPCO7pr3N8S4I")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/0nbXyq5TXYPCO7pr3N8S4I")]),o("td",[t._v("196653.0")]),o("td",[t._v("4.0")])]),o("tr",[o("th",[t._v("1")]),o("td",[t._v("United States")]),o("td",[t._v("us")]),o("td",[t._v("2")]),o("td",[t._v("Myron")]),o("td",[t._v("Lil Uzi Vert")]),o("td",[t._v("9163134")]),o("td",[t._v("56uXDJRCuoS7abX3SkzHKQ")]),o("td",[t._v("0.770")]),o("td",[t._v("0.655")]),o("td",[t._v("8.0")]),o("td",[t._v("-6.976")]),o("td",[t._v("0.0")]),o("td",[t._v("0.2960")]),o("td",[t._v("0.0537")]),o("td",[t._v("0.00000")]),o("td",[t._v("0.215")]),o("td",[t._v("0.584")]),o("td",[t._v("155.039")]),o("td",[t._v("https://api.spotify.com/v1/tracks/56uXDJRCuoS7abX3SkzHKQ")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/56uXDJRCuoS7abX3SkzHKQ")]),o("td",[t._v("224955.0")]),o("td",[t._v("4.0")])]),o("tr",[o("th",[t._v("2")]),o("td",[t._v("United States")]),o("td",[t._v("us")]),o("td",[t._v("3")]),o("td",[t._v("Blueberry Faygo")]),o("td",[t._v("Lil Mosey")]),o("td",[t._v("8043475")]),o("td",[t._v("22LAwLoDA5b4AaGSkg6bKW")]),o("td",[t._v("0.774")]),o("td",[t._v("0.554")]),o("td",[t._v("0.0")]),o("td",[t._v("-7.909")]),o("td",[t._v("1.0")]),o("td",[t._v("0.0383")]),o("td",[t._v("0.2070")]),o("td",[t._v("0.00000")]),o("td",[t._v("0.132")]),o("td",[t._v("0.349")]),o("td",[t._v("99.034")]),o("td",[t._v("https://api.spotify.com/v1/tracks/22LAwLoDA5b4AaGSkg6bKW")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/22LAwLoDA5b4AaGSkg6bKW")]),o("td",[t._v("162547.0")]),o("td",[t._v("4.0")])]),o("tr",[o("th",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")])]),o("tr",[o("th",[t._v("12414")]),o("td",[t._v("South Africa")]),o("td",[t._v("za")]),o("td",[t._v("198")]),o("td",[t._v("Black And White")]),o("td",[t._v("Niall Horan")]),o("td",[t._v("11771")]),o("td",[t._v("7rpNuuoMbid56XkDsx2FjE")]),o("td",[t._v("0.443")]),o("td",[t._v("0.582")]),o("td",[t._v("2.0")]),o("td",[t._v("-6.020")]),o("td",[t._v("1.0")]),o("td",[t._v("0.0482")]),o("td",[t._v("0.0301")]),o("td",[t._v("0.00000")]),o("td",[t._v("0.127")]),o("td",[t._v("0.239")]),o("td",[t._v("147.589")]),o("td",[t._v("https://api.spotify.com/v1/tracks/7rpNuuoMbid56XkDsx2FjE")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/7rpNuuoMbid56XkDsx2FjE")]),o("td",[t._v("193090.0")]),o("td",[t._v("4.0")])]),o("tr",[o("th",[t._v("12415")]),o("td",[t._v("South Africa")]),o("td",[t._v("za")]),o("td",[t._v("199")]),o("td",[t._v("When I See U")]),o("td",[t._v("Fantasia")]),o("td",[t._v("11752")]),o("td",[t._v("4iuNZTcvT9diFySSzVsnVS")]),o("td",[t._v("0.569")]),o("td",[t._v("0.596")]),o("td",[t._v("8.0")]),o("td",[t._v("-6.486")]),o("td",[t._v("1.0")]),o("td",[t._v("0.1710")]),o("td",[t._v("0.4570")]),o("td",[t._v("0.00009")]),o("td",[t._v("0.205")]),o("td",[t._v("0.757")]),o("td",[t._v("93.134")]),o("td",[t._v("https://api.spotify.com/v1/tracks/4iuNZTcvT9diFySSzVsnVS")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/4iuNZTcvT9diFySSzVsnVS")]),o("td",[t._v("217347.0")]),o("td",[t._v("4.0")])]),o("tr",[o("th",[t._v("12416")]),o("td",[t._v("South Africa")]),o("td",[t._v("za")]),o("td",[t._v("200")]),o("td",[t._v("Psycho!")]),o("td",[t._v("MASE")]),o("td",[t._v("11743")]),o("td",[t._v("5LKkteRQ1wWv7XCIEA5F2q")]),o("td",[t._v("0.868")]),o("td",[t._v("0.365")]),o("td",[t._v("7.0")]),o("td",[t._v("-9.510")]),o("td",[t._v("1.0")]),o("td",[t._v("0.0383")]),o("td",[t._v("0.4330")]),o("td",[t._v("0.00000")]),o("td",[t._v("0.207")]),o("td",[t._v("0.471")]),o("td",[t._v("114.979")]),o("td",[t._v("https://api.spotify.com/v1/tracks/5LKkteRQ1wWv7XCIEA5F2q")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/5LKkteRQ1wWv7XCIEA5F2q")]),o("td",[t._v("197217.0")]),o("td",[t._v("4.0")])])])])]},proxy:!0}],null,!0)},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("#from IPython.display import HTML, display\nmusic_top200")])])]),o("blockquote",[o("p",[t._v("🔎 How many streams did the track named Blinding lights get this week?")]),o("p",[t._v("🔎 How many rows in the 12,417 row DataFrame are being shown above?")]),o("p",[t._v("🔎 What is the speechiness level of the track named Myron?")])]),o("details",[o("summary",[t._v("show answers")]),o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("* Blinding lights was streamed 7744570 times.\n* 10 rows are being shown from the DataFrame\n* The track named Myron has a speechiness of 0.29")])])]),o("h2",{attrs:{id:"what-youll-learn-to-do"}},[o("a",{attrs:{href:"#what-youll-learn-to-do","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("What you'll learn to do")]),o("p",[t._v("In this tutorial you will learn about..")]),o("ul",[o("li",[t._v("data that is represented in table called a DataFrame.")]),o("li",[t._v("how to arrange rows and select columns.")]),o("li",[t._v("how to create new columns and cut out specific rows.")])]),o("p",[t._v("The next two examples show what you'll be able to do by the end of this chapter.\nIt's okay if the code doesn't make sense yet.\nJust being able to run someone else's code goes a long way!")]),o("h3",{attrs:{id:"big-example-1-finding-high-energy-hits"}},[o("a",{attrs:{href:"#big-example-1-finding-high-energy-hits","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Big example 1: finding high energy hits")]),o("p",[t._v("Run the code below. It should do the following:")]),o("ul",[o("li",[o("strong",[t._v("arrange")]),t._v(" the rows--first by position (lowest first), and second by energy (highest first).")]),o("li",[o("strong",[t._v("select")]),t._v(" specific columns, such as country, position, and artist.")])]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("table",{staticClass:"dataframe dataframe",attrs:{border:"1"}},[o("thead",[o("tr",{staticStyle:{"text-align":"right"}},[o("th"),o("th",[t._v("country")]),o("th",[t._v("position")]),o("th",[t._v("artist")]),o("th",[t._v("track_name")]),o("th",[t._v("energy")])])]),o("tbody",[o("tr",[o("th",[t._v("8617")]),o("td",[t._v("Norway")]),o("td",[t._v("1")]),o("td",[t._v("TIX")]),o("td",[t._v("Kaller På Deg")]),o("td",[t._v("0.913")])]),o("tr",[o("th",[t._v("5017")]),o("td",[t._v("Hong Kong")]),o("td",[t._v("1")]),o("td",[t._v("ITZY")]),o("td",[t._v("WANNABE")]),o("td",[t._v("0.911")])]),o("tr",[o("th",[t._v("10617")]),o("td",[t._v("Singapore")]),o("td",[t._v("1")]),o("td",[t._v("ITZY")]),o("td",[t._v("WANNABE")]),o("td",[t._v("0.911")])]),o("tr",[o("th",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")])]),o("tr",[o("th",[t._v("12416")]),o("td",[t._v("South Africa")]),o("td",[t._v("200")]),o("td",[t._v("MASE")]),o("td",[t._v("Psycho!")]),o("td",[t._v("0.365")])]),o("tr",[o("th",[t._v("9616")]),o("td",[t._v("Philippines")]),o("td",[t._v("200")]),o("td",[t._v("Bee Gees")]),o("td",[t._v("How Deep Is Your Love")]),o("td",[t._v("0.357")])]),o("tr",[o("th",[t._v("1216")]),o("td",[t._v("Belgium")]),o("td",[t._v("200")]),o("td",[t._v("Kina")]),o("td",[t._v("Get You The Moon (feat. Snøw)")]),o("td",[t._v("0.235")])])])])]},proxy:!0}],null,!0)},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> arrange(_.position, -_.energy)\n  >> select(_.country, _.position, _.artist, _.track_name, _.energy)\n)")])])]),o("p",[t._v("Try doing the actions below, and then running the code.")]),o("blockquote",[o("p",[t._v("🔨 Try changing the two uses of "),o("code",{pre:!0},[t._v("_.energy")]),t._v(" above to "),o("code",{pre:!0},[t._v("_.danciness")]),t._v(".")])]),o("h3",{attrs:{id:"big-example-2-which-countries-does-an-artist-have-hits-in"}},[o("a",{attrs:{href:"#big-example-2-which-countries-does-an-artist-have-hits-in","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Big example 2: which countries does an artist have hits in?")]),o("p",[t._v("Run the code below. It should do the following:")]),o("ul",[o("li",[o("strong",[t._v("filter")]),t._v(" to keep rows for the artist ITZY")]),o("li",[t._v("use "),o("strong",[t._v("ggplot")]),t._v(" to add a point for each row in the filtered data.")])]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("p",[o("g-image",{attrs:{src:a(977),alt:"png"}})],1),o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<ggplot: (-9223372036554930765)>")])])]},proxy:!0}],null,!0)},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v('(music_top200\n  >> filter(_.artist == "ITZY")\n  >> ggplot(aes("streams", "country")) + geom_point() + labs(title = "ITZY hits across countries")\n)')])])]),o("blockquote",[o("p",[t._v("🔨 Try changing the term "),o("code",{pre:!0},[t._v('"ITZY"')]),t._v(" to "),o("code",{pre:!0},[t._v('"TIX"')]),t._v(". How many countries have TIX hits?")]),o("p",[t._v("🔨 Try stopping the plot with a comment. That is, put "),o("code",{pre:!0},[t._v("#")]),t._v(" to the left of "),o("code",{pre:!0},[t._v(">> ggplot")]),t._v(". This should show you the raw data.")])]),o("details",[o("summary",[t._v("solution")]),o("p",[t._v("Here is the solution code...")]),o("pre",{pre:!0,attrs:{class:"language-python"}},[o("code",{pre:!0,attrs:{class:"language-python"}},[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# code with artist changed, and plot commented out")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("music_top200\n  "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("artist "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TIX"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#>> ggplot(aes("streams", "country")) + geom_point() + labs(title = "ITZY hits across countries")')]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof d&&d(p),"function"==typeof c&&c(p);e.default=p.exports},833:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},977:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/intro-to-siuba/assets/static/01a-intro-data-science_11_0.d565fee.f578e7a7de117df49bceeff564b0e215.png",size:{width:699,height:456},sizes:"(max-width: 699px) 100vw, 699px",srcset:["/intro-to-siuba/assets/static/01a-intro-data-science_11_0.d565fee.f578e7a7de117df49bceeff564b0e215.png 699w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 699 456' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-5175246da38bb31dd0566ece83287649'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-5175246da38bb31dd0566ece83287649)' width='699' height='456' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAqCAYAAAADBl3iAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAGGklEQVRo3s2a52rtOhCF8/6PEsifEBLSIYH03nvvvfdEl0%2bwNhNdW5Z2yolhsK1iW6M1M0sjN7hvOD4%2bPpKF4%2bnpyT0%2bPrr7%2b3v3/Pzs3t7efN37%2b3vWe%2bkXfkfuNzV8deA5L%2bN4eXlxQ0NDrqenx7W3t7vR0VG3sLDgr5uamtz29rYbGBhwg4ODrq%2bvz3V2drquri63trbmZmZmfDnS2trq23V0dLi2tjY3PDycPRnJCqgaaM7BLDPzZ2dnXh4eHrwcHBz4wV9cXLj9/X23u7vrDg8P3dbWVq38%2bPjY7e3tuY2NDbezs%2bPOz899P7Wt52jIne2yQV1dXXm5vr52l5eX/nxzc%2bOvVSeh/O7uzgvXtEUJmMXt7a1XEPc6I2oflnFPP%2b7D98SE76JPNgLohN1ix1xjh9yfnJy409NTL1wzM8wU98yc6jlzH0qs7ujoqLJO9bq2omdboR/Kz1YAcMQWGeDk5KRbXV318AOOwBRhRinv7e31MwrUVc%2b5SJiRWH1VXW5fvgkENeR6eqsQoC/vrdnnwcwEZwZVNRMS2sfqq/oisb62v1CZhQAN%2bvX19X/%2bADPQS6RxQVIvlnK4pt6WpyigqN721bOLnlGmANDZEJvlomseALyXl5fd0tJSzSPzAWiUcNXS0uKvBX0rlBO68O44o39uArmxHATgebFzeXqcoWYBzTI4OyMhClAYTsjWhbMYihAQSlVfix4rnxCQG8uLDmsCRfZIOQqTfwih%2bs98gGVoeHZICF4deNIY4qGwQUfK1YY6aVIfwUBDbQPB9fV1NzU1VXOMYRsprmiWYwhQ36L32r62v5TlESAF4MgYGPBFaMjHMnAUw0A5W6hxjxL0UNmiFKEX8xyeOTs76xUY1qtvWFZVr/uy99p2tlzKqoXB7zSBMijyUqEqhG6ZWfyqCcjJEdMV320ZB5RTTg9HiKBFmKCFWpkzCh0THB6xs/XrTjBc1IRosHXM4vz8vBfgvLi46MMeZmKhWBWOaMvLx8bG3MTEhL9OCXU/GgarTMHWaf0eEqEYIbHmoTp9TBgFQriGs5hKhIqQVxgGuQHGVQgoU1BIheu14yofYBVn3/MlH8DHk1igokoBML%2bVlRVvAkCf0Ibg5Yu8cSqMU81Hnru/v9%2bboNhmPe%2btRQGWtazauClTgF0KAxs4ABqE2PAwnKNmvyoeh7OSywPkPBWSi%2bJ8FQ8QGrwJgADSU3xAGcxTwmSKCWghBGLCtXtOGAzb5prAp3wAgyP3RoMqBGigwF62yBkkiPEJikVCO8wIE4IT2NmpIkJVJCn23igRYnFDYoMPis22ynkAg4DZbW5u%2brN8gLWv8CNEo%2blLEpQ%2bFtqxvjEF1Nu3ZgIMigggspMaCsPyFCao2QoTJX9iMZQ6eDFDlKbcIAupMiaoDySVhuMKY30umwvrU/pW8oCqWB/WQXzm5ubc9PS0D4uyv6JQpkQJoRb4lyVK6mFzX%2bn7aTGUuy8AAvAd2pnhOrYWCFlf0SzVuxyuN5lSmBKrd18gxQf8paSoNlmy0%2bKs/mBgeHHygsCfBVHKulxQLPPQNgwWee168gH2ebacbTgUkGQC1j8Aee3GaCmMwBCLMjPhIibGEqtMIFafmxEifH8Kg181gZAJKsFB3LeM76dMoIjpxfqirGQTsA7QMjpLbsQErdcl88t63zK%2b3JRXKhMMIZ5NhFIVAH9mHwD7Z4CwQK5ZnNhQwzVx/y8pIKyvKwzGDhvqZAJKg/%2bGCeRGn%2bTN0ZAEaVcY9ieBEfIBZJXtMjWMy/U6ue9Oi39aDuc6QTRHfh8myKqOLTLl%2bMbHx70ArTK2951s7p/sDosJggTlBjkDdT0cJRXt5Zft8ctkYvWxOsvuUvuS1EkmQlW%2bQIsj/e2hRVKKkE1CcJagSPdISl/O2qe0ZSl9ofDZJhD7TwhNo4ScAx%2bCGcEoMSsWTErQVh0MBGaqJAs/bjC7P/KPUIqDZDBaIOX8qaV/fvS/j4QZQnhuuFljmantT9tf%2b00u9o/eV0yKHGVzc7P/j6CxsdF1d3e7kZGRQnpeb9j%2bFgSUmUfKR5SZlJCEGXAGCfoRK3x2zBxTlfAfXb0cSgUVcGIAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}}}]);