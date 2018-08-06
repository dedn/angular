import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/userModel";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    item: UserModel = {
        name: 'test',
        email: 'dedn61@gmail.com',
        age: 30,
        phoneNumber: 949848989,
        comment: 'Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum '
    };

    userList: UserModel[];

    constructor() { }

    ngOnInit() {

        this.userList = [
            {
                name: 'test',
                email: 'dedn61@gmail.com',
                age: 30,
                phoneNumber: 949848989,
                comment: 'Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum '

            },
            {
                name: 'test4',
                email: 'dedn61@gmail.com',
                age: 25,
                phoneNumber: 949848989,
                comment: 'Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum '

            },
            {
                name: 'test5',
                email: 'dedn61@gmail.com',
                age: 25,
                phoneNumber: 949848989,
                comment: 'Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum '

            },
            {
                name: 'test6',
                email: 'dedn61@gmail.com',
                age: 25,
                phoneNumber: 949848989,
                comment: 'Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum '

            },


        ];

    }

    onSubmit(form) {
        if (form.invalid) return;
        const newItem: UserModel = {
            name: this.item.name,
            email: this.item.email,
            age: this.item.age,
            phoneNumber: this.item.phoneNumber,
            comment: this.item.comment
        };

        this.userList.push(newItem);
    }

    deleteProduct(index) {
        this.userList.splice(index, 1);
    }
}
