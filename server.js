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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _render = __webpack_require__(/*! ./render */ \"./server/render.js\");\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _store = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar PORT = process.env.PORT || 8080;\nvar app = (0, _express2.default)();\n\napp.use('/dist', _express2.default.static('dist'));\napp.use('/img', _express2.default.static('img'));\napp.get('*', function () {\n\tvar _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {\n\t\tvar actions, context, content;\n\t\treturn _regenerator2.default.wrap(function _callee2$(_context2) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\tactions = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref2) {\n\t\t\t\t\t\t\tvar route = _ref2.route;\n\t\t\t\t\t\t\treturn route.component.fetching ? route.component.fetching(_extends({}, _store2.default, { path: req.path })) : null;\n\t\t\t\t\t\t}).map(function () {\n\t\t\t\t\t\t\tvar _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(actions) {\n\t\t\t\t\t\t\t\treturn _regenerator2.default.wrap(function _callee$(_context) {\n\t\t\t\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\t\t\t\t_context.next = 2;\n\t\t\t\t\t\t\t\t\t\t\t\treturn Promise.all((actions || []).map(function (p) {\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn p && new Promise(function (resolve) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treturn p.then(resolve).catch(resolve);\n\t\t\t\t\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\t\t\t\t\treturn _context.abrupt('return', _context.sent);\n\n\t\t\t\t\t\t\t\t\t\t\tcase 3:\n\t\t\t\t\t\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}, _callee, undefined);\n\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\treturn function (_x3) {\n\t\t\t\t\t\t\t\treturn _ref3.apply(this, arguments);\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t}());\n\t\t\t\t\t\t_context2.next = 3;\n\t\t\t\t\t\treturn Promise.all(actions);\n\n\t\t\t\t\tcase 3:\n\t\t\t\t\t\tcontext = {};\n\t\t\t\t\t\tcontent = (0, _render2.default)(req.path, _store2.default, context);\n\n\n\t\t\t\t\t\tres.send(content);\n\n\t\t\t\t\tcase 6:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee2, undefined);\n\t}));\n\n\treturn function (_x, _x2) {\n\t\treturn _ref.apply(this, arguments);\n\t};\n}());\n\napp.listen(PORT, function () {\n\treturn console.log('Frontend service listening on port: ' + PORT);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _trophy = __webpack_require__(/*! ../src/icons/trophy.png */ \"./src/icons/trophy.png\");\n\nvar _trophy2 = _interopRequireDefault(_trophy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (pathname, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: pathname, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n\n  return '\\n  <!DOCTYPE html>\\n      <html lang=\"en\">\\n      <head>\\n        <meta charset=\"UTF-8\">\\n        <link rel=\"shortcut icon\" href=\"' + _trophy2.default + '\" />\\n        <title>Speedrun</title>\\n      </head>\\n      <body>\\n      \\n      <div id=\"app\">' + content + '</div>\\n      <script>\\n        window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\\n      </script>\\n      <script src=\"dist/bundle.js\"></script>\\n      </body>\\n      </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./src/action/gamesActions.js":
/*!************************************!*\
  !*** ./src/action/gamesActions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.fetchGame = exports.fetchGames = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/action/types.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchGames = exports.fetchGames = function fetchGames(sortGames) {\n\treturn function () {\n\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n\t\t\tvar first20games, second20games;\n\t\t\treturn _regenerator2.default.wrap(function _callee$(_context) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t_context.prev = 0;\n\n\t\t\t\t\t\t\tdispatch({ type: _types.REQUEST_GAMES });\n\t\t\t\t\t\t\tfirst20games = undefined;\n\t\t\t\t\t\t\tsecond20games = undefined;\n\n\t\t\t\t\t\t\tif (!sortGames) {\n\t\t\t\t\t\t\t\t_context.next = 13;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t_context.next = 7;\n\t\t\t\t\t\t\treturn _axios2.default.get('https://www.speedrun.com/api/v1/games?orderby=created&direction=desc');\n\n\t\t\t\t\t\tcase 7:\n\t\t\t\t\t\t\tfirst20games = _context.sent;\n\t\t\t\t\t\t\t_context.next = 10;\n\t\t\t\t\t\t\treturn _axios2.default.get('https://www.speedrun.com/api/v1/games?orderby=created&direction=desc&offset=20');\n\n\t\t\t\t\t\tcase 10:\n\t\t\t\t\t\t\tsecond20games = _context.sent;\n\t\t\t\t\t\t\t_context.next = 19;\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tcase 13:\n\t\t\t\t\t\t\t_context.next = 15;\n\t\t\t\t\t\t\treturn _axios2.default.get('https://www.speedrun.com/api/v1/games');\n\n\t\t\t\t\t\tcase 15:\n\t\t\t\t\t\t\tfirst20games = _context.sent;\n\t\t\t\t\t\t\t_context.next = 18;\n\t\t\t\t\t\t\treturn _axios2.default.get('https://www.speedrun.com/api/v1/games?offset=20');\n\n\t\t\t\t\t\tcase 18:\n\t\t\t\t\t\t\tsecond20games = _context.sent;\n\n\t\t\t\t\t\tcase 19:\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: _types.RECEIVE_GAMES,\n\t\t\t\t\t\t\t\tpayload: [].concat(_toConsumableArray(first20games.data.data), _toConsumableArray(second20games.data.data))\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t_context.next = 25;\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tcase 22:\n\t\t\t\t\t\t\t_context.prev = 22;\n\t\t\t\t\t\t\t_context.t0 = _context['catch'](0);\n\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: _types.RECEIVE_GAMES,\n\t\t\t\t\t\t\t\tpayload: []\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\tcase 25:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee, undefined, [[0, 22]]);\n\t\t}));\n\n\t\treturn function (_x) {\n\t\t\treturn _ref.apply(this, arguments);\n\t\t};\n\t}();\n};\n\nvar fetchGame = exports.fetchGame = function fetchGame(id) {\n\treturn function () {\n\t\tvar _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {\n\t\t\tvar res, resRuns, gameInfo, videosUrl, playerUri, resPlayer, runsList, playerData, playerInfo, runs;\n\t\t\treturn _regenerator2.default.wrap(function _callee2$(_context2) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t_context2.prev = 0;\n\n\t\t\t\t\t\t\tdispatch({ type: _types.REQUEST_GAME });\n\n\t\t\t\t\t\t\t_context2.next = 4;\n\t\t\t\t\t\t\treturn _axios2.default.get('https://www.speedrun.com/api/v1/games/' + id);\n\n\t\t\t\t\t\tcase 4:\n\t\t\t\t\t\t\tres = _context2.sent;\n\t\t\t\t\t\t\t_context2.next = 7;\n\t\t\t\t\t\t\treturn _axios2.default.get('https://www.speedrun.com/api/v1/runs?game=' + id);\n\n\t\t\t\t\t\tcase 7:\n\t\t\t\t\t\t\tresRuns = _context2.sent;\n\t\t\t\t\t\t\tgameInfo = {\n\t\t\t\t\t\t\t\tgameName: res.data.data.names.international,\n\t\t\t\t\t\t\t\tgameImg: res.data.data.assets['cover-medium'].uri,\n\t\t\t\t\t\t\t\timgs: res.data.data\n\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\tif (!(resRuns.data.data.length < 1)) {\n\t\t\t\t\t\t\t\t_context2.next = 12;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: _types.NO_RECEIVE_GAME,\n\t\t\t\t\t\t\t\tpayload: { game: _extends({}, gameInfo) }\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\treturn _context2.abrupt('return');\n\n\t\t\t\t\t\tcase 12:\n\t\t\t\t\t\t\tvideosUrl = resRuns.data.data[0].videos.links[0].uri;\n\t\t\t\t\t\t\tplayerUri = resRuns.data.data[0].players[0].uri;\n\t\t\t\t\t\t\t_context2.next = 16;\n\t\t\t\t\t\t\treturn _axios2.default.get(playerUri);\n\n\t\t\t\t\t\tcase 16:\n\t\t\t\t\t\t\tresPlayer = _context2.sent;\n\t\t\t\t\t\t\trunsList = resRuns.data.data;\n\t\t\t\t\t\t\tplayerData = resPlayer.data.data;\n\t\t\t\t\t\t\tplayerInfo = {};\n\n\n\t\t\t\t\t\t\tif (playerData.name) {\n\t\t\t\t\t\t\t\tplayerInfo['name'] = playerData.name;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif (playerData.names) {\n\t\t\t\t\t\t\t\tplayerInfo['name'] = playerData.names.international;\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tplayerInfo['name'] = 'No name';\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\truns = {\n\t\t\t\t\t\t\t\tgame: runsList[0].game,\n\t\t\t\t\t\t\t\tcategory: runsList[0].category,\n\t\t\t\t\t\t\t\tdate: runsList[0].date,\n\t\t\t\t\t\t\t\tcomment: runsList[0].comment,\n\t\t\t\t\t\t\t\trealtime: runsList[0].times.realtime_t\n\t\t\t\t\t\t\t};\n\n\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: _types.RECEIVE_GAME,\n\t\t\t\t\t\t\t\tpayload: {\n\t\t\t\t\t\t\t\t\tgame: _extends({}, gameInfo),\n\t\t\t\t\t\t\t\t\truns: runs,\n\t\t\t\t\t\t\t\t\tplayerInfo: playerInfo,\n\t\t\t\t\t\t\t\t\tvideoUrl: videosUrl,\n\t\t\t\t\t\t\t\t\terror: false\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t_context2.next = 29;\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tcase 26:\n\t\t\t\t\t\t\t_context2.prev = 26;\n\t\t\t\t\t\t\t_context2.t0 = _context2['catch'](0);\n\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: _types.ERROR,\n\t\t\t\t\t\t\t\terror: true\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\tcase 29:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee2, undefined, [[0, 26]]);\n\t\t}));\n\n\t\treturn function (_x2) {\n\t\t\treturn _ref2.apply(this, arguments);\n\t\t};\n\t}();\n};\n\n//# sourceURL=webpack:///./src/action/gamesActions.js?");

/***/ }),

