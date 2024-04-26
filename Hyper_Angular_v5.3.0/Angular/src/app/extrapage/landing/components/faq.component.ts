import { Component } from '@angular/core'
import { FaqsComponent } from '@component/faqs/faqs.component'
import { landingFaq } from '@core/data'

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqsComponent],
  template: `
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h1 class="mt-0">
                <i class="mdi mdi-frequently-asked-questions"></i>
              </h1>
              <h3>
                Frequently Asked <span class="text-primary">Questions</span>
              </h3>
              <p class="text-muted mt-2">
                Here are some of the basic types of questions for our customers.
                For more <br />information please contact us.
              </p>

              <button type="button" class="btn btn-success btn-sm mt-2">
                <i class="mdi mdi-email-outline me-1"></i> Email us your
                question
              </button>
              <button type="button" class="btn btn-info btn-sm mt-2 ms-1">
                <i class="mdi mdi-twitter me-1"></i> Send us a tweet
              </button>
            </div>
          </div>
        </div>

        <app-faqs [faqList]="faqData"></app-faqs>
      </div>
      <!-- end container-->
    </section>
  `,
  styles: ``,
})
export class FaqComponent {
  faqData = landingFaq
}
