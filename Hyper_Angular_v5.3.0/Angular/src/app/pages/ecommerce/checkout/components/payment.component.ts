import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h4 class="mt-2">Payment Selection</h4>

    <p class="text-muted mb-4">
      Fill the form below in order to send you the order's invoice.
    </p>

    <!-- Pay with Paypal box-->
    <div class="border p-3 mb-3 rounded">
      <div class="row">
        <div class="col-sm-8">
          <div class="form-check">
            <input
              type="radio"
              id="BillingOptRadio2"
              name="billingOptions"
              class="form-check-input"
            />
            <label
              class="form-check-label font-16 fw-bold"
              for="BillingOptRadio2"
              >Pay with Paypal</label
            >
          </div>
          <p class="mb-0 ps-3 pt-1">
            You will be redirected to PayPal website to complete your purchase
            securely.
          </p>
        </div>
        <div class="col-sm-4 text-sm-end mt-3 mt-sm-0">
          <img
            src="assets/images/payments/paypal.png"
            height="25"
            alt="paypal-img"
          />
        </div>
      </div>
    </div>
    <!-- end Pay with Paypal box-->

    <!-- Credit/Debit Card box-->
    <div class="border p-3 mb-3 rounded">
      <div class="row">
        <div class="col-sm-8">
          <div class="form-check">
            <input
              type="radio"
              id="BillingOptRadio1"
              name="billingOptions"
              class="form-check-input"
              checked
            />
            <label
              class="form-check-label font-16 fw-bold"
              for="BillingOptRadio1"
              >Credit / Debit Card</label
            >
          </div>
          <p class="mb-0 ps-3 pt-1">
            Safe money transfer using your bank account. We support Mastercard,
            Visa, Discover and Stripe.
          </p>
        </div>
        <div class="col-sm-4 text-sm-end mt-3 mt-sm-0 gap-2">
          <img
            src="assets/images/payments/master.png"
            height="24"
            alt="master-card-img"
          />
          <img
            src="assets/images/payments/discover.png"
            height="24"
            alt="discover-card-img"
          />
          <img
            src="assets/images/payments/visa.png"
            height="24"
            alt="visa-card-img"
          />
          <img
            src="assets/images/payments/stripe.png"
            height="24"
            alt="stripe-card-img"
          />
        </div>
      </div>
      <!-- end row -->
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="card-number" class="form-label">Card Number</label>
            <input
              type="text"
              id="card-number"
              class="form-control"
              data-toggle="input-mask"
              data-mask-format="0000 0000 0000 0000"
              placeholder="4242 4242 4242 4242"
            />
          </div>
        </div>
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="card-name-on" class="form-label">Name on card</label>
            <input
              type="text"
              id="card-name-on"
              class="form-control"
              placeholder="Master Shreyu"
            />
          </div>
        </div>
        <div class="col-md-3">
          <div class="mb-3">
            <label for="card-expiry-date" class="form-label">Expiry date</label>
            <input
              type="text"
              id="card-expiry-date"
              class="form-control"
              data-toggle="input-mask"
              data-mask-format="00/00"
              placeholder="MM/YY"
            />
          </div>
        </div>
        <div class="col-md-3">
          <div class="mb-3">
            <label for="card-cvv" class="form-label">CVV code</label>
            <input
              type="text"
              id="card-cvv"
              class="form-control"
              data-toggle="input-mask"
              data-mask-format="000"
              placeholder="012"
            />
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- end Credit/Debit Card box-->

    <!-- Pay with Payoneer box-->
    <div class="border p-3 mb-3 rounded">
      <div class="row">
        <div class="col-sm-8">
          <div class="form-check">
            <input
              type="radio"
              id="BillingOptRadio3"
              name="billingOptions"
              class="form-check-input"
            />
            <label
              class="form-check-label font-16 fw-bold"
              for="BillingOptRadio3"
              >Pay with Payoneer</label
            >
          </div>
          <p class="mb-0 ps-3 pt-1">
            You will be redirected to Payoneer website to complete your purchase
            securely.
          </p>
        </div>
        <div class="col-sm-4 text-sm-end mt-3 mt-sm-0">
          <img
            src="assets/images/payments/payoneer.png"
            height="30"
            alt="paypal-img"
          />
        </div>
      </div>
    </div>
    <!-- end Pay with Payoneer box-->

    <!-- Cash on Delivery box-->
    <div class="border p-3 mb-3 rounded">
      <div class="row">
        <div class="col-sm-8">
          <div class="form-check">
            <input
              type="radio"
              id="BillingOptRadio4"
              name="billingOptions"
              class="form-check-input"
            />
            <label
              class="form-check-label font-16 fw-bold"
              for="BillingOptRadio4"
              >Cash on Delivery</label
            >
          </div>
          <p class="mb-0 ps-3 pt-1">
            Pay with cash when your order is delivered.
          </p>
        </div>
        <div class="col-sm-4 text-sm-end mt-3 mt-sm-0">
          <img
            src="assets/images/payments/cod.png"
            height="22"
            alt="paypal-img"
          />
        </div>
      </div>
    </div>
    <!-- end Cash on Delivery box-->

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
          <a routerLink="/apps-ecommerce-checkout" class="btn btn-danger">
            <i class="mdi mdi-cash-multiple me-1"></i> Complete Order
          </a>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class PaymentComponent {}
