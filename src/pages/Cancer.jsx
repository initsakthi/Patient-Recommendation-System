import React from 'react';

const Cancer = () => {
    
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
            <h3 style={headingStyle}>🍏 Food Remedies for Cancer Patients</h3>

            <p style={paragraphStyle}>
                A balanced and nutritious diet can play a crucial role in supporting the body during cancer treatment. Below are some foods that may help boost immunity and promote healing:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Leafy Greens (Spinach, Kale, Swiss Chard):</strong> Rich in vitamins, minerals, and antioxidants that help fight free radicals and support detoxification.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Berries (Blueberries, Strawberries, Raspberries):</strong> High in antioxidants that may reduce inflammation and prevent cancer cell growth.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Garlic:</strong> Contains sulfur compounds that may enhance the immune system and inhibit cancer cell growth.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Cruciferous Vegetables (Broccoli, Cauliflower, Brussels Sprouts):</strong> Contain compounds that help protect cells from damage and support detoxification.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Tomatoes (especially cooked):</strong> Rich in lycopene, an antioxidant that may lower the risk of certain types of cancer.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Green Tea:</strong> Contains polyphenols that may reduce cancer cell growth and support the immune system.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Turmeric:</strong> Contains curcumin, a powerful anti-inflammatory compound that may help prevent cancer development.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Stay hydrated with water, herbal teas, and fresh fruit juices. Avoid alcohol, processed foods, and excessive sugar.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more tips on cancer care:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/JoF7IcYYX_s"
                title="Cancer Care and Nutrition"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Cancer;
