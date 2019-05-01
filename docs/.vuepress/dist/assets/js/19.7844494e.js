(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{253:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"connection-hpp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connection-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" Connection.hpp"),s("seo")],1),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/oatpp/oatpp-libressl/blob/master/src/oatpp-libressl/Connection.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp-libressl/issues/new?title=API%20question&body=In%20file:%20oatpp-libressl/Connection.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),s("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("TLS Connection implementation. Extends "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/base/Countable/#countable"}},[t._v("oatpp::base::Countable")]),t._v(" and "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#iostream"}},[t._v("oatpp::data::stream::IOStream")]),t._v(".")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),s("table",[t._m(4),t._v(" "),s("tbody",[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("tr",[t._m(8),t._v(" "),t._m(9),t._v(" "),s("td",[t._v("Implementation of "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream-write"}},[t._v("oatpp::data::stream::OutputStream::write()")]),t._v(" method.")],1)]),t._v(" "),s("tr",[t._m(10),t._v(" "),t._m(11),t._v(" "),s("td",[t._v("Implementation of "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream-read"}},[t._v("oatpp::data::stream::InputStream::read()")]),t._v(" method.")],1)]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20)])]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("Constructor. "),s("ul",[t._m(22),s("li",[s("strong",[t._v("@param")]),t._v(" handle - connection handle (file descriptor). "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/IODefinitions/#v-io-handle"}},[t._v("oatpp::data::v_io_handle")]),t._v(". ")],1)])]),t._v(" "),t._m(23),t._m(24),t._v(" "),s("p",[t._v("Create shared connection. "),s("ul",[t._m(25),s("li",[s("strong",[t._v("@param")]),t._v(" handle - connection handle (file descriptor). "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/IODefinitions/#v-io-handle"}},[t._v("oatpp::data::v_io_handle")]),t._v(". ")],1),t._m(26)])]),t._v(" "),t._m(27),t._m(28),t._v(" "),s("p",[t._v("Virtual destructor.")]),t._v(" "),t._m(29),t._m(30),t._v(" "),s("p",[t._v("Implementation of "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream-write"}},[t._v("oatpp::data::stream::OutputStream::write()")]),t._v(" method. "),t._m(31)],1),t._v(" "),t._m(32),t._m(33),t._v(" "),s("p",[t._v("Implementation of "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream-read"}},[t._v("oatpp::data::stream::InputStream::read()")]),t._v(" method. "),t._m(34)],1),t._v(" "),t._m(35),t._m(36),t._v(" "),s("p",[t._v("Implementation of OutputStream must suggest async actions for I/O results. Suggested Action is used for scheduling coroutines in async::Executor. "),s("ul",[t._m(37),s("li",[s("strong",[t._v("@return")]),t._v(" - "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),t._m(38),t._m(39),t._v(" "),s("p",[t._v("Implementation of InputStream must suggest async actions for I/O results. Suggested Action is used for scheduling coroutines in async::Executor. "),s("ul",[t._m(40),s("li",[s("strong",[t._v("@return")]),t._v(" - "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._m(54),t._v(" "),s("p",[t._v("Close all handles.")]),t._v(" "),t._m(55),t._m(56),t._v(" "),t._m(57),t._v(" "),t._m(58),t._m(59),t._v(" "),s("p",[t._v("Get socket handle. "),s("ul",[s("li",[s("strong",[t._v("@return")]),t._v(" - "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/IODefinitions/#v-io-handle"}},[t._v("oatpp::data::v_io_handle")]),t._v(". ")],1)])]),t._v(" "),t._m(60)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp-libressl")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp-libressl/Connection.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" libressl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOStream "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Return Type")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Summary")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("[none]")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-connection"}},[this._v("Connection")])]),this._v(" "),e("td",[this._v("Constructor.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("std::shared_ptr<Connection>")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-createshared"}},[this._v("createShared")])]),this._v(" "),e("td",[this._v("Create shared connection.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("[none]")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-~connection"}},[this._v("~Connection")])]),this._v(" "),e("td",[this._v("Virtual destructor.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("data::v_io_size")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"#connection-write"}},[this._v("write")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("data::v_io_size")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"#connection-read"}},[this._v("read")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("oatpp::async::Action")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-suggestoutputstreamaction"}},[this._v("suggestOutputStreamAction")])]),this._v(" "),e("td",[this._v("Implementation of OutputStream must suggest async actions for I/O results.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("oatpp::async::Action")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-suggestinputstreamaction"}},[this._v("suggestInputStreamAction")])]),this._v(" "),e("td",[this._v("Implementation of InputStream must suggest async actions for I/O results.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-setoutputstreamiomode"}},[this._v("setOutputStreamIOMode")])]),this._v(" "),e("td",[this._v("Set OutputStream I/O mode.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("oatpp::data::stream::IOMode")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-getoutputstreamiomode"}},[this._v("getOutputStreamIOMode")])]),this._v(" "),e("td",[this._v("Set OutputStream I/O mode.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-setinputstreamiomode"}},[this._v("setInputStreamIOMode")])]),this._v(" "),e("td",[this._v("Set InputStream I/O mode.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("oatpp::data::stream::IOMode")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-getinputstreamiomode"}},[this._v("getInputStreamIOMode")])]),this._v(" "),e("td",[this._v("Get InputStream I/O mode.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-close"}},[this._v("close")])]),this._v(" "),e("td",[this._v("Close all handles.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("TLSHandle")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-gettlshandle"}},[this._v("getTlsHandle")])]),this._v(" "),e("td",[this._v("Get TLS handle.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("data::v_io_handle")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#connection-gethandle"}},[this._v("getHandle")])]),this._v(" "),e("td",[this._v("Get socket handle.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-connection","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::Connection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" tlsHandle - "),e("code",[this._v("tls*")]),this._v(". ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TLSHandle tlsHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_handle handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-createshared"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-createshared","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::createShared")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" tlsHandle - "),e("code",[this._v("tls*")]),this._v(". ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("code",[this._v("std::shared_ptr")]),this._v(" to Connection. ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TLSHandle tlsHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_handle handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-connection-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-connection-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::~Connection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("~")]),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("Connection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-write","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::write")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" buff - data to write to stream. ")]),e("li",[e("strong",[this._v("@param")]),this._v(" count - data size. ")]),e("li",[e("strong",[this._v("@return")]),this._v(" - actual amount of bytes written. ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("buff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-read","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::read")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" buff - buffer to read data to. ")]),e("li",[e("strong",[this._v("@param")]),this._v(" count - buffer size. ")]),e("li",[e("strong",[this._v("@return")]),this._v(" - actual amount of bytes read. ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("buff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-suggestoutputstreamaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-suggestoutputstreamaction","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::suggestOutputStreamAction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" ioResult - result of the call to "),e("a",{attrs:{href:"#outputstream-write"}},[this._v("OutputStream::write()")]),this._v(". ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("suggestOutputStreamAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size ioResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-suggestinputstreamaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-suggestinputstreamaction","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::suggestInputStreamAction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" ioResult - result of the call to "),e("a",{attrs:{href:"#inputstream-read"}},[this._v("InputStream::read()")]),this._v(". ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("suggestInputStreamAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size ioResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-setoutputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-setoutputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::setOutputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set OutputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" ioMode ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOutputStreamIOMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode ioMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-getoutputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-getoutputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::getOutputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set OutputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@return")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOutputStreamIOMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-setinputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-setinputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::setInputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set InputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" ioMode ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInputStreamIOMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode ioMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-getinputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-getinputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::getInputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get InputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@return")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputStreamIOMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-close"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-close","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::close")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("void")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-gettlshandle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-gettlshandle","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::getTlsHandle")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get TLS handle. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("code",[this._v("tls*")]),this._v(". ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("TLSHandle "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getTlsHandle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"connection-gethandle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-gethandle","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection::getHandle")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("::")]),this._v("v_io_handle "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getHandle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);