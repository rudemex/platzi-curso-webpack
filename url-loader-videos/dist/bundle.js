/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'node-releases/data/processed/envs.json' (While processing preset: \"/Users/mex/node_modules/@babel/preset-env/lib/index.js\")\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:507:25)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at Object.<anonymous> (/Users/mex/node_modules/browserslist/index.js:1:80)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at _browserslist (/Users/mex/node_modules/@babel/preset-env/lib/normalize-options.js:20:39)\n    at Object.<anonymous> (/Users/mex/node_modules/@babel/preset-env/lib/normalize-options.js:80:50)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at Object.<anonymous> (/Users/mex/node_modules/@babel/preset-env/lib/targets-parser.js:40:25)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at Object.<anonymous> (/Users/mex/node_modules/@babel/preset-env/lib/utils.js:50:22)");

/***/ })
/******/ ]);