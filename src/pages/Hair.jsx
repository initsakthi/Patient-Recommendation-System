import React from 'react';

const Hair = () => {
    
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
            <h3 style={headingStyle}>🧴 Food Remedies for Hair Loss</h3>

            <p style={paragraphStyle}>
                Hair loss can be caused by nutrient deficiencies, stress, hormonal imbalances, or underlying health issues. Here are foods that may help reduce hair fall and promote hair growth:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Eggs:</strong> Excellent source of protein and biotin, both essential for hair strength and growth.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Spinach:</strong> High in iron, folate, and vitamins A and C, which are vital for scalp health.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Fatty Fish (Salmon, Mackerel):</strong> Provide omega-3 fatty acids that support hair density and reduce hair thinning.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Nuts (especially almonds and walnuts):</strong> Rich in vitamin E and selenium, helpful in improving hair texture and reducing breakage.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Seeds (Flaxseeds, Chia):</strong> Provide omega-3s and zinc, supporting follicle health.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Sweet Potatoes:</strong> Loaded with beta-carotene, which helps with scalp sebum production.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Avocados:</strong> Contain vitamin E and healthy fats that nourish the scalp and hair shaft.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Stay hydrated, reduce heat styling, manage stress, and avoid crash diets. Nutritional consistency is key to long-term hair health.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/qXtP7mDcj5g"
                title="Hair Loss Remedies"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Hair;
