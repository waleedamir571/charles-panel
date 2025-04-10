import React from "react";
import { Link } from "react-router-dom";

const Network = () => {
  return (
    <div className="main_content_iner">
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="white_card card_height_100 rounded-4">
              <div className="white_card_body pt-4">
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h3>Network</h3>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                        <div className="search_inner">
                          <form action="#">
                            <div className="search_field">
                              <input
                                type="text"
                                placeholder="Search content here..."
                              />
                            </div>
                            <button type="submit">
                              <i className="ti-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="add_button ms-2">
                        <Link
                          to="/network/details"
                          className="btn_1 text-decoration-none"
                        >
                          + Send Invite
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: "#cecaca" }} />

                  <div className="QA_table mb_30">
                    <table className="table lms_table_active3">
                      <thead>
                        <tr>
                          <th scope="col">
                            <a href="#" className="question_content">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                value="option2"
                              />
                            </a>
                          </th>
                          <th scope="col" className="job">
                            Knotty Logistic LLC
                          </th>
                          <th scope="col">PREVIEW</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(20)].map((_, i) => (
                          <tr key={i}>
                            <th scope="row">
                              <Link
                                to="/network/details"
                                className="question_content"
                              >
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id={`gridRadios${i}`}
                                  value="option2"
                                />
                              </Link>
                            </th>
                            <td className="job">Knotty Logistic LLC</td>
                            <td>PREVIEW</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
