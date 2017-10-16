"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// used to create fake backend
var index_1 = require("./_helpers/index");
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_2 = require("./_directives/index");
var index_3 = require("./_guards/index");
var index_4 = require("./_guards/index");
var index_5 = require("./_guards/index");
var index_6 = require("./_services/index");
var index_7 = require("./admin/index");
var index_8 = require("./manager/index");
var index_9 = require("./volunteer/index");
var index_10 = require("./login/index");
var index_11 = require("./register/index");
var index_12 = require("./serviceRequest/index");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_2.AlertComponent,
                index_7.AdminComponent,
                index_8.ManagerComponent,
                index_9.VolunteerComponent,
                index_10.LoginComponent,
                index_11.RegisterComponent,
                index_12.ServiceRequestComponent,
                index_12.ServiceRequestForm
            ],
            providers: [
                index_5.ManagerGuard,
                index_4.AdminGuard,
                index_3.AuthGuard,
                index_6.AlertService,
                index_6.AuthenticationService,
                index_6.UserService,
                index_6.ServiceRequestService,
                // providers used to create fake backend
                index_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map