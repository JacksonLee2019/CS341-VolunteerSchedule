import { Component, OnInit } from '@angular/core';

import { User, ServiceRequest } from '../_models/index';
import { UserService, ServiceRequestService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html'
})

export class AdminComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    currentServiceRequest: ServiceRequest;
    serviceRequests: ServiceRequest[] = [];

    constructor(private userService: UserService, private serviceRequestService: ServiceRequestService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllServiceRequests();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    deleteServiceRequest(id: number) {
        this.serviceRequestService.delete(id).subscribe(() => { this.loadAllServiceRequests() });
    }

    private loadAllServiceRequests() {
        this.serviceRequestService.getAll().subscribe(serviceRequests => { this.serviceRequests = serviceRequests; });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}