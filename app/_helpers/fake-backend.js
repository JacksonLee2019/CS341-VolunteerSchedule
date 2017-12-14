"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@angular/http");
const testing_1 = require("@angular/http/testing");
function fakeBackendFactory(backend, options, realBackend) {
    // array in local storage for registered users
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let serviceRequests = JSON.parse(localStorage.getItem('serviceRequests')) || [];
    // configure fake backend
    backend.connections.subscribe((connection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {
            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === http_1.RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.email === params.email && user.password === params.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                        status: 200,
                        body: {
                            systemRole: user.systemRole,
                            id: user.id,
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        }
                    })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('email or password is incorrect'));
                }
                return;
            }
            // get users
            if (connection.request.url.endsWith('/api/users') && connection.request.method === http_1.RequestMethod.Get) {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: users })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                }
                return;
            }
            // get service requests
            if (connection.request.url.endsWith('/api/serviceRequests') && connection.request.method === http_1.RequestMethod.Get) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: serviceRequests })));
                return;
            }
            // get service request by id
            if (connection.request.url.match(/\/api\/serviceRequests\/\d+$/) && connection.request.method === http_1.RequestMethod.Get) {
                // find service request by id in service requests array
                let urlParts = connection.request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                let matchedServiceRequests = serviceRequests.filter(serviceRequest => { return serviceRequest.id === id; });
                let serviceRequest = matchedServiceRequests.length ? matchedServiceRequests[0] : null;
                // respond 200 OK with service request
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: serviceRequest })));
                return;
            }
            // get user by id
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === http_1.RequestMethod.Get) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = connection.request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;
                    // respond 200 OK with user
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: user })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                }
                return;
            }
            // create service request
            if (connection.request.url.endsWith('/api/serviceRequests') && connection.request.method === http_1.RequestMethod.Post) {
                // get new serviceRequest object from post body
                let newServiceRequest = JSON.parse(connection.request.getBody());
                // save new service request
                newServiceRequest.id = serviceRequests.length + 1;
                serviceRequests.push(newServiceRequest);
                localStorage.setItem('serviceRequests', JSON.stringify(serviceRequests));
                // respond 200 OK
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200 })));
                return;
            }
            // create user
            if (connection.request.url.endsWith('/api/users') && connection.request.method === http_1.RequestMethod.Post) {
                // get new user object from post body
                let newUser = JSON.parse(connection.request.getBody());
                // validation
                let duplicateUser = users.filter(user => { return user.email === newUser.email; }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('email "' + newUser.email + '" is already taken'));
                }
                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200 })));
                return;
            }
            // delete service request
            if (connection.request.url.match(/\/api\/serviceRequests\/\d+$/) && connection.request.method === http_1.RequestMethod.Delete) {
                // find service request by id in service requests array
                let urlParts = connection.request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                for (let i = 0; i < serviceRequests.length; i++) {
                    let serviceRequest = serviceRequests[i];
                    if (serviceRequest.id === id) {
                        // delete service request
                        serviceRequests.splice(i, 1);
                        localStorage.setItem('serviceRequests', JSON.stringify(serviceRequests));
                        break;
                    }
                }
                // respond 200 OK
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200 })));
                return;
            }
            // delete user
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === http_1.RequestMethod.Delete) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = connection.request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        let user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200 })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                }
                return;
            }
            // pass through any requests not handled above
            let realHttp = new http_1.Http(realBackend, options);
            let requestOptions = new http_1.RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response) => {
                connection.mockRespond(response);
            }, (error) => {
                connection.mockError(error);
            });
        }, 500);
    });
    return new http_1.Http(backend, options);
}
exports.fakeBackendFactory = fakeBackendFactory;
;
exports.fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: http_1.Http,
    useFactory: fakeBackendFactory,
    deps: [testing_1.MockBackend, http_1.BaseRequestOptions, http_1.XHRBackend]
};
//# sourceMappingURL=fake-backend.js.map