import React from 'react';

const ReadMore = () => {
    //debugger;
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
            <h3 style={headingStyle}>🌿 Food Remedies for Sugar Patients (Diabetes)</h3>

            <p style={paragraphStyle}>
                Managing diabetes through food is one of the most effective and natural ways to control blood sugar levels. Here are some recommended foods for diabetic patients:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Bitter Gourd (Karela):</strong> Contains compounds that mimic insulin.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Cinnamon:</strong> Helps improve insulin sensitivity.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Fenugreek Seeds:</strong> Rich in soluble fiber, helps control blood sugar spikes.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Oats:</strong> Low glycemic index, great for steady energy release.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Leafy Greens (Spinach, Kale):</strong> Packed with nutrients and very low in carbs.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Chia Seeds:</strong> High in fiber and omega-3s, helps improve glucose levels.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Indian Gooseberry (Amla):</strong> Boosts insulin secretion and reduces oxidative stress.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Avoid sugary drinks, processed snacks, and refined carbs. Pair a healthy diet with regular physical activity to effectively manage diabetes.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/K3m6bLYuzTs"
                title="Diabetes Food Remedies"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default ReadMore;
