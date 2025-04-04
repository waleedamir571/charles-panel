<?php include 'header.php'; ?>

<style>
  .header-section {
  border-bottom: 1px solid #ddd;
}

.blue-section {
  background-color: #1a4e8c;
  color: white;
  padding: 20px;
  height: 100%;
  min-height: 180px;
  position: relative;
}

.logo-section {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.logo-box {
  margin-right: 10px;
}

.logo-brackets {
  font-size: 36px;
  font-weight: bold;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.knotty {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
}

.logistics {
  font-size: 24px;
  color: #4b87d0;
}

.address {
  font-size: 14px;
  position: absolute;
  bottom: 20px;
}

/* Info Styling */
.info-row {
  padding: 8px 15px;
  border-bottom: 1px solid #f0f0f0;
}

.info-label {
  font-weight: 600;
  color: #333;
}

.info-value {
  color: #666;
}

/* Time Section */
.time-section {
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
}

.time-box {
  padding: 15px;
  border-right: 1px solid #ddd;
}

.tonnage-header {
  font-weight: bold;
  text-align: center;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
}

.hourly-value {
  text-align: right;
  padding: 5px 0;
  font-style: italic;
  color: #666;
}

.time-details {
  text-align: center;
  margin: 15px 0;
}

.start-label, .stop-label, .total-label {
  font-weight: bold;
  font-size: 12px;
}

.time-value {
  font-size: 14px;
}

.date-value {
  font-size: 12px;
  color: #666;
}

.time-grid {
  margin-top: 10px;
}

.grid-box {
  border: 1px solid #ddd;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

/* Trailer Types */
.type-section {
  padding: 15px;
}

.trailer-types {
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-top: 40px;
}

/* Load Count Section */
.load-count-header {
  text-align: center;
  margin: 15px 0;
  font-weight: bold;
  font-size: 22px;
}

.load-table {
  width: 100%;
  border-collapse: collapse;
}

.load-table th {
  background-color: #f5f5f5;
  text-align: center;
  padding: 10px;
  font-size: 14px;
}

.load-table td {
  text-align: center;
  padding: 10px;
  font-size: 14px;
}

/* Edit Button */
.edit-btn {
  background-color: #4a7ab8;
  color: white;
  margin: 20px 0;
  padding: 8px 40px;
  border-radius: 3px;
  font-weight: 500;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .blue-section {
    min-height: auto;
  }
  
  .address {
    position: relative;
    bottom: auto;
    margin-top: 20px;
  }
  
  .time-box {
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
  
  .time-details {
    font-size: 12px;
  }
}
</style>

<div className="main_content_iner">
     
      <div className="row">
        <div className="col-md-12">
          <div className="header-section">
            <div className="row">
              <div className="col-md-4 blue-section">
                <div className="logo-section">
                  <div className="logo-box">
                    <span className="logo-brackets">[&nbsp;&nbsp;]</span>
                  </div>
                  <div className="logo-text">
                    <span className="knotty">KNOTTY</span>
                    <span className="logistics">LOGISTICS</span>
                  </div>
                </div>
                <div className="address">
                  387 15th St. W. #248<br />
                  Dickinson, ND 58601
                </div>
              </div>
              <div className="col-md-8">
                <div className="row info-row">
                  <div className="col-6 info-label">Contractor</div>
                  <div className="col-6 info-value text-end">Allbiz 24 Transport</div>
                </div>
                <div className="row info-row">
                  <div className="col-3 info-label">Date</div>
                  <div className="col-3 info-value">2-15-14</div>
                  <div className="col-3 info-label">Ticket No</div>
                  <div className="col-3 info-value text-end">10667</div>
                </div>
                <div className="row info-row">
                  <div className="col-6 info-label">Company Name</div>
                  <div className="col-6 info-value text-end">Rough Rider SHG</div>
                </div>
                <div className="row info-row">
                  <div className="col-6 info-label">Driver Name</div>
                  <div className="col-6 info-value text-end">Jerrit Maudgett</div>
                </div>
                <div className="row info-row">
                  <div className="col-3 info-label">Equip. #</div>
                  <div className="col-3 info-value">
                    100 - TK<br />
                    101 - TR
                  </div>
                  <div className="col-3 info-label">Type Material</div>
                  <div className="col-3 info-value text-end">CL - 5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Time Section */}
      <div className="row time-section">
        <div className="col-md-4">
          <div className="time-box">
            <div className="tonnage-header">Tonnage</div>
            <div className="hourly-value">Hourly</div>

            <div className="row time-details">
              <div className="col-4">
                <div className="start-label">START</div>
                <div className="time-value">8:43 AM</div>
                <div className="date-value">1/15/2013</div>
              </div>
              <div className="col-4">
                <div className="stop-label">STOP</div>
                <div className="time-value">8:43 AM</div>
                <div className="date-value">1/15/2013</div>
              </div>
              <div className="col-4">
                <div className="total-label">TOTAL</div>
              </div>
            </div>

            <div className="row time-grid">
              <div className="col-6">
                <div className="grid-box">M</div>
              </div>
              <div className="col-6">
                <div className="grid-box">M</div>
              </div>
            </div>
            <div className="row time-grid">
              <div className="col-6">
                <div className="grid-box">M</div>
              </div>
              <div className="col-6">
                <div className="grid-box">M</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="type-section">
            <div className="row trailer-types">
              <div className="col">ED</div>
              <div className="col">Side</div>
              <div className="col">Belly</div>
              <div className="col">TRI</div>
              <div className="col">Flat Side</div>
              <div className="col">Semi ED</div>
            </div>
          </div>
        </div>
      </div>

      {/* Load Count Section */}
      <div className="row">
        <div className="col-md-12">
          <h3 className="load-count-header">LOAD COUNT</h3>
          <div className="table-responsive">
            <table className="table table-bordered load-table">
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

    
      <div className="row">
        <div className="col-md-12 text-center">
          <Button className="edit-btn">
            Edit <span className="ms-2">✏️</span>
          </Button>
        </div>
      </div>
    </div>

    <?php include 'footer.php'; ?>