/***/ "./src/action/types.js":
/*!*****************************!*\
  !*** ./src/action/types.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar REQUEST_GAMES = exports.REQUEST_GAMES = 'REQUEST_GAMES';\nvar RECEIVE_GAMES = exports.RECEIVE_GAMES = 'RECEIVE_GAMES';\n\nvar RECEIVE_GAME = exports.RECEIVE_GAME = 'RECEIVE_GAME';\nvar NO_RECEIVE_GAME = exports.NO_RECEIVE_GAME = 'NO_RECEIVE_GAME';\nvar REQUEST_GAME = exports.REQUEST_GAME = 'REQUEST_GAME';\n\nvar ERROR = exports.ERROR = 'ERROR';\n\n//# sourceURL=webpack:///./src/action/types.js?");

/***/ }),

/***/ "./src/common/Loading.js":
/*!*******************************!*\
  !*** ./src/common/Loading.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Loading = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Loading = exports.Loading = function Loading() {\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"loader\" },\n    \"Loading...\"\n  );\n};\n\n//# sourceURL=webpack:///./src/common/Loading.js?");

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Loading = __webpack_require__(/*! ./Loading */ \"./src/common/Loading.js\");\n\nObject.keys(_Loading).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Loading[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/components/Game/GameComponent.js":
/*!**********************************************!*\
  !*** ./src/components/Game/GameComponent.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _common = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n\nvar _errorPage = __webpack_require__(/*! ../errors/errorPage */ \"./src/components/errors/errorPage.js\");\n\nvar _errorPage2 = _interopRequireDefault(_errorPage);\n\nvar _GameInfoComponent = __webpack_require__(/*! ./GameInfoComponent */ \"./src/components/Game/GameInfoComponent.js\");\n\nvar _GameInfoComponent2 = _interopRequireDefault(_GameInfoComponent);\n\nvar _leftArrow = __webpack_require__(/*! ../../icons/leftArrow.png */ \"./src/icons/leftArrow.png\");\n\nvar _leftArrow2 = _interopRequireDefault(_leftArrow);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar propTypes = {\n\tfetchGame: _propTypes2.default.func.isRequired,\n\tmatch: _propTypes2.default.object.isRequired,\n\tgameData: _propTypes2.default.object,\n\tplayerInfo: _propTypes2.default.object,\n\tvideoUrl: _propTypes2.default.string,\n\truns: _propTypes2.default.object,\n\terror: _propTypes2.default.bool.isRequired,\n\tnoData: _propTypes2.default.bool.isRequired\n};\n\nvar GameComponent = function (_Component) {\n\t_inherits(GameComponent, _Component);\n\n\tfunction GameComponent() {\n\t\t_classCallCheck(this, GameComponent);\n\n\t\treturn _possibleConstructorReturn(this, (GameComponent.__proto__ || Object.getPrototypeOf(GameComponent)).apply(this, arguments));\n\t}\n\n\t_createClass(GameComponent, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tvar _props = this.props,\n\t\t\t    fetchGame = _props.fetchGame,\n\t\t\t    match = _props.match;\n\n\t\t\tvar id = match.params.id;\n\n\t\t\tfetchGame(id);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props2 = this.props,\n\t\t\t    isFetching = _props2.isFetching,\n\t\t\t    gameData = _props2.gameData,\n\t\t\t    playerInfo = _props2.playerInfo,\n\t\t\t    videoUrl = _props2.videoUrl,\n\t\t\t    runs = _props2.runs,\n\t\t\t    error = _props2.error,\n\t\t\t    noData = _props2.noData;\n\n\n\t\t\tif (isFetching || !runs || error) {\n\t\t\t\tif (noData && gameData || error) {\n\t\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t_react2.default.Fragment,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(_errorPage2.default, { gameData: gameData })\n\t\t\t\t\t);\n\t\t\t\t} else {\n\t\t\t\t\treturn _react2.default.createElement(_common.Loading, null);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'container' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactRouterDom.NavLink,\n\t\t\t\t\t{ id: 'arrow-back', className: 'arrow-back', to: '/' },\n\t\t\t\t\t_react2.default.createElement('img', { src: _leftArrow2.default })\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'game-info-container' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'game-container' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'h1',\n\t\t\t\t\t\t\t{ className: 'game-title' },\n\t\t\t\t\t\t\tgameData.game.gameName\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement('img', { src: gameData.game.gameImg })\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(_GameInfoComponent2.default, {\n\t\t\t\t\t\tplayerInfo: playerInfo,\n\t\t\t\t\t\tvideoUrl: videoUrl,\n\t\t\t\t\t\truns: runs\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn GameComponent;\n}(_react.Component);\n\nGameComponent.propTypes = propTypes;\n\nexports.default = GameComponent;\n\n//# sourceURL=webpack:///./src/components/Game/GameComponent.js?");

