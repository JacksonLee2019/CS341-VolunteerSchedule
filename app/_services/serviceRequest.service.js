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
const http_1 = require("@angular/http");
let ServiceRequestService = class ServiceRequestService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get('/api/serviceRequests').map((response) => response.json());
        ;
    }
    getById(id) {
        return this.http.get('/api/serviceRequests/' + id).map((response) => response.json());
        ;
    }
    create(serviceRequest) {
        return this.http.post('/api/serviceRequests', serviceRequest).map((response) => response.json());
        ;
    }
    update(serviceRequest) {
        return this.http.put('/api/serviceRequests/' + serviceRequest.id, serviceRequest).map((response) => response.json());
        ;
    }
    delete(id) {
        return this.http.delete('/api/serviceRequests/' + id).map((response) => response.json());
        ;
    }
};
ServiceRequestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServiceRequestService);
exports.ServiceRequestService = ServiceRequestService;
//# sourceMappingURL=serviceRequest.service.js.map