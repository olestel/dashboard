import { Box } from '@mui/material';
import dashboardPriorityStyles from './styles/DashboardPriorityStyles';
import DashboardStatisticBlock from './DashboardStatisticBlock';
import enforcementDataMocks from '../mocks/enforcementData.json';
import coverageDataMocks from '../mocks/coverageData.json';
import resolutionDataMocks from '../mocks/resolutionData.json';

const DashboardStatistics = () => (
    <Box sx={dashboardPriorityStyles.statisticsWrapper}>
        <DashboardStatisticBlock
            title="Regulation enforcement rate"
            statisticData={enforcementDataMocks}
        />
        <DashboardStatisticBlock
            title="Coverage rate"
            statisticData={coverageDataMocks}
            sx={dashboardPriorityStyles.statisticsSecondBlock}
        />
        <DashboardStatisticBlock
            title="Resolution rate"
            statisticData={resolutionDataMocks}
        />
    </Box>
);

export default DashboardStatistics;