/***/ }),

/***/ "./src/components/Game/GameInfoComponent.js":
/*!**************************************************!*\
  !*** ./src/components/Game/GameInfoComponent.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar propTypes = {\n\tplayerInfo: _propTypes2.default.object.isRequired,\n\tvideoUrl: _propTypes2.default.string.isRequired,\n\truns: _propTypes2.default.object.isRequired\n};\n\nvar GameInfoComponent = function GameInfoComponent(_ref) {\n\tvar playerInfo = _ref.playerInfo,\n\t    videoUrl = _ref.videoUrl,\n\t    runs = _ref.runs;\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'game__info' },\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\t{ id: 'gameId', className: 'game__key' },\n\t\t\t'Game ID:',\n\t\t\t_react2.default.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: 'game__value' },\n\t\t\t\t' ',\n\t\t\t\truns.game\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\t{ id: 'gameCategory', className: 'game__key' },\n\t\t\t'Category:',\n\t\t\t_react2.default.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: 'game__value' },\n\t\t\t\t' ',\n\t\t\t\truns.category\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\t{ id: 'playerInfo', className: 'game__key' },\n\t\t\t'Player\\'s name:',\n\t\t\t_react2.default.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: 'game__value' },\n\t\t\t\t' ',\n\t\t\t\tplayerInfo.name\n\t\t\t),\n\t\t\t' '\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\t{ id: 'runComment', className: 'game__key' },\n\t\t\t'Run Comments:',\n\t\t\t_react2.default.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: 'game__value' },\n\t\t\t\t' ',\n\t\t\t\truns.comment\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\t{ id: 'runDate', className: 'game__key' },\n\t\t\t'Run Date:',\n\t\t\t_react2.default.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: 'game__value' },\n\t\t\t\t' ',\n\t\t\t\truns.date\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\t{ id: 'runRealTime', className: 'game__key' },\n\t\t\t'Run Real Time:',\n\t\t\t_react2.default.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: 'game__value' },\n\t\t\t\t' ',\n\t\t\t\truns.realtime,\n\t\t\t\t's'\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\t{ id: 'runRealTime', className: 'game__key' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'a',\n\t\t\t\t{ className: 'game__value', target: '_blank', href: videoUrl },\n\t\t\t\t'Play video'\n\t\t\t)\n\t\t)\n\t);\n};\n\nGameInfoComponent.propTypes = propTypes;\n\nexports.default = GameInfoComponent;\n\n//# sourceURL=webpack:///./src/components/Game/GameInfoComponent.js?");

/***/ }),

