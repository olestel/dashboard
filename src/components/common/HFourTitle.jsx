import { Typography } from '@mui/material';
import commonStyles from './styles/CommonStyles';

const HFourTitle = ({ title }) => (
    <Typography
        variant="h4"
        children={title}
        sx={commonStyles.title}
    />
);

export default HFourTitle;
