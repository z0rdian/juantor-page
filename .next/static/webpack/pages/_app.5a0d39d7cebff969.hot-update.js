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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IgIcon\": function() { return /* binding */ IgIcon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _instagram_ig_icon_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../instagram/ig-icon.module.scss */ \"./src/components/instagram/ig-icon.module.scss\");\n/* harmony import */ var _instagram_ig_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_instagram_ig_icon_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar IgIcon = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isVisable = ref[0], setIsVisable = ref[1];\n    var toggleVisibility = function() {\n        if (window.pageYOffset > 100) {\n            setIsVisable(true);\n        } else {\n            setIsVisable(true);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return function() {\n            window.removeEventListener(\"scroll\", toggleVisibility);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            action: \"_blank\",\n            href: \"https://www.instagram.com/amarilla_construir/\",\n            type: \"button\",\n            className: \"\".concat((_instagram_ig_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ig_icon), \" \").concat(isVisable ? \"opacity-1\" : \"opacity-0 \"),\n            \"aria-label\": \"Right Align\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInstagram, {\n                \"aria-hidden\": \"true\"\n            }, void 0, false, {\n                fileName: \"/home/zordian/Desktop/z0rdian-jamarilla-page/src/components/instagram/ig-icon.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/zordian/Desktop/z0rdian-jamarilla-page/src/components/instagram/ig-icon.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/zordian/Desktop/z0rdian-jamarilla-page/src/components/instagram/ig-icon.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(IgIcon, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = IgIcon;\nvar _c;\n$RefreshReg$(_c, \"IgIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbnN0YWdyYW0vaWctaWNvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBNEM7QUFDVztBQUNWO0FBRXRDLElBQU1JLE1BQU0sR0FBRyxXQUFNOztJQUMxQixJQUFrQ0gsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ0ksU0FBUyxHQUFrQkosR0FBZSxHQUFqQyxFQUFFSyxZQUFZLEdBQUlMLEdBQWUsR0FBbkI7SUFFOUIsSUFBTU0sZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QixJQUFJQyxNQUFNLENBQUNDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDNUJILFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQixNQUFNO1lBQ0xBLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtLQUNGO0lBRUROLGdEQUFTLENBQUMsV0FBTTtRQUNkUSxNQUFNLENBQUNFLGdCQUFnQixDQUFDLFFBQVEsRUFBRUgsZ0JBQWdCLENBQUMsQ0FBQztRQUVwRCxPQUFPLFdBQU07WUFDWEMsTUFBTSxDQUFDRyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVKLGdCQUFnQixDQUFDLENBQUM7U0FDeEQsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0ssS0FBRztrQkFDRiw0RUFBQ0MsR0FBQztZQUFDQyxNQUFNLEVBQUMsUUFBUTtZQUNoQkMsSUFBSSxFQUFDLCtDQUErQztZQUNwREMsSUFBSSxFQUFDLFFBQVE7WUFDYkMsU0FBUyxFQUFFLEVBQUMsQ0FDVlosTUFBc0MsQ0FEMUJILCtFQUFlLEVBQUMsR0FBQyxDQUV2QyxDQUFTLE9BRENHLFNBQVMsR0FBRyxXQUFXLEdBQUcsWUFBWSxDQUN0QztZQUNGYyxZQUFVLEVBQUMsYUFBYTtzQkFFeEIsNEVBQUNoQix1REFBVztnQkFBQ2lCLGFBQVcsRUFBQyxNQUFNOzs7OztxQkFBRzs7Ozs7aUJBQ2hDOzs7OzthQUNBLENBQ047Q0FDSCxDQUFDO0dBakNXaEIsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2luc3RhZ3JhbS9pZy1pY29uLmpzP2RiMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL2luc3RhZ3JhbS9pZy1pY29uLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBGYUluc3RhZ3JhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5leHBvcnQgY29uc3QgSWdJY29uID0gKCkgPT4ge1xuICBjb25zdCBbaXNWaXNhYmxlLCBzZXRJc1Zpc2FibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMCkge1xuICAgICAgc2V0SXNWaXNhYmxlKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc1Zpc2FibGUodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdG9nZ2xlVmlzaWJpbGl0eSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdG9nZ2xlVmlzaWJpbGl0eSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxhIGFjdGlvbj1cIl9ibGFua1wiXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FtYXJpbGxhX2NvbnN0cnVpci9cIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmlnX2ljb259ICR7XG4gICAgICAgICAgaXNWaXNhYmxlID8gXCJvcGFjaXR5LTFcIiA6IFwib3BhY2l0eS0wIFwiXG4gICAgICAgIH1gfVxuICAgICAgICBhcmlhLWxhYmVsPVwiUmlnaHQgQWxpZ25cIlxuICAgICAgPlxuICAgICAgICA8RmFJbnN0YWdyYW0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbGFzc2VzIiwiRmFJbnN0YWdyYW0iLCJJZ0ljb24iLCJpc1Zpc2FibGUiLCJzZXRJc1Zpc2FibGUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImEiLCJhY3Rpb24iLCJocmVmIiwidHlwZSIsImNsYXNzTmFtZSIsImlnX2ljb24iLCJhcmlhLWxhYmVsIiwiYXJpYS1oaWRkZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/instagram/ig-icon.js\n"));

/***/ })

});