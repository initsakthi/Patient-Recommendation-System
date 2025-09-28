import React from 'react';

const Dengue = () => {
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
        color: '#c0392b',
        fontSize: '28px',
        marginBottom: '15px',
        borderBottom: '2px solid #c0392b',
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
        border: '4px solid #c0392b',
        borderRadius: '12px',
    };

    return (
        <div style={containerStyle}>
            <h3 style={headingStyle}>🦟 Dengue Fever: Home Remedies & Precautions</h3>

            <p style={paragraphStyle}>
                Dengue fever is a mosquito-borne illness that can lead to high fever, severe headaches, rashes, and joint pain. While there's no specific cure, the following remedies and precautions help ease symptoms and support recovery:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}>
                    <strong style={strongStyle}>Papaya Leaf Juice:</strong> Known to increase platelet count and improve immune response.
                </li>
                <li style={listItemStyle}>
                    <strong style={strongStyle}>Hydration:</strong> Drink plenty of fluids like coconut water, ORS, and fresh juices to avoid dehydration.
                </li>
                <li style={listItemStyle}>
                    <strong style={strongStyle}>Giloy (Herbal Remedy):</strong> Boosts immunity and helps reduce fever naturally.
                </li>
                <li style={listItemStyle}>
                    <strong style={strongStyle}>Turmeric Milk:</strong> Acts as a natural antiseptic and helps with recovery.
                </li>
                <li style={listItemStyle}>
                    <strong style={strongStyle}>Neem Leaves:</strong> Have antiviral properties and aid in detoxification.
                </li>
                <li style={listItemStyle}>
                    <strong style={strongStyle}>Rest:</strong> Ample bed rest is crucial to aid in recovery and conserve energy.
                </li>
            </ul>

            <p style={paragraphStyle}>
                ⚠️ <strong style={{ color: '#16a085' }}>Avoid:</strong> Aspirin or ibuprofen without doctor’s advice as they can worsen bleeding risk.
            </p>

            <h4 style={subHeadingStyle}>📹 Learn More About Dengue Management:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/zp_nUO0jca0"
                title="Dengue Prevention Tips"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Dengue;
