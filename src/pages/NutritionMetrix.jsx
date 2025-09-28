import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { input } from "../data/data";
import SelectCom from "../components/SelectCom";
import { TableCom } from "../components/Table";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NutritionMetrix = () => {
    const [option, setOption] = useState({
        name: "",
        email: "",
        Password: "",
        Service: "",
        schedule: "",
        petname: "",
        pettype: "",
        petbreeds: "",
        Address: ""
    });
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    // 🔃 Load patient data from backend on mount
    useEffect(() => {
        axios.get("http://localhost:5000/api/patients")
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    }, []);

    // 👇 Update form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setOption({ ...option, [name]: value });
    };

    // ✅ Submit data to backend
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:5000/api/patients", option)
            .then((res) => {
                toast.success("Successfully scheduled created", { position: "top-right" });
                // Refresh local state
                setData([...data, option]);
                setOption({
                name: "",
  email: "",
  password: "",
  dob: "",
  gender: "",
  Contact_Number: "",
  address: "",
  disease: ""
                });
                setShow(false);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Error submitting data", { position: "top-right" });
            });
    };

    // ✏️ & 🗑️ Edit/Delete Handler
    const editHandler = (id, type) => {
        if (type === "edit") {
            const selected = data.find((item) => item._id === id);
            setOption(selected);
            setShow(true);
        } else if (type === "delete") {
            axios.delete(`http://localhost:5000/api/patients/${id}`)
                .then(() => {
                    setData(data.filter((item) => item._id !== id));
                    toast.success("Deleted successfully", { position: "top-right" });
                })
                .catch(() => toast.error("Failed to delete"));
        }
    };

    return (
        <div className="container-fluid bg-light">
            <ToastContainer />
            <div className="container">
                <div className="justify-content-center">
                    <div className="col-6 col-md-12">
                        <div className="bg-primary py-5 px-4 px-sm-5">
                            <h1>Booking for Patients</h1>
                            <Form className="py-5" onSubmit={handleSubmit}>
                                <SelectCom input={input} handleChange={handleChange} option={option} />
                                <button type="submit" className="btn btn-lg btn-primary mt-3 mt-md-4 px-5">
                                    {show ? "Update" : "Add"}
                                </button>
                            </Form>
                            {data.length > 0 ? (
                                <TableCom data={data} handler={editHandler} />
                            ) : (
                                <h4>No Schedule entered</h4>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NutritionMetrix;
