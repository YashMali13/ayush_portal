import React, { useState } from 'react';

const MentorCard = ({ name, image, description, roles }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        width: '250px',
        margin: '20px',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',         
        textOverflow: 'ellipsis',  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const imageStyle = {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        marginBottom: '10px', 
    };

    const descriptionStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        height: isOpen ? 'auto' : '50px',
        whiteSpace: isOpen ? 'normal' : 'nowrap',
    };

    const rolesStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',   
        marginTop: '10px',
    };

    const roleBadgeStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        margin: '5px',
        fontSize: '12px', 
        maxWidth: '100px', 
        textAlign: 'center',
    };

    return (
        <div style={cardStyle}>
            <img src={image} alt={name} style={imageStyle} />
            <h3>{name}</h3>
            <div style={descriptionStyle}>{description}</div>
            <button onClick={toggleDescription}>
                {isOpen ? 'Hide' : 'Read more'}
            </button>
            <div style={rolesStyle}>
                {roles.map((role, index) => (
                    <span key={index} style={roleBadgeStyle}>{role}</span>
                ))}
            </div>
        </div>
    );
};

const Mentors = () => {
    const mentors = [
        {
            name: 'Adrine Jim',
            image: 'https://avatars.githubusercontent.com/u/112254451?v=4',
            description: 'Hi! It\'s been a great experience to work with Terasology as it has made me stand and explore about myself.',
            roles: ['Designer', 'Testing'],
        },
        {
            name: 'abc',
            image: 'path_to_image2',
            description: 'perience to work with Terasology as it has made me stand and explore about myself.',
            roles: ['Web Design', 'Outreach', 'Testing', 'World Generation'],
        },
        {
            name: 'abc',
            image: 'path_to_image3',
            description: 'Hi! It\'s been a great experience to work with Terasology as it has made me stand and explore about myself.',
            roles: ['Documentation', 'Logistics', 'Content'],
        },
        {
            name: 'abc',
            image: 'path_to_image4',
            description: 'Hi! It\'s been a great experience to work with Terasology as it has made me stand and explore about myself.',
            roles: ['Documentation', 'Logistics', 'Content'],
        },
    ];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Meet our GSoC-2018 Mentors!</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {mentors.map((mentor, index) => (
                    <MentorCard
                        key={index}
                        name={mentor.name}
                        image={mentor.image}
                        description={mentor.description}
                        roles={mentor.roles}
                    />
                ))}
            </div>
        </div>
    );
};

export default Mentors;
