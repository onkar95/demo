// import Timer from './countdown-app/Timer';
// import { DataProvider } from './assign-ecomm/context/Ecom';
// import Ecom from './assign-ecomm/Ecom';
import { DataProvider } from './text-Heightliter/components/Context';
import Main from './text-Heightliter/Main';

function App() {
  return (
    <div className="App">

      {/* <Timer/> */}

      {/* <DataProvider>
     <Ecom/>
     </DataProvider> */}

      <DataProvider>
        <Main />
      </DataProvider>


    </div>
  );
}

export default App;
