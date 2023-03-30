import { useState } from 'react';
import { Box, Select, MenuItem } from '@mui/material';
import commonStyles from './styles/CommonStyles';
import LeafletMap from './LeafletMap';

const MapComponent = () => {
    const [mapOption, setMapOption] = useState(0);

    const handleChange = (event) => setMapOption(event.target.value);

    return (
        <Box sx={commonStyles.mapWrapper}>
            <LeafletMap/>
            <Select
                value={mapOption}
                variant='standard'
                onChange={handleChange}
                sx={commonStyles.mapSelect}
            >
                <MenuItem value={0}>Choose the main KPI</MenuItem>
                <MenuItem value={1}>One more option</MenuItem>
            </Select>
        </Box>
    );
}

export default MapComponent;
