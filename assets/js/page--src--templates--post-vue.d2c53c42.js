(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1015:function(t,n,e){"use strict";e.r(n);e(189),e(48),e(49);var i={components:{RevealSlides:e(481).default},computed:{sidebarChunks:function(){var t={};return this.$page.allPosts.edges.forEach((function(n){var e=n.node;if(e.chunk){var i=t[e.chunk]||[];i.push(e),t[e.chunk]=i}})),t},crntNav:function(){var t=this;return this.$page.allPosts.edges.filter((function(n){return n.node.id==t.$page.post.id}))[0]||{}},navNext:function(){var t,n;return null===(t=this.crntNav)||void 0===t||null===(n=t.next)||void 0===n?void 0:n.path},navPrevious:function(){var t,n;return null===(t=this.crntNav)||void 0===t||null===(n=t.previous)||void 0===n?void 0:n.path}}},a=(e(960),e(9)),s=e(961),u=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Layout",[e("div",{staticClass:"center"},[e("div",{staticClass:"left"},[t._l(t.sidebarChunks,(function(n,i){return[e("ul",[e("li",[e("h3",[t._v(t._s(i))])]),t._l(n,(function(n){return e("li",[e("g-link",{attrs:{to:n.path}},[t._v("\n                    "+t._s(n.title)+"\n                ")]),n.id==t.$page.post.id?e("ul",t._l(n.headings,(function(n){return e("li",[e("span",[t._v(t._s(n.value))])])})),0):t._e()],1)}))],2)]}))],2),e("div",{staticClass:"right",attrs:{id:"right"}},[e("div",{staticClass:"content"},[e("h1",[t._v(t._s(t.$page.post.title))]),e("VueRemarkContent"),e("div",[e("g-link",{attrs:{to:t.navPrevious}},[t._v("prev page")]),e("g-link",{attrs:{to:t.navNext}},[t._v("next page")])],1)],1)])])])}),[],!1,null,null,null);"function"==typeof s.default&&Object(s.default)(u);n.default=u.exports},840:function(t,n,e){},841:function(t,n){},960:function(t,n,e){"use strict";var i=e(840);e.n(i).a},961:function(t,n,e){"use strict";var i=e(841),a=e.n(i);n.default=a.a}}]);