/***/ "./src/components/Games/GameCardComponent.js":
/*!***************************************************!*\
  !*** ./src/components/Games/GameCardComponent.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar propTypes = {\n\tgame: _propTypes2.default.object.isRequired\n};\n\nvar gameCard = function gameCard(_ref) {\n\tvar game = _ref.game;\n\n\tif (!game) {\n\t\treturn;\n\t}\n\treturn _react2.default.createElement(\n\t\t_reactRouterDom.NavLink,\n\t\t{ to: '/' + game.id, id: game.id, className: 'games-item' },\n\t\t_react2.default.createElement('img', {\n\t\t\twidth: 100,\n\t\t\theight: 100,\n\t\t\tsrc: game.assets['cover-large'].uri || '',\n\t\t\talt: game.id\n\t\t}),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'games-item-data' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'h4',\n\t\t\t\t{ id: 'game-title' },\n\t\t\t\tgame.names.international.replace(/[^a-zA-Z ]/g, '') || game.abbreviation\n\t\t\t)\n\t\t)\n\t);\n};\n\ngameCard.propTypes = propTypes;\n\nexports.default = gameCard;\n\n//# sourceURL=webpack:///./src/components/Games/GameCardComponent.js?");

/***/ }),

/***/ "./src/components/Games/GamesComponent.js":
/*!************************************************!*\
  !*** ./src/components/Games/GamesComponent.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _common = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n\nvar _GamesFilteredListComponent = __webpack_require__(/*! ./GamesFilteredListComponent */ \"./src/components/Games/GamesFilteredListComponent.js\");\n\nvar _GamesFilteredListComponent2 = _interopRequireDefault(_GamesFilteredListComponent);\n\nvar _SearchComponent = __webpack_require__(/*! ../Search/SearchComponent */ \"./src/components/Search/SearchComponent.js\");\n\nvar _SearchComponent2 = _interopRequireDefault(_SearchComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar propTypes = {\n\tfetchGames: _propTypes2.default.func.isRequired,\n\tgames: _propTypes2.default.shape({\n\t\tisFetching: _propTypes2.default.bool.isRequired,\n\t\tgamesData: _propTypes2.default.array.isRequired\n\t})\n};\n\nvar GamesComponent = function (_Component) {\n\t_inherits(GamesComponent, _Component);\n\n\tfunction GamesComponent() {\n\t\tvar _ref,\n\t\t    _this2 = this;\n\n\t\tvar _temp, _this, _ret;\n\n\t\t_classCallCheck(this, GamesComponent);\n\n\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\targs[_key] = arguments[_key];\n\t\t}\n\n\t\treturn _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GamesComponent.__proto__ || Object.getPrototypeOf(GamesComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n\t\t\tsearchTerm: '',\n\t\t\tfilterdGamesList: [],\n\t\t\tsearching: false,\n\t\t\tsortGames: false\n\t\t}, _this.filterIt = function (game, searchTerm) {\n\t\t\treturn game.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) || game.id.includes(searchTerm);\n\t\t}, _this.handleSearch = function (e) {\n\t\t\tvar gamesData = _this.props.games.gamesData;\n\n\t\t\tvar searchTerm = e.target.value;\n\t\t\tvar filterdGamesList = gamesData.filter(function (game) {\n\t\t\t\treturn _this.filterIt(game, searchTerm);\n\t\t\t});\n\t\t\t_this.setState({ searchTerm: searchTerm, searching: true, filterdGamesList: filterdGamesList });\n\t\t}, _this.handleClickSort = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n\t\t\tvar fetchGames, sortGames;\n\t\t\treturn _regenerator2.default.wrap(function _callee$(_context) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\tfetchGames = _this.props.fetchGames;\n\t\t\t\t\t\t\tsortGames = _this.state.sortGames;\n\n\t\t\t\t\t\t\t_this.setState({ sortGames: !sortGames, searching: false });\n\t\t\t\t\t\t\tfetchGames(!sortGames);\n\n\t\t\t\t\t\tcase 4:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee, _this2);\n\t\t})), _temp), _possibleConstructorReturn(_this, _ret);\n\t}\n\n\t_createClass(GamesComponent, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tvar fetchGames = this.props.fetchGames;\n\t\t\tvar sortGames = this.state.sortGames;\n\n\t\t\tfetchGames(sortGames);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props$games = this.props.games,\n\t\t\t    isFetching = _props$games.isFetching,\n\t\t\t    gamesData = _props$games.gamesData;\n\t\t\tvar _state = this.state,\n\t\t\t    filterdGamesList = _state.filterdGamesList,\n\t\t\t    searching = _state.searching,\n\t\t\t    sortGames = _state.sortGames;\n\n\n\t\t\tif (isFetching) {\n\t\t\t\treturn _react2.default.createElement(_common.Loading, null);\n\t\t\t}\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_react2.default.Fragment,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'container' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'games-searchbar' },\n\t\t\t\t\t\t_react2.default.createElement(_SearchComponent2.default, { search: this.handleSearch }),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'h4',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Sort by: '\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'button',\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tid: 'sort-btn',\n\t\t\t\t\t\t\t\tclassName: 'sort-btn',\n\t\t\t\t\t\t\t\tstyle: sortGames ? {\n\t\t\t\t\t\t\t\t\tbackgroundColor: '#2c3e50',\n\t\t\t\t\t\t\t\t\tcolor: 'white'\n\t\t\t\t\t\t\t\t} : {},\n\t\t\t\t\t\t\t\tonClick: this.handleClickSort },\n\t\t\t\t\t\t\t'Creation Date'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'games-container' },\n\t\t\t\t\t\t_react2.default.createElement(_GamesFilteredListComponent2.default, {\n\t\t\t\t\t\t\tsearching: searching,\n\t\t\t\t\t\t\tgamesData: gamesData,\n\t\t\t\t\t\t\tfilterdGamesList: filterdGamesList\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn GamesComponent;\n}(_react.Component);\n\nGamesComponent.propTypes = propTypes;\n\nexports.default = GamesComponent;\n\n//# sourceURL=webpack:///./src/components/Games/GamesComponent.js?");

