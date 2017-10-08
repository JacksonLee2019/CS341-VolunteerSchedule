import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ManagerGuard implements CanActivate {

    constructor(private router: Router) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let obj = JSON.parse(localStorage.getItem('currentUser'));
        if (obj.systemRole==='manager') {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate([obj.systemRole], { queryParams: { returnUrl: state.url }});
        return false;
    }
}