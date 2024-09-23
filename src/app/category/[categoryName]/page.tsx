import React from 'react';
import { Button } from "@/components/ui/button"


type Props = {
  params: { categoryName: string }
};

export default function CategoryPage({ params }: Props) {
  return (
    <div>
      <h1>{params.categoryName} Category</h1>
      {/* Add your category page content here */}
      <Button variant="destructive">Button</Button>
    </div>
  );
}