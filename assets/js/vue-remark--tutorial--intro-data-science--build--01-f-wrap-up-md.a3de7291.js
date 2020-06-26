(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1012:function(t,e,o){"use strict";o.r(e);var a=o(9),n=o(834),s=o(7);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},d=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===r(i[t])&&"function"==typeof i[t].render?e[t]=i[t]:o[t]=function(){return i[t]}}))},u=s.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",l={excerpt:null,title:"Wrap up",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"basics"};var p=function(t){t.options[c]&&(t.options[c]=l),s.a.util.defineReactive(t.options,c,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},g=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[a("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\nimport pandas as pd\nfrom siuba import arrange, select, mutate, filter, _\nfrom plotnine import ggplot, geom_point, coord_flip, aes, labs\n\n# temporary until I figure out where to put data\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n\n# TODO: shift into a package or file\nfrom siuba import pipe\nfrom IPython.display import HTML, display\n___ = pipe(lambda x: display(HTML("⚠️: <b>Don\'t forget to replace all the blanks!<b>")) and _)\n\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# when you see a Shout object, call the shout_html function on it\nhtml_formatter.for_type(pd.DataFrame, lambda df: df.to_html(max_rows = pd.get_option("display.max_rows")))')])])])],1),a("h2",{attrs:{id:"putting-it-together"}},[a("a",{attrs:{href:"#putting-it-together","aria-hidden":"true"}},[a("span",{staticClass:"fa fa-link"})]),t._v("Putting it together")]),a("p",[t._v("TODO: explain")]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("streams")]),a("th",[t._v("duration")]),a("th",[t._v("continent")])])]),a("tbody",[a("tr",[a("th",[t._v("0")]),a("td",[t._v("Argentina")]),a("td",[t._v("1")]),a("td",[t._v("Tusa")]),a("td",[t._v("KAROL G")]),a("td",[t._v("1858666")]),a("td",[t._v("200.960")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("200")]),a("td",[t._v("Austria")]),a("td",[t._v("1")]),a("td",[t._v("Blinding Lights")]),a("td",[t._v("The Weeknd")]),a("td",[t._v("229576")]),a("td",[t._v("201.573")]),a("td",[t._v("Europe")])]),a("tr",[a("th",[t._v("400")]),a("td",[t._v("Australia")]),a("td",[t._v("1")]),a("td",[t._v("Blinding Lights")]),a("td",[t._v("The Weeknd")]),a("td",[t._v("1757343")]),a("td",[t._v("201.573")]),a("td",[t._v("Oceania")])]),a("tr",[a("th",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),a("tr",[a("th",[t._v("11800")]),a("td",[t._v("Uruguay")]),a("td",[t._v("1")]),a("td",[t._v("Tusa")]),a("td",[t._v("KAROL G")]),a("td",[t._v("120175")]),a("td",[t._v("200.960")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("12000")]),a("td",[t._v("Viet Nam")]),a("td",[t._v("1")]),a("td",[t._v("Sweet Night")]),a("td",[t._v("V")]),a("td",[t._v("189261")]),a("td",[t._v("214.259")]),a("td",[t._v("Asia")])]),a("tr",[a("th",[t._v("12200")]),a("td",[t._v("South Africa")]),a("td",[t._v("1")]),a("td",[t._v("The Box")]),a("td",[t._v("Roddy Ricch")]),a("td",[t._v("94422")]),a("td",[t._v("196.653")]),a("td",[t._v("Africa")])])])])]},proxy:!0}],null,!0)},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v('(music_top200 \n  >> filter(_.position == 1)\n  #>> select(_.country, _.energy, _.acousticness) \n  #>> ggplot(aes("energy", "acousticness")) + geom_point()\n)')])])]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("p",[a("g-image",{attrs:{src:o(978),alt:"png"}})],1),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<ggplot: (-9223372036555519095)>")])])]},proxy:!0}],null,!0)},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: don\'t include hours, introduce a lot of baggage\n#hours = 3600*1000 \n\n(music_top200\n  >> filter(_.country == "Hong Kong")\n  >> mutate(stream_seconds = _.streams * _.duration)\n  >> select(_.stream_seconds, _.position)\n  >> ggplot(aes("stream_seconds", "position")) + geom_point()\n)')])])]),a("h2",{attrs:{id:"exercises"}},[a("a",{attrs:{href:"#exercises","aria-hidden":"true"}},[a("span",{staticClass:"fa fa-link"})]),t._v("Exercises")]),a("ul",[a("li",[t._v("What is Argentina's 10th most popular song? What's their most danceable song?\n(future note: we can't filter eg 10th most danceable yet)")]),a("li",[t._v("TODO: add more")])]),a("p",[t._v("Advanced")]),a("ul",[a("li",[t._v("Notice how we could filter songs in the 5th most streamed position, but not the 5th most danceable. (Show row_number called directly on Series, invite to put into mutate)")])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof d&&d(g),"function"==typeof p&&p(g);e.default=g.exports},834:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},978:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/intro-to-siuba/assets/static/01f-wrap-up_3_0.28d0d65.8076d101a8616d57d3fd5afbbf1afa66.png",size:{width:567,height:431},sizes:"(max-width: 567px) 100vw, 567px",srcset:["/intro-to-siuba/assets/static/01f-wrap-up_3_0.28d0d65.8076d101a8616d57d3fd5afbbf1afa66.png 567w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 567 431' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-d156f3d3764d0749b313319f2cc5e647'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-d156f3d3764d0749b313319f2cc5e647)' width='567' height='431' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6%2b6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAJlklEQVRo3tWaV6sVSxCFz//yZ/hgABFBfBPUFxUTCgbMARUTopjjMeecc84555xjyVeXNbR9ume2us91O9Ds2T3Tqbpq1arqafr%2b/btx8Zsq3759s69fv3rhPvfev1i4mrT4%2bHrx4oU9ffrUnj9/bu/fv7d3797ZkydPijp%2bnz179tMv9WGdCv/pL6wLS9hf2IZfzSP1rGysXJ%2bq//jx438C0OKpuHz5shdeUOO7d%2b/ahg0bbO/evfby5Uv79OmTC0LCCIsGSRUtJFVy7SSc3Fipdryrjci1o/7Dhw8/C4Bdvnbtmt28ebMY9O3bt7Zz506bM2eOjR492rp27Wrbt2/3xizo8ePHWQ1ICSD1LNSA1LNQA6oEkNKAuLTQgJwJ8NKrV69850%2bdOuV1nTt3tsmTJ9uDBw9cWJs3b7YdO3bYmzdv7OHDhy40hJIqTC73jLFS9fSXayctzI2Ve8ZYjx49aqkBMfBJkidPnrTr16/7gmfMmOGLHjt2rHXp0sUFEw4kFYwLz6RVqSIBxG20q6lnZe2kCbk%2b%2bS0EEO66hCEB0NGlS5ds9%2b7ddvHiRV/EoEGDbPbs2da2bVubP3%2b%2bmw67Hwrgn9KAMgFgAkePHrUxY8b4rh88eNCmTJlid%2b7csQsXLrhWaDBNNqcFsr3U7od9xM9ymhOCXmqsXJ8tQLBMAIDg6tWrXfXRhObmZhs%2bfLgDIcAIQCIkJBqq3j8lgBgDJACpHuq9b98%2b27Nnj9v/4MGDfYClS5fa%2bPHj7fXr14W2VKllw5pA7AVCAdARKA8RQiPAg40bN9rixYutTZs2BU7s37/fhRBPsOFBMNz1L1%2b%2bFJQ3HBibv3Llio0bN84mTpxoQ4cOtZEjR9rnz59dQ86cOWNbt251bShzg6ldCRdSTw3I9Zl1g%2bzQiRMn7Ny5c8VkQ5IycOBA69Spk5vCli1bHAzRBJghnkBCk/3FBRaZekZdjibzjHapfvmfqhN5ys1DY7WgwuwmO4iaowWSPNJigRCeESNGeMMbN27Y2rVrbc2aNU6Te/bs6c%2bZbKx2tZpAqs3/xgNiDOB/CILYNjuP%2bvfq1ct5ANrCBT84dOhQESu0lgnEbWNhhL%2bxAMLfLAbETFADoxWoDbs9bdo069ChgwdILBhSJA8Qe4HUrsTPqnYyFkCq/7qAYCiE2Ats2rTJ7xEAWtC7d29r166dC2DXrl127969AvzUOWYT71hrakBYVwsIJqlwzAMEfgDe/fv3fdexfcJl6nr06OE4AFGi8I7ADoHEoeifhMO5Z7l2ZVGpNqIAQfw7E85pAKBIA95jcfxCi4kKu3fv7nR42LBhLhg8AhT52LFjRbjc8DyAaA8g08JjDAAEud%2b2bZv7e4R169Ytjwv69OljR44c8VhBAROkCKosivwnGFAlgLpgAHYNiYkvOmEBNEAI7du3t3Xr1tnt27c9PGaHWeysWbN89ydMmOBmgBDQAnZceNDQVJho7/z58%2b77SXQI1MJggt1EA3B9aAz32BC7jgDgBxAoBliwYIEdP368AEZ%2bRVp%2bBQNCItaqKTEiOvw4AmARFCQUDoAAoMLKDVCvtNjVq1d90QBk//79bdGiRY4bLJ4YYuXKld6OujhJGTO4HEtMtUsxwTglVpaALUCQrM6BAweSJiC1QSAaEIBDCLhHYgRiAuogSJgSHWMKEiL9YzYCxYYzASjs%2bvXrsyCogWikFBlcAAoMfcYjYPeYB0QJbUBb2H3a4DnKYv6/7gVQYZA8Fw6rAITEBEuWLPHCxS8mM2/ePA%2bPyRUockQoAtIyEPzr0WAZEYp3iob4elzgzJkzbcWKFd5m1KhRnjFGSFzkBkieoAWabBkPqHdGqCwzJYEWAmCxlJgIpdBXwIYZgPykygiT2X3qwQZAkEHkBeLTpDJ2VqsXiAVQqxfI5gTLYoGwoAF4hLNnzzoGkECBBgOAMEIGhhUSJ6Aphw8fLoSjHVAGueGywmFInALBGJjUEXUdO3Z0VsjCJ02aZNOnT/dFwyuIIcKFUB/3/dfPBWINiN1gLEEKiyMuAPSGDBniWWLyBPCK5cuXuzAUFKkdXmTVqlXOFLmXABsmKUoj%2bD5sMHeSq5QSHgH3CSvEHUKT%2b/XrZwsXLnRXyIW5hNEgZAiWiNDC09sqIpR7Vpb2KnuWPRukEhtFTXPoqx1h0QMGDPCzAi4wAdID85s6daoLBAHRF1yAgdl54YESLbV4gVSarW5eIIUBVSYgpIX8EBjxn0ViBlBiVKxv377OEdAUzIEzBISkNDusETCVEMo4gjSo1XhAnBarAkF1goqHgpKa4RHgCmgAwRLZYxaM%2brN4EirkEzC1FNcIF8nCObInYAvHqls4nDsaqwLBMNRVwgNazWQRDH3gAgFI7ufOnevMEY2AKPEfEJWthm42BEgEhqZhauExXN2ZYC1EKJdu0k7hAU6fPu00GJMgCMIUCLbAhmXLlvnAmjht0AaERp8skGM4iJaSrAK7OM1Wt5RYlQbUql6iwdg5J0gslHdRcwQCVkCYAEKFxmgAvAFTAVQRGsICTNEUIXYq0ZoDwbI5htyhBQbk0uKpvHqcc8%2bpIYsnXcZ3BCyWxaMVmAaaws6DDWgG4TX/2RkERICG4JRbUECGJuj8IVbzsnOBWIilJhAejORAMPcsriM3oJBYOwpIkorDVZKIYdEIolu3br5w7J6UO1gBbigfwaQBV8C07CA2xgBxCdowl6QXCD%2bWgseH/jcHgjkXGbsxJUfCCVGYjL4tYnJEkBy7S1AAJa6UXSdrhVDIPYIboWbkQFCCow/cM%2bbFvT79SwoAFVVgk2NSv8POdMgZg1PYhkmxMAEV2WepPHOCN/Bc7reKCSqdT5YazSJzhTulfWk%2bQIejKXYVL6KMnaU%2bT0u101jxlyYSmohWqPZlY4VzlHYhFIQpV1oZDCEEwl0KCI3ksVXxc%2b7ZMZ7pvbgwCO/wq1Nm1eXaYX6MxXtyfdSxk9TlxmI%2bvMO7SuRqjtQxngrvKwfSwgTC%2b1AY2A4qpIJKUZhs7sL1kRPgPWxYhfZMIhxTE2LiPAfoaEvannva4SXijdI9z6DctKVN2Aegmrpom/UC8UfF%2bhCCXVDRhxG5NtoBiqSu96sufaCtcaU1VWOF89Mc6SfXrqmWyaS%2bJK16HtexQ/h6WB67A9khhYYGoSkgNOcHaBpsEMDTV6i/OtavrKGplka1fHaeMqFQtUFf3BcEiFNlFomqgvT84gIRCvcIBkHBDcQwlbIvG6vWOdYsgHpdZTsEuktFf1cD/%2bT6AfSpq8q1QIUdAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}}}]);