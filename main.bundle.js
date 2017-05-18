webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_quotes_actions__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotesPageComponent = (function () {
    function QuotesPageComponent(actions) {
        this.actions = actions;
    }
    return QuotesPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["select"])(function (state) { return state.quotes.meta; }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], QuotesPageComponent.prototype, "meta$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["select"])(function (state) { return state.quotes.quote; }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], QuotesPageComponent.prototype, "quote$", void 0);
QuotesPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quotes-page',
        template: "\n    <app-quotes-presentation\n      [meta]=\"meta$ | async\"\n      [quote]=\"quote$ | async\"\n      (loadFirst)=\"actions.loadFirst()\"\n      (loadNext)=\"actions.loadNext()\"\n      (reset)=\"actions.reset()\"\n    ></app-quotes-presentation>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__actions_quotes_actions__["a" /* QuotesActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_quotes_actions__["a" /* QuotesActions */]) === "function" && _c || Object])
], QuotesPageComponent);

var _a, _b, _c;
//# sourceMappingURL=quotes-page.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotesService = (function () {
    function QuotesService(http) {
        this.http = http;
        this.api = 'https://angular-buch.com/angular-quotes/assets/quotes.json';
    }
    QuotesService.prototype.get = function (index) {
        return this.http
            .get(this.api)
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawData) {
            return {
                total: rawData.quotes.length,
                quote: rawData.quotes[index]
            };
        });
    };
    return QuotesService;
}());
QuotesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuotesService);

var _a;
//# sourceMappingURL=quotes.service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 168;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(102);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(352),
        styles: [__webpack_require__(341)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enhancers; });
/* unused harmony export middleware */


var enhancers = [];
// this should be activated with care, because it causes big confusion! :-)
/*
enhancers.push(
  persistState(
    '',
    {
      key: 'angular-quotes'
    })
);
*/
var middleware = [];
if (!__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    middleware.push(__WEBPACK_IMPORTED_MODULE_0_redux_logger___default()({
        level: 'info',
        collapsed: true
    }));
}
//# sourceMappingURL=app.extensibility.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_rootReducer__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_extensibility__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_page_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_quotes_page_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_quotes_quotes_presentation_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_quotes_actions__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_quotes_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routes__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule(ngRedux, ngReduxRouter, devTools) {
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_5__reducers_rootReducer__["a" /* rootReducer */], {}, [], // middlewares
        devTools.isEnabled() ? __WEBPACK_IMPORTED_MODULE_6__app_extensibility__["a" /* enhancers */].concat([devTools.enhancer()]) : __WEBPACK_IMPORTED_MODULE_6__app_extensibility__["a" /* enhancers */]);
        ngReduxRouter.initialize();
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_quotes_page_component__["a" /* QuotesPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_about_page_component__["a" /* AboutPageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_quotes_quotes_presentation_component__["a" /* QuotesPresentationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_13__app_routes__["a" /* AppRoutesModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_redux_router__["a" /* NgReduxRouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["DevToolsExtension"],
            __WEBPACK_IMPORTED_MODULE_11__actions_quotes_actions__["a" /* QuotesActions */],
            __WEBPACK_IMPORTED_MODULE_12__shared_quotes_service__["a" /* QuotesService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_redux_router__["b" /* NgReduxRouter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_redux_router__["b" /* NgReduxRouter */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["DevToolsExtension"]) === "function" && _c || Object])
], AppModule);

var _a, _b, _c;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_page_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_quotes_page_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_quotes_page_component__["a" /* QuotesPageComponent */], pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__components_about_page_component__["a" /* AboutPageComponent */] }
];
var AppRoutesModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_types__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reducers_types__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPresentationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotesPresentationComponent = (function () {
    function QuotesPresentationComponent() {
        this.loadNext = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadFirst = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    QuotesPresentationComponent.prototype.ngOnInit = function () {
        if (!this.meta.total) {
            this.loadFirst.emit();
        }
    };
    return QuotesPresentationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reducers_types__["IQuote"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__reducers_types__["IQuote"]) === "function" && _a || Object)
], QuotesPresentationComponent.prototype, "quote", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__reducers_types__["IMeta"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__reducers_types__["IMeta"]) === "function" && _b || Object)
], QuotesPresentationComponent.prototype, "meta", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], QuotesPresentationComponent.prototype, "loadNext", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], QuotesPresentationComponent.prototype, "loadFirst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], QuotesPresentationComponent.prototype, "reset", void 0);
QuotesPresentationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quotes-presentation',
        template: __webpack_require__(353),
        styles: [__webpack_require__(342)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    })
], QuotesPresentationComponent);

