import React from 'react';

const Typhoid = () => {
    
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
            <h3 style={headingStyle}>🍲 Food Remedies for Typhoid Recovery</h3>

            <p style={paragraphStyle}>
                Typhoid fever requires supportive care and proper nutrition to help the body recover. Here are some food remedies and dietary tips for managing typhoid:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Clear Fluids:</strong> Drink plenty of water, coconut water, clear soups, and herbal teas to stay hydrated and flush out toxins.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Soft Foods (Rice Porridge, Mashed Potatoes):</strong> These are easy on the digestive system and help prevent irritation.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Boiled Vegetables (Carrots, Pumpkin):</strong> Soft, easy-to-digest, and full of nutrients to help with recovery.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Bananas:</strong> Rich in potassium and gentle on the stomach, they help restore energy and prevent dehydration.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Probiotic-Rich Foods (Yogurt, Kefir):</strong> Aid in restoring gut health, especially if antibiotics were used during treatment.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Honey and Ginger Tea:</strong> Helps soothe the throat, improve digestion, and boost immunity.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Lemon Water:</strong> Aids digestion and provides Vitamin C to support the immune system.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Avoid spicy, fatty, or oily foods, as well as raw vegetables or fruits that may irritate the digestive system.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more on Typhoid care:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/xjFQXE3GzEA"
                title="Typhoid Recovery Tips"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Typhoid;
