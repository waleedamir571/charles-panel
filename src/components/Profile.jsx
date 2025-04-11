import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("images/dummy-profile.svg");

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const changeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };
  return (
    <>
      <div className="main_content_iner">
        <div className="white_card_body bg-white px-4 py-3 mb-3 rounded-4">
          <div className="d-flex align-items-center mb-2 fs-3">
            <span className="text-dark fw-medium">Profile</span>
          </div>
        </div>
        <div className="white_card card_height_100 mb_30 rounded-4">
          <div className="white_card_body">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="profile-section p-4">
                  <div className="row mb-4">
                    <div className="col d-flex">
                      <div className="profile-image-container">
                        <img
                          id="profileImage"
                          src={profileImage}
                          alt="Profile"
                          className="profile-image rounded-full"
                        />

                        <div className="edit-icon" onClick={triggerFileInput}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                          >
                            <path
                              d="M14.9306 3.47497L17.2861 5.83046M16.445 1.39988L10.0728 7.77203C9.74355 8.10082 9.519 8.51972 9.42746 8.97592L8.83887 11.9222L11.7852 11.3325C12.2414 11.2413 12.6597 11.0176 12.9891 10.6883L19.3612 4.31614C19.5527 4.12465 19.7046 3.89733 19.8082 3.64714C19.9119 3.39695 19.9652 3.12881 19.9652 2.85801C19.9652 2.58721 19.9119 2.31906 19.8082 2.06887C19.7046 1.81869 19.5527 1.59136 19.3612 1.39988C19.1697 1.20839 18.9424 1.0565 18.6922 0.952867C18.442 0.849236 18.1739 0.795898 17.9031 0.795898C17.6323 0.795898 17.3641 0.849236 17.114 0.952867C16.8638 1.0565 16.6364 1.20839 16.445 1.39988Z"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17.7406 14.149V17.4869C17.7406 18.0771 17.5061 18.6431 17.0888 19.0605C16.6715 19.4778 16.1054 19.7122 15.5153 19.7122H3.27608C2.6859 19.7122 2.11988 19.4778 1.70256 19.0605C1.28523 18.6431 1.05078 18.0771 1.05078 17.4869V5.24776C1.05078 4.65758 1.28523 4.09156 1.70256 3.67424C2.11988 3.25691 2.6859 3.02246 3.27608 3.02246H6.61404"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>

                        <input
                          type="file"
                          className="file-input"
                          ref={fileInputRef}
                          id="imageInput"
                          accept="image/*"
                          onChange={changeImage}
                        />
                      </div>

                      <div className="top-options">
                        <button className="option-button blue">
                          Manage Account
                        </button>
                        <button className="option-button dark-blue">
                          My Document
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-content">
                      <div className="detail-label">Full Name</div>
                      <input
                        type="text"
                        id="userName"
                        className="profile-custom-input"
                        value="James Elijah"
                      />
                    </div>

                    <div className="action-buttons">
                      <button className="icon-button">
                        <i className="fas fa-eye fa-sm text-white fw-bold"></i>
                      </button>
                      <button className="icon-button">
                        <i className="fas fa-pencil-alt fa-sm  text-white fw-bold"></i>
                      </button>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-content">
                      <div className="detail-label fs-6">Email Address</div>
                      <input
                        type="email"
                        id="userName"
                        className="profile-custom-input fs-6"
                        value="Info@Jameselijah.com"
                      />
                    </div>
                    <div className="action-buttons">
                      <button className="icon-button bg-blue">
                        <i className="fas fa-eye-slash fa-sm text-white fw-bold"></i>
                      </button>
                      <button className="icon-button">
                        <i className="fas fa-pencil-alt fa-sm text-white fw-bold"></i>
                      </button>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-content">
                      <div className="detail-label fs-6">Phone Number</div>
                      <input
                        type="text"
                        id="phone"
                        className="profile-custom-input fs-6 text-black"
                        placeholder="479-785-6200"
                      />
                    </div>
                    <div className="action-buttons">
                      <button className="icon-button">
                        <i className="fas fa-eye fa-sm text-white fw-bold"></i>
                      </button>
                      <button className="icon-button">
                        <i className="fas fa-pencil-alt fa-sm text-white fw-bold"></i>
                      </button>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-content">
                      <div className="detail-label fs-6">Location</div>
                      <input
                        type="text"
                        id="userName"
                        className="profile-custom-input fs-6"
                        value="3801 Old Greenwood Road Fort, AR.."
                      />
                    </div>
                    <div className="action-buttons">
                      <button className="icon-button">
                        <i className="fas fa-eye fa-sm text-white fw-bold"></i>
                      </button>
                      <button className="icon-button">
                        <i className="fas fa-pencil-alt fa-sm text-white fw-bold"></i>
                      </button>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-content">
                      <div className="detail-label fs-6">Designation</div>
                      <input
                        type="text"
                        id="userName"
                        className="profile-custom-input fs-6"
                        value="Driver"
                      />
                    </div>
                    <div className="action-buttons">
                      <button className="icon-button">
                        <i className="fas fa-eye fa-sm text-white fw-bold"></i>
                      </button>
                      <button className="icon-button">
                        <i className="fas fa-pencil-alt fa-sm text-white fw-bold"></i>
                      </button>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-content">
                      <div className="detail-label">Bio</div>

                      <input
                        type="text"
                        id="userName"
                        className="profile-custom-input"
                        value="Lorem ipsum dolor sit amet, from us in consectetur "
                      />
                    </div>
                    <div className="action-buttons">
                      <button className="icon-button">
                        <i className="fas fa-eye fa-sm text-white fw-bold"></i>
                      </button>
                      <button className="icon-button">
                        <i className="fas fa-pencil-alt fa-sm text-white fw-bold"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="subscription-section p-4">
                  <div className="row">
                    <div className="col-md-4 offset-md-8">
                      <div className="action-buttons-right">
                        <button className="btn-sm bg-dark-gray text-white border-none fs-5 fw-medium">
                          Update
                        </button>
                        <button className="btn-sm bg-purple text-white border-none fs-5 fw-medium">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <h5 className="mb-0 pkg">Package History</h5>
                      <div className="ptb-15">
                        <div className="line-container"></div>
                      </div>
                    </div>
                  </div>

                  <div className="subscription-card p-3 mb-3 py-4">
                    <div className="text-center mb-2">
                      <h6 className="mb-1 monthly">Pro Monthly: Canceled</h6>
                      <div className="ptb-15">
                        <p className="text-muted small mb-2">
                          Canceled Aug 23rd, 2024
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn-sm btn-outline1">Reactive</button>
                      <button className="btn-sm btn-outline1">
                        Reactivate Annually
                      </button>
                    </div>
                  </div>

                  <div className="subscription-card p-3 mb-3 py-4">
                    <div className="text-center mb-2">
                      <h6 className="mb-1 monthly">Pro Monthly: Canceled</h6>
                      <div className="ptb-15">
                        <p className="text-muted small mb-2 fs-6">
                          Canceled Aug 23rd, 2024
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn-sm btn-outline1">Reactive</button>
                      <button className="btn-sm btn-outline1">
                        Reactivate Annually
                      </button>
                    </div>
                  </div>

                  <div className="subscription-card p-3 py-4">
                    <div className="text-center mb-2">
                      <h6 className="mb-1 monthly">Pro Monthly: Canceled</h6>
                      <div className="ptb-15">
                        <p className="text-muted small mb-2">
                          Canceled Aug 23rd, 2024
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn-sm btn-outline1">Reactive</button>
                      <button className="btn-sm btn-outline1">
                        Reactivate Annually
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

export default Profile;
