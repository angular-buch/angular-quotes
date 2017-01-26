webpackJsonp([0,3],{

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_quotes_service__ = __webpack_require__(308);
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
        var index = this.ngRedux.getState().quotes.meta.index;
        this.api.get(index).subscribe(function (apiResponse) {
            _this.ngRedux.dispatch({
                type: QuotesActions.LOAD_COMPLETED,
                payload: apiResponse
            });
        });
    };
    QuotesActions.prototype.loadFirst = function () {
        this.load();
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

/***/ 306:
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

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_quotes_actions__ = __webpack_require__(194);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__["select"])(function (state) { return state.quotes.meta; }), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === 'function' && _a) || Object)
    ], QuotesPageComponent.prototype, "meta$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__["select"])(function (state) { return state.quotes.quote; }), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === 'function' && _b) || Object)
    ], QuotesPageComponent.prototype, "quote$", void 0);
    QuotesPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotes-page',
            template: "\n    <app-quotes-presentation\n      [meta]=\"meta$ | async\"\n      [quote]=\"quote$ | async\"\n      (loadFirst)=\"actions.loadFirst()\"\n      (loadNext)=\"actions.loadNext()\"\n      (reset)=\"actions.reset()\"\n    ></app-quotes-presentation>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__actions_quotes_actions__["a" /* QuotesActions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__actions_quotes_actions__["a" /* QuotesActions */]) === 'function' && _c) || Object])
    ], QuotesPageComponent);
    return QuotesPageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/quotes-page.component.js.map

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__ = __webpack_require__(690);
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
            .map(function (rawData) {
            return {
                total: rawData.quotes.length,
                quote: rawData.quotes[index]
            };
        });
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

/***/ 309:
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

/***/ 376:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 376;


/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(491);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
// uncomment this while debugging
__webpack_require__(711);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/main.js.map

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux_router__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_rootReducer__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_extensibility__ = __webpack_require__(490);
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
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_3__reducers_rootReducer__["a" /* rootReducer */], {}, __WEBPACK_IMPORTED_MODULE_4__app_extensibility__["a" /* middleware */], devTools.isEnabled() ?
            __WEBPACK_IMPORTED_MODULE_4__app_extensibility__["b" /* enhancers */].concat([devTools.enhancer()]) :
            __WEBPACK_IMPORTED_MODULE_4__app_extensibility__["b" /* enhancers */]);
        ngReduxRouter.initialize();
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(668),
            styles: [__webpack_require__(666)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["DevToolsExtension"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["DevToolsExtension"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_redux_router__["a" /* NgReduxRouter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_redux_router__["a" /* NgReduxRouter */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/app.component.js.map

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return enhancers; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return middleware; });


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
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/app.extensibility.js.map

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_redux_router__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_about_page_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_quotes_page_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_quotes_quotes_presentation_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_quotes_actions__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_quotes_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(492);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_quotes_page_component__["a" /* QuotesPageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_quotes_quotes_presentation_component__["a" /* QuotesPresentationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_redux__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* AppRoutesModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_ng2_redux__["DevToolsExtension"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_redux_router__["a" /* NgReduxRouter */],
                __WEBPACK_IMPORTED_MODULE_9__actions_quotes_actions__["a" /* QuotesActions */],
                __WEBPACK_IMPORTED_MODULE_10__shared_quotes_service__["a" /* QuotesService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/app.module.js.map

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_page_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_quotes_page_component__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutesModule; });



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_quotes_page_component__["a" /* QuotesPageComponent */], pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__components_about_page_component__["a" /* AboutPageComponent */] }
];
var AppRoutesModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/app.routes.js.map

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_types__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reducers_types__);
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
        this.loadFirst = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    QuotesPresentationComponent.prototype.ngOnInit = function () {
        if (!this.meta.total) {
            this.loadFirst.emit();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reducers_types__["IQuote"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__reducers_types__["IQuote"]) === 'function' && _a) || Object)
    ], QuotesPresentationComponent.prototype, "quote", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__reducers_types__["IMeta"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__reducers_types__["IMeta"]) === 'function' && _b) || Object)
    ], QuotesPresentationComponent.prototype, "meta", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], QuotesPresentationComponent.prototype, "loadNext", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], QuotesPresentationComponent.prototype, "loadFirst", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], QuotesPresentationComponent.prototype, "reset", void 0);
    QuotesPresentationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotes-presentation',
            template: __webpack_require__(669),
            styles: [__webpack_require__(667)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], QuotesPresentationComponent);
    return QuotesPresentationComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/quotes-presentation.component.js.map

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_seamless_immutable__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__ = __webpack_require__(194);
/* harmony export (immutable) */ exports["a"] = quotesReducer;


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
            }); // :-(
        case __WEBPACK_IMPORTED_MODULE_1__actions_quotes_actions__["a" /* QuotesActions */].RESET_INDEX:
            return state.setIn(['meta', 'index'], 0);
        default:
            return state;
    }
}
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/quotes.reducer.js.map

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_seamless_immutable__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux_router__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotes_reducer__ = __webpack_require__(494);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return rootReducer; });



