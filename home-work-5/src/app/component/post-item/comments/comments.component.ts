import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/post";
import {Comment} from "../../../models/comment";

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    @Input('postItem') postItem: Post;
    @Input('comment') comment: Comment;

    constructor() {
    }

    ngOnInit() {
    }
}
