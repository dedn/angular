import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


    items: any[] = [
        {
            name: 'Salmon - Canned',
            price: '$91.56',
            info: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
            reviewShow: false,
            review: [
                {
                    name: 'Denis',
                    text: 'Some review text'
                }
            ]
        },
        {
            name: 'Soup - Beef, Base Mix',
            price: '$126.14',
            info: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
            reviewShow: false,
            review: [
                {
                    name: 'Ivan',
                    text: 'Some review text'
                },
                {
                    name: 'Maks',
                    text: 'Some review text'
                }
            ]
        },
        {
            name: 'Soup - Beef, Base Mix3',
            price: '$126.14',
            info: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
            reviewShow: false,
            review: [
                {
                    name: 'Ivan',
                    text: 'Some review text'
                },
                {
                    name: 'Maks',
                    text: 'Some review text'
                }
            ]
        },
        {
            name: 'Soup - Beef, Base Mix2',
            price: '$126.14',
            info: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
            reviewShow: false,
            review: [
                {
                    name: 'Ivan',
                    text: 'Some review text'
                },
                {
                    name: 'Maks',
                    text: 'Some review text'
                }
            ]
        },
    ];

    constructor() {
    }

    ngOnInit() {

    }

    deleteProduct(index) {
        this.items.splice(index, 1);
    }
}
