import { Typography } from '@mui/material';
import commonStyles from './styles/CommonStyles';

const BodyOneTitle = ({ title, sx }) => (
    <Typography
        variant="body1"
        children={title}
        sx={[commonStyles.bodyOneTitle, sx]}
    />
);

export default BodyOneTitle;
