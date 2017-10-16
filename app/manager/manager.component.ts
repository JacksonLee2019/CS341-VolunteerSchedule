import { Component, OnInit } from '@angular/core';

import { User, ServiceRequest } from '../_models/index';
import { UserService, ServiceRequestService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'manager.component.html'
})

export class ManagerComponent implements OnInit {
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
}