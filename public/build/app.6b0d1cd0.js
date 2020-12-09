/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/js/app.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\n      margin-right: ;\n                 ^\n      Style declaration must contain a value\n      in /var/www/html/application/assets/css/app.scss (line 201, column 19)\n    at runLoaders (/var/www/html/application/node_modules/webpack/lib/NormalModule.js:301:20)\n    at /var/www/html/application/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /var/www/html/application/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/var/www/html/application/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.render [as callback] (/var/www/html/application/node_modules/sass-loader/lib/loader.js:52:13)\n    at Object.done [as callback] (/var/www/html/application/node_modules/neo-async/async.js:8077:18)\n    at options.error (/var/www/html/application/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bootstrap_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap-select */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js");
/* harmony import */ var bootstrap_select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bootstrap_select__WEBPACK_IMPORTED_MODULE_12__);










function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





jquery__WEBPACK_IMPORTED_MODULE_9___default()('select').selectpicker({
  noneSelectedText: 'Wybierz...',
  liveSearchPlaceholder: 'Wyszukaj...',
  liveSearchNormalize: true
});
jquery__WEBPACK_IMPORTED_MODULE_9___default()('#readBooks input[type=date]').change(function () {
  var startDate = jquery__WEBPACK_IMPORTED_MODULE_9___default()('#book_readBooks_startDate');
  var endDate = jquery__WEBPACK_IMPORTED_MODULE_9___default()('#book_readBooks_endDate');
  var isRead = document.getElementById('book_readBooks_isRead');

  if (!isRead.checked && startDate.val() && endDate.val()) {
    isRead.checked = true;
  }
});

var modalConfirm = function modalConfirm(callback) {
  jquery__WEBPACK_IMPORTED_MODULE_9___default()(".btn-delete").on("click", function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_9___default()("#modalBookTitle").text(jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).attr("data-element-title"));
    jquery__WEBPACK_IMPORTED_MODULE_9___default()("#modal-btn-yes").attr('delete-element-id', jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).attr("data-element-id"));
    jquery__WEBPACK_IMPORTED_MODULE_9___default()("#mi-modal").modal('show');
  });
  jquery__WEBPACK_IMPORTED_MODULE_9___default()("#modal-btn-yes").on("click", function () {
    callback(true);
    var buttonDelete = jquery__WEBPACK_IMPORTED_MODULE_9___default()("[data-element-id=" + jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).attr("delete-element-id") + "]");
    var href = buttonDelete.attr('href');
    var backLink = buttonDelete.attr('back-link');
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (_typeof(backLink) !== ( true ? "undefined" : undefined) && backLink !== false) {
            location.replace(backLink);
          } else {
            location.reload();
          }
        } else {
          location.reload();
        }
      }
    };

    xhr.open('DELETE', href, true);
    xhr.send();
  });
  jquery__WEBPACK_IMPORTED_MODULE_9___default()("#modal-btn-no").on("click", function () {
    callback(false);
    jquery__WEBPACK_IMPORTED_MODULE_9___default()("#mi-modal").modal('hide');
  });
};

