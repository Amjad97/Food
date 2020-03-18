import React from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, IconButton, Badge } from "@material-ui/core";
import List from "./List";
import Person from "../../../icons/Person";
import Search from "../../../icons/Search";
import Store from "../../../icons/Store";
import "../style/style.css";
import style from "../style/style";

const useStyle = makeStyles(style);

function NavBar() {
  const classes = useStyle();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.mainToolBar}>
        <List />
      </Toolbar>
      <Toolbar className={classes.toolBar}>
        <IconButton className={classes.icon}>
          <Search />
        </IconButton>
        <IconButton className={classes.icon}>
          <Person />
        </IconButton>
        <IconButton color="inherit" className={classes.icon}>
          <Badge
            badgeContent={2}
            // color="secondary"
            //className={classes.badge}
          >
            <Store />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
