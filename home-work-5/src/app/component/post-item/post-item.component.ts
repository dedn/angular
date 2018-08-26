import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";
import {Comment} from "../../../../../Home Work easyCode/angular/home-work-4/src/app/models/comment";
import {CommentsServices} from "../../services/comments.services";

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

    @Input('post') postItem: Post;
    @Output() deletePost: EventEmitter<number> = new EventEmitter()

    editPostId: number;
    comments: Comment[];

    constructor(public postServices: PostService, public commentServices: CommentsServices) {
    }

    ngOnInit() {
        this.postServices.editTaskEvent.subscribe((post: Post) => {
            if (post.id === this.postItem.id) {
                this.editPostId = post.id;
            } else {
                this.editPostId = 0
            }
        })
    }

    onDelete(id: number) {
        this.deletePost.emit(id)
    }

    onEdit(post: Post) {
        const updtPost = {
            title: post.title,
            body: post.body,
            userId: post.userId,
            id: post.id
        };

        this.postServices.emitEditEvent(updtPost)
    }

    onCansel() {
        this.postServices.emitEditEvent({title: '', body: '', userId: 1})
    }

    onShowComment(id: number) {
        this.commentServices.getComments(id).subscribe((comments: Comment[]) => {
            this.comments = comments
        })
    }
}
