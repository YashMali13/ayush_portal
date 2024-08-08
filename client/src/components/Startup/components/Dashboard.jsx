// Dashboard.jsx
import React from "react";
import "../styles/Dashboard.css";

// function Dashboard({ metrics, recentActivities }) {
//   return (
//     <div className="dashboard">
//       <h2>Dashboard</h2>
//       <div className="metrics">
//         <h3>Metrics</h3>
//         <ul>
//           {metrics.map((metric, index) => (
//             <li key={index}>
//               <strong>{metric.name}:</strong> {metric.value}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="recent-activities">
//         <h3>Recent Activities</h3>
//         <ul>
//           {recentActivities.map((activity, index) => (
//             <li key={index}>{activity}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>
        Welcome to your dashboard! Here you can view your startup's performance
        metrics, recent activities, and more.
      </p>
      {/* You can add widgets or cards here for more detailed information */}
    </div>
  );
}

export default Dashboard;