var _a, _b;
//# sourceMappingURL=quotes-presentation.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_seamless_immutable__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__ = __webpack_require__(63);
/* harmony export (immutable) */ __webpack_exports__["a"] = quotesReducer;


var INITIAL_QUOTES_STATE = __WEBPACK_IMPORTED_MODULE_0_seamless_immutable__["from"]({
    meta: {
        index: 0,
        total: 0,
        isLoading: false
    },
    quote: {
        text: '',
        author: '',
        source: ''
    }
});
function quotesReducer(state, action) {
    if (state === void 0) { state = INITIAL_QUOTES_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__["a" /* QuotesActions */].LOAD_PENDING:
            return state.setIn(['meta', 'isLoading'], true);
        case __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__["a" /* QuotesActions */].LOAD_COMPLETED:
            return state
                .update('meta', function (oldState) {
                return {
                    index: oldState.index,
                    total: action.payload.total,
                    isLoading: false
                };
            })
                .set('quote', action.payload.quote);
        case __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__["a" /* QuotesActions */].INCREMENT_INDEX:
            return state
                .update('meta', function (oldState) {
                return {
                    index: (oldState.index + 1 === oldState.total) ? 0 : oldState.index + 1,
                    total: oldState.total,
                    isLoading: oldState.isLoading
                };
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__["a" /* QuotesActions */].RESET_INDEX:
            return state.setIn(['meta', 'index'], 0);
        default:
            return state;
    }
}
//# sourceMappingURL=quotes.reducer.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_seamless_immutable__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotes_reducer__ = __webpack_require__(185);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });



// rootReducer of IAppState
var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_seamless_immutable__["combineReducers"])({
    quotes: __WEBPACK_IMPORTED_MODULE_2__quotes_reducer__["a" /* quotesReducer */],
    router: __WEBPACK_IMPORTED_MODULE_1__angular_redux_router__["c" /* routerReducer */]
});
//# sourceMappingURL=rootReducer.js.map

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(false);
// imports


// module
exports.push([module.i, "body { padding-top: 70px; }\r\n\r\ndiv.container {\r\n  text-align: center;\r\n}\r\n\r\nsvg {\r\n  display: block;\r\n  margin: auto;\r\n  padding-right: 30px;\r\n}\r\n\r\n.btn-danger {\r\n  background-color: #DD0031;\r\n}\r\n\r\n/* fork on github badge */\r\n\r\n#forkongithub * {\r\n  box-sizing: content-box;\r\n}\r\n\r\n#forkongithub a {\r\n  background: #C3002F;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-family: arial,sans-serif;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  padding: 10px 40px;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n#forkongithub a:hover {\r\n  background: #900000;\r\n  color: #fff;\r\n}\r\n\r\n#forkongithub a::before,\r\n#forkongithub a::after {\r\n  content: \"\";\r\n  width: 100%;\r\n  display: block;\r\n  position: absolute;\r\n  top: 1px;\r\n  left: 0;\r\n  height: 1px;\r\n  background: #fff;\r\n}\r\n\r\n#forkongithub a::after {\r\n  bottom: 1px;\r\n  top: auto;\r\n}\r\n\r\n@media screen and (min-width:800px) {\r\n  #forkongithub {\r\n    position: fixed;\r\n    display: block;\r\n    top: 0;\r\n    right: 0;\r\n    width: 200px;\r\n    overflow: hidden;\r\n    height: 200px;\r\n    z-index: 9999;\r\n  }\r\n\r\n  #forkongithub a {\r\n    width: 200px;\r\n    position: absolute;\r\n    top: 60px;\r\n    right: -60px;\r\n    transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    -moz-transform: rotate(45deg);\r\n    -o-transform: rotate(45deg);\r\n    box-shadow: 4px 4px 10px rgba(0,0,0,0.8);\r\n  };\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(false);
// imports


// module
exports.push([module.i, ":host {\r\n  text-align: center;\r\n}\r\n\r\nblockquote {\r\n  width: 50%;\r\n  border-left: none;\r\n  margin: auto;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  min-height: 125px;\r\n}\r\n\r\nspan.glyphicon {\r\n  margin-top: 10px;\r\n  display: block;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.glyphicon.spinning {\r\n  animation: spin 2s infinite linear;\r\n  -webkit-animation: spin2 2s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg); }\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg); }\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg); }\r\n}\r\n\r\n@-webkit-keyframes spin2 {\r\n  from { -webkit-transform: rotate(0deg); }\r\n  to { -webkit-transform: rotate(360deg); }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n\n    <div class=\"navbar-header\">\n      <li><a class=\"navbar-brand\" [routerLink]=\"['/']\">Angular Quotes</a></li>\n    </div>\n\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/about']\">About</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <svg height=\"300\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 230 250\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#DD0031;} .st1{fill:#C3002F;} .st2{fill:#FFFFFF;}</style><polygon class=\"st0\" points=\"125 30 125 30 125 30 31.9 63.2 46.1 186.3 125 230 125 230 125 230 203.9 186.3 218.1 63.2 \"/><polygon class=\"st1\" points=\"125 30 125 52.2 125 52.1 125 153.4 125 153.4 125 230 125 230 203.9 186.3 218.1 63.2 125 30 \"/><path class=\"st2\" d=\"M125 52.1L66.8 182.6h0 21.7 0l11.7-29.2h49.4l11.7 29.2h0 21.7 0L125 52.1 125 52.1 125 52.1 125 52.1 125 52.1zM142 135.4H108l17-40.9L142 135.4z\"/></svg>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "{{ meta.index + 1 }}.\r\n<blockquote>\r\n\r\n  {{ quote.text }}\r\n\r\n  <footer>\r\n    <cite><a href=\"{{ quote.source }}\">{{ quote.author }}</a></cite>\r\n  </footer>\r\n</blockquote>\r\n\r\n\r\n<button class=\"btn btn-danger\" (click)=\"reset.emit()\">Reset</button>\r\n<button class=\"btn btn-danger\" (click)=\"loadNext.emit()\">Load Next</button>\r\n\r\n<span class=\"glyphicon\" [ngClass]=\"{\r\n  'glyphicon-refresh spinning': meta.isLoading\r\n}\">\r\n</span>\r\n"

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(169);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_quotes_service__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesActions = QuotesActions_1 = (function () {
    function QuotesActions(ngRedux, api) {
        this.ngRedux = ngRedux;
        this.api = api;
    }
    QuotesActions.prototype.load = function () {
        var _this = this;
        this.ngRedux.dispatch({
            type: QuotesActions_1.LOAD_PENDING
        });
        var index = this.ngRedux.getState().quotes.meta.index;
        this.api.get(index).subscribe(function (apiResponse) {
            _this.ngRedux.dispatch({
                type: QuotesActions_1.LOAD_COMPLETED,
                payload: apiResponse
            });
        });
    };
    QuotesActions.prototype.loadFirst = function () {
        this.load();
    };
    QuotesActions.prototype.loadNext = function () {
        this.ngRedux.dispatch({ type: QuotesActions_1.INCREMENT_INDEX });
        this.load();
    };
    QuotesActions.prototype.reset = function () {
        this.ngRedux.dispatch({ type: QuotesActions_1.RESET_INDEX });
        this.load();
    };
    return QuotesActions;
}());
QuotesActions.LOAD_PENDING = 'LOAD_PENDING';
QuotesActions.LOAD_COMPLETED = 'LOAD_COMPLETED';
QuotesActions.INCREMENT_INDEX = 'INCREMENT_INDEX';
QuotesActions.RESET_INDEX = 'RESET_INDEX';
QuotesActions = QuotesActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_quotes_service__["a" /* QuotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_quotes_service__["a" /* QuotesService */]) === "function" && _b || Object])
], QuotesActions);

var QuotesActions_1, _a, _b;
//# sourceMappingURL=quotes.actions.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    return AboutPageComponent;
}());
AboutPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about-page',
        template: "\n    This is just a little demo to get used with the Angular bindings\n    for <a href=\"https://github.com/reactjs/redux\">Redux</a>\n    (<a href=\"https://github.com/angular-redux/store\" target=\"_blank\">angular-redux</a>).\n  "
    })
], AboutPageComponent);

//# sourceMappingURL=about-page.component.js.map

/***/ })

},[408]);
//# sourceMappingURL=main.bundle.js.map