import React from 'react';

const Backpain = () => {
    
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
            <h3 style={headingStyle}>🧘‍♂️ Remedies for Back Pain</h3>

            <p style={paragraphStyle}>
                Back pain is a common issue that affects many people. A healthy lifestyle, proper posture, and certain remedies can help alleviate discomfort. Below are some suggestions to manage and relieve back pain:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Heat and Cold Therapy:</strong> Applying a heating pad or cold compress can provide relief from muscle spasms and inflammation.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Stretching Exercises:</strong> Gentle stretching and yoga poses help strengthen the muscles around the back, improving flexibility and reducing pain.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Good Posture:</strong> Maintaining proper posture while sitting, standing, or sleeping can reduce strain on the back muscles.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Anti-Inflammatory Foods:</strong> Include foods like turmeric, ginger, and fatty fish that have anti-inflammatory properties.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Massage Therapy:</strong> A therapeutic massage can help relax tense muscles and reduce pain.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Adequate Sleep:</strong> Sleeping in a position that supports your back properly can prevent or reduce back pain.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Stay Active:</strong> Engaging in low-impact exercises, like walking or swimming, helps strengthen the back and alleviate discomfort.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> If your back pain persists, consider seeking medical advice for further treatment options.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more tips:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/ZHh5LR2fDoA"
                title="Back Pain Relief Exercises"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Backpain;
