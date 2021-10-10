import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import AddProduct from './components/AddProduct';

function App() {
 const [showAddProduct, setShowAddProduct] = useState(false)

 
  return (
    <div className="App">
    <Header onnAdd={() => setShowAddProduct(!showAddProduct)}
    showAdd={showAddProduct}
      />
       { showAddProduct && <AddProduct/>}
    </div>
  );
}

export default App;
