"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./admin/index");
var index_2 = require("./manager/index");
var index_3 = require("./volunteer/index");
var index_4 = require("./login/index");
var index_5 = require("./register/index");
var index_6 = require("./serviceRequest/index");
var index_7 = require("./_guards/index");
var index_8 = require("./_guards/index");
var index_9 = require("./_guards/index");
var appRoutes = [
    { path: 'admin', component: index_1.AdminComponent, canActivate: [index_7.AdminGuard] },
    { path: 'volunteer', component: index_3.VolunteerComponent, canActivate: [index_8.AuthGuard] },
    { path: 'manager', component: index_2.ManagerComponent, canActivate: [index_9.ManagerGuard] },
    { path: 'login', component: index_4.LoginComponent },
    { path: 'register', component: index_5.RegisterComponent },
    { path: 'serviceForm', component: index_6.ServiceRequestForm },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map