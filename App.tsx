import React, { useState, useEffect } from "react";
import { NativeBaseProvider, FlatList, Card, Center, Spinner } from "native-base";
import { item } from "./src/components/item.tsx"

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res=>res.json())
      .then(json=> {
        setProducts(json)
        setLoading(false)
      });
  }, []);

  return (
    <NativeBaseProvider>
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) :
      (
        <FlatList
	  data={products}
	  renderItem={item}
	  keyExtractor={(item) => {item.id.toString()}}
	/>
      )}
    </NativeBaseProvider>
  );
}

export default App;
