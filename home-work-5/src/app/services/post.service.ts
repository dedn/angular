import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Post} from "../models/post";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";


@Injectable({
    providedIn: 'root'
})
export class PostService {

    private apiUrl = environment.api_url;
    private editTask: BehaviorSubject<Post> = new BehaviorSubject({title: '', body: '', userId: 1});
    public editTaskEvent = this.editTask.asObservable();

    constructor(
        public http: HttpClient
    ) {
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.apiUrl}/posts`)
    }

    deletePost(id: number): Observable<Object> {
        return this.http.delete<Object>(`${this.apiUrl}/posts/${id}`)
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(`${this.apiUrl}/posts`, post)
    }

    editPost(post: Post): Observable<Post> {
        return this.http.put<Post>(`${this.apiUrl}/posts/${post.id}`, post)
    }

    emitEditEvent(post: Post): void {
        this.editTask.next(post);
    }
}
