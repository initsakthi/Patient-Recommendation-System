import React from 'react';

const Depression = () => {

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
            <h3 style={headingStyle}>🧠 Nutrition & Lifestyle Tips for Managing Depression</h3>

            <p style={paragraphStyle}>
                A balanced diet and healthy lifestyle can significantly support mental health. Here are some food options and habits known to help manage symptoms of depression:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Fatty Fish (Salmon, Sardines):</strong> Rich in omega-3s which support brain function and mood balance.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Leafy Greens (Spinach, Swiss Chard):</strong> High in folate and magnesium, both of which impact mood regulation.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Berries (Blueberries, Raspberries):</strong> Contain antioxidants that may reduce depression-related inflammation.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Nuts & Seeds (Walnuts, Flaxseeds):</strong> Provide healthy fats and selenium for emotional health.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Whole Grains (Quinoa, Brown Rice):</strong> Help regulate blood sugar and serotonin levels.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Dark Chocolate (in moderation):</strong> May boost serotonin levels and improve mood.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Fermented Foods (Yogurt, Kimchi):</strong> Support gut health, which is closely linked to mental well-being.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Stay physically active, get enough sleep, stay connected with loved ones, and seek professional help when needed. Nutrition complements therapy, not replaces it.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/Zs_3FHh3zU4"
                title="Depression Management with Diet & Lifestyle"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Depression;
