import React from 'react';

const StatusBadge = ({ isActive, age }) => {
    return (
        <div className="status-badge">
      <span className={isActive ? 'badge-active' : 'badge-paused'}>
        {isActive ? '● Active' : '○ On Pause'}
      </span>
            {age < 18 && <span className="badge-underage">(Underage)</span>}
        </div>
    );
};

export default StatusBadge;