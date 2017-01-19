webpackJsonp([0,3],{

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_quotes_service__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuotesActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesActions = (function () {
    function QuotesActions(ngRedux, api) {
        this.ngRedux = ngRedux;
        this.api = api;
    }
    QuotesActions.prototype.load = function () {
        var _this = this;
        this.ngRedux.dispatch({
            type: QuotesActions.LOAD_PENDING
        });
        var index = this.ngRedux.getState().quotes.index;
        this.api.get(index).subscribe(function (quote) {
            _this.ngRedux.dispatch({
                type: QuotesActions.LOAD_COMPLETED,
                payload: quote
            });
        });
    };
    QuotesActions.prototype.loadNext = function () {
        this.ngRedux.dispatch({ type: QuotesActions.INCREMENT_INDEX });
        this.load();
    };
    QuotesActions.prototype.reset = function () {
        this.ngRedux.dispatch({ type: QuotesActions.RESET_INDEX });
        this.load();
    };
    QuotesActions.LOAD_PENDING = 'LOAD_PENDING';
    QuotesActions.LOAD_COMPLETED = 'LOAD_COMPLETED';
    QuotesActions.INCREMENT_INDEX = 'INCREMENT_INDEX';
    QuotesActions.RESET_INDEX = 'RESET_INDEX';
    QuotesActions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_quotes_service__["a" /* QuotesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_quotes_service__["a" /* QuotesService */]) === 'function' && _b) || Object])
    ], QuotesActions);
    return QuotesActions;
    var _a, _b;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/quotes.actions.js.map

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-page',
            template: "\n    This is just a little demo to get used with the Angular bindings\n    for <a href=\"https://github.com/reactjs/redux\">Redux</a>\n    (<a href=\"https://github.com/angular-redux/ng2-redux\">ng2-redux</a>).\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/about-page.component.js.map

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_quotes_actions__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuotesPageComponent; });
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__["select"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === 'function' && _a) || Object)
    ], QuotesPageComponent.prototype, "quotes$", void 0);
    QuotesPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotes-page',
            template: "\n    <app-quotes-presentation\n      [quotes]=\"quotes$ | async\"\n      (loadNext)=\"actions.loadNext()\"\n      (reset)=\"actions.reset()\"\n    ></app-quotes-presentation>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__actions_quotes_actions__["a" /* QuotesActions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__actions_quotes_actions__["a" /* QuotesActions */]) === 'function' && _b) || Object])
    ], QuotesPageComponent);
    return QuotesPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/quotes-page.component.js.map

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux_router__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotes_reducer__ = __webpack_require__(602);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return rootReducer; });
/* harmony export (immutable) */ exports["b"] = deimmutify;
/* harmony export (immutable) */ exports["c"] = reimmutify;



;
var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    quotes: __WEBPACK_IMPORTED_MODULE_2__quotes_reducer__["a" /* quotesReducer */],
    router: __WEBPACK_IMPORTED_MODULE_1_ng2_redux_router__["b" /* routerReducer */]
});
function deimmutify(store) {
    return {
        quotes: store.quotes.toJS(),
        router: store.router
    };
}
function reimmutify(plain) {
    return {
        quotes: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__quotes_reducer__["b" /* QuotesFactory */])(plain.quotes),
        router: plain.router
    };
}
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/index.js.map

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuotesService; });
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
            .map(function (rawData) { return rawData.quotes; })
            .map(function (quotes) { return quotes[index]; });
    };
    QuotesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], QuotesService);
    return QuotesService;
    var _a;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/quotes.service.js.map

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/environment.js.map

/***/ },

/***/ 475:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 475;


/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(599);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
// uncomment this while debugging
__webpack_require__(826);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/main.js.map

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux_router__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_extensibility__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_reducers__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(devTools, ngRedux, ngReduxRouter) {
        this.devTools = devTools;
        this.ngRedux = ngRedux;
        this.ngReduxRouter = ngReduxRouter;
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_4__app_reducers__["a" /* rootReducer */], {}, __WEBPACK_IMPORTED_MODULE_3__app_extensibility__["a" /* middleware */], devTools.isEnabled() ?
            __WEBPACK_IMPORTED_MODULE_3__app_extensibility__["b" /* enhancers */].concat([devTools.enhancer()]) :
            __WEBPACK_IMPORTED_MODULE_3__app_extensibility__["b" /* enhancers */]);
        ngReduxRouter.initialize();
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(776),
            styles: [__webpack_require__(774)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["DevToolsExtension"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["DevToolsExtension"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_redux_router__["a" /* NgReduxRouter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_redux_router__["a" /* NgReduxRouter */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/app.component.js.map

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return middleware; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return enhancers; });
// no ES6 import available
var createLogger = __webpack_require__(786);
var persistState = __webpack_require__(780);


var middleware = [];
var enhancers = [
    persistState('', {
        key: 'angular-quotes',
        serialize: function (store) { return JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reducers__["b" /* deimmutify */])(store)); },
        deserialize: function (state) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reducers__["c" /* reimmutify */])(JSON.parse(state)); },
    })
];
if (!__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    middleware.push(createLogger({
        level: 'info',
        collapsed: true,
        stateTransformer: __WEBPACK_IMPORTED_MODULE_0__reducers__["b" /* deimmutify */],
    }));
}
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/app.extensibility.js.map

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_redux__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_redux_router__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_page_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_quotes_page_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_quotes_quotes_presentation_component__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_quotes_actions__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_quotes_service__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__(600);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
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
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_quotes_page_component__["a" /* QuotesPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_quotes_quotes_presentation_component__["a" /* QuotesPresentationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_redux__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* AppRoutesModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_ng2_redux__["DevToolsExtension"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_redux_router__["a" /* NgReduxRouter */],
                __WEBPACK_IMPORTED_MODULE_10__actions_quotes_actions__["a" /* QuotesActions */],
                __WEBPACK_IMPORTED_MODULE_11__shared_quotes_service__["a" /* QuotesService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/app.module.js.map

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_page_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_quotes_page_component__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutesModule; });



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_quotes_page_component__["a" /* QuotesPageComponent */], pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__components_about_page_component__["a" /* AboutPageComponent */] }
];
var AppRoutesModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/app.routes.js.map

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_quotes_types__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_quotes_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reducers_quotes_types__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuotesPresentationComponent; });
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
        this.reset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    QuotesPresentationComponent.prototype.ngOnInit = function () {
        if (!this.quotes.quote) {
            this.loadNext.emit();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reducers_quotes_types__["IQuotes"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__reducers_quotes_types__["IQuotes"]) === 'function' && _a) || Object)
    ], QuotesPresentationComponent.prototype, "quotes", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], QuotesPresentationComponent.prototype, "loadNext", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], QuotesPresentationComponent.prototype, "reset", void 0);
    QuotesPresentationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotes-presentation',
            template: __webpack_require__(777),
            styles: [__webpack_require__(775)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], QuotesPresentationComponent);
    return QuotesPresentationComponent;
    var _a;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/quotes-presentation.component.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typed_immutable_record__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typed_immutable_record___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typed_immutable_record__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return QuotesFactory; });
