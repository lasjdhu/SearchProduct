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
  onLimitChange: (value: number) => void;
};

const HeadingList: React.FC<Props> = ({ limit, onLimitChange }) => {
  return (
    <View>
      <Heading fontSize="2xl" p="10" pb="0" textAlign="center">
        Our Products
      </Heading>
      <Box flexDirection="row" alignItems="center" m="5">
        <Text mr="5" width="auto" fontSize="xl">Number of products:</Text>
        <Select
          placeholder="5"
          selectedValue={limit}
          m="5"
          width="100"
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
