import React from 'react';
import { Card, Button } from 'antd';

const ProductCard = () => {
  return (
    <Card
      title="Sample Product"
      extra={<span style={{ fontSize: '16px', fontWeight: 'bold' }}>$29.99</span>}
      style={{ width: 300, borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
      bodyStyle={{ textAlign: 'center' }}
    >
      <p style={{ minHeight: '40px', color: '#555' }}>
        This is a brief description of the sample product.
      </p>
      <Button type="primary" style={{ width: '100%' }}>
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
