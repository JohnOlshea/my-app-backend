import React from 'react';

type Props = {
  params: { productId: string }
};

export default function ProductPage({ params }: Props) {
  return (
    <div>
      <h1>{params.productId} Product</h1>
      {/* Add product page content here */}
    </div>
  );
}