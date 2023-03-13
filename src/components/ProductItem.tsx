import React, { useState } from "react";
import { 
	Card,
  Box,
  Heading,
  Image,
  Text,
  Button,
  Collapse,
} from "native-base";

type itemProps = {
  item: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
  };
};

const ProductItem: React.FC = ({ item }: itemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
  	<>
	    <Card
	      bg="#fff"
	      overflow="hidden"
	      flexDirection="row"
	      alignItems="center"
	      justifyContent="space-between"
	      my="4"
	      mx="2"
	    >
	      <Image
	        source={{ uri: item.image }}
	        alt={item.title}
	        width={48}
	        height={48}
	        resizeMode="contain"
	        mx="3"
	      />
	      <Box flex={1} p="3">
	        <Heading size="sm" mb="2" color="coolGray.800">
	          {item.title}
	        </Heading>
	        <Text color="coolGray.600" fontSize="sm">
	          {item.price} $
	        </Text>
	        <Button onPress={handleToggleDescription} mt="2" rounded="full">
	  				{showDescription ? <Text>Hide</Text> : <Text>Show info</Text>}
					</Button>
	      </Box>
	    </Card>
	    <Collapse isOpen={showDescription} m="5" my="2">
	    	<Text fontSize="xl">Description:</Text>
	    	<Box>{item.category}</Box>
	      <Text color="coolGray.600">{item.description}</Text>
	    </Collapse>
    </>
  );
};

export default ProductItem;
