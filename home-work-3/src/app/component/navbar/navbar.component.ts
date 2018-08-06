import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    firstName: string = "Yurij";
    lastName: string = "Kirillov";
    title: string = "Home Work 2";

    constructor() {
    }

    ngOnInit() {
    }

}
