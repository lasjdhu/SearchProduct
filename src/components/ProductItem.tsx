import React from "react";
import { 
	Card,
	Text,
	Image,
	Box,
	Center
} from "native-base";

type ProductItemProps = {
  item: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
  };
};

const ProductItem: React.FC = ({ item }: ProductItemProps) => (
	<Card bg="#ffffff" rounded="lg" mx="10" m="4">
		<Box p="4">
			<Text>{item.title}</Text>
	    <Box p="2" m="2" rounded="lg">{item.category}</Box>
	  </Box>
	  <Center>
	    <Image
	      source={{ uri: item.image }}
	      alt={item.title}
	      size="xl"
	    />
    </Center>
    <Box p="4">
    	{item.description}
    </Box>
    <Box p="4">
    	<Text>Price: {item.price}</Text>
    </Box>
	</Card>
);

export default ProductItem;
