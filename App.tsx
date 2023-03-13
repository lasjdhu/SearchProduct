import React, { useState, useEffect } from "react";
import { 
  NativeBaseProvider,
  Heading,
  Input,
  Button,
  View,
  Text,
  FlatList,
  Center,
  Spinner
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
  const [limit, setLimit] = useState<number>(5);
  const [category, setCategory] = useState<string>("All");

  useEffect(() => {
    if (category === "All") {
      fetch(`https://fakestoreapi.com/products?limit=${limit}`)
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
  }, [limit, category]);

  const handleLimitChange = (value: number) => {
    setLimit(value);
  };

  const handleCategoryChange = (value: number) => {
    setCategory(value);
  };

  return (
    <NativeBaseProvider>
      <View bg="coolGray.200">
        {loading ? (
          <Center>
            <Spinner/>
          </Center>
        ) : (
          <FlatList
            data={products}
            renderItem={({item}) => <ProductItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={() => (
              <HeadingList 
                limit={limit} 
                onLimitChange={handleLimitChange}
                category={category}
                onCategoryChange={handleCategoryChange} 
              />
            )}
          />
        )}
      </View>
    </NativeBaseProvider>
  );
}

export default App;