/* harmony export (immutable) */ exports["a"] = quotesReducer;


var QuotesFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_typed_immutable_record__["makeTypedFactory"])({
    index: 0,
    quote: {
        text: '',
        author: '',
        source: ''
    },
    isLoading: false
});
var INITIAL_STATE = QuotesFactory();
function quotesReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__["a" /* QuotesActions */].LOAD_PENDING:
            return state.merge({
                isLoading: true,
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__["a" /* QuotesActions */].LOAD_COMPLETED:
            return state.merge({
                quote: action.payload,
                isLoading: false
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__["a" /* QuotesActions */].INCREMENT_INDEX:
            return state.update('index', function (value) { return value + 1; });
        case __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__["a" /* QuotesActions */].RESET_INDEX:
            return state.update('index', function (value) { return 0; });
        default:
            return state;
    }
}
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/quotes.reducer.js.map

/***/ },

/***/ 603:
/***/ function(module, exports) {

;
;
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/quotes.types.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/polyfills.js.map

/***/ },

/***/ 774:
/***/ function(module, exports) {

module.exports = "body { padding-top: 70px; }\r\n\r\ndiv.container {\r\n  text-align: center;\r\n}\r\n\r\nsvg {\r\n  display: block;\r\n  margin: auto;\r\n  padding-right: 30px;\r\n}\r\n"

/***/ },

/***/ 775:
/***/ function(module, exports) {

module.exports = ":host {\r\n  text-align: center;\r\n}\r\n\r\nblockquote {\r\n  width: 50%;\r\n  border-left: none;\r\n  margin: auto;\r\n  margin-top: 10px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.glyphicon.spinning {\r\n  animation: spin 2s infinite linear;\r\n  -webkit-animation: spin2 2s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg); }\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg); }\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg); }\r\n}\r\n\r\n@-webkit-keyframes spin2 {\r\n  from { -webkit-transform: rotate(0deg); }\r\n  to { -webkit-transform: rotate(360deg); }\r\n}\r\n"

/***/ },

/***/ 776:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n\n    <div class=\"navbar-header\">\n      <li><a class=\"navbar-brand\" [routerLink]=\"['/']\">Angular Quotes</a></li>\n    </div>\n\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/about']\">About</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <svg height=\"300\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 230 250\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#DD0031;} .st1{fill:#C3002F;} .st2{fill:#FFFFFF;}</style><polygon class=\"st0\" points=\"125 30 125 30 125 30 31.9 63.2 46.1 186.3 125 230 125 230 125 230 203.9 186.3 218.1 63.2 \"/><polygon class=\"st1\" points=\"125 30 125 52.2 125 52.1 125 153.4 125 153.4 125 230 125 230 203.9 186.3 218.1 63.2 125 30 \"/><path class=\"st2\" d=\"M125 52.1L66.8 182.6h0 21.7 0l11.7-29.2h49.4l11.7 29.2h0 21.7 0L125 52.1 125 52.1 125 52.1 125 52.1 125 52.1zM142 135.4H108l17-40.9L142 135.4z\"/></svg>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ },

/***/ 777:
/***/ function(module, exports) {

module.exports = "<small>{{ quotes.index + 1 }}.</small>\r\n<blockquote>\r\n\r\n  {{ quotes.quote.text }}\r\n\r\n  <footer>\r\n    <cite><a href=\"{{ quotes.quote.source }}\">{{ quotes.quote.author }}</a></cite>\r\n  </footer>\r\n\r\n</blockquote>\r\n\r\n\r\n<button class=\"btn btn-active\" (click)=\"reset.emit()\">Reset</button>\r\n<button class=\"btn btn-active\" (click)=\"loadNext.emit()\">Load Next</button>\r\n\r\n\r\n<span class=\"glyphicon\" [ngClass]=\"{\r\n  'glyphicon-refresh spinning': quotes.isLoading\r\n}\">\r\n</span>\r\n\r\n<hr>\r\n<pre style=\"text-align: left\">\r\n  DEBUG\r\n{{ quotes | json }}\r\n</pre>\r\n"

/***/ },

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(476);


/***/ }

},[828]);
//# sourceMappingURL=main.bundle.map