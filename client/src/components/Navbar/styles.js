
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  Navbar: {
    position:"static",
    margin:0,
    display: 'flex',
    padding : '0px 50px'
  },
  Post_but: {
    position: 'absolute',
    top: '1%',
    right: '15%'
  },
  Logout: {
    position: 'absolute',
    top: '1%',
    right: '5%'
  }
}));