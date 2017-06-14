import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {User} from '../models/index';

const url = 'https://api.mlab.com/api/1/databases/eamsdevdb/collections/Companies?apiKey=_y0CqqgMFT7QU8Yv-yJIWdlYAs1-YiWJ';
@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    // getAll() {
    //     return this.http.get('', this.jwt()).map((response: Response) => response.json());
    // }

    // getById(id: number) {
    //     return this.http.get('' + id, this.jwt()).map((response: Response) => response.json());
    // }

    create(user: User) {
        return this.http.post(url, user, this.jwt()).map((response: Response) => response.json());
    }

    // update(user: User) {
    //     return this.http.put('' + user.id, user, this.jwt()).map((response: Response) => response.json());
    // }

    // delete(id: number) {
    //     return this.http.delete('' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({headers: headers});
        }
    }
}
