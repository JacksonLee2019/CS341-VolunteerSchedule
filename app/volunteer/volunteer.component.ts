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

        //check if the user is already signed up
        //for(var i = 0; i < serviceRequest.volunteerList.length; i++) {
            //if(serviceRequest.volunteerList[i] === user.email) {
                //return;
            //}
        //}

        //if not add them to the volunteer list
        if(serviceRequest.volunteersNeeded > 0) {
            //serviceRequest.volunteerList[serviceRequest.numVolunteers] = user.email;
            serviceRequest.volunteersNeeded--;
            serviceRequest.numVolunteers++;
            serviceRequest.signedUp = true;
        } else {
            console.log("This service has enough volunteers");
        }
    }

    cancel(user: User, serviceRequest: ServiceRequest) {
        serviceRequest.volunteersNeeded++;
        serviceRequest.numVolunteers--;
        serviceRequest.signedUp = false;
        //serviceRequest.volunteerList[numVolunteers]
    }
}