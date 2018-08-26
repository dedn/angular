import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";

@Component({
    selector: 'app-add-new-post',
    templateUrl: './add-new-post.component.html',
    styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {

    @Output() addNewPost: EventEmitter<Post> = new EventEmitter();
    @Output() editPost: EventEmitter<Post> = new EventEmitter();

    formData: Post = {
        title: '',
        body: '',
        userId: 1
    };

    constructor(private postServices: PostService) {
    }

    ngOnInit() {
        this.postServices.editTaskEvent.subscribe((post: Post) => {
            this.formData = post
        })
    }

    onAddPost() {
        const newPost: Post = {
            title: this.formData.title,
            body: this.formData.body,
            userId: this.formData.userId
        };

        this.postServices.addPost(newPost).subscribe((data: Post) => {
                console.log(data)
                if (data.id) {
                    this.addNewPost.emit(data)
                }
            }, (error) => {
                console.log(error)
            }
        )
    }

    onEditPost() {
        const editPost: Post = {
            title: this.formData.title,
            body: this.formData.body,
            userId: this.formData.userId,
            id: this.formData.id
        };

        this.postServices.editPost(editPost).subscribe((data: Post) => {
                console.log(data)
                if (data.id) {
                    this.editPost.emit(data)
                }
            }, (error) => {
                console.log(error)
            }
        )
    }

    onCansel(post: Post) {
        this.postServices.emitEditEvent({title: '', body: '', userId: 1})
    }
}
