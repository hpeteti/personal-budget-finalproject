import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'black-grey',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '20%', // Adjusted width
    marginBottom: '10px',
    fontWeight: '600',
    fontSize: '16px',
  };

  return (
    <main className="center" id="main" aria-label="main">
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px' }}>This is Dashboard Page. Here you can add new budgets and expenses!</h2>

        <div style={{ marginBottom: '10px' }}>
          <Link to="/configure-budgets">
            <button style={{ ...buttonStyle, backgroundColor: '#4a90e2', width: '32%' }}>
              Add New Budgets
            </button>
          </Link>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <Link to="/add-expense">
            <button style={{ ...buttonStyle, backgroundColor: '#4a90e2', width: '32%' }}>
            Add New Expenses
            </button>
          </Link>
        </div>
      </div>

      <Link to="/">
        <button style={{ ...buttonStyle, marginBottom: '0' }}>
          Go Back
        </button>
      </Link>
    </main>
  );
}

export default Dashboard;