/***/ }),

/***/ "./src/components/Games/GamesFilteredListComponent.js":
/*!************************************************************!*\
  !*** ./src/components/Games/GamesFilteredListComponent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _GameCardComponent = __webpack_require__(/*! ./GameCardComponent */ \"./src/components/Games/GameCardComponent.js\");\n\nvar _GameCardComponent2 = _interopRequireDefault(_GameCardComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar propTypes = {\n\tsearching: _propTypes2.default.bool.isRequired,\n\tfilterdGamesList: _propTypes2.default.array.isRequired,\n\tgamesData: _propTypes2.default.array.isRequired\n};\n\nvar GamesFilteredList = function GamesFilteredList(_ref) {\n\tvar searching = _ref.searching,\n\t    filterdGamesList = _ref.filterdGamesList,\n\t    gamesData = _ref.gamesData;\n\n\tif (searching) {\n\t\treturn filterdGamesList.map(function (game, key) {\n\t\t\treturn _react2.default.createElement(_GameCardComponent2.default, { game: game, key: key });\n\t\t});\n\t} else {\n\t\treturn gamesData.map(function (game, key) {\n\t\t\treturn _react2.default.createElement(_GameCardComponent2.default, { game: game, key: key });\n\t\t});\n\t}\n};\n\nGamesFilteredList.propTypes = propTypes;\n\nexports.default = GamesFilteredList;\n\n//# sourceURL=webpack:///./src/components/Games/GamesFilteredListComponent.js?");

