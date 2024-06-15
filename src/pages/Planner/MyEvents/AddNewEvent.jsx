import React from "react";

export const AddNewEvent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <form className="bg-white shadow-md rounded-none p-6">
        <h5 className="text-center font-bold my-2">Add New Event</h5>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Event Name</span>
          </label>
          <input
            className="input input-sm input-bordered input-primary rounded-none"
            id="eventName"
            type="text"
            placeholder="Enter event name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            className="input input-sm input-bordered input-primary rounded-none"
            id="eventDate"
            type="date"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Venue</span>
          </label>
          <select
            id="eventVenue"
            className="select select-sm select-primary w-full rounded-none"
          >
            <option disabled defaultValue="">
              Select Venue from the List
            </option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-primary rounded-none resize-none"
            id="description"
            placeholder="Enter event description"
            rows="10"
          ></textarea>
        </div>
        <div className="flex items-center justify-between mt-5">
          <button
            className="btn btn-primary text-white px-4 py-2 rounded-none"
            type="button"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};
