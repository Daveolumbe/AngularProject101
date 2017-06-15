import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AlertService, UserService } from '../shared/services/index';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
    model: any = {};
    loading = false;
    constructor(private userService: UserService, private alertService: AlertService, private router: Router) {
    }

    onSubmit() {
        this.loading = true;
        console.log(this.model);
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
