import { Box } from '@mui/material';
import dashboardPriorityStyles from './styles/DashboardPriorityStyles';
import MapComponent from '../common/MapComponent';
import HFourTitle from './../common/HFourTitle';
import DashboardPriorityTable from './DashboardPriorityTable';

const DashboardPriority = () => (
    <Box sx={dashboardPriorityStyles.priorityWrapper}>
        <HFourTitle title='Priority Recommendations'/>
        <Box sx={dashboardPriorityStyles.priorityBlocksContainer}>
            <MapComponent />
            <DashboardPriorityTable />
        </Box>
    </Box>
);

export default DashboardPriority;
