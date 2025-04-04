<?php include 'header.php'; ?>


<div className="main_content_iner">
     
<div class="">
      <!-- Header Section -->
      <div class="row">
        <div class="col-md-12">
          <div class="header-section">
            <div class="row">
              <div class="col-md-4 blue-section">
                <div class="logo-section">
                  <div class="logo-box">
                    <span class="logo-brackets">[&nbsp;&nbsp;]</span>
                  </div>
                  <div class="logo-text">
                    <span class="knotty">KNOTTY</span>
                    <span class="logistics">LOGISTICS</span>
                  </div>
                </div>
                <div class="address">
                  387 15th St. W. #248<br />
                  Dickinson, ND 58601
                </div>
              </div>
              <div class="col-md-8">
                <div class="row info-row">
                  <div class="col-6 info-label">Contractor</div>
                  <div class="col-6 info-value text-end">Allbiz 24 Transport</div>
                </div>
                <div class="row info-row">
                  <div class="col-3 info-label">Date</div>
                  <div class="col-3 info-value">2-15-14</div>
                  <div class="col-3 info-label">Ticket No</div>
                  <div class="col-3 info-value text-end">10667</div>
                </div>
                <div class="row info-row">
                  <div class="col-6 info-label">Company Name</div>
                  <div class="col-6 info-value text-end">Rough Rider SHG</div>
                </div>
                <div class="row info-row">
                  <div class="col-6 info-label">Driver Name</div>
                  <div class="col-6 info-value text-end">Jerrit Maudgett</div>
                </div>
                <div class="row info-row">
                  <div class="col-3 info-label">Equip. #</div>
                  <div class="col-3 info-value">
                    100 - TK<br />
                    101 - TR
                  </div>
                  <div class="col-3 info-label">Type Material</div>
                  <div class="col-3 info-value text-end">CL - 5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Time Section -->
      <div class="row time-section">
        <div class="col-md-4">
          <div class="time-box">
            <div class="tonnage-header">Tonnage</div>
            <div class="hourly-value">Hourly</div>

            <div class="row time-details">
              <div class="col-4">
                <div class="start-label">START</div>
                <div class="time-value">8:43 AM</div>
                <div class="date-value">1/15/2013</div>
              </div>
              <div class="col-4">
                <div class="stop-label">STOP</div>
                <div class="time-value">8:43 AM</div>
                <div class="date-value">1/15/2013</div>
              </div>
              <div class="col-4">
                <div class="total-label">TOTAL</div>
              </div>
            </div>

            <div class="row time-grid">
              <div class="col-6">
                <div class="grid-box">M</div>
              </div>
              <div class="col-6">
                <div class="grid-box">M</div>
              </div>
            </div>
            <div class="row time-grid">
              <div class="col-6">
                <div class="grid-box">M</div>
              </div>
              <div class="col-6">
                <div class="grid-box">M</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="type-section">
            <div class="row trailer-types">
              <div class="col">ED</div>
              <div class="col">Side</div>
              <div class="col">Belly</div>
              <div class="col">TRI</div>
              <div class="col">Flat Side</div>
              <div class="col">Semi ED</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Load Count Section -->
      <div class="row">
        <div class="col-md-12">
          <h3 class="load-count-header">LOAD COUNT</h3>
          <div class="table-responsive">
            <table class="table table-bordered load-table">
              <thead>
                <tr>
                  <th>
                    Time<br />
                    (Load)
                  </th>
                  <th>
                    Time<br />
                    (UnLoad)
                  </th>
                  <th>Ticket No</th>
                  <th>Weight</th>
                  <th>
                    Hauled<br />
                    From
                  </th>
                  <th>
                    Hauled<br />
                    To
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8 : 50 AM</td>
                  <td>9 : 20 PM</td>
                  <td>45692</td>
                  <td>450</td>
                  <td>Jerry Lassogalt</td>
                  <td>Mc Kenzie CB</td>
                </tr>
                <tr>
                  <td>11 : 20 AM</td>
                  <td>2 : 45 PM</td>
                  <td>56942</td>
                  <td>630</td>
                  <td>Jerry Lassogalt</td>
                  <td>Mc Kenzie CB</td>
                </tr>
                <tr>
                  <td>3 : 10 PM</td>
                  <td>10 : 40 PM</td>
                  <td>32561</td>
                  <td>220</td>
                  <td>Jerry Lassogalt</td>
                  <td>Mc Kenzie CB</td>
                </tr>
                <tr>
                  <td>8 : 50 PM</td>
                  <td>11 : 30 AM</td>
                  <td>56974</td>
                  <td>750</td>
                  <td>Jerry Lassogalt</td>
                  <td>Mc Kenzie CB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Edit Button -->
      <div class="row">
        <div class="col-md-12 text-center">
          <button class="btn edit-btn">
            Edit <span class="ms-2">✏️</span>
          </button>
        </div>
      </div>
    </div>
    </div>

    <?php include 'footer.php'; ?>