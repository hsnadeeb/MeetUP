module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const password = encodeURIComponent("#Maddy@123"); // Construct the MongoDB connection string

      const connectionString = `mongodb+srv://hasan:${password}@livemeetup.vsjlgyd.mongodb.net/?retryWrites=true&w=majority`; // Initialize MongoDB client

      const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"](connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      try {
        // Connect to MongoDB
        await client.connect(); // Access the database and collection

        const db = client.db();
        const meetupsCollection = db.collection("livemeetup"); // Insert data into the collection

        const result = await meetupsCollection.insertOne(data);
        console.log(result); // Send a successful response to the client

        res.status(201).json({
          message: "Meetup inserted"
        });
      } finally {
        // Close the MongoDB connection
        await client.close();
      }
    } catch (error) {
      console.error("Error:", error); // Send an error response to the client with the detailed error message

      res.status(500).json({
        message: "Internal Server Error",
        error: error.message
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (handler); // import { MongoClient } from "mongodb";
// async function handler(req, res){
//     if(req.method==='POST'){
//         const data = req.body;
//         MongoClient.connect('mongodb+srv://hasan:#Maddy@123@livemeetup.vsjlgyd.mongodb.net/?retryWrites=true&w=majority');
//         const db = client.db();
//         const meetupsCollection= db.collection('livemeetup');
//         const result = await meetupsCollection.insertOne(data);
//         console.log(result);
//         client.close();
//         res.status(201).json({message:"Meetup inserted"});
//     }
// }
// export default handler;

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInBhc3N3b3JkIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiY29ubmVjdGlvblN0cmluZyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2xvc2UiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0IsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsUUFBSTtBQUNGLFlBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQjtBQUNBLFlBQU1DLFFBQVEsR0FBR0Msa0JBQWtCLENBQUMsWUFBRCxDQUFuQyxDQUZFLENBSUY7O0FBQ0EsWUFBTUMsZ0JBQWdCLEdBQUksdUJBQXNCRixRQUFTLDhEQUF6RCxDQUxFLENBT0Y7O0FBQ0EsWUFBTUcsTUFBTSxHQUFHLElBQUlDLG1EQUFKLENBQWdCRixnQkFBaEIsRUFBa0M7QUFDL0NHLHVCQUFlLEVBQUUsSUFEOEI7QUFFL0NDLDBCQUFrQixFQUFFO0FBRjJCLE9BQWxDLENBQWY7O0FBS0EsVUFBSTtBQUNGO0FBQ0EsY0FBTUgsTUFBTSxDQUFDSSxPQUFQLEVBQU4sQ0FGRSxDQUlGOztBQUNBLGNBQU1DLEVBQUUsR0FBR0wsTUFBTSxDQUFDSyxFQUFQLEVBQVg7QUFDQSxjQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsWUFBZCxDQUExQixDQU5FLENBUUY7O0FBQ0EsY0FBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxTQUFsQixDQUE0QmQsSUFBNUIsQ0FBckI7QUFDQWUsZUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQVosRUFWRSxDQVlGOztBQUNBZixXQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQXJCO0FBQ0QsT0FkRCxTQWNVO0FBQ1I7QUFDQSxjQUFNZCxNQUFNLENBQUNlLEtBQVAsRUFBTjtBQUNEO0FBQ0YsS0EvQkQsQ0ErQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2ROLGFBQU8sQ0FBQ00sS0FBUixDQUFjLFFBQWQsRUFBd0JBLEtBQXhCLEVBRGMsQ0FHZDs7QUFDQXZCLFNBQUcsQ0FBQ21CLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUUsdUJBQVg7QUFBb0NFLGFBQUssRUFBRUEsS0FBSyxDQUFDRjtBQUFqRCxPQUFyQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFY3ZCLHNFQUFmLEUsQ0FPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLDBCOzs7Ozs7Ozs7OztBQ2xFQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvbmV3LW1lZXR1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanNcIik7XG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gZW5jb2RlVVJJQ29tcG9uZW50KFwiI01hZGR5QDEyM1wiKTtcclxuXHJcbiAgICAgIC8vIENvbnN0cnVjdCB0aGUgTW9uZ29EQiBjb25uZWN0aW9uIHN0cmluZ1xyXG4gICAgICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gYG1vbmdvZGIrc3J2Oi8vaGFzYW46JHtwYXNzd29yZH1AbGl2ZW1lZXR1cC52c2psZ3lkLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xyXG5cclxuICAgICAgLy8gSW5pdGlhbGl6ZSBNb25nb0RCIGNsaWVudFxyXG4gICAgICBjb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQoY29ubmVjdGlvblN0cmluZywge1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBDb25uZWN0IHRvIE1vbmdvREJcclxuICAgICAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG5cclxuICAgICAgICAvLyBBY2Nlc3MgdGhlIGRhdGFiYXNlIGFuZCBjb2xsZWN0aW9uXHJcbiAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgICAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJsaXZlbWVldHVwXCIpO1xyXG5cclxuICAgICAgICAvLyBJbnNlcnQgZGF0YSBpbnRvIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIC8vIFNlbmQgYSBzdWNjZXNzZnVsIHJlc3BvbnNlIHRvIHRoZSBjbGllbnRcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiTWVldHVwIGluc2VydGVkXCIgfSk7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgLy8gQ2xvc2UgdGhlIE1vbmdvREIgY29ubmVjdGlvblxyXG4gICAgICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuXHJcbiAgICAgIC8vIFNlbmQgYW4gZXJyb3IgcmVzcG9uc2UgdG8gdGhlIGNsaWVudCB3aXRoIHRoZSBkZXRhaWxlZCBlcnJvciBtZXNzYWdlXHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xyXG4vLyAgICAgaWYocmVxLm1ldGhvZD09PSdQT1NUJyl7XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG5cclxuLy8gICAgICAgICBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2hhc2FuOiNNYWRkeUAxMjNAbGl2ZW1lZXR1cC52c2psZ3lkLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuLy8gICAgICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4vLyAgICAgICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uPSBkYi5jb2xsZWN0aW9uKCdsaXZlbWVldHVwJyk7XHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbi8vICAgICAgICAgY2xpZW50LmNsb3NlKCk7XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6XCJNZWV0dXAgaW5zZXJ0ZWRcIn0pO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBoYW5kbGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==