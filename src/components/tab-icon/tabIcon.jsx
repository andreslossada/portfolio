import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

import './tab-icon.scss';

const TabIcon = ({ icon, tooltip }) => {
  return (
    <div className="box">
      <span className="tooltip">{tooltip}</span>
      <div className="icon ">{icon}</div>
    </div>
  );
};

export default TabIcon;

// <div className="icon">{icon}</div>
