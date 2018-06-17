import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#5b80b2'
    },
    indicator: {
      main: '#ECCA30',
    },
    third: {
      main: '#b2b2b2',
    }
  },
  typography: {
    fontFamily: '\'Nanum Square\', \'Malgun Gothic\', sans-serif',
  },
  spacing: {
    unit: 8, //4로 바꿀 예정
  }
});
