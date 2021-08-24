import './App.css';
import Header from './components/Header'
import History from './components/History';
import Inputs from './components/Inputs'

import { OperationContextProvider } from './context/OperationContext'

function App() {
  return (
    <div className="App">
      <OperationContextProvider>
      <Inputs />
        <Header />
        
        <History />
      </OperationContextProvider>
    </div>
  );
}

export default App;