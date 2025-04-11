import React, { useState } from "react";
import styles from "./AssetReport.module.css";

const AssetReport = () => {
  // State to manage the visibility of each section
  const [isTiresOpen, setIsTiresOpen] = useState(false);
  const [isLeaksOpen, setIsLeaksOpen] = useState(true);
  const [isGaugesOpen, setIsGaugesOpen] = useState(false);

  // Toggle functions for each section
  const toggleTires = () => setIsTiresOpen(!isTiresOpen);
  const toggleLeaks = () => setIsLeaksOpen(!isLeaksOpen);
  const toggleGauges = () => setIsGaugesOpen(!isGaugesOpen);

  return (
    <>
      <div className="main_content_iner">
        <div className="container-fluid p-0 white_card card_height_100 mb_30">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_body">
              <div className="row">
                <div className="col-md-6">
                  <div className={styles["report-header"]}>
                    <h1 className="fw-medium fs-3 mb-0">Report</h1>
                    <hr style={{ color: "#cecaca", marginBottom: "0" }} />

                    <div className={`${styles["report-section"]} p-3`}>
                      <p className="pre-trip mb-3">Driver Pre-Trip</p>

                      <div className={styles["info-item"]}>
                        <div className={styles["info-label2"]}>
                          Vehicle (Make/Model/Year)
                        </div>
                        <div className={styles["info-value2"]}>
                          2024 Peterbilt 389
                        </div>
                      </div>

                      <div className={styles["info-item"]}>
                        <div className={styles["info-label2"]}>
                          Odometer Reading
                        </div>
                        <div className={styles["info-value2"]}>1,089 mi</div>
                      </div>

                      <div className={styles["info-item"]}>
                        <div className={styles["info-label2"]}>Trailer</div>
                        <div className={styles["info-value2"]}>2267</div>
                      </div>

                      <div className={styles["info-item"]}>
                        <div className={styles["info-label2"]}>
                          Inspection Date
                        </div>
                        <div className={styles["info-value2"]}>9/8/2024</div>
                      </div>

                      <div className={styles["info-item"]}>
                        <div className={styles["info-label2"]}>Time</div>
                        <div className={styles["info-value2"]}>11:22 PM</div>
                      </div>

                      <p className="info-value2 fs-6">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="accordion">
                    {/* Tires Section - Dropdown */}
                    <div className={`${styles["accordion-item"]} rounded-3`}>
                      <div
                        className={`${styles["accordion-header"]} ${styles.ok} rounded-3`}
                        onClick={toggleTires}
                      >
                        <h3>Tires</h3>
                        <img
                          src={
                            isTiresOpen
                              ? "/images/icons/chevron-up.png"
                              : "/assets/img/home/icon.png"
                          }
                          alt=""
                        />
                        <div className={styles.status}>
                          <span className={`${styles["status-text"]} ok`}>
                            Ok
                          </span>
                        </div>
                      </div>

                      {isTiresOpen && (
                        <div className={styles["accordion-body"]}>
                          <p>Details about tires here...</p>
                        </div>
                      )}
                    </div>

                    {/* Leaks Section - Dropdown */}
                    <div className={`${styles["accordion-item"]} rounded-3`}>
                      <div
                        className={`${styles["accordion-header"]} attention rounded-3`}
                        style={{ backgroundColor: "#D65E62" }}
                        onClick={toggleLeaks}
                      >
                        <h3>Leaks</h3>
                        <img
                          src={
                            isLeaksOpen
                              ? "/images/icons/chevron-up.png"
                              : "/assets/img/home/icon.png"
                          }
                          alt=""
                        />
                        <div className={styles.status}>
                          <span
                            className={`${styles["status-text"]} fs-5 fw-semibold`}
                          >
                            Need Attention
                          </span>
                        </div>
                      </div>

                      {isLeaksOpen && (
                        <div
                          className={`${styles["accordion-body"]} attention  rounded-3`}
                          style={{ backgroundColor: "#FFCCCB" }}
                        >
                          <div className={`${styles["checkbox-header"]} pb-4`}>
                            <div
                              className={`${styles["checkbox-header-cell"]} ${styles.ok} fs-5 pt-3`}
                            >
                              Ok
                            </div>
                            <div
                              className={`${styles["checkbox-header-cell"]} fs-5 pt-3`}
                            >
                              Needs Attention
                            </div>
                            <div
                              className={styles["checkbox-header-cell"]}
                            ></div>
                          </div>

                          <div className={`${styles["checkbox-row"]} mt-3`}>
                            <div className={styles["checkbox-cell"]}>
                              <input
                                type="checkbox"
                                aria-label="Checkbox for following text input"
                                className="border-none"
                              />
                            </div>
                            <div className={styles["checkbox-cell"]}>
                              <input
                                type="checkbox"
                                aria-label="Checkbox for following text input"
                              />
                            </div>
                            <div className={styles["row-label"]}>Oil</div>
                          </div>

                          <div className={styles["checkbox-row"]}>
                            <div className={styles["checkbox-cell"]}>
                              <input
                                type="checkbox"
                                aria-label="Checkbox for following text input"
                              />
                            </div>
                            <div className={styles["checkbox-cell"]}>
                              <input
                                type="checkbox"
                                aria-label="Checkbox for following text input"
                              />
                            </div>
                            <div className={styles["row-label"]}>
                              Fuel tanks
                            </div>
                          </div>

                          <div className={styles["notes-container"]}>
                            <textarea
                              className={styles["textarea1"]}
                              placeholder="Lorem ipsum dolor sit amet"
                              rows={4}
                            ></textarea>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Gauges Section - Dropdown */}
                    <div className={`${styles["accordion-item"]} rounded-3`}>
                      <div
                        className={`${styles["accordion-header"]} ${styles.ok} rounded-3`}
                        onClick={toggleGauges}
                      >
                        <h3>Gauges</h3>
                        <img
                          src={
                            isGaugesOpen
                              ? "/images/icons/chevron-up.png"
                              : "/assets/img/home/icon.png"
                          }
                          alt=""
                        />
                        <div className={styles.status}>
                          <span
                            className={`${styles["status-text"]} ${styles.ok}`}
                          >
                            Ok
                          </span>
                        </div>
                      </div>

                      {isGaugesOpen && (
                        <div className={styles["accordion-body"]}>
                          <p>Details about gauges here...</p>
                        </div>
                      )}
                    </div>

                    <div className={`${styles["accordion-item"]} rounded-3`}>
                      <div
                        className={`${styles["accordion-header"]} ${styles.ok} rounded-3`}
                        onClick={toggleTires}
                      >
                        <h3>Lighting</h3>
                        <img
                          src={
                            isTiresOpen
                              ? "/images/icons/chevron-up.png"
                              : "/assets/img/home/icon.png"
                          }
                          alt=""
                        />
                        <div className={styles.status}>
                          <span className={`${styles["status-text"]} ok`}>
                            Ok
                          </span>
                        </div>
                      </div>

                      {isTiresOpen && (
                        <div className={styles["accordion-body"]}>
                          <p>Details about tires here...</p>
                        </div>
                      )}
                    </div>

                    <div className={`${styles["accordion-item"]} rounded-3`}>
                      <div
                        className={`${styles["accordion-header"]} ${styles.ok} rounded-3`}
                        onClick={toggleTires}
                      >
                        <h3>Safety Eq..</h3>
                        <img
                          src={
                            isTiresOpen
                              ? "/images/icons/chevron-up.png"
                              : "/assets/img/home/icon.png"
                          }
                          alt=""
                        />
                        <div className={styles.status}>
                          <span className={`${styles["status-text"]} ok`}>
                            Ok
                          </span>
                        </div>
                      </div>

                      {isTiresOpen && (
                        <div className={styles["accordion-body"]}>
                          <p>Details about tires here...</p>
                        </div>
                      )}
                    </div>

                    <div className={`${styles["accordion-item"]} rounded-3`}>
                      <div
                        className={`${styles["accordion-header"]} ${styles.ok} rounded-3`}
                        onClick={toggleTires}
                      >
                        <h3>Trailers</h3>
                        <img
                          src={
                            isTiresOpen
                              ? "/images/icons/chevron-up.png"
                              : "/assets/img/home/icon.png"
                          }
                          alt=""
                        />
                        <div className={styles.status}>
                          <span className={`${styles["status-text"]} ok`}>
                            Ok
                          </span>
                        </div>
                      </div>

                      {isTiresOpen && (
                        <div className={styles["accordion-body"]}>
                          <p>Details about tires here...</p>
                        </div>
                      )}
                    </div>

                    <div className={`${styles["accordion-item"]} rounded-3`}>
                      <div
                        className={`${styles["accordion-header"]} ${styles.ok} rounded-3`}
                        onClick={toggleTires}
                      >
                        <h3>Safety Eq..</h3>
                        <img
                          src={
                            isTiresOpen
                              ? "/images/icons/chevron-up.png"
                              : "/assets/img/home/icon.png"
                          }
                          alt=""
                        />
                        <div className={styles.status}>
                          <span className={`${styles["status-text"]} ok`}>
                            Ok
                          </span>
                        </div>
                      </div>

                      {isTiresOpen && (
                        <div className={styles["accordion-body"]}>
                          <p>Details about tires here...</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5 offset-md-7">
                      <button type="button" className="btn mt-4 btn-info2">
                        Submit{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetReport;
