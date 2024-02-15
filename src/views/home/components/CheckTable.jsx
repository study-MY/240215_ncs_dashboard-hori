import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { checkTableData } from "../../../variables/tables";

// import {checkTableData}

const CheckTable = () => {
  // const {name, progress, quantity, date} = props

  return (
    <Card>
      <CardHeader>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text>Check Table</Text>
          <Button>...</Button>
        </Flex>
      </CardHeader>
      <Table>
        <Thead>
          <Tr>
            <Th>
              <Checkbox />
            </Th>
            <Th>NAME</Th>
            <Th>PROGRESS</Th>
            <Th>QUANTITY</Th>
            <Th>DATE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {checkTableData.map((row, index) => (
            <Tr key={index}>
              <Td>
                <Checkbox defaultChecked={row.checked} />
              </Td>
              <Td>{row.name}</Td>
              <Td textAlign={"center"}>{row.progress}%</Td>
              <Td isNumeric>{row.quantity}</Td>
              <Td>{row.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};

export default CheckTable;
