import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Card,
  Flex,
  Text,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import ColumnChart from "./../../../components/charts/BarChart";
// import {
//   lineChartDataOverallRevenue,
//   lineChartOptionsOverallRevenue,
//   barChartDataDailyTraffic,
//   barChartOptionsDailyTraffic,
//   pieChartData,
//   pieChartOptions,
// } from "variables/charts";

const WeeklyRevenue = () => {
  return (
    <Card>
      <CardHeader>
        <Flex flexDir={"row"}>
          <Text>Weekly Revenue</Text>
          <Box>icon</Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <ColumnChart />
      </CardBody>
    </Card>
  );
};
export default WeeklyRevenue;
