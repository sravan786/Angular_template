import { Component } from '@angular/core'

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  template: `
    <div class="card bg-primary">
      <div class="card-body profile-user-box">
        <div class="row">
          <div class="col-sm-8">
            <div class="row align-items-center">
              <div class="col-auto">
                <div class="avatar-lg">
                  <img
                    src="assets/images/users/avatar-2.jpg"
                    alt=""
                    class="rounded-circle img-thumbnail"
                  />
                </div>
              </div>
              <div class="col">
                <div>
                  <h4 class="mt-1 mb-1 text-white">Michael Franklin</h4>
                  <p class="font-13 text-white-50">Authorised Brand Seller</p>

                  <ul class="mb-0 list-inline text-light">
                    <li class="list-inline-item me-3">
                      <h5 class="mb-1 text-white">$ 25,184</h5>
                      <p class="mb-0 font-13 text-white-50">Total Revenue</p>
                    </li>
                    <li class="list-inline-item">
                      <h5 class="mb-1 text-white">5482</h5>
                      <p class="mb-0 font-13 text-white-50">Number of Orders</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end col-->

          <div class="col-sm-4">
            <div class="text-center mt-sm-0 mt-3 text-sm-end">
              <button type="button" class="btn btn-light">
                <i class="mdi mdi-account-edit me-1"></i> Edit Profile
              </button>
            </div>
          </div>
          <!-- end col-->
        </div>
        <!-- end row -->
      </div>
      <!-- end card-body/ profile-user-box-->
    </div>
  `,
  styles: ``,
})
export class UserDetailComponent {}
