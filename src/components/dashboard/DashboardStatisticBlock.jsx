import { Box } from '@mui/material';
import dashboardPriorityStyles from './styles/DashboardPriorityStyles';
import HFourTitle from './../common/HFourTitle';
import Trend from './../common/Trend';
import DashboardStateBlock from './DashboardStateBlock';

const DashboardStatisticBlock = ({ title, statisticData, sx }) => {
    const { trend, current, target } = statisticData || {};

    return (
        <Box sx={[dashboardPriorityStyles.statisticBlock, sx]}>
            <HFourTitle title={title} />
            <DashboardStateBlock current={current} target={target}/>
            <Trend trendData={trend} />
        </Box>
    );
}

export default DashboardStatisticBlock;
