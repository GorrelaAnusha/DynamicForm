/*import React, { useState } from "react";
import Form from "./Form";
import SubmittedDataTable from "./SubmittedDataTable";

const App = () => {
  const [formData, setFormData] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);

  const formOptions = {
    "User Information": {
      fields: [
        { name: "firstName", type: "text", label: "First Name", required: true },
        { name: "lastName", type: "text", label: "Last Name", required: true },
        { name: "age", type: "number", label: "Age", required: false },
      ],
    },
    "Address Information": {
      fields: [
        { name: "street", type: "text", label: "Street", required: true },
        { name: "city", type: "text", label: "City", required: true },
        {
          name: "state",
          type: "dropdown",
          label: "State",
          options: ["California", "Texas", "New York"],
          required: true,
        },
        { name: "zipCode", type: "text", label: "Zip Code", required: false },
      ],
    },
    "Payment Information": {
      fields: [
        { name: "cardNumber", type: "text", label: "Card Number", required: true },
        { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
        { name: "cvv", type: "password", label: "CVV", required: true },
        { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
      ],
    },
  };

  const handleDropdownChange = (e) => {
    const selectedForm = e.target.value;
    setFormData(formOptions[selectedForm]);
  };

  const handleFormSubmit = (data) => {
    setSubmittedData((prev) => [...prev, data]);
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <select onChange={handleDropdownChange}>
        <option value="">Select Form Type</option>
        {Object.keys(formOptions).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {formData && (
        <Form fields={formData.fields} onSubmit={handleFormSubmit} />
      )}

      {submittedData.length > 0 && (
        <SubmittedDataTable data={submittedData} />
      )}
    </div>
  );
};

export default App;*/



/*import React, { useState } from "react";
import Form from "./Form";
import SubmittedDataTable from "./SubmittedDataTable";

const App = () => {
  const [formData, setFormData] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);
  const [progress, setProgress] = useState(0); // State for progress bar

  const formOptions = {
    "User Information": {
      fields: [
        { name: "firstName", type: "text", label: "First Name", required: true },
        { name: "lastName", type: "text", label: "Last Name", required: true },
        { name: "age", type: "number", label: "Age", required: false },
      ],
    },
    "Address Information": {
      fields: [
        { name: "street", type: "text", label: "Street", required: true },
        { name: "city", type: "text", label: "City", required: true },
        {
          name: "state",
          type: "dropdown",
          label: "State",
          options: ["California", "Texas", "New York"],
          required: true,
        },
        { name: "zipCode", type: "text", label: "Zip Code", required: false },
      ],
    },
    "Payment Information": {
      fields: [
        { name: "cardNumber", type: "text", label: "Card Number", required: true },
        { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
        { name: "cvv", type: "password", label: "CVV", required: true },
        { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
      ],
    },
  };

  const handleDropdownChange = (e) => {
    const selectedForm = e.target.value;
    setFormData(formOptions[selectedForm]);
    setProgress(0); // Reset progress when changing form type
  };

  const handleFormChange = (data) => {
    // Calculate the percentage of filled fields
    const totalFields = formData.fields.length;
    const filledFields = formData.fields.filter((field) => data[field.name]?.trim() !== "").length;
    const progressPercentage = Math.floor((filledFields / totalFields) * 100);
    setProgress(progressPercentage);
  };

  const handleFormSubmit = (data) => {
    setSubmittedData((prev) => [...prev, data]);
    setProgress(100); // Set progress to 100% on submission
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <select onChange={handleDropdownChange}>
        <option value="">Select Form Type</option>
        {Object.keys(formOptions).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {}
      {formData && (
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {}
      {formData && (
        <Form
          fields={formData.fields}
          onChange={handleFormChange} // Track field changes
          onSubmit={handleFormSubmit}
        />
      )}

      {/}
      {submittedData.length > 0 && (
        <SubmittedDataTable data={submittedData} />
      )}
    </div>
  );
};

export default App;*/

import React, { useState } from "react";
import Form from "./Form";
import SubmittedDataTable from "./SubmittedDataTable";

const App = () => {
  const [formData, setFormData] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);
  const [progress, setProgress] = useState(0); // Progress bar state
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Feedback message state

  const formOptions = {
    "User Information": {
      fields: [
        { name: "firstName", type: "text", label: "First Name", required: true },
        { name: "lastName", type: "text", label: "Last Name", required: true },
        { name: "age", type: "number", label: "Age", required: false },
      ],
    },
    "Address Information": {
      fields: [
        { name: "street", type: "text", label: "Street", required: true },
        { name: "city", type: "text", label: "City", required: true },
        {
          name: "state",
          type: "dropdown",
          label: "State",
          options: ["California", "Texas", "New York"],
          required: true,
        },
        { name: "zipCode", type: "text", label: "Zip Code", required: false },
      ],
    },
    "Payment Information": {
      fields: [
        { name: "cardNumber", type: "text", label: "Card Number", required: true },
        { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
        { name: "cvv", type: "password", label: "CVV", required: true },
        { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
      ],
    },
  };

  const handleDropdownChange = (e) => {
    const selectedForm = e.target.value;
    setFormData(formOptions[selectedForm]);
    setProgress(0); // Reset progress
    setFeedbackMessage(""); // Clear feedback message
  };

  const handleFormChange = (data) => {
    const totalFields = formData.fields.length;
    const filledFields = formData.fields.filter((field) => data[field.name]?.trim() !== "").length;
    const progressPercentage = Math.floor((filledFields / totalFields) * 100);
    setProgress(progressPercentage);
  };

  const handleFormSubmit = (data) => {
    setSubmittedData((prev) => [...prev, data]);
    setProgress(100);
    showFeedback("Sign-up Successful!");
  };

  const handleDeleteEntry = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
    showFeedback("Entry deleted successfully!");
  };

  const handleEditEntry = (index, updatedEntry) => {
    const updatedData = submittedData.map((item, i) =>
      i === index ? updatedEntry : item
    );
    setSubmittedData(updatedData);
    showFeedback("Changes saved successfully!");
  };

  const showFeedback = (message) => {
    setFeedbackMessage(message);
    setTimeout(() => setFeedbackMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div>
      <h1>Dynamic Form</h1>

      <select onChange={handleDropdownChange}>
        <option value="">Select Form Type</option>
        {Object.keys(formOptions).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Feedback Message */}
      {feedbackMessage && (
        <div className="feedback-message">
          {feedbackMessage}
        </div>
      )}

      {/* Progress Bar */}
      {formData && (
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* Render Form */}
      {formData && (
        <Form
          fields={formData.fields}
          onChange={handleFormChange}
          onSubmit={handleFormSubmit}
        />
      )}

      {/* Render Submitted Data Table */}
      {submittedData.length > 0 && (
        <SubmittedDataTable
          data={submittedData}
          onDelete={handleDeleteEntry}
          onEdit={handleEditEntry}
        />
      )}
    </div>
  );
};

export default App;
