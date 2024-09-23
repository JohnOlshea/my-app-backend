import React from 'react';

type Props = {
  params: { categoryName: string }
};

export default function CategoryPage({ params }: Props) {
  return (
    <div>
      <h1>{params.categoryName} Category</h1>
      {/* Add your category page content here */}
    </div>
  );
}