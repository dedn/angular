import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    visible = false;

    items: any[] = [
        {
            name: "Salmon - Canned",
            price: "$91.56",
            info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
            review: [
                {
                    name: "Denis",
                    text: "Some review text"
                }
            ]
        },
        {
            name: "Soup - Beef, Base Mix",
            price: "$126.14",
            info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
            review: [
                {
                    name: "Ivan",
                    text: "Some review text"
                },
                {
                    name: "Maks",
                    text: "Some review text"
                }
            ]
        }
    ];


    toggleInfo(event: any) {

        event.target.parentElement.classList.toggle('visible');
    }


    constructor() {
    }

    ngOnInit() {

    }

}
