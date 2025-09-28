import React from 'react';

const SkinDiseases = () => {

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
            <h3 style={headingStyle}>🧴 Food Remedies for Skin Diseases</h3>

            <p style={paragraphStyle}>
                Skin health is directly influenced by diet, hydration, and inflammation. Here are some foods and habits that support healing and reduce symptoms of skin conditions like eczema, acne, or psoriasis:
            </p>

            <ul style={{ paddingLeft: '20px' }}>
                <li style={listItemStyle}><strong style={strongStyle}>Fatty Fish (Salmon, Sardines):</strong> Rich in omega-3 fatty acids that reduce inflammation and support skin barrier function.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Avocados:</strong> Provide healthy fats and vitamin E which moisturize and protect the skin.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Sweet Potatoes & Carrots:</strong> High in beta-carotene which acts as a natural sunblock and antioxidant.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Green Tea:</strong> Contains polyphenols which reduce skin inflammation and acne.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Berries (Blueberries, Raspberries):</strong> Packed with antioxidants that help repair damaged skin.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Probiotic Foods (Yogurt, Kimchi):</strong> Improve gut health which is linked to reduced skin flare-ups.</li>
                <li style={listItemStyle}><strong style={strongStyle}>Cucumber & Watermelon:</strong> Hydrating foods that help flush out toxins and soothe the skin.</li>
            </ul>

            <p style={paragraphStyle}>
                💡 <strong style={{ color: '#16a085' }}>Tip:</strong> Drink at least 2–3 liters of water daily. Avoid processed sugar, dairy (if acne-prone), and spicy foods during flare-ups. Use natural moisturizers like aloe vera or coconut oil.
            </p>

            <h4 style={subHeadingStyle}>🎥 Watch this video for more tips:</h4>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/4C5hqL5nIn8"
                title="Skin Health Food Tips"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default SkinDiseases;
