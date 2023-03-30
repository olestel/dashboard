const commonStyles = {
    mapWrapper: {
        flex: 2,
        minWidth: "560px",
        height: "484px",
        backgroundColor: "#EEF1FA",
        boxShadow:
            "0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)",
        borderRadius: "20px",
        mr: "20px",
        p: "20px",
        position: "relative",
        '@media (max-width: 1300px)': {
            mr: 0,
            mb: '20px',
        },
    },
    mapSelect: {
        height: "44px",
        width: "210px",
        position: "absolute",
        top: "20px",
        right: "20px",
        p: "12px 15px 12px 20px",
        backgroundColor: "white",
        color: "#383874",
        borderRadius: "6px",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "20px",
        "&:before": {
            content: "none",
        },
        "&:after": {
            content: "none",
        },
        "& .MuiSelect-select": {
            p: 0,
            backgroundColor: "transparent !important",
        },
        "& .MuiSvgIcon-root ": {
            color: "#383874",
            position: "unset",
        },
    },
    title: {
        mb: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "34px",
        lineHeight: "44px",
        color: '#383874',
    },
    bodyOneTitle: {
        mb: "2px",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#383874',
    },
    subtitle: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
    },
    trendContainer: {
        mt: '12px',
        width: '100%',
        height: '96px',
        background: 'white',
        boxShadow: '0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)',
        borderRadius: '10px',
        p: '20px',
        display: 'flex',
    },
    trendInfo: {
        mr: '40px',
    },
    trendIcon: {
        mr: '4px',
        width: '14px',
        height: '12px',
    },
    trendIconGreen: {
        color: '#23A698',
    },
    trendIconRed: {
        color: '#FF708B',
    },
    trendIconContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    stateContainer: {
        width: '50%',
        height: '124px',
        background: 'white',
        boxShadow: '0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)',
        borderRadius: '10px',
        p: '20px',
        display: 'flex',
    },
    stateInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ml: '16px',
    },
    stateDifferenceContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    statePercentage: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '30px',
        lineHeight: '40px',
        color: '#383874',
    },
    tableTitleText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '10px',
        lineHeight: '16px',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        color: '#383874',
    },
    tableTitle: {
        borderRadius: '4px',
        boxShadow: 'none',
        width: '1151px',
    },
    tableRow: {
        height: '68px',
        fontFamily: 'Roboto',
        fontSstyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.4px',
        color: '#383874',
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
    },
    tableContainer: {
        overflowX: 'auto',
    },
    success: {
        color: '#23A698',
    },
    error: {
        color: '#FFBA69',
    },
    warning: {
        color: '#FF708B',
    },
    tableRowKpi: (positive) => ({
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        p: '2px',
        color: positive ? '#23A698' : '#FF708B',
        backgroundColor: positive ? 'rgba(49, 207, 128, 0.1)' : 'rgba(255, 112, 139, 0.1)',
    }),
  };
  
  export default commonStyles;
  