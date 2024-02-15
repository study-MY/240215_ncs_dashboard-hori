import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import LineChart from "../../../components/charts/LineChart";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../../../variables/charts";

const TotalSpent = () => {
  return (
    <Card>
      <CardHeader>this month</CardHeader>
      <CardBody>
        <Flex>
          <Stat>
            <StatLabel>hours</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
          <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </Flex>
      </CardBody>
    </Card>
  );
};
export default TotalSpent;
