import React from "react";
import Form from 'react-bootstrap/Form';
const select = ({ input, handleChange, option }) => {
  return (
    <div className="input">
      {input.map((obj) => {
        const city = obj.Servicename;
        if (city) {
          return (
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }} key={obj.id} >{obj.label}</Form.Label>
              <select
                name={obj.name}
                onChange={handleChange}
                value={option[obj.name]}
              >
                <option value="" disabled>
                  Please select your Service
                </option>
                {city.map((city, i) => (
                  <option value={city} key={i}>
                    {city}
                  </option>
                ))}
              </select>
              </Form.Group>
          );
        } else {
          return (
            <Form.Group className="mb-3" >
              <Form.Label style={{ color: "white" }} key={obj.id} >{obj.label}</Form.Label>
              <Form.Control name={obj.name}
                type={obj.type}
                placeholder={obj.placeholder}
                onChange={handleChange}
                value={option[obj.name]}/>
            </Form.Group>
          );
        }
      })}
    </div>
  );
};

export default select;
