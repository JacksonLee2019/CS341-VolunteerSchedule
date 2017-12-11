import { Component, OnInit } from '@angular/core';
import { User, ServiceRequest } from '../_models/index';
import { UserService, ServiceRequestService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'volunteer.component.html'
})

export class VolunteerComponent implements OnInit{
    currentUser: User;
    currentServiceRequest: ServiceRequest;
    serviceRequests: ServiceRequest[] = [];

    constructor(private userService: UserService, private serviceRequestService: ServiceRequestService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentServiceRequest = JSON.parse(localStorage.getItem('currentServiceRequest'));
    }

    ngOnInit() {
        this.loadAllServiceRequests();
    }

    deleteServiceRequest(id: number) {
        this.serviceRequestService.delete(id).subscribe(() => { this.loadAllServiceRequests() });
    }

    private loadAllServiceRequests() {
        this.serviceRequestService.getAll().subscribe(serviceRequests => { this.serviceRequests = serviceRequests; });
    }

    signUp(user: User, serviceRequest: ServiceRequest) {
        console.log(user.email);
        console.log(serviceRequest.title);
        //serviceRequest.volunteerList[serviceRequest.numVolunteers] = user.email;
        serviceRequest.volunteersNeeded--;
        serviceRequest.numVolunteers++;
        //this.serviceRequestService.update(serviceRequest).subscribe(() => { this.loadAllServiceRequests() });
    }
}