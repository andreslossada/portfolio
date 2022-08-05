import './index.css';
import TabContainer from './components/tabs';

function App() {
  return (
    <div className="grid place-items-center h-screen  sm:flex">
      <div className="w-1/2 sm:w-full sm:h-4/5 md:w-4/5 lg:w-1/2 backdrop-blur-lg shadow-xl  ">
        <TabContainer />
      </div>
    </div>
  );
}

export default App;
