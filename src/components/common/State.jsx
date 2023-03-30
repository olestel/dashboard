import { Box, Typography } from '@mui/material';
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import commonStyles from './styles/CommonStyles';
import BodyOneTitle from './BodyOneTitle';
import SubTitle from './SubTitle';

const State = ({ stateData, sx, title, subTitle }) => {
    const { isPlus, difference, percentage, color } = stateData;

    const differenceElement = <>
        {
            isPlus ? (
                <ArrowDropUp sx={commonStyles.trendIconGreen} />
            ) : (
                <ArrowDropDown sx={commonStyles.trendIconRed} />
            )
        }
    </>;

    return (
        <Box sx={[commonStyles.stateContainer, sx]}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                    variant="determinate"
                    value={percentage}
                    sx={{ width: '80px !important', height: '80px !important', color: difference ? color : '#23A698'}}
                />
                <Box
                    sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'start',
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={commonStyles.statePercentage}
                            children={percentage}
                        />
                        <Typography
                            variant="subtitle1"
                            children="%"
                        />
                    </Box>
                </Box>
            </Box>

            <Box sx={commonStyles.stateInfoContainer}>
                <BodyOneTitle title={title} sx={{ width: '129px' }} />
                <SubTitle title={subTitle} />
                { difference && (
                    <Box sx={commonStyles.stateDifferenceContainer}>
                        {differenceElement}
                        <Typography
                            variant="body2"
                            children={`${isPlus ? '+' : '-'}${difference}%`}
                            sx={[
                                commonStyles.stateDifference,
                                isPlus? commonStyles.trendIconGreen : commonStyles.trendIconRed,
                            ]}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    )
};

export default State;
