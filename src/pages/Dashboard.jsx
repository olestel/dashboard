import { Box } from '@mui/material';
import DashboardPriority from './../components/dashboard/DashboardPriority';
import dashboardStyles from './styles/DashboardStyles';
import DashboardStatistics from './../components/dashboard/DashboardStatistics';

const Dashboard = () => (
    <Box sx={dashboardStyles.wrapper}>
        <Box sx={dashboardStyles.container}>
            <DashboardStatistics />
            <DashboardPriority />
        </Box>
    </Box>
);

export default Dashboard;
