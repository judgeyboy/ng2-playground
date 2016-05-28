import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';

@Component({
    selector: 'navigation',
    templateUrl: 'app/navigation.component.html',
    directives: [
        RouterLink
    ]
})
export class NavigationComponent{
    constructor(private _router: Router){
    }
    
    isCurrentRoute(route){
        var instruction = this._router.generate([route]);
        return this._router.isRouteActive(instruction);
    }
    
}