import React from 'react';

const LiverDisorders = () => {
    
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
            <h3 style={headingStyle}>🫀 Food Remedies for Liver Disorders</h3>

            <p style={paragraphStyle}>
                The liver plays a vital role in detoxifying your body. To support liver health, especially if you have fatty liver, hepatitis, or other disorders, consider the following dietary choices:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Leafy Greens (Spinach, Kale, Arugula):</strong> Help increase bile flow and eliminate toxins.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Beetroot:</strong> Contains antioxidants that reduce oxidative stress and inflammation in the liver.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Garlic:</strong> Boosts liver enzyme production and helps flush out toxins.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Green Tea:</strong> Rich in catechins that support liver function and fat metabolism.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Turmeric:</strong> Has curcumin which protects the liver from damage and improves liver detox.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Avocados:</strong> Provide healthy fats and glutathione, a powerful liver antioxidant.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Apples and Citrus Fruits:</strong> Support liver cleansing with pectin and vitamin C.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Avoid alcohol, processed foods, sugary beverages, and excess fat. Drink plenty of water and maintain a healthy weight.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/kD1k_1yGf8w"
                title="Liver Health and Foods"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default LiverDisorders;
