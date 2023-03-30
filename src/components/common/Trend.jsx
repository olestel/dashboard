import { Box } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import commonStyles from './styles/CommonStyles';
import BodyOneTitle from './BodyOneTitle';
import SubTitle from './SubTitle';
import LineChartBlock from './LineChartBlock';

const Trend = ({ trendData }) => (
    <Box sx={commonStyles.trendContainer}>
        <Box sx={commonStyles.trendInfo}>
            <BodyOneTitle title="Trend" />
            <Box sx={commonStyles.trendIconContainer}>
                {
                    trendData.positive ? (
                        <TrendingUp sx={[commonStyles.trendIcon, commonStyles.trendIconGreen]} />
                    ) : (
                        <TrendingDown sx={[commonStyles.trendIcon, commonStyles.trendIconRed]} />
                    )
                }
                <SubTitle title="Last 6 Months" sx={{ width: '82px' }}/>
            </Box>
        </Box>

        <LineChartBlock color={trendData.color} />
    </Box>
);

export default Trend;
