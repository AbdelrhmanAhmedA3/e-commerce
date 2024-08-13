import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'core/services/API/auth/auth.service';
import { LoadingSpinerService } from 'core/services/loading-spiner/loading-spiner.service';
import { ErrorFieldComponent } from 'shared/components/error-field/error-field.component';
import { LoadingSpinnerComponent } from 'shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, ErrorFieldComponent, LoadingSpinnerComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private loadingSpiner: LoadingSpinerService) { }


  ngOnInit(): void {
  }



  validationMessages = {
    email:
    {
      required: 'user name is required',
    },
    password: {
      required: 'password is required',

    }
  }

  authForm: any = this.fb.nonNullable.group({
    username: ['emilys', [Validators.required,]],
    password: ['emilyspass', [Validators.required]],
  })




  onSubmit() {
    this.loadingSpiner.start()
    if (!this.authForm.value) {
      this.authForm.markAllAsTouched()
      return
    }
    this.auth.auth(this.authForm.value.username, this.authForm.value.password, 30).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token)
        this.router.navigate(['products']);
        // console.log(localStorage.getItem('authToken'));
        this.auth.token.next(localStorage.getItem('authToken'))
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'An error occurred during login.';
        this.loadingSpiner.stop()

      }
    })


  }

}
