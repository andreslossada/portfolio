import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Projects from './projects';
// import { HomeIcon, WorkIcon, CodeIcon, EmailIcon } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import Skills from './skills';
import TabIcon from './tab-icon/tabIcon';
import Contact from './contact';
import { Homecard } from './homecard';
import './tab-icon/tab-icon.scss';

function TabContainer() {
  const [value, setValue] = React.useState(0);

  function handleChange(e, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className=''>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          style: {
            top: 0,
            height: '4px',
            backgroundColor: 'white',
            opacity: '.8',
          },
        }}
      >
        <Tab label={<TabIcon icon={<HomeIcon />} tooltip="Home" />} />
        <Tab label={<TabIcon icon={<WorkIcon />} tooltip="Projects" />} />
        <Tab label={<TabIcon icon={<CodeIcon />} tooltip="Skills" />} />
        <Tab label={<TabIcon icon={<EmailIcon />} tooltip="Contact" />} />
      </Tabs>
      <SwipeableViews
        className=''
        index={value}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
        containerStyle={{
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
        }}
      >
        <Homecard />
        <Projects />
        <Skills />
        <Contact />
      </SwipeableViews>
    </div>
  );
}

export default TabContainer;
