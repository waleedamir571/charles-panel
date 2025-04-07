import React from 'react';

const tabs = [
  { key: 'pending', label: 'PENDING JOBS' },
  { key: 'current', label: 'CURRENT JOBS' },
  { key: 'complete', label: 'COMPLETE JOBS' },
  { key: 'denied', label: 'DENIED JOBS' },
  { key: 'public', label: 'PUBLIC JOBS' },
];

function JobTabs({ activeTab, setActiveTab }) {
  return (
    <div className="bg-white p-3 rounded shadow-sm">
      <h5 className="mb-2 text-black fs-3 fw-medium">My Jobs</h5>
      <hr className='text-gray fs-2'/>
      {tabs.map(tab => (
        <div
          key={tab.key}
          className={`p-3 mb-3 rounded ${activeTab === tab.key ? 'bg-d-blue text-white fw-medium' : 'bg-light text-black fw-medium'} cursor-pointer `}
          style={{ cursor: 'pointer' }}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}

export default JobTabs;
