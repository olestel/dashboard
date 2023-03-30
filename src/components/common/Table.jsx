import {
    Table as TableMui,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableSortLabel,
    Box,
} from '@mui/material';
import { LocationOn, CheckCircle, Error, ReportProblem, TrendingUp, TrendingDown } from '@mui/icons-material';
import commonStyles from './styles/CommonStyles';

const tableData = [
    {
        description: {
            text: 'Review process with Makkah Amanah to improve their Regulation enforcement rate',
            status: 'success'
        },
        owner: 'Enforcement Team',
        kpi: {
            text: 'Regulation enforcement rate​',
            percentage: 10,
            positive: false,
        },
        subKpi: {
            text: 'Regulation clause​​',
            percentage: 10,
            positive: true,
        },
        step: 'Plan / Detect',
        geography: 'Riyadh',
    },
    {
        description: {
            text: 'Identify the root-cause of the lack of visibility for the sub-KPI Number of visits in the segment for the Jeddah Amanah',
            status: 'error'
        },
        owner: 'DTSC',
        kpi: {
            text: 'Coverage ratio',
            percentage: 10,
            positive: false,
        },
        subKpi: {
            text: 'Number of visits',
            percentage: 10,
            positive: true,
        },
        step: 'Detect / Process',
        geography: 'Jeddah',
    },
    {
        description: {
            text: 'Address the decrease in collection conversion rate sub-KPI for the Dammam Amanah',
            status: 'warning'
        },
        owner: 'Licensing Team',
        kpi: {
            text: 'Resolution ratio',
            percentage: 10,
            positive: false,
        },
        subKpi: {
            text: 'Resolution ratio',
            percentage: 10,
            positive: true,
        },
        step: 'Resolve',
        geography: 'Dammam',
    },
    {
        description: {
            text: 'Review process with Makkah Amanah to improve their Regulation enforcement rate',
            status: 'success'
        },
        owner: 'Enforcement Team',
        kpi: {
            text: 'Regulation enforcement rate​',
            percentage: 10,
            positive: false,
        },
        subKpi: {
            text: 'Regulation clause​​',
            percentage: 10,
            positive: true,
        },
        step: 'Plan / Detect',
        geography: 'Riyadh',
    },
    {
        description: {
            text: 'Identify the root-cause of the lack of visibility for the sub-KPI Number of visits in the segment for the Jeddah Amanah',
            status: 'error'
        },
        owner: 'DTSC',
        kpi: {
            text: 'Coverage ratio',
            percentage: 10,
            positive: false,
        },
        subKpi: {
            text: 'Number of visits',
            percentage: 10,
            positive: true,
        },
        step: 'Detect / Process',
        geography: 'Jeddah',
    },
];

const icons = {
    success: {
        componentName: CheckCircle,
        style: commonStyles.success,
    },
    error: {
        componentName: ReportProblem,
        style: commonStyles.error,
    },
    warning: {
        componentName: Error,
        style: commonStyles.warning,
    },
};

const currentComponent = (status) => {
    const ComponentName = icons[status].componentName;

    return <ComponentName sx={[icons[status].style, { mr: '10px' }]} />;
};

const kpiElement = (positive, percentage) => (
    <Box sx={commonStyles.tableRowKpi(positive)}>
        {
            positive ? (
                <TrendingUp sx={[commonStyles.trendIcon, commonStyles.trendIconGreen]} />
            ) : (
                <TrendingDown sx={[commonStyles.trendIcon, commonStyles.trendIconRed]} />
            )
        }
        {percentage}%
    </Box>
);

const Table = () => (
    <Box sx={commonStyles.tableContainer}>
        <TableContainer component={Paper} sx={commonStyles.tableTitle}>
            <TableMui>
                <TableHead>
                    <TableRow>
                        <TableCell align="left" sortDirection="asc" sx={commonStyles.tableTitleText}>
                            Description
                        </TableCell>
                        <TableCell align="left" sortDirection="asc">
                            <TableSortLabel direction="asc" active sx={commonStyles.tableTitleText}>
                                Owner
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="left" sortDirection="asc">
                            <TableSortLabel direction="asc" sx={commonStyles.tableTitleText}>
                                Impacted KPI
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="left" sortDirection="asc">
                            <TableSortLabel direction="asc" sx={commonStyles.tableTitleText}>
                                Impacted Sub-KPI
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="left" sortDirection="asc">
                            <TableSortLabel direction="asc" sx={commonStyles.tableTitleText}>
                                Impacted VC step
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="left" sortDirection="asc">
                            <TableSortLabel direction="asc" sx={commonStyles.tableTitleText}>
                                Geography
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="left" component="th" scope="row" sx={commonStyles.tableRow}>
                                <Box sx={commonStyles.flexCenter}>
                                    {currentComponent(row.description.status)}
                                    {row.description.text}
                                </Box>
                            </TableCell>
                            <TableCell align="left" sx={commonStyles.tableRow}>
                                {row.owner}
                            </TableCell>
                            <TableCell align="left" sx={[commonStyles.tableRow, { width: '190px' }]}>
                                {row.kpi.text}
                                {kpiElement(row.kpi.positive, row.kpi.percentage)}
                            </TableCell>
                            <TableCell align="left" sx={commonStyles.tableRow}>
                                {row.subKpi.text}
                                {kpiElement(row.subKpi.positive, row.subKpi.percentage)}
                            </TableCell>
                            <TableCell align="left" sx={commonStyles.tableRow}>{row.step}</TableCell>
                            <TableCell align="left" sx={commonStyles.tableRow}>
                                <Box sx={commonStyles.flexCenter}>
                                    <LocationOn />{row.geography}
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableMui>
        </TableContainer>
    </Box>
);

export default Table;