// rootReducer of IAppState
var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_seamless_immutable__["combineReducers"])({
    quotes: __WEBPACK_IMPORTED_MODULE_2__quotes_reducer__["a" /* quotesReducer */],
    router: __WEBPACK_IMPORTED_MODULE_1_ng2_redux_router__["b" /* routerReducer */]
});
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/rootReducer.js.map

/***/ },

/***/ 496:
/***/ function(module, exports) {

;
//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/types.js.map

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Workspace/Git/angular-quotes/src/polyfills.js.map

/***/ },

/***/ 666:
/***/ function(module, exports) {

module.exports = "body { padding-top: 70px; }\r\n\r\ndiv.container {\r\n  text-align: center;\r\n}\r\n\r\nsvg {\r\n  display: block;\r\n  margin: auto;\r\n  padding-right: 30px;\r\n}\r\n\r\n.btn-danger {\r\n  background-color: #DD0031;\r\n}\r\n\r\n/* fork on github badge */\r\n\r\n#forkongithub * {\r\n  box-sizing: content-box;\r\n}\r\n\r\n#forkongithub a {\r\n  background: #C3002F;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-family: arial,sans-serif;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  padding: 10px 40px;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  position: relative;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n\r\n#forkongithub a:hover {\r\n  background: #900000;\r\n  color: #fff;\r\n}\r\n\r\n#forkongithub a::before,\r\n#forkongithub a::after {\r\n  content: \"\";\r\n  width: 100%;\r\n  display: block;\r\n  position: absolute;\r\n  top: 1px;\r\n  left: 0;\r\n  height: 1px;\r\n  background: #fff;\r\n}\r\n\r\n#forkongithub a::after {\r\n  bottom: 1px;\r\n  top: auto;\r\n}\r\n\r\n@media screen and (min-width:800px) {\r\n  #forkongithub {\r\n    position: fixed;\r\n    display: block;\r\n    top: 0;\r\n    right: 0;\r\n    width: 200px;\r\n    overflow: hidden;\r\n    height: 200px;\r\n    z-index: 9999;\r\n  }\r\n\r\n  #forkongithub a {\r\n    width: 200px;\r\n    position: absolute;\r\n    top: 60px;\r\n    right: -60px;\r\n    transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    -moz-transform: rotate(45deg);\r\n    -o-transform: rotate(45deg);\r\n    box-shadow: 4px 4px 10px rgba(0,0,0,0.8);\r\n  };\r\n}\r\n"

/***/ },

/***/ 667:
/***/ function(module, exports) {

module.exports = ":host {\r\n  text-align: center;\r\n}\r\n\r\nblockquote {\r\n  width: 50%;\r\n  border-left: none;\r\n  margin: auto;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  min-height: 125px;\r\n}\r\n\r\nspan.glyphicon {\r\n  margin-top: 10px;\r\n  display: block;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.glyphicon.spinning {\r\n  animation: spin 2s infinite linear;\r\n  -webkit-animation: spin2 2s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg); }\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg); }\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg); }\r\n}\r\n\r\n@-webkit-keyframes spin2 {\r\n  from { -webkit-transform: rotate(0deg); }\r\n  to { -webkit-transform: rotate(360deg); }\r\n}\r\n"

/***/ },

/***/ 668:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n\n    <div class=\"navbar-header\">\n      <li><a class=\"navbar-brand\" [routerLink]=\"['/']\">Angular Quotes</a></li>\n    </div>\n\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/about']\">About</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <svg height=\"300\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 230 250\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#DD0031;} .st1{fill:#C3002F;} .st2{fill:#FFFFFF;}</style><polygon class=\"st0\" points=\"125 30 125 30 125 30 31.9 63.2 46.1 186.3 125 230 125 230 125 230 203.9 186.3 218.1 63.2 \"/><polygon class=\"st1\" points=\"125 30 125 52.2 125 52.1 125 153.4 125 153.4 125 230 125 230 203.9 186.3 218.1 63.2 125 30 \"/><path class=\"st2\" d=\"M125 52.1L66.8 182.6h0 21.7 0l11.7-29.2h49.4l11.7 29.2h0 21.7 0L125 52.1 125 52.1 125 52.1 125 52.1 125 52.1zM142 135.4H108l17-40.9L142 135.4z\"/></svg>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = "{{ meta.index + 1 }}.\r\n<blockquote>\r\n\r\n  {{ quote.text }}\r\n\r\n  <footer>\r\n    <cite><a href=\"{{ quote.source }}\">{{ quote.author }}</a></cite>\r\n  </footer>\r\n</blockquote>\r\n\r\n\r\n<button class=\"btn btn-danger\" (click)=\"reset.emit()\">Reset</button>\r\n<button class=\"btn btn-danger\" (click)=\"loadNext.emit()\">Load Next</button>\r\n\r\n<span class=\"glyphicon\" [ngClass]=\"{\r\n  'glyphicon-refresh spinning': meta.isLoading\r\n}\">\r\n</span>\r\n"

/***/ },

/***/ 713:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(377);


/***/ }

},[713]);
//# sourceMappingURL=main.bundle.map