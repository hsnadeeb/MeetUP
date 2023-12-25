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


// ... other code ...
function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage); // import MeetupList from '../components/meetups/MeetupList';
// import {MongoClient} from 'mongodb';
// // import MeetupList from '../components/meetups/MeetupList';
// const DUMMY_MEETUPS = [
//     {
//       id: '1',
//       title: 'Tech Meetup',
//       image: `https://picsum.photos/seed/${Math.random()}/200/300`,
//       address: '123 Main Street, Cityville',
//       description: 'Join us for a meetup about the latest in technology.',
//     },
//     {
//       id: '2',
//       title: 'Fitness Session',
//       image: `https://picsum.photos/seed/${Math.random()}/200/300`,
//       address: '456 Fitness Avenue, Health City',
//       description: 'Get fit and healthy at our fitness meetup.',
//     },
//     {
//       id: '3',
//       title: 'Art Workshop',
//       image: `https://picsum.photos/seed/${Math.random()}/200/300`,
//       address: '789 Art Street, Creativity Town',
//       description: 'Explore your artistic side at our art workshop.',
//     },
//     {
//       id: '4',
//       title: 'Book Club',
//       image: `https://picsum.photos/seed/${Math.random()}/100/200`,
//       address: '101 Library Lane, Bookland',
//       description: 'Join fellow book lovers in our monthly book club meetup.',
//     },
//     {
//       id: '5',
//       title: 'Food Tasting',
//       image: `https://picsum.photos/seed/${Math.random()}/200/300`,
//       address: '555 Taste Street, Foodie City',
//       description: 'Experience a culinary journey at our food tasting meetup.',
//     },
//     {
//       id: '6',
//       title: 'Music Jam',
//       image: `https://picsum.photos/seed/${Math.random()}/200/300`,
//       address: '888 Melody Lane, Music Town',
//       description: 'Bring your instruments and jam with fellow music enthusiasts.',
//     },
//   ];
// function HomePage(props){
//     return (
//     <MeetupList meetups={props.meetups} />
//     )
// }
// export async function getStaticProps() {
//   try {
//     const password = encodeURIComponent("#Maddy@123");
//     const connectionString = `mongodb+srv://hasan:${password}@livemeetup.vsjlgyd.mongodb.net/?retryWrites=true&w=majority`;
//     // Initialize MongoDB client
//     const client = new MongoClient(connectionString, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     await client.connect();
//     const db = client.db();
//     const meetupsCollection = db.collection('livemeetup');
//     const meetups = await meetupsCollection.find().toArray();
//     client.close();
//     return {
//       props: {
//         meetups: meetups.map(meetup => ({
//           title: meetup.title,
//           address: meetup.address,
//           image: meetup.image,
//           id: meetup._id.toString(),
//         })),
//       },
//       revalidate: 10,
//     };
//   } catch (error) {
//     console.error('MongoDB Connection Error:', error);
//     return {
//       props: {
//         meetups: [], // Return an empty array or handle the error accordingly
//       },
//       revalidate: 10,
//     };
//   }
// }
//  export default HomePage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0E7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUNwQixzQkFFQSxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkE7QUFLSDs7S0FOUUYsUTs7QUFrRE1BLHVFQUFmLEUsQ0FJQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOGE2N2FjY2NjNGVjZGYwYTc5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5pbXBvcnQge01vbmdvQ2xpZW50fSBmcm9tICdtb25nb2RiJztcclxuXHJcbi8vIC4uLiBvdGhlciBjb2RlIC4uLlxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpe1xyXG4gICAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuIHRyeSB7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGVuY29kZVVSSUNvbXBvbmVudChcIiNNYWRkeUAxMjNcIik7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gYG1vbmdvZGIrc3J2Oi8vaGFzYW46JHtwYXNzd29yZH1AbGl2ZW1lZXR1cC52c2psZ3lkLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgTW9uZ29EQiBjbGllbnRcclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChjb25uZWN0aW9uU3RyaW5nLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdsaXZlbWVldHVwJyk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtcclxuICAgICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgfSxcclxuICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICB9O1xyXG4gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgQ29ubmVjdGlvbiBFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIG1lZXR1cHM6IFtdLCAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgb3IgaGFuZGxlIHRoZSBlcnJvciBhY2NvcmRpbmdseVxyXG4gICAgICB9LFxyXG4gICAgICByZXZhbGlkYXRlOiAxMCxcclxuICAgIH07XHJcbiB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcbi8vIGltcG9ydCB7TW9uZ29DbGllbnR9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuLy8gLy8gaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5cclxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgaWQ6ICcxJyxcclxuLy8gICAgICAgdGl0bGU6ICdUZWNoIE1lZXR1cCcsXHJcbi8vICAgICAgIGltYWdlOiBgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvJHtNYXRoLnJhbmRvbSgpfS8yMDAvMzAwYCxcclxuLy8gICAgICAgYWRkcmVzczogJzEyMyBNYWluIFN0cmVldCwgQ2l0eXZpbGxlJyxcclxuLy8gICAgICAgZGVzY3JpcHRpb246ICdKb2luIHVzIGZvciBhIG1lZXR1cCBhYm91dCB0aGUgbGF0ZXN0IGluIHRlY2hub2xvZ3kuJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGlkOiAnMicsXHJcbi8vICAgICAgIHRpdGxlOiAnRml0bmVzcyBTZXNzaW9uJyxcclxuLy8gICAgICAgaW1hZ2U6IGBodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC8ke01hdGgucmFuZG9tKCl9LzIwMC8zMDBgLFxyXG4vLyAgICAgICBhZGRyZXNzOiAnNDU2IEZpdG5lc3MgQXZlbnVlLCBIZWFsdGggQ2l0eScsXHJcbi8vICAgICAgIGRlc2NyaXB0aW9uOiAnR2V0IGZpdCBhbmQgaGVhbHRoeSBhdCBvdXIgZml0bmVzcyBtZWV0dXAuJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGlkOiAnMycsXHJcbi8vICAgICAgIHRpdGxlOiAnQXJ0IFdvcmtzaG9wJyxcclxuLy8gICAgICAgaW1hZ2U6IGBodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC8ke01hdGgucmFuZG9tKCl9LzIwMC8zMDBgLFxyXG4vLyAgICAgICBhZGRyZXNzOiAnNzg5IEFydCBTdHJlZXQsIENyZWF0aXZpdHkgVG93bicsXHJcbi8vICAgICAgIGRlc2NyaXB0aW9uOiAnRXhwbG9yZSB5b3VyIGFydGlzdGljIHNpZGUgYXQgb3VyIGFydCB3b3Jrc2hvcC4nLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgaWQ6ICc0JyxcclxuLy8gICAgICAgdGl0bGU6ICdCb29rIENsdWInLFxyXG4vLyAgICAgICBpbWFnZTogYGh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkLyR7TWF0aC5yYW5kb20oKX0vMTAwLzIwMGAsXHJcbi8vICAgICAgIGFkZHJlc3M6ICcxMDEgTGlicmFyeSBMYW5lLCBCb29rbGFuZCcsXHJcbi8vICAgICAgIGRlc2NyaXB0aW9uOiAnSm9pbiBmZWxsb3cgYm9vayBsb3ZlcnMgaW4gb3VyIG1vbnRobHkgYm9vayBjbHViIG1lZXR1cC4nLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgaWQ6ICc1JyxcclxuLy8gICAgICAgdGl0bGU6ICdGb29kIFRhc3RpbmcnLFxyXG4vLyAgICAgICBpbWFnZTogYGh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkLyR7TWF0aC5yYW5kb20oKX0vMjAwLzMwMGAsXHJcbi8vICAgICAgIGFkZHJlc3M6ICc1NTUgVGFzdGUgU3RyZWV0LCBGb29kaWUgQ2l0eScsXHJcbi8vICAgICAgIGRlc2NyaXB0aW9uOiAnRXhwZXJpZW5jZSBhIGN1bGluYXJ5IGpvdXJuZXkgYXQgb3VyIGZvb2QgdGFzdGluZyBtZWV0dXAuJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGlkOiAnNicsXHJcbi8vICAgICAgIHRpdGxlOiAnTXVzaWMgSmFtJyxcclxuLy8gICAgICAgaW1hZ2U6IGBodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC8ke01hdGgucmFuZG9tKCl9LzIwMC8zMDBgLFxyXG4vLyAgICAgICBhZGRyZXNzOiAnODg4IE1lbG9keSBMYW5lLCBNdXNpYyBUb3duJyxcclxuLy8gICAgICAgZGVzY3JpcHRpb246ICdCcmluZyB5b3VyIGluc3RydW1lbnRzIGFuZCBqYW0gd2l0aCBmZWxsb3cgbXVzaWMgZW50aHVzaWFzdHMuJyxcclxuLy8gICAgIH0sXHJcbi8vICAgXTtcclxuICBcclxuXHJcbi8vIGZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKXtcclxuLy8gICAgIHJldHVybiAoXHJcbiAgICBcclxuLy8gICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XHJcblxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBwYXNzd29yZCA9IGVuY29kZVVSSUNvbXBvbmVudChcIiNNYWRkeUAxMjNcIik7XHJcbi8vICAgICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gYG1vbmdvZGIrc3J2Oi8vaGFzYW46JHtwYXNzd29yZH1AbGl2ZW1lZXR1cC52c2psZ3lkLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xyXG5cclxuLy8gICAgIC8vIEluaXRpYWxpemUgTW9uZ29EQiBjbGllbnRcclxuLy8gICAgIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChjb25uZWN0aW9uU3RyaW5nLCB7XHJcbi8vICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuLy8gICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuXHJcbi8vICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4vLyAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdsaXZlbWVldHVwJyk7XHJcblxyXG4vLyAgICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG4vLyAgICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtcclxuLy8gICAgICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbi8vICAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuLy8gICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbi8vICAgICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4vLyAgICAgICAgIH0pKSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbi8vICAgICB9O1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIENvbm5lY3Rpb24gRXJyb3I6JywgZXJyb3IpO1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICBtZWV0dXBzOiBbXSwgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IG9yIGhhbmRsZSB0aGUgZXJyb3IgYWNjb3JkaW5nbHlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==