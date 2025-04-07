import React from 'react';

const Network = () => {
  return (
    <div className="main_content_iner">
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="white_card card_height_100 mb_30">
              <div className="white_card_header">
                <div className="box_header m-0">
                  <div className="main-title">
                    {/* <h3 className="m-0"></h3> */}
                  </div>
                </div>
              </div>
              <div className="white_card_body">
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
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#addcategory"
                          className="btn_1"
                        >
                          + Send Invite
                        </a>
                      </div>
                    </div>
                  </div>

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
                              <a href="#" className="question_content">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id={`gridRadios${i}`}
                                  value="option2"
                                />
                              </a>
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
