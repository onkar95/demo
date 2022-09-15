// import Timer from './countdown-app/Timer';
import { DataProvider } from './assign-ecomm/context/Ecom';
import Ecom from './assign-ecomm/Ecom';

function App() {
  return (
    <div className="App">
     {/* <Timer/> */}
     <DataProvider>
       
     <Ecom/>
     </DataProvider>
    </div>
  );
}

export default App;
