import React from 'react';

const KidneyStones = () => {
    
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
            <h3 style={headingStyle}>🧊 Food Remedies for Kidney Stones</h3>

            <p style={paragraphStyle}>
                Kidney stones can be painful, but the right diet can help prevent or manage them. Below are foods and habits beneficial for individuals prone to kidney stones:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Water (Hydration is key):</strong> Drink at least 2–3 liters daily to help flush out minerals before they form stones.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Lemon Juice:</strong> Rich in citrate, which prevents stone formation. Add it to water for added benefit.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Basil Leaves:</strong> Contains acetic acid which helps break down stones and reduce pain.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Pomegranate:</strong> Detoxifies kidneys and helps improve urine pH.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Low-Oxalate Foods:</strong> Cabbage, cauliflower, and white rice reduce oxalate buildup.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Magnesium-rich Foods:</strong> Bananas, avocados, and legumes help prevent stone formation.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Apple Cider Vinegar (in moderation):</strong> May help dissolve small stones (consult doctor before use).</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Avoid foods high in oxalates (spinach, beets, nuts), excessive salt, and sugary drinks. Regular exercise and hydration are essential.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/O29Gz8kGgoE"
                title="Kidney Stone Diet and Remedies"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default KidneyStones;
