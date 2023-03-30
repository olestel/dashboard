import { Box } from '@mui/material';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
import dashboardPriorityStyles from './styles/DashboardPriorityStyles';
import Table from '../common/Table';

const DashboardPriorityTable = () => (
    <Box sx={dashboardPriorityStyles.priorityTableWrapper}>
        <Table />
        <Box sx={dashboardPriorityStyles.tableMoreContainer}>
            <KeyboardDoubleArrowDown sx={dashboardPriorityStyles.tableMore}/>
        </Box>
    </Box>
);

export default DashboardPriorityTable;
