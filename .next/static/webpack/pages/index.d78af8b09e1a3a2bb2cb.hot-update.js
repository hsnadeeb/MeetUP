webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "C:\\Users\\hadee\\Desktop\\sharpnerProjects\\MeetUP\\pages\\index.js";

// import MeetupList from '../components/meetups/MeetupList';
var DUMMY_MEETUPS = [{
  id: '1',
  title: 'Tech Meetup',
  image: "https://picsum.photos/seed/".concat(Math.random(), "/200/300"),
  address: '123 Main Street, Cityville',
  description: 'Join us for a meetup about the latest in technology.'
}, {
  id: '2',
  title: 'Fitness Session',
  image: "https://picsum.photos/seed/".concat(Math.random(), "/200/300"),
  address: '456 Fitness Avenue, Health City',
  description: 'Get fit and healthy at our fitness meetup.'
}, {
  id: '3',
  title: 'Art Workshop',
  image: "https://picsum.photos/seed/".concat(Math.random(), "/200/300"),
  address: '789 Art Street, Creativity Town',
  description: 'Explore your artistic side at our art workshop.'
}, {
  id: '4',
  title: 'Book Club',
  image: "https://picsum.photos/seed/".concat(Math.random(), "/100/200"),
  address: '101 Library Lane, Bookland',
  description: 'Join fellow book lovers in our monthly book club meetup.'
}, {
  id: '5',
  title: 'Food Tasting',
  image: "https://picsum.photos/seed/".concat(Math.random(), "/200/300"),
  address: '555 Taste Street, Foodie City',
  description: 'Experience a culinary journey at our food tasting meetup.'
}, {
  id: '6',
  title: 'Music Jam',
  image: "https://picsum.photos/seed/".concat(Math.random(), "/200/300"),
  address: '888 Melody Lane, Music Town',
  description: 'Bring your instruments and jam with fellow music enthusiasts.'
}];

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
} // export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;
//   //fetch data
//   return {
//     props:{
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }


