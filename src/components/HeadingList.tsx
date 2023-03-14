import React from "react";
import { 
	View,
	Heading, 
	Box,
	Text,
	Select
} from "native-base";

// Type definition for TypeScript
type Props = {
  category: string;
  onCategoryChange: (value: string) => void;
  setLoading: (value: boolean) => void;
};

const HeadingList: React.FC = ({ category, onCategoryChange, setLoading }: Props) => {
  return (
    <View>
      <Heading fontSize="2xl" p="10" pb="5" textAlign="center">
        Our Products
      </Heading>
      <Box flexDirection="row" alignItems="center" mx="5" my="2">
        <Text mr="5" width="auto" fontSize="xl">Categories:</Text>
        <Select
        	flex="1"
          placeholder="All"
          selectedValue={category}
          onValueChange={(value: string) => onCategoryChange(value)}
        >
        	<Select.Item label="All" value={"All"} />
          <Select.Item label="Electronics" value={"electronics"} />
          <Select.Item label="Jewelery" value={"jewelery"} />
          <Select.Item label="Men's clothing" value={"men's clothing"} />
          <Select.Item label="Women's clothing" value={"women's clothing"} />
        </Select>
      </Box>
    </View>
  );
};

export default HeadingList;
