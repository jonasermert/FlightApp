import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    
    sidebarVisible: boolean = false;

    sidebarToggle(){
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
