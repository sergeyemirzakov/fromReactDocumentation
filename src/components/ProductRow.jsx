import React from 'react';

const ProductRow = ({ productName }) => {
  const name = productName.stocked ? (
    productName.name
  ) : (
    <span style={{ color: 'red' }}>{productName.name}</span>
  );

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{productName.price}</td>
      </tr>
    </>
  );
};

export default ProductRow;
