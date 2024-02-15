import {
  Card,
  CardBody,
  Flex,
  Spacer,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

const MiniSt = (props) => {
  const { startContent, endContent, name, value, growth } = props;
  return (
    <Card>
      <CardBody>
        <Flex>
          {startContent}
          <Spacer />
          <Stat ml={startContent ? "5px" : 0}>
            <StatLabel>{name}</StatLabel>
            <StatNumber>{value}</StatNumber>
            {growth ? (
              <StatHelpText>
                <StatArrow type="increase" />
                {growth}
              </StatHelpText>
            ) : null}
          </Stat>
          {endContent}
          {/* {growth ? (
            // 코드가 여러줄 들어가는 거라 소괄호 열어야 함.
            <Flex align="center">
              <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
                {growth}
              </Text>
              <Text color="secondaryGray.600" fontSize="xs" fontWeight="400">
                good looking guy
              </Text>
            </Flex>
          ) : null} */}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniSt;
