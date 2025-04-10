import React from "react";
import styles from "./TicketIndexDetail.module.css";

const TicketIndexDetail = () => {
  return (
    <>
      <div className="main_content_iner">
        <div className="card">
          <div className="row">
            <div className="col-md-12">
              <div className="header-section">
                <div className="row">
                  <div className="col-md-4 blue-section">
                    <div className="logo-section">
                      <div className="logo-box">
                        <img src="/assets/img/home/logo.png" alt="" />
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="address ptext">
                      387 15th St. W. #248
                      <br />
                      Dickinson, ND 58601
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row info-row">
                      <div className="col-6 info-label">Contractor</div>
                      <div className="col-6 info-value text-end">
                        Allbiz 24 Transport
                      </div>
                    </div>
                    <div className="row info-row">
                      <div className="col-3 info-label">Date</div>
                      <div className="col-3 info-value">2-15-14</div>
                      <div className="col-3 info-label">Ticket No</div>
                      <div className="col-3 info-value text-end">10667</div>
                    </div>
                    <div className="row info-row">
                      <div className="col-6 info-label">Company Name</div>
                      <div className="col-6 info-value text-end">
                        Rough Rider SHG
                      </div>
                    </div>
                    <div className="row info-row">
                      <div className="col-6 info-label">Driver Name</div>
                      <div className="col-6 info-value text-end">
                        Jerrit Maudgett
                      </div>
                    </div>
                    <div className="row info-row">
                      <div className="col-3 info-label">Equip. #</div>
                      <div className="col-3 info-value">
                        100 - TK
                        <br />
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

          <div className="row time-section">
            <div className="col-md-4">
              <div className="time-box">
                <div className="row">
                  <div className="col-md-3">
                    <div className="tonnage-header info-bible">Tonnage</div>
                  </div>
                  <div className="col-md-9">
                    <div className="hourly-value">Hourly</div>
                  </div>
                </div>

                <div className="row time-details">
                  <div className="col-4">
                    <div className="start-label">START</div>
                    <div className="time-value">8:43 AM</div>
                    <div className="date-value">1/15/2013</div>
                    <div className="grid-box">M</div>
                    <div className="grid-box">M</div>
                  </div>
                  <div className="col-4">
                    <div className="stop-label">STOP</div>
                    <div className="time-value">8:43 AM</div>
                    <div className="date-value">1/15/2013</div>
                    <div className="grid-box">M</div>
                    <div className="grid-box">M</div>
                  </div>
                  <div className="col-4">
                    <div className="total-label">TOTAL</div>
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

          <div className="row">
            <div className="col-md-12">
              <h3 className="load-count-header">LOAD COUNT</h3>
              <div className="table-responsive">
                <table className={`${styles.table} table-bordered load-table`}>
                  <thead>
                    <tr>
                      <th>
                        Time
                        <br />
                        (Load)
                      </th>
                      <th>
                        Time
                        <br />
                        (UnLoad)
                      </th>
                      <th>Ticket No</th>
                      <th>Weight</th>
                      <th>
                        Hauled
                        <br />
                        From
                      </th>
                      <th>
                        Hauled
                        <br />
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

          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <button className="edit-btn border-none">
                Edit{" "}
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      d="M11.9455 3.11964L13.8366 5.01074M13.1612 1.45365L8.04535 6.56953C7.78101 6.8335 7.60073 7.16981 7.52724 7.53607L7.05469 9.90151L9.42012 9.42807C9.78637 9.35482 10.1222 9.17526 10.3867 8.91085L15.5025 3.79497C15.6563 3.64124 15.7782 3.45873 15.8614 3.25787C15.9446 3.057 15.9874 2.84172 15.9874 2.62431C15.9874 2.4069 15.9446 2.19162 15.8614 1.99076C15.7782 1.78989 15.6563 1.60739 15.5025 1.45365C15.3488 1.29992 15.1663 1.17797 14.9654 1.09477C14.7646 1.01157 14.5493 0.96875 14.3319 0.96875C14.1145 0.96875 13.8992 1.01157 13.6983 1.09477C13.4975 1.17797 13.315 1.29992 13.1612 1.45365Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.2002 11.6898V14.3696C14.2002 14.8435 14.0119 15.2979 13.6769 15.6329C13.3418 15.968 12.8874 16.1562 12.4136 16.1562H2.58736C2.11353 16.1562 1.65911 15.968 1.32406 15.6329C0.98901 15.2979 0.800781 14.8435 0.800781 14.3696V4.54342C0.800781 4.06959 0.98901 3.61516 1.32406 3.28011C1.65911 2.94506 2.11353 2.75684 2.58736 2.75684H5.26724"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketIndexDetail;
