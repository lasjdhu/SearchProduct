import React, { useState, useEffect } from "react";
import { 
  NativeBaseProvider,
  Heading,
  Input,
  Button,
  View,
  Text,
  FlatList
} from "native-base";
import ProductItem from "./src/components/ProductItem";
import HeadingList from "./src/components/HeadingList"

type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string>("All");

  useEffect(() => {
    setLoading(true);
    if (category === "All") {
      fetch(`https://fakestoreapi.com/products`)
        .then(res=>res.json())
        .then(json=> {
          setProducts(json);
          setLoading(false);
        });
    }
    else {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res=>res.json())
        .then(json=> {
          setProducts(json);
          setLoading(false);
        });
    }
  }, [category]);

  const handleCategoryChange = (value: number) => {
    setCategory(value);
    setLoading(false);
  };

  return (
    <NativeBaseProvider>
      <View bg="coolGray.200">
        <FlatList
          data={products}
          renderItem={({item}) => <ProductItem item={item} loading={loading} />}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={() => (
            <HeadingList
              category={category}
              onCategoryChange={handleCategoryChange}
              setLoading={setLoading}
            />
          )}
        />
      </View>
    </NativeBaseProvider>
  );
}

export default App;
