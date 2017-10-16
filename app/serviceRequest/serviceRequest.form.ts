import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, ServiceRequestService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'serviceRequest.form.html'
})

export class ServiceRequestForm {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private serviceRequestService: ServiceRequestService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.serviceRequestService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Service Request Created', true);
                    this.router.navigate(['/manager']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
