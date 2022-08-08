import './index.css';
import TabContainer from './components/tabs';
import DarkMode from './components/darkmode/darkmode';

function App() {
  return (
    <DarkMode>
      <div className={`grid place-items-center h-screen  sm:flex  duration-500 bg-light bg-slate-700 dark:bg-dark bg-cover`}>
        <div className="w-1/2 sm:w-full sm:h-4/5 md:w-4/5 lg:w-1/2 backdrop-blur-md shadow-xl  ">
          <TabContainer />
        </div>
      </ div>
    </DarkMode>
  );
}

export default App;
