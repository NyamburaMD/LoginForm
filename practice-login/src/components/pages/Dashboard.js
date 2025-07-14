import React from "react";
import '../styles/Dashboard.css';

const Dashboard = () => {

    return (
        <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Here’s where the magic happens ✨</p>
      </header>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Profile</h2>
          <p>View and edit your profile information.</p>
        </div>
        <div className="dashboard-card">
          <h2>Projects</h2>
          <p>Check on your active projects and updates.</p>
        </div>
        <div className="dashboard-card">
          <h2>Messages</h2>
          <p>Stay in touch with your team or clients.</p>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;