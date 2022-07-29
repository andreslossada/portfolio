import './index.css';
import TabContainer from './components/tabs';

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <div className=" w-1/2  backdrop-blur-lg shadow-xl  ">
        <TabContainer />
      </div>
    </div>
  );
}

export default App;