/***/ }),

/***/ "./src/components/Search/SearchComponent.js":
/*!**************************************************!*\
  !*** ./src/components/Search/SearchComponent.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SearchComponent = function SearchComponent(props) {\n\tvar search = props.search;\n\n\treturn _react2.default.createElement('input', {\n\t\tclassName: 'search-input',\n\t\tplaceholder: 'Search for...',\n\t\tonChange: function onChange(e) {\n\t\t\treturn search(e);\n\t\t},\n\t\ttype: 'text'\n\t});\n};\n\nexports.default = SearchComponent;\n\n//# sourceURL=webpack:///./src/components/Search/SearchComponent.js?");

/***/ }),

/***/ "./src/components/errors/errorPage.js":
/*!********************************************!*\
  !*** ./src/components/errors/errorPage.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _leftArrow = __webpack_require__(/*! ../../icons/leftArrow.png */ \"./src/icons/leftArrow.png\");\n\nvar _leftArrow2 = _interopRequireDefault(_leftArrow);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar propTypes = {\n\tgameData: _propTypes2.default.object\n};\n\nvar ErrorPage = function (_Component) {\n\t_inherits(ErrorPage, _Component);\n\n\tfunction ErrorPage() {\n\t\t_classCallCheck(this, ErrorPage);\n\n\t\treturn _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));\n\t}\n\n\t_createClass(ErrorPage, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar gameData = this.props.gameData;\n\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_react2.default.Fragment,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactRouterDom.NavLink,\n\t\t\t\t\t{ id: 'arrow-back', className: 'arrow-404', to: '/' },\n\t\t\t\t\t_react2.default.createElement('img', { src: _leftArrow2.default })\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\t{ className: 'message' },\n\t\t\t\t\t'Sorry! We can not find any data for the Game:'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\t{ className: 'message-title' },\n\t\t\t\t\tgameData ? gameData.game.gameName : ''\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'planet' },\n\t\t\t\t\t_react2.default.createElement('div', { className: 'crater' }),\n\t\t\t\t\t_react2.default.createElement('div', { className: 'crater' }),\n\t\t\t\t\t_react2.default.createElement('div', { className: 'crater' }),\n\t\t\t\t\t_react2.default.createElement('div', { className: 'crater' }),\n\t\t\t\t\t_react2.default.createElement('div', { className: 'crater' }),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'rover ' },\n\t\t\t\t\t\t_react2.default.createElement('div', { className: 'body ' }),\n\t\t\t\t\t\t_react2.default.createElement('div', { className: 'wheels ' }),\n\t\t\t\t\t\t_react2.default.createElement('div', { className: 'trace' })\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'flag' },\n\t\t\t\t\t\t'404'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn ErrorPage;\n}(_react.Component);\n\nErrorPage.propTypes = propTypes;\n\nexports.default = ErrorPage;\n\n//# sourceURL=webpack:///./src/components/errors/errorPage.js?");

