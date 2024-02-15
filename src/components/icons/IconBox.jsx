import { Box } from "@chakra-ui/react";

const IconBox = (props) => {
  const { icon, ...rest } = props;
  return (
    <Box
      display={"flex"}
      py={4}
      borderRadius={"50%"}
      color={"primary"}
      fontSize={24}
      alignItems={"center"}
      justifyContent={"center"}
      {...rest}
    >
      {icon}
    </Box>
  );
};

export default IconBox;
