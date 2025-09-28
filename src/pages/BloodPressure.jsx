import React from 'react';

const BloodPressure = () => {
    
    const containerStyle = {
        padding: '30px',
        fontFamily: 'Segoe UI, sans-serif',
        lineHeight: '1.8',
        background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
        borderRadius: '12px',
        maxWidth: '900px',
        margin: '40px auto',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        color: '#2980b9',
        fontSize: '28px',
        marginBottom: '15px',
        borderBottom: '2px solid #2980b9',
        paddingBottom: '5px',
    };

    const subHeadingStyle = {
        color: '#2c3e50',
        fontSize: '22px',
        marginTop: '30px',
        marginBottom: '10px',
    };

    const paragraphStyle = {
        color: '#34495e',
        fontSize: '16px',
        marginBottom: '15px',
    };

    const listItemStyle = {
        marginBottom: '10px',
        fontSize: '16px',
        color: '#2d3436',
        backgroundColor: '#dfe6e9',
        padding: '10px',
        borderRadius: '6px',
    };

    const strongStyle = {
        color: '#e74c3c',
    };

    const videoStyle = {
        width: '100%',
        height: '400px',
        marginTop: '20px',
        border: '4px solid #2980b9',
        borderRadius: '12px',
    };

    return (
        <div style={containerStyle}>
            <h3 style={headingStyle}>❤️ Food Remedies for Heart Patients</h3>

            <p style={paragraphStyle}>
                A heart-healthy diet plays a major role in preventing and managing heart disease. Below are foods recommended for those with heart concerns or at risk of cardiovascular issues:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Oats and Whole Grains:</strong> Help lower cholesterol and improve blood flow.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Fatty Fish (Salmon, Mackerel):</strong> Rich in omega-3 fatty acids which reduce inflammation and heart disease risk.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Leafy Greens (Spinach, Kale):</strong> High in antioxidants, potassium, and nitrates that help regulate blood pressure.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Berries (Blueberries, Strawberries):</strong> Rich in anthocyanins that lower blood pressure and inflammation.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Nuts (Almonds, Walnuts):</strong> Contain healthy fats that support heart function.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Olive Oil:</strong> A heart-healthy fat that reduces cholesterol and improves arterial health.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Dark Chocolate (in moderation):</strong> Contains flavonoids that help heart health.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Avoid trans fats, processed meats, excess salt, and sugar. Maintain an active lifestyle and get regular checkups.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/XZF7iHpGfJg"
                title="Heart Patient Food Remedies"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default BloodPressure;
