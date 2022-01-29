import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText, inStockOnly }) => {
  let rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    let productName = product.name.toLowerCase();

    if (productName.indexOf(filterText.toLowerCase()) === -1) return;
    if (inStockOnly && !product.stocked) return;
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />,
      );
    }
    rows.push(<ProductRow key={product.price} productName={product} />);
    lastCategory = product.category;
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};

export default ProductTable;
