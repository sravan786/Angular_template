import { Component, EventEmitter, Output } from '@angular/core'
import { RouterModule } from '@angular/router'
import { countries } from '@core/data'
import { NgSelectModule } from '@ng-select/ng-select'

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [NgSelectModule, RouterModule],
  template: `
    <h4 class="mt-2">Saved Address</h4>

    <p class="text-muted mb-3">
      Fill the form below in order to send you the order's invoice.
    </p>

    <div class="row">
      <div class="col-md-6">
        <div class="border p-3 rounded mb-3 mb-md-0">
          <address class="mb-0 address-lg">
            <div class="form-check">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="form-check-input"
                checked
              />
              <label class="form-check-label font-16 fw-bold" for="customRadio1"
                >Home</label
              >
            </div>
            <br />
            <span class="fw-semibold">Stanley Jones</span> <br />
            795 Folsom Ave, Suite 600<br />
            San Francisco, CA 94107<br />
            <abbr title="Phone">P:</abbr> (123) 456-7890 <br />
          </address>
        </div>
      </div>
      <div class="col-md-6">
        <div class="border p-3 rounded">
          <address class="mb-0 address-lg">
            <div class="form-check">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                class="form-check-input"
              />
              <label class="form-check-label font-16 fw-bold" for="customRadio2"
                >Office</label
              >
            </div>
            <br />
            <span class="fw-semibold">Stanley Jones</span> <br />
            795 Folsom Ave, Suite 600<br />
            San Francisco, CA 94107<br />
            <abbr title="Phone">P:</abbr> (123) 456-7890 <br />
          </address>
        </div>
      </div>
    </div>
    <!-- end row-->

    <h4 class="mt-4">Add New Address</h4>

    <p class="text-muted mb-4">
      Fill the form below so we can send you the order's invoice.
    </p>

    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="new-adr-first-name" class="form-label"
              >First Name</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Enter your first name"
              id="new-adr-first-name"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="new-adr-last-name" class="form-label">Last Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter your last name"
              id="new-adr-last-name"
            />
          </div>
        </div>
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="new-adr-email-address" class="form-label"
              >Email Address <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              type="email"
              placeholder="Enter your email"
              id="new-adr-email-address"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="new-adr-phone" class="form-label"
              >Phone <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              type="text"
              placeholder="(xx) xxx xxxx xxx"
              id="new-adr-phone"
            />
          </div>
        </div>
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <label for="new-adr-address" class="form-label">Address</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter full address"
              id="new-adr-address"
            />
          </div>
        </div>
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-md-4">
          <div class="mb-3">
            <label for="new-adr-town-city" class="form-label"
              >Town / City</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Enter your city name"
              id="new-adr-town-city"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="new-adr-state" class="form-label">State</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter your state"
              id="new-adr-state"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="new-adr-zip-postal" class="form-label"
              >Zip / Postal Code</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Enter your zip code"
              id="new-adr-zip-postal"
            />
          </div>
        </div>
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <label class="form-label">Country</label>
            <ng-select
              data-toggle="select2"
              title="Country"
              class="select2-hidden-accessible"
              placeholder="Select Country"
            >
              <ng-option value="0">Select Country</ng-option>
              @for (data of countryList; track $index) {
                <ng-option value="{{ data.value }}">{{ data.label }}</ng-option>
              }
            </ng-select>
          </div>
        </div>
      </div>
      <!-- end row -->

      <h4 class="mt-4">Shipping Method</h4>

      <p class="text-muted mb-3">
        Fill the form below in order to send you the order's invoice.
      </p>

      <div class="row">
        <div class="col-md-6">
          <div class="border p-3 rounded mb-3 mb-md-0">
            <div class="form-check">
              <input
                type="radio"
                id="shippingMethodRadio1"
                name="shippingOptions"
                class="form-check-input"
                checked
              />
              <label
                class="form-check-label font-16 fw-bold"
                for="shippingMethodRadio1"
                >Standard Delivery - FREE</label
              >
            </div>
            <p class="mb-0 ps-3 pt-1">
              Estimated 5-7 days shipping (Duties and tax may be due upon
              delivery)
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="border p-3 rounded">
            <div class="form-check">
              <input
                type="radio"
                id="shippingMethodRadio2"
                name="shippingOptions"
                class="form-check-input"
              />
              <label
                class="form-check-label font-16 fw-bold"
                for="shippingMethodRadio2"
                >Fast Delivery - $25</label
              >
            </div>
            <p class="mb-0 ps-3 pt-1">
              Estimated 1-2 days shipping (Duties and tax may be due upon
              delivery)
            </p>
          </div>
        </div>
      </div>
      <!-- end row-->

      <div class="row mt-4">
        <div class="col-sm-6">
          <a
            routerLink="/apps-ecommerce-shopping-cart"
            class="btn text-muted d-none d-sm-inline-block btn-link fw-semibold"
          >
            <i class="mdi mdi-arrow-left"></i> Back to Shopping Cart
          </a>
        </div>
        <!-- end col -->
        <div class="col-sm-6">
          <div class="text-sm-end">
            <a (click)="changeTab()" class="btn btn-danger">
              <i class="mdi mdi-cash-multiple me-1"></i> Continue to Payment
            </a>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </form>
  `,
  styles: ``,
})
export class ShippingComponent {
  countryList = countries
  @Output() tabChanged = new EventEmitter()

  changeTab() {
    this.tabChanged.emit(3)
  }
}
