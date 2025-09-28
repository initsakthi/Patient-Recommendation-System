import React from 'react';

const Asthma = () => {
    
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
            <h3 style={headingStyle}>🌬️ Remedies for Asthma Relief</h3>

            <p style={paragraphStyle}>
                Asthma can be a chronic condition, but with the right approach, it can be managed effectively. Here are some remedies and lifestyle changes that may help ease symptoms:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Use a Humidifier:</strong> Adding moisture to the air can help ease breathing and reduce asthma symptoms, especially during dry seasons.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Avoid Triggers:</strong> Identify and avoid common asthma triggers like dust, smoke, strong odors, or allergens.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Breathing Exercises:</strong> Practicing deep breathing exercises like pursed-lip breathing can help open airways and improve airflow.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Ginger Tea:</strong> Ginger has anti-inflammatory properties that may help reduce asthma symptoms by relaxing the airways.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Honey and Lemon:</strong> Drinking warm water with honey and lemon can soothe the throat and reduce inflammation in the airways.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Anti-inflammatory Diet:</strong> Foods like turmeric, garlic, and omega-3 rich fish may help reduce inflammation in the lungs and improve asthma control.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Regular Exercise:</strong> Engaging in regular physical activity, like walking or swimming, can improve lung function over time.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Always carry your inhaler and consult a healthcare provider for a personalized treatment plan if asthma symptoms persist.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more information:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/ABzHWg03V0A"
                title="Asthma Remedies and Relief Tips"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Asthma;
