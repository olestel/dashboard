const dashboardPriorityStyles = {
  priorityWrapper: {
    color: "#383874",
    pb: "20px",
  },
  priorityBlocksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  priorityTableWrapper: {
    flex: 4,
    minWidth: "560px",
    height: "484px",
    backgroundColor: "white",
    boxShadow:
        "0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)",
    borderRadius: "20px",
    p: "20px",
    pt: '10px',
    '@media (max-width: 1300px)': {
      height: "auto",
    },
  },
  statisticsWrapper: {
    mb: '40px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  statisticBlock: {
    flex: 1,
    mt: '32px',
  },
  stateBlockContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  statisticsSecondBlock: {
    m: '32px 32px 0',
    '@media (max-width: 1800px)': {
      mr: 0,
    },
    '@media (max-width: 1326px)': {
      ml: 0,
    },
  },
  tableMore: {
    color: '#374151',
    cursor: 'pointer',
  },
  tableMoreContainer: {
    width: '100%',
    mt: '13px',
    mb: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default dashboardPriorityStyles;
