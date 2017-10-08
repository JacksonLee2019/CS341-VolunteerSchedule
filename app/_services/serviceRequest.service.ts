import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { ServiceRequest } from '../_models/index';

@Injectable()
export class ServiceRequestService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/serviceRequests');
    }

    getById(id: number) {
        return this.http.get('/api/serviceRequests/' + id);
    }

    create(serviceRequest: ServiceRequest) {
        return this.http.post('/api/serviceRequests', serviceRequest);
    }

    update(serviceRequest: ServiceRequest) {
        return this.http.put('/api/serviceRequests/' + serviceRequest.id, serviceRequest);
    }

    delete(id: number) {
        return this.http.delete('/api/serviceRequests/' + id);
    }
}