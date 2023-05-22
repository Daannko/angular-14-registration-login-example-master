import { Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({
  providedIn: 'root',
 })
export class FishService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    }

    getAll(params: string) {
        return this.http.get(`${environment.apiUrl}/fish/all${params}`);
    }

    getAllById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/fish/user/${id}`);
    }

}

