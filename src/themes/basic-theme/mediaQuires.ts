
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const useMediaQueries = () => {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"))
  return mobileScreen;
};

export default useMediaQueries;
