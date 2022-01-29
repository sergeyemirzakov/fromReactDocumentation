import React from 'react';
import './App.css';
import data from './data';

import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

function App() {
  const [filterText, setFilterText] = React.useState('');
  const [inStockOnly, setInStockOnly] = React.useState(false);

  return (
    <div className="App">
      <main className="App-header">
        <div className="container">
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={(text) => setFilterText(text)}
            onInStockOnly={(stock) => setInStockOnly(stock)}
          />
          <ProductTable
            filterText={filterText}
            inStockOnly={inStockOnly}
            products={data}
          />
          <p>Lorem</p>
        </div>
      </main>
    </div>
  );
}

export default App;
