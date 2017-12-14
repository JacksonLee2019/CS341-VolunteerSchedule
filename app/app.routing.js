"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const index_1 = require("./admin/index");
const index_2 = require("./manager/index");
const index_3 = require("./volunteer/index");
const index_4 = require("./login/index");
const index_5 = require("./register/index");
const index_6 = require("./serviceRequest/index");
const index_7 = require("./_guards/index");
const index_8 = require("./_guards/index");
const index_9 = require("./_guards/index");
const appRoutes = [
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