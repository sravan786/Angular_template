import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-dark py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img
              src="assets/images/logo.png"
              alt="logo"
              class="logo-dark"
              height="22"
            />
            <p class="text-light text-opacity-50 mt-4">
              Hyper makes it easier to build better websites with <br />
              great speed. Save hundreds of hours of design <br />
              and development by using it.
            </p>

            <ul class="social-list list-inline mt-3">
              <li class="list-inline-item text-center me-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-primary text-primary"
                  ><i class="mdi mdi-facebook"></i
                ></a>
              </li>
              <li class="list-inline-item text-center me-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-danger text-danger"
                  ><i class="mdi mdi-google"></i
                ></a>
              </li>
              <li class="list-inline-item text-center me-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-info text-info"
                  ><i class="mdi mdi-twitter"></i
                ></a>
              </li>
              <li class="list-inline-item text-center me-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-secondary text-secondary"
                  ><i class="mdi mdi-github"></i
                ></a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 mt-3 mt-lg-0">
            <h5 class="text-light">Company</h5>

            <ul class="list-unstyled ps-0 mb-0 mt-3">
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >About Us</a
                >
              </li>
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Documentation</a
                >
              </li>
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Blog</a
                >
              </li>
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Affiliate Program</a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 mt-3 mt-lg-0">
            <h5 class="text-light">Apps</h5>

            <ul class="list-unstyled ps-0 mb-0 mt-3">
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Ecommerce Pages</a
                >
              </li>
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Email</a
                >
              </li>
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Social Feed</a
                >
              </li>
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Projects</a
                >
              </li>
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Tasks Management</a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 mt-3 mt-lg-0">
            <h5 class="text-light">Discover</h5>

            <ul class="list-unstyled ps-0 mb-0 mt-3">
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Help Center</a
                >
              </li>
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Our Products</a
                >
              </li>
              <li class="mt-2">
                <a
                  href="javascript: void(0);"
                  class="text-light text-opacity-50"
                  >Privacy</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="mt-5">
              <p class="text-light text-opacity-50 mt-4 text-center mb-0">
                © 2018 -
                {{ year }}
                Hyper. Design and coded by Coderthemes
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  year = new Date().getFullYear()
}
