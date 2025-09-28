const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/patientDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(' MongoDB Connected'))
.catch((err) => console.error(' MongoDB Connection Error:', err));

// Mongoose Schema
const patientSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: String,
    gender: String,
    Contact_Number: String,
    address: String,
    disease: String,
    
   
});

const Patient = mongoose.model('Patient', patientSchema);

// POST route to create new patient
app.post('/api/patients', async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).json({ message: 'Patient registered successfully' });
    } catch (err) {
        console.error('Error saving patient:', err);
        res.status(500).json({ error: 'Failed to save patient' });
    }
});

//  GET route to fetch all patients
app.get('/api/patients', async (req, res) => {
    try {
        debugger;
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        debugger;
        res.status(500).json({ error: 'Failed to fetch patients' });
    }
});

//  DELETE route (optional for deleting patients)
app.delete('/api/patients/:id', async (req, res) => {
    try {
        await Patient.findByIdAndDelete(req.params.id);
        res.json({ message: 'Patient deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete patient' });
    }
});

// Server Listening
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
