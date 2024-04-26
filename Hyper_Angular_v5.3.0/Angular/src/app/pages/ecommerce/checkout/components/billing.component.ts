import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { countries } from '@core/data'
import { NgSelectModule } from '@ng-select/ng-select'
import { ShippingComponent } from './shipping.component'

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [NgSelectModule, RouterModule],
  template: `<h4 class="mt-2">Billing information</h4>

    <p class="text-muted mb-4">
      Fill the form below in order to send you the order's invoice.
    </p>

    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="billing-first-name" class="form-label"
              >First Name</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Enter your first name"
              id="billing-first-name"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="billing-last-name" class="form-label">Last Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter your last name"
              id="billing-last-name"
            />
          </div>
        </div>
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="billing-email-address" class="form-label"
              >Email Address <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              type="email"
              placeholder="Enter your email"
              id="billing-email-address"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="billing-phone" class="form-label"
              >Phone <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              type="text"
              placeholder="(xx) xxx xxxx xxx"
              id="billing-phone"
            />
          </div>
        </div>
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <label for="billing-address" class="form-label">Address</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter full address"
              id="billing-address"
            />
          </div>
        </div>
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-md-4">
          <div class="mb-3">
            <label for="billing-town-city" class="form-label"
              >Town / City</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Enter your city name"
              id="billing-town-city"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="billing-state" class="form-label">State</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter your state"
              id="billing-state"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="billing-zip-postal" class="form-label"
              >Zip / Postal Code</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Enter your zip code"
              id="billing-zip-postal"
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

      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="customCheck2"
              />
              <label class="form-check-label" for="customCheck2"
                >Ship to different address ?</label
              >
            </div>
          </div>

          <div class="mb-3 mt-3">
            <label for="example-textarea" class="form-label"
              >Order Notes:</label
            >
            <textarea
              class="form-control"
              id="example-textarea"
              rows="3"
              placeholder="Write some note.."
            ></textarea>
          </div>
        </div>
      </div>
      <!-- end row -->

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
            <a class="btn btn-danger" (click)="changeTab()">
              <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping
            </a>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </form> `,
  styles: ``,
})
export class BillingComponent {
  @Output() tabChanged = new EventEmitter()

  countryList = countries

  changeTab() {
    this.tabChanged.emit(2)
  }
}
