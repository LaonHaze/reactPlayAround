import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import useStyles from "./NavBar.style";
import AddIcon from "@material-ui/icons/Add";
import ChatIcon from "@material-ui/icons/Chat";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import classNames from "classnames";

const NavBar = () => {
  const styles = useStyles();

  const RightIcons = () => {
    return (
      <>
        <IconButton className={styles.rightButton}>
          <AddIcon />
        </IconButton>
        <IconButton className={styles.rightButton}>
          <ChatIcon />
        </IconButton>
        <IconButton className={styles.rightButton}>
          <FacebookIcon />
        </IconButton>
        <IconButton className={styles.rightButton}>
          <LinkedInIcon />
        </IconButton>
        <IconButton className={styles.rightButton}>
          <InstagramIcon />
        </IconButton>
      </>
    );
  };

  const LeftSelector = () => {
    return (
      <>
        <div className={styles.leftSide}>
          <div className={styles.navWrapper}>
            <Button
              className={classNames(styles.navButton, styles.navFirstButton)}
              color="inherit"
              component={NavLink}
              to="/counter"
            >
              Counter
            </Button>
            <Button
              className={classNames(styles.navButton, styles.navSecondButton)}
              color="inherit"
              component={NavLink}
              to="/messages"
            >
              Messages
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <AppBar color="secondary" position="sticky">
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          Hi Me
        </Typography>
        {LeftSelector()}
        {RightIcons()}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
