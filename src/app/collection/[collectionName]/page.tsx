import React from 'react';

type Props = {
  params: { collectionName: string }
};

export default function CollectionPage({ params }: Props) {
  return (
    <div>
      <h1>{params.collectionName} Collection</h1>
      {/* Add your collection page content here */}
    </div>
  );
}