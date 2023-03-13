import React from "react";
import { 
	View,
	Heading, 
	Select,
	Item,
	Text,
	Box
} from "native-base";

type Props = {
  limit: number;
  category: string;
  onLimitChange: (value: number) => void;
  onCategoryChange: (value: string) => void;
};

const HeadingList: React.FC = ({ limit, onLimitChange, category, onCategoryChange }: Props) => {
  return (
    <View>
      <Heading fontSize="2xl" p="10" pb="5" textAlign="center">
        Our Products
      </Heading>
      <Box flexDirection="row" alignItems="center" mx="5" my="2">
        <Text mr="5" width="auto" fontSize="xl">Categories:</Text>
        <Select
          placeholder="All"
          selectedValue={category}
          width="172"
          onValueChange={(value: string) => onCategoryChange(value)}
        >
        	<Select.Item label="All" value={"All"} />
          <Select.Item label="Electronics" value={"electronics"} />
          <Select.Item label="Jewerly" value={"jewerly"} />
          <Select.Item label="Men's clothing" value={"men's clothing"} />
          <Select.Item label="Women's clothing" value={"women's clothing"} />
        </Select>
      </Box>
      <Box flexDirection="row" alignItems="center" mx="5" mb="2">
        <Text mr="5" width="auto" fontSize="xl">Number of products:</Text>
        <Select
          placeholder="5"
          selectedValue={limit}
          width="90"
          onValueChange={(value: number) => onLimitChange(value)}
        >
          <Select.Item label="5" value={5} />
          <Select.Item label="10" value={10} />
          <Select.Item label="15" value={15} />
          <Select.Item label="20" value={20} />
        </Select>
      </Box>
    </View>
  );
};

export default HeadingList;
