/*import './Form.css';
import React, { useState } from "react";

const Form = ({ fields, onSubmit }) => {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e, field) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (field.required && !value) {
      setErrors({ ...errors, [name]: `${field.label} is required` });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for any required fields not filled
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formValues[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formValues);
      setFormValues({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === "dropdown" ? (
            <select
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={(e) => handleChange(e, field)}
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={(e) => handleChange(e, field)}
            />
          )}
          {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;*/



import React, { useState } from "react";

const Form = ({ fields, onSubmit, onChange }) => {
  const [formValues, setFormValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValues = { ...formValues, [name]: value };
    setFormValues(updatedValues);
    onChange(updatedValues); // Notify parent about the changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === "dropdown" ? (
            <select name={field.name} onChange={handleChange} required={field.required}>
              <option value="">Select</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              onChange={handleChange}
              required={field.required}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
