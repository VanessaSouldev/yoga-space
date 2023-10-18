import React from 'react';

const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <div>
                <img src="profile-picture.jpg" alt="Profile Picture" />
            </div>
            <div>
                <h2>John Doe</h2>
                <p>Email: johndoe@example.com</p>
                <p>Location: New York, USA</p>
            </div>
            <div>
                <h3>About Me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere nisi elit, eu sollicitudin quam volutpat nec. Nam lacinia, justo at fermentum mollis, velit ipsum ultrices nisi, non euismod purus mauris quis velit.</p>
            </div>
        </div>
    );
}

export default Profile;
