import { AppBar, Toolbar } from '@material-ui/core'
import logo from './../../assets/img/logo.png'

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <img src={logo} width="35" height="35" alt="logo-lyric" />
      &nbsp;&nbsp;
      <h1>Lyric Finder App</h1>
    </Toolbar>
  </AppBar>
)

export default Header
