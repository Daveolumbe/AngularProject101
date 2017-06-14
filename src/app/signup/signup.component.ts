import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    model: any = {};
    constructor(private userService: UserService, private router: Router) {
    }

    onSubmit() {
        this.userService.create(this.model)
            .subscribe(
                data => {
                 //   this.alertService.success('Registration successful', true);
                    this.router.navigate(['/dashboard']);
                },
                error => {
                  //  this.alertService.error(error);
                });
    }
}
