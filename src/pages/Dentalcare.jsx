import React from 'react';

const Dentalcare = () => {
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
            <h3 style={headingStyle}>🦷 Food & Tips for Dental Health</h3>

            <p style={paragraphStyle}>
                Good dental health is essential not just for a bright smile but also for overall health. Here are some foods and habits that support strong teeth and gums:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Dairy Products:</strong> Milk, cheese, and yogurt are rich in calcium and phosphates that strengthen teeth.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Crunchy Fruits & Vegetables:</strong> Apples, carrots, and celery help clean teeth and promote saliva production.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Green Tea:</strong> Contains polyphenols that help reduce plaque and bacteria.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Water:</strong> Drinking water helps rinse away food and acid buildup between brushing.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Nuts:</strong> Almonds, cashews, and walnuts help stimulate saliva and provide essential minerals.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Leafy Greens:</strong> Spinach and kale are rich in calcium and folic acid, promoting gum health.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Avoid sugary snacks, soda, and sticky candies. Brush twice daily, floss, and visit your dentist regularly.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for Dental Health Tips:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/yDrMM5DxLMo"
                title="Dental Health Tips"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Dentalcare;
