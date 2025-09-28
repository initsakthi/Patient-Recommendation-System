import React from 'react';

const Acney = () => {
    
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
            <h3 style={headingStyle}>🌿 Remedies for Acne</h3>

            <p style={paragraphStyle}>
                Acne is a common skin condition that can be caused by a variety of factors, including hormones, diet, and skin care routine. Below are foods and remedies that can help manage and prevent acne:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Leafy Greens:</strong> Spinach, kale, and other dark leafy greens are rich in vitamins and minerals that help reduce inflammation and promote healthy skin.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Carrots and Sweet Potatoes:</strong> Rich in beta-carotene, which helps repair damaged skin cells and supports skin health.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Fatty Fish (Salmon, Mackerel):</strong> Omega-3 fatty acids in these fish help reduce inflammation, which can help prevent acne breakouts.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Nuts and Seeds:</strong> Almonds, walnuts, and chia seeds are rich in vitamin E, which is essential for healthy skin and can help reduce acne.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Probiotic Foods:</strong> Yogurt, kefir, and other probiotic-rich foods can help balance gut bacteria, which may play a role in skin health.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Green Tea:</strong> Rich in antioxidants, green tea has anti-inflammatory properties and can help reduce acne symptoms.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Turmeric:</strong> Known for its anti-inflammatory properties, turmeric can help reduce redness and swelling associated with acne.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Drink plenty of water to keep your skin hydrated, avoid touching your face too often, and use non-comedogenic skincare products.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/5XQJkc0tJMI"
                title="Acne Remedies"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Acney;
