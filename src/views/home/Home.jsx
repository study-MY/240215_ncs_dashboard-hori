import MiniSt from "../../components/card/MiniSt";
import IconBox from "../../components/icons/IconBox";
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
// icon
import { FiBarChart2 } from "react-icons/fi";
import { FaPeace } from "react-icons/fa";
import { TfiShine } from "react-icons/tfi";
import { MdOutlineDateRange } from "react-icons/md";
import WeeklyRevenue from "./components/WeeklyRevenue";
import TotalSpent from "./components/TotalSpent";
import CheckTable from "./components/CheckTable";

const Home = () => {
  return (
    <VStack margin={"30px 17px"}>
      <Flex flexDir={"column"} flexGrow={1} gap={"20px"} w={"100%"}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
          spacing={"20px"}
        >
          <MiniSt
            startContent={
              <IconBox
                w={"56px"}
                h={"56px"}
                bg={"bgDefault"}
                icon={<FiBarChart2 />}
              />
            }
            name={"name"}
            value={"$350.4"}
          />
          <MiniSt
            startContent={
              <IconBox
                w={"56px"}
                h={"56px"}
                bg={"bgDefault"}
                icon={<MdOutlineDateRange />}
              />
            }
            name={"test"}
            value={"Date"}
          />
          <MiniSt
            startContent={
              <IconBox
                w={"56px"}
                h={"56px"}
                bg={"bgDefault"}
                icon={<TfiShine />}
              />
            }
            name={"weather"}
            value={"SUNNY"}
          />
          <MiniSt name={"TVA"} value={"5%"} />
          <MiniSt />
          <MiniSt
            name={"strongest"}
            value={"190cm"}
            endContent={
              <IconBox
                w={"56px"}
                h={"56px"}
                bg={"bgDefault"}
                icon={<FaPeace />}
              />
            }
            growth={"10cm"}
          />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={"20px"}>
          <TotalSpent />
          <WeeklyRevenue />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={"20px"}>
          <CheckTable />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
            <Box bg="white">card test</Box>
            <Box bg="white">card test</Box>
          </SimpleGrid>
          <MiniSt></MiniSt>
          <Box>
            <MiniSt></MiniSt>
            <MiniSt></MiniSt>
          </Box>
        </SimpleGrid>
      </Flex>
    </VStack>
  );
};

export default Home;
