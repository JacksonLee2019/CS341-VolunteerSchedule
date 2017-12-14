"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const index_1 = require("../_services/index");
let AdminComponent = class AdminComponent {
    constructor(userService, serviceRequestService) {
        this.userService = userService;
        this.serviceRequestService = serviceRequestService;
        this.users = [];
        this.serviceRequests = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.loadAllUsers();
        this.loadAllServiceRequests();
    }
    deleteUser(id) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }
    deleteServiceRequest(id) {
        this.serviceRequestService.delete(id).subscribe(() => { this.loadAllServiceRequests(); });
    }
    loadAllServiceRequests() {
        this.serviceRequestService.getAll().subscribe(serviceRequests => { this.serviceRequests = serviceRequests; });
    }
    loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
};
AdminComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'admin.component.html'
    }),
    __metadata("design:paramtypes", [index_1.UserService, index_1.ServiceRequestService])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map