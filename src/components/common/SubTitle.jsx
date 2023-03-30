import { Typography } from '@mui/material';
import commonStyles from './styles/CommonStyles';

const SubTitle = ({ title, sx }) => (
    <Typography
        variant="subtitle1"
        children={title}
        sx={[commonStyles.subtitle, sx]}
    />
);

export default SubTitle;