/***/ }),

/***/ "./src/containers/GameContainer.js":
/*!*****************************************!*\
  !*** ./src/containers/GameContainer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _gamesActions = __webpack_require__(/*! ../action/gamesActions */ \"./src/action/gamesActions.js\");\n\nvar _GameComponent = __webpack_require__(/*! ../components/Game/GameComponent */ \"./src/components/Game/GameComponent.js\");\n\nvar _GameComponent2 = _interopRequireDefault(_GameComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tgame: state.game,\n\t\tnoData: state.game.noData,\n\t\tgameData: state.game.gameData,\n\t\tisFetching: state.game.isFetching,\n\t\truns: state.game.runs,\n\t\tplayerInfo: state.game.playerInfo,\n\t\tvideoUrl: state.game.videoUrl,\n\t\terror: state.game.error\n\t};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tfetchGame: function fetchGame(id) {\n\t\t\treturn dispatch((0, _gamesActions.fetchGame)(id));\n\t\t}\n\t};\n};\n\nvar GamesContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_GameComponent2.default);\n\nexports.default = GamesContainer;\n\n//# sourceURL=webpack:///./src/containers/GameContainer.js?");

/***/ }),

/***/ "./src/containers/GamesContainer.js":
/*!******************************************!*\
  !*** ./src/containers/GamesContainer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _GamesComponent = __webpack_require__(/*! ../components/Games/GamesComponent */ \"./src/components/Games/GamesComponent.js\");\n\nvar _GamesComponent2 = _interopRequireDefault(_GamesComponent);\n\nvar _gamesActions = __webpack_require__(/*! ../action/gamesActions */ \"./src/action/gamesActions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn { games: state.games };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tfetchGames: function fetchGames(sortGames) {\n\t\t\treturn dispatch((0, _gamesActions.fetchGames)(sortGames));\n\t\t}\n\t};\n};\n\nvar GamesContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_GamesComponent2.default);\n\nexports.default = GamesContainer;\n\n//# sourceURL=webpack:///./src/containers/GamesContainer.js?");

/***/ }),

/***/ "./src/icons/leftArrow.png":
/*!*********************************!*\
  !*** ./src/icons/leftArrow.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dist/leftArrow.png\";\n\n//# sourceURL=webpack:///./src/icons/leftArrow.png?");

/***/ }),

/***/ "./src/icons/trophy.png":
/*!******************************!*\
  !*** ./src/icons/trophy.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dist/trophy.png\";\n\n//# sourceURL=webpack:///./src/icons/trophy.png?");

/***/ }),

