import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import ReviewJobModal from "./ReviewJobModal";

const JobInvite = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    truckCount: "",
    startDate: "",
    endDate: "",
    billTo: "",
    materialType: "",
    hauledFor: "",
    loadLocationName: "",
    loadLocationDirections: "",
    cbChannel: "",
    supervisorName: "",
    supervisorEmail: "",
    dropLocationName: "",
    dropLocationDirections: "",
    jobType: "",
    locationName: "",
    roundTripTime: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="job-invite-content mt-4 ">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="fw-semibold fs-3">Fill in Project Details:</h4>
        <div className="add_button mb-0 ms-2">
          <button
            className="btn_1 btn bg-purple text-white p-3 px-5 fs-5"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Review Details
          </button>
        </div>
      </div>
      <hr style={{ color: "#c6c4c4" }} />

      <form>
        <div className="row my-4">
          <div className="col-md-6">
            <label htmlFor="projectName" className="form-label fs-5 text-black">
              Project Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Project detail"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="truckCount" className="form-label fs-5 text-black">
              Number Of Trucks
            </label>
            <input
              type="number"
              className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
              id="truckCount"
              name="truckCount"
              value={formData.truckCount}
              onChange={handleChange}
              placeholder="No"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="startDate" className="form-label fs-5 text-black">
              Start Date
            </label>
            <div className="input-group">
              <span className="position-absolute z-3 ps-3 pt-3">
                <img src="/images/icons/calendar-2.svg" alt="" width={30} />
              </span>
              <DatePicker
                selected={formData.startDate}
                onChange={(date) =>
                  setFormData({ ...formData, startDate: date })
                }
                className="form-control form-control-lg ps-6 bg-gray border-none w-100 text-gray py-3"
                placeholderText="Choose date"
                dateFormat="MM/dd/yyyy"
              />
            </div>
          </div>
          <div className="col-md-3">
            <label htmlFor="endDate" className="form-label fs-5 text-black">
              End Date
            </label>
            <div className="input-group position-relative w-100">
              <span className="position-absolute z-3 ps-3 pt-3">
                <img src="/images/icons/calendar-2.svg" alt="" width={30} />
              </span>
              <DatePicker
                selected={formData.endDate}
                onChange={(date) => setFormData({ ...formData, endDate: date })}
                className="form-control form-control-lg ps-6 bg-gray border-none w-100 text-gray py-3"
                placeholderText="Choose date"
                dateFormat="MM/dd/yyyy"
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="billTo" className="form-label fs-5 text-black">
              Bill To
            </label>
            <input
              type="text"
              className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
              id="billTo"
              name="billTo"
              value={formData.billTo}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="hauledFor" className="form-label fs-5 text-black">
              Hauled For
            </label>
            <input
              type="text"
              className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
              id="hauledFor"
              name="hauledFor"
              value={formData.hauledFor}
              onChange={handleChange}
              placeholder="Company name"
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="materialType"
              className="form-label fs-5 text-black"
            >
              Material Type
            </label>
            <input
              type="text"
              className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
              id="materialType"
              name="materialType"
              value={formData.materialType}
              onChange={handleChange}
              placeholder="Types"
            />
          </div>
        </div>

        <div className="row mt-5 mb-3">
          <div className="col-md-6">
            <h5 className="fw-semibold fs-3">Load Location</h5>
            <hr style={{ color: "#c6c4c4" }} />

            <div className="col-12 gap-3 mb-3">
              <label
                htmlFor="loadLocationName"
                className="form-label fs-5 text-black"
              >
                Location Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
                id="loadLocationName"
                name="loadLocationName"
                value={formData.loadLocationName}
                onChange={handleChange}
                placeholder="Types"
              />
            </div>
            <div className="col-12 mb-3">
              <label
                htmlFor="loadLocationDerections"
                className="form-label fs-5 text-black"
              >
                Directions
              </label>
              <textarea
                className="form-control form-control-lg bg-gray border-0 text-gray py-3 ps-4 resize-none"
                id="loadLocationDirections"
                name="loadLocationDirections"
                value={formData.loadLocationDirections}
                onChange={handleChange}
                placeholder="Describe.."
                cols={12}
                rows={6}
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label
                  htmlFor="latitude"
                  className="form-label fs-5 text-black"
                >
                  Latitude
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
                  id="latitude"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  placeholder="No"
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="longitude"
                  className="form-label fs-5 text-black"
                >
                  Longitude
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
                  id="longitude"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  placeholder="No"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12 mb-3">
                <button className="btn bg-purple text-white w-100 d-flex align-items-center justify-content-start py-3 fs-4">
                  <img
                    src="/images/icons/map.svg" // Path to your custom location image
                    alt="Location Icon"
                    width={30} // Adjust icon size as needed
                    className="me-3 flex-start" // Margin to the right of the image
                  />
                  <span className="mx-auto">Add location via Map</span>{" "}
                </button>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 gap-3 mb-3">
                <label
                  htmlFor="cbChannel"
                  className="form-label fs-5 text-black"
                >
                  CB Channel
                </label>
                <input
                  type="number"
                  className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
                  id="cbChannel"
                  name="cbChannel"
                  value={formData.cbChannel}
                  onChange={handleChange}
                  placeholder="No"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <span className="d-flex justify-content-between">
              <h5 className="fw-semibold fs-3">Drop Information</h5>
              <div className="add_button ms-2">
                <button className="btn_1 btn bg-purple text-white p-2 px-3">
                  <FaPlus />
                </button>
              </div>
            </span>
            <hr style={{ color: "#c6c4c4" }} />
            <div className="row mb-3">
              <div className="col-12 gap-3">
                <label
                  htmlFor="supervisorName"
                  className="form-label fs-5 text-black"
                >
                  Supervisor Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
                  id="supervisorName"
                  name="supervisorName"
                  value={formData.supervisorName}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 gap-3">
                <label
                  htmlFor="supervisorName"
                  className="form-label fs-5 text-black"
                >
                  Supervisor Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
                  id="supervisorEmail"
                  name="supervisorEmail"
                  value={formData.supervisorEmail}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 gap-3">
                <label
                  htmlFor="dropLocationName"
                  className="form-label fs-5 text-black"
                >
                  Location Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
                  id="dropLocationName"
                  name="dropLocationName"
                  value={formData.dropLocationName}
                  onChange={handleChange}
                  placeholder="Types"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <label
                  htmlFor="dropLocationDerections"
                  className="form-label fs-5 text-black"
                >
                  Directions
                </label>
                <textarea
                  className="form-control form-control-lg bg-gray border-0 text-gray py-3 ps-4 resize-none"
                  id="dropLocationDirections"
                  name="dropLocationDirections"
                  value={formData.dropLocationDirections}
                  onChange={handleChange}
                  placeholder="Describe.."
                  cols={12}
                  rows={6}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <label htmlFor="jobType" className="form-label fs-5 text-black">
                  Choose A Job Type
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  className="form-select form-control-lg bg-gray border-none text-gray py-3 ps-4 outline-none fs-5"
                  value={formData.jobType}
                  onChange={handleChange}
                >
                  <option value="">Choose type</option>
                  <option value="type1">Job Type 1</option>
                  <option value="type2">Job Type 2</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <label
                  htmlFor="locationName"
                  className="form-label fs-5 text-black"
                >
                  Location Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
                  id="locationName"
                  name="locationName"
                  value={formData.locationName}
                  onChange={handleChange}
                  placeholder="$ | 0.00"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <label
                  htmlFor="roundTripTime"
                  className="form-label fs-5 text-black"
                >
                  Estimated Round Trip Time
                </label>
                <input
                  type="number"
                  className="form-control form-control-lg bg-gray border-none text-gray py-3 ps-4"
                  id="roundTripTime"
                  name="roundTripTime"
                  value={formData.roundTripTime}
                  onChange={handleChange}
                  placeholder="Rounds"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      {showModal && (
        <ReviewJobModal
          job={formData}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default JobInvite;
