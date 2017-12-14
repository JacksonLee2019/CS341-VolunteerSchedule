"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
// used to create fake backend
const index_1 = require("./_helpers/index");
const testing_1 = require("@angular/http/testing");
const http_2 = require("@angular/http");
const app_component_1 = require("./app.component");
const app_routing_1 = require("./app.routing");
const index_2 = require("./_directives/index");
const index_3 = require("./_guards/index");
const index_4 = require("./_guards/index");
const index_5 = require("./_guards/index");
const index_6 = require("./_services/index");
const index_7 = require("./admin/index");
const index_8 = require("./manager/index");
const index_9 = require("./volunteer/index");
const index_10 = require("./login/index");
const index_11 = require("./register/index");
const index_12 = require("./serviceRequest/index");
let AppModule = class AppModule {
};
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
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map