_c = HomePage;
;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage); //  function HomePage(props) {
//   return (
//     <MeetupList meetups={props.meetups} />
//   );
// }
// export async function getServerSideProps() {
//   // Fetch data from your server or database
//   const response = await fetch('/api/load-meetups');
//   const data = await response.json();
//   // Return the fetched data as props
//   return {
//     props: {
//       meetups: data.meetups,
//     },
//   };
// }
// export default HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsIk1hdGgiLCJyYW5kb20iLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQ2xCO0FBQ0VDLElBQUUsRUFBRSxHQUROO0FBRUVDLE9BQUssRUFBRSxhQUZUO0FBR0VDLE9BQUssdUNBQWdDQyxJQUFJLENBQUNDLE1BQUwsRUFBaEMsYUFIUDtBQUlFQyxTQUFPLEVBQUUsNEJBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FEa0IsRUFRbEI7QUFDRU4sSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssdUNBQWdDQyxJQUFJLENBQUNDLE1BQUwsRUFBaEMsYUFIUDtBQUlFQyxTQUFPLEVBQUUsaUNBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FSa0IsRUFlbEI7QUFDRU4sSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLGNBRlQ7QUFHRUMsT0FBSyx1Q0FBZ0NDLElBQUksQ0FBQ0MsTUFBTCxFQUFoQyxhQUhQO0FBSUVDLFNBQU8sRUFBRSxpQ0FKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQWZrQixFQXNCbEI7QUFDRU4sSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLFdBRlQ7QUFHRUMsT0FBSyx1Q0FBZ0NDLElBQUksQ0FBQ0MsTUFBTCxFQUFoQyxhQUhQO0FBSUVDLFNBQU8sRUFBRSw0QkFKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQXRCa0IsRUE2QmxCO0FBQ0VOLElBQUUsRUFBRSxHQUROO0FBRUVDLE9BQUssRUFBRSxjQUZUO0FBR0VDLE9BQUssdUNBQWdDQyxJQUFJLENBQUNDLE1BQUwsRUFBaEMsYUFIUDtBQUlFQyxTQUFPLEVBQUUsK0JBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0E3QmtCLEVBb0NsQjtBQUNFTixJQUFFLEVBQUUsR0FETjtBQUVFQyxPQUFLLEVBQUUsV0FGVDtBQUdFQyxPQUFLLHVDQUFnQ0MsSUFBSSxDQUFDQyxNQUFMLEVBQWhDLGFBSFA7QUFJRUMsU0FBTyxFQUFFLDZCQUpYO0FBS0VDLGFBQVcsRUFBRTtBQUxmLENBcENrQixDQUF0Qjs7QUE4Q0EsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFDcEIsc0JBRUEscUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZBO0FBS0gsQyxDQUVEO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FuQlNGLFE7QUFpRFI7O0FBQ2VBLHVFQUFmLEUsQ0FJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ3OGFmOGIwOWUxYTNhMmJiMmNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcbmltcG9ydCB7TW9uZ29DbGllbnR9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuLy8gaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICcxJyxcclxuICAgICAgdGl0bGU6ICdUZWNoIE1lZXR1cCcsXHJcbiAgICAgIGltYWdlOiBgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvJHtNYXRoLnJhbmRvbSgpfS8yMDAvMzAwYCxcclxuICAgICAgYWRkcmVzczogJzEyMyBNYWluIFN0cmVldCwgQ2l0eXZpbGxlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdKb2luIHVzIGZvciBhIG1lZXR1cCBhYm91dCB0aGUgbGF0ZXN0IGluIHRlY2hub2xvZ3kuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnMicsXHJcbiAgICAgIHRpdGxlOiAnRml0bmVzcyBTZXNzaW9uJyxcclxuICAgICAgaW1hZ2U6IGBodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC8ke01hdGgucmFuZG9tKCl9LzIwMC8zMDBgLFxyXG4gICAgICBhZGRyZXNzOiAnNDU2IEZpdG5lc3MgQXZlbnVlLCBIZWFsdGggQ2l0eScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnR2V0IGZpdCBhbmQgaGVhbHRoeSBhdCBvdXIgZml0bmVzcyBtZWV0dXAuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnMycsXHJcbiAgICAgIHRpdGxlOiAnQXJ0IFdvcmtzaG9wJyxcclxuICAgICAgaW1hZ2U6IGBodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC8ke01hdGgucmFuZG9tKCl9LzIwMC8zMDBgLFxyXG4gICAgICBhZGRyZXNzOiAnNzg5IEFydCBTdHJlZXQsIENyZWF0aXZpdHkgVG93bicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRXhwbG9yZSB5b3VyIGFydGlzdGljIHNpZGUgYXQgb3VyIGFydCB3b3Jrc2hvcC4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICc0JyxcclxuICAgICAgdGl0bGU6ICdCb29rIENsdWInLFxyXG4gICAgICBpbWFnZTogYGh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkLyR7TWF0aC5yYW5kb20oKX0vMTAwLzIwMGAsXHJcbiAgICAgIGFkZHJlc3M6ICcxMDEgTGlicmFyeSBMYW5lLCBCb29rbGFuZCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnSm9pbiBmZWxsb3cgYm9vayBsb3ZlcnMgaW4gb3VyIG1vbnRobHkgYm9vayBjbHViIG1lZXR1cC4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICc1JyxcclxuICAgICAgdGl0bGU6ICdGb29kIFRhc3RpbmcnLFxyXG4gICAgICBpbWFnZTogYGh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkLyR7TWF0aC5yYW5kb20oKX0vMjAwLzMwMGAsXHJcbiAgICAgIGFkZHJlc3M6ICc1NTUgVGFzdGUgU3RyZWV0LCBGb29kaWUgQ2l0eScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRXhwZXJpZW5jZSBhIGN1bGluYXJ5IGpvdXJuZXkgYXQgb3VyIGZvb2QgdGFzdGluZyBtZWV0dXAuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNicsXHJcbiAgICAgIHRpdGxlOiAnTXVzaWMgSmFtJyxcclxuICAgICAgaW1hZ2U6IGBodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC8ke01hdGgucmFuZG9tKCl9LzIwMC8zMDBgLFxyXG4gICAgICBhZGRyZXNzOiAnODg4IE1lbG9keSBMYW5lLCBNdXNpYyBUb3duJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdCcmluZyB5b3VyIGluc3RydW1lbnRzIGFuZCBqYW0gd2l0aCBmZWxsb3cgbXVzaWMgZW50aHVzaWFzdHMuJyxcclxuICAgIH0sXHJcbiAgXTtcclxuICBcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAvL2ZldGNoIGRhdGFcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOntcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gIGNvbnN0IHBhc3N3b3JkID0gZW5jb2RlVVJJQ29tcG9uZW50KFwiI01hZGR5QDEyM1wiKTtcclxuXHJcbiAgLy8gQ29uc3RydWN0IHRoZSBNb25nb0RCIGNvbm5lY3Rpb24gc3RyaW5nXHJcbiAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IGBtb25nb2RiK3NydjovL2hhc2FuOiR7cGFzc3dvcmR9QGxpdmVtZWV0dXAudnNqbGd5ZC5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YDtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBNb25nb0RCIGNsaWVudFxyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChjb25uZWN0aW9uU3RyaW5nLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzIDoge1xyXG4gICAgICBtZWV0dXBzOm1lZXR1cHMubWFwKG1lZXR1cCA9Pih7XHJcbiAgICAgICAgdGl0bGU6bWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6bWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6bWVldHVwLmltYWdlLFxyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKClcclxuICAgICAgfSkpXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMTBcclxuICB9O1xyXG59O1xyXG4gZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcblxyXG5cclxuXHJcbi8vICBmdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbi8vICAgLy8gRmV0Y2ggZGF0YSBmcm9tIHlvdXIgc2VydmVyIG9yIGRhdGFiYXNlXHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2FkLW1lZXR1cHMnKTtcclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuLy8gICAvLyBSZXR1cm4gdGhlIGZldGNoZWQgZGF0YSBhcyBwcm9wc1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBkYXRhLm1lZXR1cHMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=