/***/ "./src/reducers/gameReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/gameReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _INITIAL_STATE;\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar INITIAL_STATE = (_INITIAL_STATE = {\n\tisFetching: false,\n\tgameData: undefined,\n\tvideoUrl: undefined,\n\truns: undefined,\n\tplayerInfo: undefined\n}, _defineProperty(_INITIAL_STATE, 'isFetching', true), _defineProperty(_INITIAL_STATE, 'error', false), _defineProperty(_INITIAL_STATE, 'noData', false), _INITIAL_STATE);\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _types.REQUEST_GAME:\n\t\t\t{\n\t\t\t\treturn _extends({}, state, {\n\t\t\t\t\tgameData: undefined,\n\t\t\t\t\tvideoUrl: undefined,\n\t\t\t\t\truns: undefined,\n\t\t\t\t\tplayerInfo: undefined,\n\t\t\t\t\tisFetching: true,\n\t\t\t\t\terror: false\n\t\t\t\t});\n\t\t\t}\n\t\tcase _types.RECEIVE_GAME:\n\t\t\t{\n\t\t\t\treturn _extends({}, state, {\n\t\t\t\t\tisFetching: false,\n\t\t\t\t\tgameData: action.payload,\n\t\t\t\t\tvideoUrl: action.payload.videoUrl,\n\t\t\t\t\truns: action.payload.runs,\n\t\t\t\t\tplayerInfo: action.payload.playerInfo,\n\t\t\t\t\tnoData: false,\n\t\t\t\t\terror: false\n\t\t\t\t});\n\t\t\t}\n\t\tcase _types.NO_RECEIVE_GAME:\n\t\t\t{\n\t\t\t\treturn _extends({}, state, {\n\t\t\t\t\tisFetching: false,\n\t\t\t\t\tnoData: true,\n\t\t\t\t\tgameData: action.payload,\n\t\t\t\t\terror: false\n\t\t\t\t});\n\t\t\t}\n\t\tcase _types.ERROR:\n\t\t\t{\n\t\t\t\treturn _extends({}, state, {\n\t\t\t\t\terror: action.error\n\t\t\t\t});\n\t\t\t}\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/reducers/gameReducer.js?");

/***/ }),

/***/ "./src/reducers/gamesReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/gamesReducer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n\tisFetching: false,\n\tgamesData: []\n};\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _types.REQUEST_GAMES:\n\t\t\t{\n\t\t\t\treturn _extends({}, state, {\n\t\t\t\t\tisFetching: true\n\t\t\t\t});\n\t\t\t}\n\t\tcase _types.RECEIVE_GAMES:\n\t\t\t{\n\t\t\t\treturn _extends({}, state, {\n\t\t\t\t\tisFetching: false,\n\t\t\t\t\tgamesData: action.payload\n\t\t\t\t});\n\t\t\t}\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/reducers/gamesReducer.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _gamesReducer = __webpack_require__(/*! ./gamesReducer */ \"./src/reducers/gamesReducer.js\");\n\nvar _gamesReducer2 = _interopRequireDefault(_gamesReducer);\n\nvar _gameReducer = __webpack_require__(/*! ./gameReducer */ \"./src/reducers/gameReducer.js\");\n\nvar _gameReducer2 = _interopRequireDefault(_gameReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n\tgames: _gamesReducer2.default,\n\tgame: _gameReducer2.default\n});\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/router/Routes.js":
/*!******************************!*\
  !*** ./src/router/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _GameContainer = __webpack_require__(/*! ../containers/GameContainer */ \"./src/containers/GameContainer.js\");\n\nvar _GameContainer2 = _interopRequireDefault(_GameContainer);\n\nvar _GamesContainer = __webpack_require__(/*! ../containers/GamesContainer */ \"./src/containers/GamesContainer.js\");\n\nvar _GamesContainer2 = _interopRequireDefault(_GamesContainer);\n\nvar _errorPage = __webpack_require__(/*! ../components/errors/errorPage */ \"./src/components/errors/errorPage.js\");\n\nvar _errorPage2 = _interopRequireDefault(_errorPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n\tcomponent: _GamesContainer2.default,\n\tpath: '/',\n\texact: true\n}, {\n\tcomponent: _errorPage2.default,\n\tpath: '/404'\n}, {\n\tcomponent: _GameContainer2.default,\n\tpath: '/:id'\n}];\n\n//# sourceURL=webpack:///./src/router/Routes.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });