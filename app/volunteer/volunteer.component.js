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
let VolunteerComponent = class VolunteerComponent {
    constructor(userService, serviceRequestService) {
        this.userService = userService;
        this.serviceRequestService = serviceRequestService;
        this.serviceRequests = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentServiceRequest = JSON.parse(localStorage.getItem('currentServiceRequest'));
    }
    ngOnInit() {
        this.loadAllServiceRequests();
    }
    deleteServiceRequest(id) {
        this.serviceRequestService.delete(id).subscribe(() => { this.loadAllServiceRequests(); });
    }
    loadAllServiceRequests() {
        this.serviceRequestService.getAll().subscribe(serviceRequests => { this.serviceRequests = serviceRequests; });
    }
    signUp(user, serviceRequest) {
        //check if the user is already signed up
        //for(var i = 0; i < serviceRequest.volunteerList.length; i++) {
        //if(serviceRequest.volunteerList[i] === user.email) {
        //return;
        //}
        //}
        //if not add them to the volunteer list
        if (serviceRequest.volunteersNeeded > 0) {
            //serviceRequest.volunteerList[serviceRequest.numVolunteers] = user.email;
            serviceRequest.volunteersNeeded--;
            serviceRequest.numVolunteers++;
            serviceRequest.signedUp = true;
        }
        else {
            console.log("This service has enough volunteers");
        }
    }
    cancel(user, serviceRequest) {
        serviceRequest.volunteersNeeded++;
        serviceRequest.numVolunteers--;
        serviceRequest.signedUp = false;
        //serviceRequest.volunteerList[numVolunteers]
    }
};
VolunteerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'volunteer.component.html'
    }),
    __metadata("design:paramtypes", [index_1.UserService, index_1.ServiceRequestService])
], VolunteerComponent);
exports.VolunteerComponent = VolunteerComponent;
//# sourceMappingURL=volunteer.component.js.map