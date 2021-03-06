﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';


// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AdminGuard } from './_guards/index';
import { ManagerGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, ServiceRequestService } from './_services/index';
import { AdminComponent } from './admin/index';
import { ManagerComponent } from './manager/index';
import { VolunteerComponent } from './volunteer/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ServiceRequestComponent, ServiceRequestForm } from './serviceRequest/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        AdminComponent,
        ManagerComponent,
        VolunteerComponent,
        LoginComponent,
        RegisterComponent,
        ServiceRequestComponent,
        ServiceRequestForm
    ],
    providers: [
        ManagerGuard,
        AdminGuard,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ServiceRequestService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }