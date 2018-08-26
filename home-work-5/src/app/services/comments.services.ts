import { Injectable } from '@angular/core';
import { environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Post} from "../models/post";
import {Comment} from "../models/comment";


@Injectable({
    providedIn: 'root'
})
export class CommentsServices {

    private apiUrl = environment.api_url;

    constructor(
        public http:HttpClient
    ) {  }

    getComments(id: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.apiUrl}/comments?postId=${id}`)
    }

}
