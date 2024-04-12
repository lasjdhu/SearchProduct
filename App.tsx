import React, {useState, useEffect} from 'react';
import {NativeBaseProvider, View, HStack, Spinner, FlatList} from 'native-base';
import ProductItem from './src/components/ProductItem';
import HeadingList from './src/components/HeadingList';

// Type definition for TypeScript
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
  const [category, setCategory] = useState<string>('All');

  // Will be loaded when screen is loading for the first time
  // and each time the category state changes
  useEffect(() => {
    setLoading(true);
    if (category === 'All') {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          setProducts(json);
          setLoading(false);
        });
    } else {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => {
          setProducts(json);
          setLoading(false);
        });
    }
  }, [category]);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setLoading(false);
  };

  return (
    <NativeBaseProvider>
      <View bg="coolGray.200">
        {loading ? (
          <HStack height="100%" space={2} justifyContent="center">
            <Spinner size="lg" accessibilityLabel="Loading products" />
          </HStack>
        ) : (
          <FlatList
            data={products}
            renderItem={({item}) => <ProductItem item={item} />}
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent={
              <HeadingList
                category={category}
                onCategoryChange={handleCategoryChange}
              />
            }
          />
        )}
      </View>
    </NativeBaseProvider>
  );
};

export default App;
