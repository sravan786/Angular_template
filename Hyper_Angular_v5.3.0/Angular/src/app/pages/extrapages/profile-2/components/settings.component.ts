import { Component } from '@angular/core'

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  template: `
    <form>
      <h5 class="mb-4 text-uppercase">
        <i class="mdi mdi-account-circle me-1"></i> Personal Info
      </h5>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="firstname" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              placeholder="Enter first name"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="lastname" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <label for="userbio" class="form-label">Bio</label>
            <textarea
              class="form-control"
              id="userbio"
              rows="4"
              placeholder="Write something..."
            ></textarea>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="useremail" class="form-label">Email Address</label>
            <input
              type="email"
              class="form-control"
              id="useremail"
              placeholder="Enter email"
            />
            <span class="form-text text-muted"
              ><small
                >If you want to change email please
                <a href="javascript: void(0);">click</a> here.</small
              ></span
            >
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="userpassword" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="userpassword"
              placeholder="Enter password"
            />
            <span class="form-text text-muted"
              ><small
                >If you want to change password please
                <a href="javascript: void(0);">click</a> here.</small
              ></span
            >
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <h5 class="mb-3 text-uppercase bg-light p-2">
        <i class="mdi mdi-office-building me-1"></i> Company Info
      </h5>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="companyname" class="form-label">Company Name</label>
            <input
              type="text"
              class="form-control"
              id="companyname"
              placeholder="Enter company name"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="cwebsite" class="form-label">Website</label>
            <input
              type="text"
              class="form-control"
              id="cwebsite"
              placeholder="Enter website url"
            />
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <h5 class="mb-3 text-uppercase bg-light p-2">
        <i class="mdi mdi-earth me-1"></i> Social
      </h5>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="social-fb" class="form-label">Facebook</label>
            <div class="input-group">
              <span class="input-group-text"
                ><i class="mdi mdi-facebook"></i
              ></span>
              <input
                type="text"
                class="form-control"
                id="social-fb"
                placeholder="Url"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="social-tw" class="form-label">Twitter</label>
            <div class="input-group">
              <span class="input-group-text"
                ><i class="mdi mdi-twitter"></i
              ></span>
              <input
                type="text"
                class="form-control"
                id="social-tw"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="social-insta" class="form-label">Instagram</label>
            <div class="input-group">
              <span class="input-group-text"
                ><i class="mdi mdi-instagram"></i
              ></span>
              <input
                type="text"
                class="form-control"
                id="social-insta"
                placeholder="Url"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="social-lin" class="form-label">Linkedin</label>
            <div class="input-group">
              <span class="input-group-text"
                ><i class="mdi mdi-linkedin"></i
              ></span>
              <input
                type="text"
                class="form-control"
                id="social-lin"
                placeholder="Url"
              />
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="social-sky" class="form-label">Skype</label>
            <div class="input-group">
              <span class="input-group-text"
                ><i class="mdi mdi-skype"></i
              ></span>
              <input
                type="text"
                class="form-control"
                id="social-sky"
                placeholder="@username"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="social-gh" class="form-label">Github</label>
            <div class="input-group">
              <span class="input-group-text"
                ><i class="mdi mdi-github"></i
              ></span>
              <input
                type="text"
                class="form-control"
                id="social-gh"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="text-end">
        <button type="submit" class="btn btn-success mt-2">
          <i class="mdi mdi-content-save"></i> Save
        </button>
      </div>
    </form>
  `,
  styles: ``,
})
export class SettingsComponent {}
