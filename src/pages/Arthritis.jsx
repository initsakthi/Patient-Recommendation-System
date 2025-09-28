import React from 'react';

const Arthritis = () => {
    
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
            <h3 style={headingStyle}>💪 Remedies for Arthritis (Joint Pain)</h3>

            <p style={paragraphStyle}>
                Arthritis can cause inflammation and pain in the joints, but there are natural remedies and lifestyle changes that can help manage the symptoms and improve joint health.
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Turmeric:</strong> Contains curcumin, which has powerful anti-inflammatory properties that may help reduce joint pain and swelling.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Ginger:</strong> Known for its anti-inflammatory properties, ginger can reduce pain and stiffness in the joints.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Fish Oil:</strong> Rich in omega-3 fatty acids, fish oil supplements can help reduce joint inflammation and stiffness.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Olive Oil:</strong> Contains oleocanthal, a compound with anti-inflammatory effects that may reduce arthritis symptoms.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Epsom Salt Baths:</strong> Soaking in Epsom salt may help relax muscles and ease joint pain due to its magnesium content.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Green Tea:</strong> Rich in antioxidants, green tea can help reduce inflammation and may improve joint health.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Regular Exercise:</strong> Engaging in low-impact exercises like swimming or walking can improve joint mobility and strengthen muscles around the joints.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Maintaining a healthy weight is crucial, as excess weight can increase the strain on your joints, especially in the knees and hips.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/d8QnCehP_yw"
                title="Arthritis Relief Tips and Remedies"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Arthritis;
