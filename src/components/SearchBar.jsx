import React from 'react';

const SearchBar = (props) => {
  const { filterText, inStockOnly, onFilterTextChange, onInStockOnly } =
    props;

  return (
    <>
      <input
        type="text"
        onChange={(e) => onFilterTextChange(e.target.value)}
        value={filterText}
        placeholder="search..."
      />
      <p>
        <input
          type="checkbox"
          value={inStockOnly}
          onChange={(e) => onInStockOnly(e.target.checked)}
        />
        Only show products in stock
      </p>
    </>
  );
};

export default SearchBar;
