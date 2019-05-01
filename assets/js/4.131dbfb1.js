(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("Vue template allows JavaScript-esque expression in four constructs:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org/v2/guide/syntax.html#Directives",target:"_blank",rel:"noopener noreferrer"}},[t._v("Directives"),a("OutboundLink")],1),t._v(" like "),a("code",[t._v('v-if="exp"')])]),a("li",[a("a",{attrs:{href:"https://vuejs.org/v2/guide/syntax.html#Attributes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Attributes"),a("OutboundLink")],1),t._v(" like "),a("code",[t._v(':id="exp"')])]),a("li",[a("a",{attrs:{href:"https://vuejs.org/v2/guide/events.html#Method-Event-Handlers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event Handlers"),a("OutboundLink")],1),t._v(" like "),a("code",[t._v('@click="exp"')])]),a("li",[a("a",{attrs:{href:"https://vuejs.org/v2/guide/syntax.html#Text",target:"_blank",rel:"noopener noreferrer"}},[t._v("Template Interpolations"),a("OutboundLink")],1),t._v(" like")])]),t._m(1),a("p",[t._v("Other than the "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/filters.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("filter syntax"),a("OutboundLink")],1),t._v(", the expression is 100% JavaScript expression.")]),a("p",[t._v("Vetur now offers completion, diagnostics, hover, jump to definition, find references for these JavaScript snippets.")]),t._m(2),t._m(3),a("p",[t._v("Currently diagnostics, hover, jump to definition and find references are implemented in this way:")]),t._m(4),t._m(5),a("p",[t._v("If you do find bugs, please "),a("a",{attrs:{href:"https://github.com/vuejs/vetur/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("fill an issue"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("If you want more details as to how this feature is implemented, I wrote a blog post: "),a("a",{attrs:{href:"https://blog.matsu.io/generic-vue-template-interpolation-language-features",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generic Vue Template Interpolation Language Features\n"),a("OutboundLink")],1),t._v(".")]),t._m(6),a("p",[t._v("Completion now works a little bit differently than the other language features. Mainly because completion works off a\nSyntactically incomplete file and the generic compiler from Vue templaet to virtual TypeScript file cannot handle that yet.")]),a("p",[t._v("Completion:")]),t._m(7),t._m(8),t._m(9),t._m(10)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"interpolation-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interpolation-support","aria-hidden":"true"}},[this._v("#")]),this._v(" Interpolation Support")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ exp }}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"generic-language-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generic-language-features","aria-hidden":"true"}},[this._v("#")]),this._v(" Generic Language Features")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("These features are experimental and you need to set "),e("code",[this._v("vetur.experimental.templateInterpolationService: true")]),this._v(" to enable them. You can also only disable template diagnostics with "),e("code",[this._v("vetur.validation.template: false")]),this._v(", although that disables the built-in ESLint checking, too.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Compile original Vue template into a virtual TypeSript file")]),a("li",[t._v("Generate a sourcemap between expressions in original "),a("code",[t._v(".vue")]),t._v(" file and the virtual file")]),a("li",[t._v("Run language feature requests on the virtual TypeScript file")]),a("li",[t._v("Map results back to original "),a("code",[t._v(".vue")]),t._v(" file")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v('Use the command "Vetur: Show corresponding virtual file and sourcemap" to understand how the\ntemplates are represented in Vetur. Useful for bug filing too.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"completion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#completion","aria-hidden":"true"}},[this._v("#")]),this._v(" Completion")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Collects information from "),a("code",[t._v("<script>")]),t._v(" region by traversing its AST")]),a("li",[t._v("Offer "),a("code",[t._v("props")]),t._v(", "),a("code",[t._v("data")]),t._v(" and "),a("code",[t._v("methods")]),t._v(" in interpolation regions")]),a("li",[t._v("Offer "),a("code",[t._v(":prop")]),t._v(" completion on child components")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"type-checking-with-jsdocs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-checking-with-jsdocs","aria-hidden":"true"}},[this._v("#")]),this._v(" Type Checking with JSDocs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You don't have to use "),e("code",[this._v('lang="ts"')]),this._v(" for typing functions. This would show error that "),e("code",[this._v("'foo'")]),this._v(" is not assignable to "),e("code",[this._v("number")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ numOnly('foo') }}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * @param {number} num\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("numOnly")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);