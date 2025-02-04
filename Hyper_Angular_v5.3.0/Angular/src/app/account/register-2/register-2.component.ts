import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AccountWrapper2Component } from '@auth/account-wrapper2.component'

@Component({
  selector: 'app-register-2',
  standalone: true,
  imports: [CommonModule, AccountWrapper2Component, RouterModule],
  template: `
    <app-account-wrapper2>
      <div class="my-auto">
        <!-- title-->
        <h4 class="mt-3">Free Sign Up</h4>
        <p class="text-muted mb-4">
          Don't have an account? Create your account, it takes less than a
          minute
        </p>

        <!-- form -->
        <form action="#">
          <div class="mb-3">
            <label for="fullname" class="form-label">Full Name</label>
            <input
              class="form-control"
              type="text"
              id="fullname"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="emailaddress" class="form-label">Email address</label>
            <input
              class="form-control"
              type="email"
              id="emailaddress"
              required
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              class="form-control"
              type="password"
              required
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="checkbox-signup"
              />
              <label class="form-check-label" for="checkbox-signup"
                >I accept
                <a href="javascript: void(0);" class="text-muted"
                  >Terms and Conditions</a
                ></label
              >
            </div>
          </div>
          <div class="mb-0 d-grid text-center">
            <button class="btn btn-primary" type="submit">
              <i class="mdi mdi-account-circle"></i> Sign Up
            </button>
          </div>
          <!-- social-->
          <div class="text-center mt-4">
            <p class="text-muted font-16">Sign up using</p>
            <ul class="social-list list-inline mt-3">
              <li class="list-inline-item me-2 ms-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-primary text-primary"
                  ><i class="mdi mdi-facebook"></i
                ></a>
              </li>
              <li class="list-inline-item me-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-danger text-danger"
                  ><i class="mdi mdi-google"></i
                ></a>
              </li>
              <li class="list-inline-item me-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-info text-info"
                  ><i class="mdi mdi-twitter"></i
                ></a>
              </li>
              <li class="list-inline-item me-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-secondary text-secondary"
                  ><i class="mdi mdi-github"></i
                ></a>
              </li>
            </ul>
          </div>
        </form>
        <!-- end form-->
      </div>
      <ng-template #bottomLinks>
        <footer class="footer footer-alt">
          <p class="text-muted">
            Already have account?
            <a routerLink="/pages-login-2" class="text-muted ms-1"
              ><b>Log In</b></a
            >
          </p>
        </footer>
      </ng-template>
    </app-account-wrapper2>
  `,
  styles: ``,
})
export class Register2Component {}
