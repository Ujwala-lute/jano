/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/common/ScrollTop.jsx":
/*!*****************************************!*\
  !*** ./components/common/ScrollTop.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollToTop)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ScrollToTop() {\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Top: 0 takes us all the way back to the top of the page\n    // Behavior: smooth keeps it smooth!\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Button is displayed after scrolling for 500 pixels\n        const toggleVisibility = ()=>{\n            if (window.pageYOffset > 500) {\n                setIsVisible(true);\n            } else {\n                setIsVisible(false);\n            }\n        };\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>window.removeEventListener(\"scroll\", toggleVisibility);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-top\",\n                onClick: scrollToTop,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"bi bi-arrow-up-short\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Ujwala\\\\jAno-CReaTive-MultiPuRpoSE-NEXtjs\\\\jAno-CReaTive-MultiPuRpoSE-NEXtjs\\\\jano-creative-multipurpose-nextjs\\\\jano\\\\components\\\\common\\\\ScrollTop.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Ujwala\\\\jAno-CReaTive-MultiPuRpoSE-NEXtjs\\\\jAno-CReaTive-MultiPuRpoSE-NEXtjs\\\\jano-creative-multipurpose-nextjs\\\\jano\\\\components\\\\common\\\\ScrollTop.jsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9TY3JvbGxUb3AuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUU3QixTQUFTRTtJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFFM0MsMERBQTBEO0lBQzFELG9DQUFvQztJQUNwQyxNQUFNSSxjQUFjO1FBQ2xCQyxPQUFPQyxRQUFRLENBQUM7WUFDZEMsS0FBSztZQUNMQyxVQUFVO1FBQ1o7SUFDRjtJQUVBVCxnREFBU0EsQ0FBQztRQUNSLHFEQUFxRDtRQUNyRCxNQUFNVSxtQkFBbUI7WUFDdkIsSUFBSUosT0FBT0ssV0FBVyxHQUFHLEtBQUs7Z0JBQzVCUCxhQUFhO1lBQ2YsT0FBTztnQkFDTEEsYUFBYTtZQUNmO1FBQ0Y7UUFFQUUsT0FBT00sZ0JBQWdCLENBQUMsVUFBVUY7UUFFbEMsT0FBTyxJQUFNSixPQUFPTyxtQkFBbUIsQ0FBQyxVQUFVSDtJQUNwRCxHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDR1AsMkJBQ0M7c0JBQ0UsNEVBQUNXO2dCQUFJQyxXQUFVO2dCQUFhQyxTQUFTWDswQkFDbkMsNEVBQUNZO29CQUFFRixXQUFVOzs7Ozs7Ozs7Ozs7O0FBTXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFuby1uZXh0Ly4vY29tcG9uZW50cy9jb21tb24vU2Nyb2xsVG9wLmpzeD83MmQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsVG9Ub3AoKSB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gVG9wOiAwIHRha2VzIHVzIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAvLyBCZWhhdmlvcjogc21vb3RoIGtlZXBzIGl0IHNtb290aCFcbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQnV0dG9uIGlzIGRpc3BsYXllZCBhZnRlciBzY3JvbGxpbmcgZm9yIDUwMCBwaXhlbHNcbiAgICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDUwMCkge1xuICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0b2dnbGVWaXNpYmlsaXR5KTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0b2dnbGVWaXNpYmlsaXR5KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc1Zpc2libGUgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXRvcFwiIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWFycm93LXVwLXNob3J0XCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTY3JvbGxUb1RvcCIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInNjcm9sbFRvVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInRvZ2dsZVZpc2liaWxpdHkiLCJwYWdlWU9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/ScrollTop.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_common_ScrollTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common/ScrollTop */ \"./components/common/ScrollTop.jsx\");\n\n\n\n\n\n\nif (false) {}\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_1___default().init({\n            duration: 1200\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-page-wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Ujwala\\\\jAno-CReaTive-MultiPuRpoSE-NEXtjs\\\\jAno-CReaTive-MultiPuRpoSE-NEXtjs\\\\jano-creative-multipurpose-nextjs\\\\jano\\\\pages\\\\_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_ScrollTop__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Ujwala\\\\jAno-CReaTive-MultiPuRpoSE-NEXtjs\\\\jAno-CReaTive-MultiPuRpoSE-NEXtjs\\\\jano-creative-multipurpose-nextjs\\\\jano\\\\pages\\\\_app.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Ujwala\\\\jAno-CReaTive-MultiPuRpoSE-NEXtjs\\\\jAno-CReaTive-MultiPuRpoSE-NEXtjs\\\\jano-creative-multipurpose-nextjs\\\\jano\\\\pages\\\\_app.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0I7QUFDWTtBQUNSO0FBQ0k7QUFDMkI7QUFFekQsSUFBSSxLQUE2QixFQUFFLEVBRWxDO0FBRWMsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsREwsZ0RBQVNBLENBQUM7UUFDUkQsK0NBQVEsQ0FBQztZQUNQUSxVQUFVO1FBQ1o7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNMO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNKLG9FQUFXQTs7Ozs7Ozs7Ozs7QUFHbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYW5vLW5leHQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFvcyBmcm9tIFwiYW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgU2Nyb2xsVG9Ub3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1Njcm9sbFRvcFwiO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQW9zLmluaXQoe1xuICAgICAgZHVyYXRpb246IDEyMDAsXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wYWdlLXdyYXBwZXJcIj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxTY3JvbGxUb1RvcCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFvcyIsInVzZUVmZmVjdCIsIlNjcm9sbFRvVG9wIiwicmVxdWlyZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXQiLCJkdXJhdGlvbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/aos"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();