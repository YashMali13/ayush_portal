// // Profile.jsx
import React from "react";
import "../styles/Profile.css";

// function Profile({ name, industry, description, contact }) {
//   return (
//     <div className="profile">
//       <h2>Startup Profile</h2>
//       <div className="profile-details">
//         <p>
//           <strong>Name:</strong> {name}
//         </p>
//         <p>
//           <strong>Industry:</strong> {industry}
//         </p>
//         <p>
//           <strong>Description:</strong> {description}
//         </p>
//         <p>
//           <strong>Contact:</strong> {contact}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Profile;

// Profile.jsx

function Profile() {
  return (
    <div className="profile">
      <h2>Startup Profile</h2>
      <div className="profile-details">
        <p>
          <strong>Name:</strong> Your Startup Name
        </p>
        <p>
          <strong>Industry:</strong> Technology
        </p>
        <p>
          <strong>Description:</strong> Brief description of your startup.
        </p>
        <p>
          <strong>Contact:</strong> contact@yourstartup.com
        </p>
      </div>
    </div>
  );
}

export default Profile;
