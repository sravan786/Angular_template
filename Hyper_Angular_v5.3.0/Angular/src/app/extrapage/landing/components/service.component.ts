import { Component } from '@angular/core'
import { services } from '@core/data'

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  template: `
    <section class="py-5">
      <div class="container">
        <div class="row py-4">
          <div class="col-lg-12">
            <div class="text-center">
              <h1 class="mt-0"><i class="mdi mdi-infinity"></i></h1>
              <h3>
                The admin is fully
                <span class="text-primary">responsive</span> and easy to
                <span class="text-primary">customize</span>
              </h3>
              <p class="text-muted mt-2">
                The clean and well commented code allows easy customization of
                the theme.It's designed for <br />describing your app, agency or
                business.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          @for (service of serviceData; track $index) {
            <div class="col-lg-4 col-md-6">
              <div class="text-center p-2 p-sm-3">
                <div class="avatar-sm m-auto">
                  <span class="avatar-title bg-primary-lighten rounded-circle">
                    <i class="{{ service.icon }} text-primary font-24"></i>
                  </span>
                </div>
                <h4 class="mt-3">{{ service.title }}</h4>
                <p class="text-muted mt-2 mb-0">
                  {{ service.description }}
                </p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ServiceComponent {
  serviceData = services
}
