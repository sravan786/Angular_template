import { Component } from '@angular/core'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-seller-info',
  standalone: true,
  imports: [NgbTooltipModule],
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="header-title mt-0 mb-3">Seller Information</h4>
        <p class="text-muted font-13">
          Hye, I’m Michael Franklin residing in this beautiful world. I create
          websites and mobile apps with great UX and UI design. I have done work
          with big companies like Nokia, Google and Yahoo. Meet me or Contact me
          for any queries. One Extra line for filling space. Fill as many you
          want.
        </p>

        <hr />

        <div class="text-start">
          <p class="text-muted">
            <strong>Full Name :</strong>
            <span class="ms-2"> Michael A. Franklin</span>
          </p>

          <p class="text-muted">
            <strong>Mobile :</strong
            ><span class="ms-2">(+12) 123 1234 567</span>
          </p>

          <p class="text-muted">
            <strong>Email :</strong>
            <span class="ms-2"> coderthemes&#64;gmail.com</span>
          </p>

          <p class="text-muted">
            <strong>Location :</strong> <span class="ms-2"> USA</span>
          </p>

          <p class="text-muted">
            <strong>Languages :</strong>
            <span class="ms-2"> English, German, Spanish </span>
          </p>
          <p class="text-muted mb-0" id="tooltip-container">
            <strong> Elsewhere :</strong>
            <a
              class="d-inline-block ms-2 text-muted"
              placement="top"
              ngbTooltip="Facebook"
              ><i class="mdi mdi-facebook"></i
            ></a>
            <a
              class="d-inline-block ms-2 text-muted"
              placement="top"
              ngbTooltip="Twitter"
              ><i class="mdi mdi-twitter"></i
            ></a>
            <a
              class="d-inline-block ms-2 text-muted"
              placement="top"
              ngbTooltip="Skype"
              ><i class="mdi mdi-skype"></i
            ></a>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SellerInfoComponent {}
