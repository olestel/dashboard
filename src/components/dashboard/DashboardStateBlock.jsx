import { Box } from '@mui/material';
import dashboardPriorityStyles from './styles/DashboardPriorityStyles';
import State from '../common/State';

const DashboardStateBlock = ({ current, target }) => (
    <Box sx={dashboardPriorityStyles.stateBlockContainer}>
        <State
            stateData={current}
            sx={{ mr: '12px' }}
            title="Current state"
            subTitle="(1 Week)"
        />
        <State
            stateData={target}
            title="Target state"
            subTitle="(6 Month)"
        />
    </Box>
);

export default DashboardStateBlock;
