import React, { useState, useEffect } from "react";
import { NativeBaseProvider, Card } from "native-base";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res=>res.json())
      .then(json=>setProducts(json));
  }, []);

  return (
    <NativeBaseProvider>
      {products.map((product) => (
        <Card key={product.id}>{product.title}</Card>
      ))}
    </NativeBaseProvider>
  );
}

export default App;
