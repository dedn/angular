import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommentsServices } from "../../services/comments.services';
import { Comment } from '../../models/comment';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    formData: Post = {
        title: '',
        body: '',
        userId: 1
    };

    posts: Post[];
    comments: Comment[];
    isAdmin = true;

    constructor (
        public postServices: PostService,
        private toaster: ToastrService,
        private spinner: NgxSpinnerService,
        private commentServices: CommentsServices
    ) { }

    ngOnInit () {
        this.postServices.getPosts().subscribe((posts: Post[]) => {
                this.posts = posts
            }, error => {
                this.toaster.error(error.message, 'error')
            }
        )
    }

    onDelete (id: number) {
        this.spinner.show();
        this.postServices.deletePost(id).subscribe((data: Object) => {
                this.posts = this.posts.filter(post => post.id != id);

            }, (error) => {
                this.toaster.error(error.message, 'error')
            }, () => {
                this.spinner.hide();
                this.toaster.success('Post deleted succes')
            },
        )
    }

    onAddPost () {
        this.spinner.show();
        const newPost: Post = {
            title: this.formData.title,
            body: this.formData.body,
            userId: this.formData.userId
        };

        this.postServices.addPost(newPost).subscribe((data: Post) => {
            if (data.id) {
                this.posts.unshift(data)
                this.spinner.hide();
                this.toaster.success('Post added succes')
            }
        },(error)=>{
            this.toaster.error(error.message, 'error')
            }
        )
    }

    onShowComment(id: number) {
        this.commentServices.getComments(id).subscribe((comments: Comment[]) => {
            this.comments = comments
        })
    }
}