modalConfirm(function (confirm) {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkIiwic2VsZWN0cGlja2VyIiwibm9uZVNlbGVjdGVkVGV4dCIsImxpdmVTZWFyY2hQbGFjZWhvbGRlciIsImxpdmVTZWFyY2hOb3JtYWxpemUiLCJjaGFuZ2UiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiaXNSZWFkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrZWQiLCJ2YWwiLCJtb2RhbENvbmZpcm0iLCJjYWxsYmFjayIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImF0dHIiLCJtb2RhbCIsImJ1dHRvbkRlbGV0ZSIsImhyZWYiLCJiYWNrTGluayIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsImxvY2F0aW9uIiwicmVwbGFjZSIsInJlbG9hZCIsIm9wZW4iLCJzZW5kIiwiY29uZmlybSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUF5QixZQUFXO0FBQ2hDLFVBQUlGLEdBQUcsQ0FBQ0csVUFBSixLQUFtQixDQUF2QixFQUEwQjtBQUN0QixZQUFJSCxHQUFHLENBQUNJLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUNwQixjQUFJLFFBQU9MLFFBQVAsMkNBQXdDQSxRQUFRLEtBQUssS0FBekQsRUFBZ0U7QUFDNURNLG9CQUFRLENBQUNDLE9BQVQsQ0FBaUJQLFFBQWpCO0FBQ0gsV0FGRCxNQUVPO0FBQ0hNLG9CQUFRLENBQUNFLE1BQVQ7QUFDSDtBQUNKLFNBTkQsTUFNTztBQUNIRixrQkFBUSxDQUFDRSxNQUFUO0FBQ0g7QUFDSjtBQUNKLEtBWkQ7O0FBYUFQLE9BQUcsQ0FBQ1EsSUFBSixDQUFTLFFBQVQsRUFBbUJWLElBQW5CLEVBQXlCLElBQXpCO0FBQ0FFLE9BQUcsQ0FBQ1MsSUFBSjtBQUNILEdBdkJEO0FBeUJBakMsK0NBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJlLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDckNELFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDQWQsaURBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZW9CLEtBQWYsQ0FBcUIsTUFBckI7QUFDSCxHQUhEO0FBSUgsQ0F0Q0Q7O0FBd0NBUCxZQUFZLENBQUMsVUFBU3FCLE9BQVQsRUFBaUIsQ0FDN0IsQ0FEVyxDQUFaLEMiLCJmaWxlIjoiYXBwLjZiMGQxY2QwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hc3NldHMvanMvYXBwLmpzXCIsXCJ2ZW5kb3JzfmFwcFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1zZWxlY3QnO1xuXG4kKCdzZWxlY3QnKS5zZWxlY3RwaWNrZXIoe1xuICAgIG5vbmVTZWxlY3RlZFRleHQ6ICdXeWJpZXJ6Li4uJyxcbiAgICBsaXZlU2VhcmNoUGxhY2Vob2xkZXI6ICdXeXN6dWthai4uLicsXG4gICAgbGl2ZVNlYXJjaE5vcm1hbGl6ZTogdHJ1ZVxufSk7XG5cbiQoJyNyZWFkQm9va3MgaW5wdXRbdHlwZT1kYXRlXScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9ICQoJyNib29rX3JlYWRCb29rc19zdGFydERhdGUnKTtcbiAgICBsZXQgZW5kRGF0ZSA9ICQoJyNib29rX3JlYWRCb29rc19lbmREYXRlJyk7XG4gICAgbGV0IGlzUmVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rX3JlYWRCb29rc19pc1JlYWQnKTtcblxuICAgIGlmICghaXNSZWFkLmNoZWNrZWQgJiYgc3RhcnREYXRlLnZhbCgpICYmIGVuZERhdGUudmFsKCkpIHtcbiAgICAgICAgaXNSZWFkLmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbn0pO1xuXG52YXIgbW9kYWxDb25maXJtID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuXG4gICAgJChcIi5idG4tZGVsZXRlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcIiNtb2RhbEJvb2tUaXRsZVwiKS50ZXh0KCQodGhpcykuYXR0cihcImRhdGEtZWxlbWVudC10aXRsZVwiKSk7XG4gICAgICAgICQoXCIjbW9kYWwtYnRuLXllc1wiKS5hdHRyKCdkZWxldGUtZWxlbWVudC1pZCcsICQodGhpcykuYXR0cihcImRhdGEtZWxlbWVudC1pZFwiKSk7XG4gICAgICAgICQoXCIjbWktbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcblxuICAgICQoXCIjbW9kYWwtYnRuLXllc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNhbGxiYWNrKHRydWUpO1xuXG4gICAgICAgIGxldCBidXR0b25EZWxldGUgPSAkKFwiW2RhdGEtZWxlbWVudC1pZD1cIiArICQodGhpcykuYXR0cihcImRlbGV0ZS1lbGVtZW50LWlkXCIpICsgXCJdXCIpO1xuICAgICAgICBsZXQgaHJlZiA9IGJ1dHRvbkRlbGV0ZS5hdHRyKCdocmVmJyk7XG4gICAgICAgIGNvbnN0IGJhY2tMaW5rID0gYnV0dG9uRGVsZXRlLmF0dHIoJ2JhY2stbGluaycpO1xuXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJhY2tMaW5rICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIGJhY2tMaW5rICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShiYWNrTGluayk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oJ0RFTEVURScsIGhyZWYsIHRydWUpO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH0pO1xuXG4gICAgJChcIiNtb2RhbC1idG4tbm9cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICQoXCIjbWktbW9kYWxcIikubW9kYWwoJ2hpZGUnKTtcbiAgICB9KTtcbn07XG5cbm1vZGFsQ29uZmlybShmdW5jdGlvbihjb25maXJtKXtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=