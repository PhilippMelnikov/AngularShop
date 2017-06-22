webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/FadeInOutAnimation/fadeInOut.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = fadeInOut;

function fadeInOut() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fadeInOut', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('fadeOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('fadeIn', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(":enter", [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('2000ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(":leave", [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('2000ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])("fadeOut => fadeIn", [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])("fadeIn => fadeOut", [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }))
        ])
    ]);
}
//# sourceMappingURL=fadeInOut.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<!-- <md-sidenav-container> -->\n<md-toolbar color=\"primary\" class=\"md-toolbar-tools my-toolbar\" [@fadeInOut]=\"'true'\">\n\n  <button md-icon-button (click)=\"openCloseSidenav()\" *ngIf=\"!largeScreen\">\n\t\t<md-icon>menu</md-icon>\n\t</button>\n  <span class=\"fill-space\" flex *ngIf=\"!largeScreen\"></span>\n  <img class=\"angular-logo\" src=\"./assets/icons/angular-white-transparent.svg\" alt=\"angular\">\n  <span id=\"title\">{{title}}</span>\n\n</md-toolbar>\n<md-sidenav-container [@fadeInOut]=\"'true'\">\n  <md-sidenav #start [mode]=\"largeScreen ? 'side' : 'over'\" [opened]=\"largeScreen || sidenavIsOpened\">\n    <tree-root [nodes]=\"productsTree\" [options]=\"treeOptions\">\n    </tree-root>\n  </md-sidenav>\n  <div class=\"my-content\">\n    <div class=\"product-container\" *ngIf=\"currentProduct\" [@fadeInOut]=\"productViewFadeIn\">\n      <div class=\"section\">\n        <div class=\"product-title\">{{currentProduct.title}}</div>\n      </div>\n      <div class=\"section\">\n        <div class=\"price\"><span>Price:</span> {{currentProduct.price}}$</div>\n      </div>\n      <div class=\"section\">\n        <button md-raised-button color=\"primary\" class=\"add-to-cart-button\" click=\"()=>{}\">\n          <i class=\"material-icons\">shopping_cart</i>\n          Add to cart\n        </button>\n        <div class=\"additional-info\">\n          <div class=\"info-item\" *ngIf=\"currentProduct.pages\">\n            <i class=\"material-icons\">library_books</i>\n            <div class=\"content\">\n              <div class=\"info-title\">Pages</div>\n              <div class=\"info-value\">{{currentProduct.pages}}</div>\n            </div>\n          </div>\n          <div class=\"info-item\" *ngIf=\"currentProduct.language\">\n            <i class=\"material-icons\">code</i>\n            <div class=\"content\">\n              <div class=\"info-title\">Language</div>\n              <div class=\"info-value\">{{currentProduct.language}}</div>\n            </div>\n          </div>\n          <div class=\"info-item\" *ngIf=\"currentProduct.min_age\">\n            <i class=\"material-icons\">pan_tool</i>\n            <div class=\"content\">\n              <div class=\"info-title\">Age</div>\n              <div class=\"info-value\" id=\"min-age\">{{currentProduct.min_age}}+</div>\n            </div>\n          </div>\n          <div class=\"info-item\" *ngIf=\"currentProduct.main_ingredient\">\n            <i class=\"material-icons\">local_dining</i>\n            <div class=\"content\">\n              <div class=\"info-title\">Main ingredient</div>\n              <div class=\"info-value\">Chicken</div>\n            </div>\n          </div>\n          <div class=\"info-item\">\n            <i class=\"material-icons\">subject</i>\n            <div class=\"content\">\n              <div class=\"info-title\">Category</div>\n              <div class=\"info-value\">{{currentProduct.category}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"extra-info\">\n        <h4>Description:</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, et voluptatum delectus eveniet fugit nemo quae temporibus est necessitatibus. Omnis quo in cum tempore, nihil, excepturi quibusdam voluptate accusantium obcaecati.</p>\n      </div>\n    </div>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__ = __webpack_require__("../../../../../src/app/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FadeInOutAnimation_fadeInOut__ = __webpack_require__("../../../../../src/app/FadeInOutAnimation/fadeInOut.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_service_tree_service__ = __webpack_require__("../../../../../src/app/tree-service/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__window_service_window_service__ = __webpack_require__("../../../../../src/app/window-service/window.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(DataService, TreeService, WindowService) {
        var _this = this;
        this.DataService = DataService;
        this.TreeService = TreeService;
        this.WindowService = WindowService;
        this.title = 'Angular Shop';
        this.productsTree = [];
        this.sidenavMode = 'side';
        this.sidenavIsOpened = false;
        this.productViewFadeIn = 'fadeIn';
        this.actionMapping = {
            mouse: {
                click: function (tree, node, $event) {
                    // If node doesn't have children = is a product
                    if (!node.data.children) {
                        if (node.data.code != _this.currentProduct.code) {
                            _this.productViewFadeIn = 'fadeOut';
                            if (!_this.largeScreen) {
                                _this.openCloseSidenav();
                            }
                            // For animation
                            setTimeout(function () {
                                _this.setCurrentProduct(node.data.code);
                                _this.productViewFadeIn = 'fadeIn';
                            }, 300);
                        }
                    }
                    else {
                        if (node.isCollapsed) {
                            node.expand();
                        }
                        else {
                            node.collapse();
                        }
                    }
                }
            }
        };
        this.treeOptions = {
            actionMapping: this.actionMapping,
            levelPadding: -5,
            animateExpand: true,
            animateSpeed: 40,
            animateAcceleration: 1.2
        };
        this.products = [];
        this.largeScreen = true;
        // Get products
        this.products = DataService.getProducts();
        this.setCurrentProduct(this.products[0].code);
        this.productsTree = TreeService.formTree(this.products);
        // on window resize
        this.largeScreen = this.WindowService.isLargeScreen();
        this.windowRef = this.WindowService.nativeWindow();
        this.windowRef.onresize = function () {
            _this.largeScreen = _this.WindowService.isLargeScreen();
        };
    }
    ;
    AppComponent.prototype.setCurrentProduct = function (code) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                this.currentProduct = this.products[i];
            }
        }
    };
    AppComponent.prototype.openCloseSidenav = function () {
        this.sidenavIsOpened = !this.sidenavIsOpened;
        console.log(this.sidenavIsOpened);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__FadeInOutAnimation_fadeInOut__["a" /* fadeInOut */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__tree_service_tree_service__["a" /* TreeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__tree_service_tree_service__["a" /* TreeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__window_service_window_service__["a" /* WindowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__window_service_window_service__["a" /* WindowService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tree_service_tree_service__ = __webpack_require__("../../../../../src/app/tree-service/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__window_service_window_service__ = __webpack_require__("../../../../../src/app/window-service/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service_data_service__ = __webpack_require__("../../../../../src/app/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdCardModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__tree_service_tree_service__["a" /* TreeService */], __WEBPACK_IMPORTED_MODULE_7__window_service_window_service__["a" /* WindowService */], __WEBPACK_IMPORTED_MODULE_8__data_service_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data-service/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var products = [
    {
        "id": 0,
        "title": "Eloquent Javascript",
        "author": "Marijn Haverbeke",
        "type": "Books",
        "category": "Coding",
        "pages": "225",
        "language": "Javascript",
        "price": "25.99",
        "code": "#00000"
    },
    {
        "id": 1,
        "title": "Learning Java",
        "author": "Patrick Niemeyer",
        "type": "Books",
        "category": "Coding",
        "pages": "325",
        "language": "Java",
        "price": "30.99",
        "code": "#00001"
    },
    {
        "id": 2,
        "title": "Cooking for Family and Friends",
        "author": "Joe Wicks",
        "type": "Books",
        "category": "Cooking",
        "pages": "222",
        "main_ingredient": "Chicken",
        "price": "37.99",
        "code": "#00002"
    },
    {
        "id": 3,
        "title": "The Secret Destiny of America",
        "author": "Manly P. Hall",
        "type": "Books",
        "category": "Esoterics",
        "pages": "322",
        "min_age": "16",
        "price": "70.99",
        "code": "#00003"
    },
    {
        "id": 4,
        "title": "Wagner : Der Ring des Nibelungen",
        "performer": "Bayreuth Festival Orchestra",
        "type": "Discs",
        "subtype": "CD",
        "category": "Music",
        "price": "10.99",
        "code": "#00004"
    },
    {
        "id": 5,
        "title": "Alfred Hitchcock: Frenzy",
        "type": "Discs",
        "subtype": "DVD",
        "category": "Video",
        "price": "12.99",
        "code": "#00005"
    },
    {
        "id": 6,
        "title": "Microsoft Office 2015",
        "type": "Discs",
        "subtype": "DVD",
        "category": "Software",
        "price": "99.99",
        "code": "#00006"
    },
    {
        "id": 7,
        "title": "Adobe Photoshop 2016",
        "type": "Discs",
        "subtype": "DVD",
        "category": "Software",
        "price": "129.99",
        "code": "#00007"
    }
];
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getProducts = function () {
        return products;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/tree-service/tree.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeService = (function () {
    function TreeService() {
    }
    TreeService.prototype.formTree = function (items) {
        var tree = [];
        var idCounter = 0;
        for (var i = 0; i < items.length; i++) {
            var pos = -1;
            for (var j = 0; j < tree.length; j++) {
                if (tree[j].name === items[i].type) {
                    pos = j;
                }
            }
            if (pos === -1) {
                tree.push({ id: ++idCounter, name: items[i].type, children: [] });
                pos = tree.length - 1;
            }
            var categoryPos = -1;
            if (!items[i].subtype) {
                for (var l = 0; l < tree[pos].children.length; l++) {
                    if (items[i].category === tree[pos].children[l].name) {
                        categoryPos = l;
                    }
                }
                if (categoryPos === -1) {
                    tree[pos].children.push({ id: ++idCounter, name: items[i].category, children: [] });
                    categoryPos = tree[pos].children.length - 1;
                }
                tree[pos].children[categoryPos].children.push({ id: ++idCounter, name: items[i].title, code: items[i].code });
            }
            else {
                var subPos = -1;
                for (var k = 0; k < tree[pos].children.length; k++) {
                    if (tree[pos].children[k].name === items[i].subtype) {
                        subPos = k;
                    }
                }
                if (subPos === -1) {
                    tree[pos]["children"].push({ id: ++idCounter, name: items[i].subtype, children: [] });
                    subPos = tree[pos]["children"].length - 1;
                }
                for (var l = 0; l < tree[pos].children[subPos].children.length; l++) {
                    if (items[i].category === tree[pos].children[subPos].children[l].name) {
                        categoryPos = l;
                    }
                }
                if (categoryPos === -1) {
                    tree[pos].children[subPos].children.push({ id: ++idCounter, name: items[i].category, children: [] });
                    categoryPos = tree[pos].children[subPos].children.length - 1;
                }
                tree[pos].children[subPos].children[categoryPos].children.push({ id: ++idCounter, name: items[i].title, code: items[i].code });
            }
        }
        return tree;
    };
    return TreeService;
}());
TreeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TreeService);

//# sourceMappingURL=tree.service.js.map

/***/ }),

/***/ "../../../../../src/app/window-service/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowService = (function () {
    function WindowService() {
    }
    WindowService.prototype.nativeWindow = function () {
        return _window();
    };
    WindowService.prototype.isLargeScreen = function () {
        var width = this.nativeWindow().innerWidth;
        if (width > 768) {
            return true;
        }
        else {
            return false;
        }
    };
    return WindowService;
}());
WindowService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WindowService);

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map