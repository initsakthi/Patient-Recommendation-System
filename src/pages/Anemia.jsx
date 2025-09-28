import React from 'react';

const Anemia = () => {
    
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
            <h3 style={headingStyle}>🍎 Remedies for Anemia</h3>

            <p style={paragraphStyle}>
                Anemia is a condition where you don’t have enough healthy red blood cells to carry adequate oxygen to your body's tissues. Below are foods and remedies that can help manage anemia, especially iron-deficiency anemia.
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Iron-Rich Foods:</strong> Include red meat, poultry, beans, lentils, tofu, and spinach. Iron helps produce red blood cells and prevent anemia.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Vitamin C:</strong> Vitamin C helps your body absorb iron more effectively. Foods rich in Vitamin C include oranges, strawberries, bell peppers, and tomatoes.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Leafy Greens:</strong> Spinach, kale, and other dark leafy greens are high in iron and folate, which are essential for producing red blood cells.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Nuts and Seeds:</strong> Almonds, sunflower seeds, and cashews are rich in iron, magnesium, and other nutrients that support healthy blood cell production.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Fortified Cereals:</strong> Many cereals are fortified with iron, which can help increase your iron intake.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Beets:</strong> Beets contain high amounts of folate and iron, both of which are important for healthy blood production.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Pomegranate:</strong> Known for its high iron content, pomegranate helps boost hemoglobin levels in the blood.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Avoid drinking coffee or tea with meals as they can inhibit iron absorption. Opt for water or herbal teas instead.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/a5AGTxzzWvA"
                title="Anemia Remedies and Tips"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Anemia;
