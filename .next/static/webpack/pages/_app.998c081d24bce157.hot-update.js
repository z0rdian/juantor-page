"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/instagram/ig-icon.js":
/*!*********************************************!*\
  !*** ./src/components/instagram/ig-icon.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IgIcon\": function() { return /* binding */ IgIcon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _instagram_ig_icon_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../instagram/ig-icon.module.scss */ \"./src/components/instagram/ig-icon.module.scss\");\n/* harmony import */ var _instagram_ig_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_instagram_ig_icon_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar IgIcon = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isVisable = ref[0], setIsVisable = ref[1];\n    var toggleVisibility = function() {\n        if (window.pageYOffset > 100) {\n            setIsVisable(true);\n        } else {\n            react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.BsInstagram;\n            setIsVisable(true);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return function() {\n            window.removeEventListener(\"scroll\", toggleVisibility);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"https://www.instagram.com/amarilla_construir/\",\n            type: \"button\",\n            className: \"\".concat((_instagram_ig_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().instagram_icon), \" \").concat(isVisable ? \"opacity-1\" : \"opacity-0 \"),\n            \"aria-label\": \"Right Align\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.BsInstagram, {\n                \"aria-hidden\": \"true\"\n            }, void 0, false, {\n                fileName: \"/home/zordian/Desktop/z0rdian-jamarilla-page/src/components/instagram/ig-icon.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/zordian/Desktop/z0rdian-jamarilla-page/src/components/instagram/ig-icon.js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/zordian/Desktop/z0rdian-jamarilla-page/src/components/instagram/ig-icon.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, _this);\n};\n_s(IgIcon, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = IgIcon;\nvar _c;\n$RefreshReg$(_c, \"IgIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbnN0YWdyYW0vaWctaWNvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBNEM7QUFDVztBQUNUO0FBRXZDLElBQU1JLE1BQU0sR0FBRyxXQUFNOztJQUN4QixJQUFrQ0gsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ0ksU0FBUyxHQUFrQkosR0FBZSxHQUFqQyxFQUFFSyxZQUFZLEdBQUlMLEdBQWUsR0FBbkI7SUFFOUIsSUFBTU0sZ0JBQWdCLEdBQUcsV0FBTTtRQUMzQixJQUFJQyxNQUFNLENBQUNDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDMUJILFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QixNQUFNO1lBQUNILHVEQUFXO1lBQ2ZHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtLQUNKO0lBRUROLGdEQUFTLENBQUMsV0FBTTtRQUNaUSxNQUFNLENBQUNFLGdCQUFnQixDQUFDLFFBQVEsRUFBRUgsZ0JBQWdCLENBQUMsQ0FBQztRQUVwRCxPQUFPLFdBQU07WUFDVEMsTUFBTSxDQUFDRyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVKLGdCQUFnQixDQUFDLENBQUM7U0FDMUQsQ0FBQztLQUNMLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDSSw4REFBQ0ssS0FBRztrQkFDQSw0RUFBQ0MsR0FBQztZQUFDQyxJQUFJLEVBQUMsK0NBQStDO1lBQ25EQyxJQUFJLEVBQUMsUUFBUTtZQUNiQyxTQUFTLEVBQUUsRUFBQyxDQUNSWCxNQUFzQyxDQUQ1Qkgsc0ZBQXNCLEVBQUMsR0FBQyxDQUV0RCxDQUFpQixPQURHRyxTQUFTLEdBQUcsV0FBVyxHQUFHLFlBQVksQ0FDeEM7WUFDRmEsWUFBVSxFQUFDLGFBQWE7c0JBRTVCLDRFQUFDZix1REFBVztnQkFBQ2dCLGFBQVcsRUFBQyxNQUFNOzs7OztxQkFBRzs7Ozs7aUJBQzlCOzs7OzthQUNGLENBQ1I7Q0FDTCxDQUFDO0dBaENXZixNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5zdGFncmFtL2lnLWljb24uanM/ZGIxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vaW5zdGFncmFtL2lnLWljb24ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgQnNJbnN0YWdyYW0gfSBmcm9tICdyZWFjdC1pY29ucy9mYScgO1xuXG5leHBvcnQgY29uc3QgSWdJY29uID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc1Zpc2FibGUsIHNldElzVmlzYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMTAwKSB7XG4gICAgICAgICAgICBzZXRJc1Zpc2FibGUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7QnNJbnN0YWdyYW1cbiAgICAgICAgICAgIHNldElzVmlzYWJsZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWJpbGl0eSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVWaXNpYmlsaXR5KTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hbWFyaWxsYV9jb25zdHJ1aXIvJ1xuICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuaW5zdGFncmFtX2ljb259ICR7XG4gICAgICAgICAgICAgICAgICAgIGlzVmlzYWJsZSA/ICdvcGFjaXR5LTEnIDogJ29wYWNpdHktMCAnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nUmlnaHQgQWxpZ24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8QnNJbnN0YWdyYW0gYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59OyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJCc0luc3RhZ3JhbSIsIklnSWNvbiIsImlzVmlzYWJsZSIsInNldElzVmlzYWJsZSIsInRvZ2dsZVZpc2liaWxpdHkiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiYSIsImhyZWYiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaW5zdGFncmFtX2ljb24iLCJhcmlhLWxhYmVsIiwiYXJpYS1oaWRkZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/instagram/ig-icon.js\n"));

/***/ })

});