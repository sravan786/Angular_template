import { Component } from '@angular/core'

@Component({
  selector: 'channel',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div
        class="d-flex card-header justify-content-between align-items-center"
      >
        <h4 class="header-title">Channels</h4>
        <a href="javascript:void(0);" class="btn btn-sm btn-light"
          >Export <i class="mdi mdi-download ms-1"></i
        ></a>
      </div>

      <div class="card-body pt-0">
        <div class="table-responsive">
          <table class="table table-sm table-centered mb-0 font-14">
            <thead class="table-light">
              <tr>
                <th>Channel</th>
                <th>Visits</th>
                <th style="width: 40%"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Direct</td>
                <td>2,050</td>
                <td>
                  <div class="progress" style="height: 3px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 65%; height: 20px"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Organic Search</td>
                <td>1,405</td>
                <td>
                  <div class="progress" style="height: 3px">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      style="width: 45%; height: 20px"
                      aria-valuenow="45"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Refferal</td>
                <td>750</td>
                <td>
                  <div class="progress" style="height: 3px">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 30%; height: 20px"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Social</td>
                <td>540</td>
                <td>
                  <div class="progress" style="height: 3px">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      style="width: 25%; height: 20px"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive-->
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->
  `,
})
export class ChannelComponent {}
