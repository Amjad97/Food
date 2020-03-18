const StyleApp = () => ({
  container: {
    position: "relative",
    width: "100%",
    height: "100vh"
  },
  navbar: {
    backgroundColor: "transparent",
    width: "50%",
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    flexDirection: " row"
  },
  navBarItem: {
    margin: "0 10px",
    position: "relative",
    width: "20%",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer"
  },
  navBarText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    fontFamily: "Montserrat"
  },
  navbarSelectedItem: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "25%"
  },
  notSelected: {
    display: "none"
  },
  mainToolBar: {
    background: "rgba(40, 24, 35, 0.61)",
    width: "62.5%"
  },
  toolBar: {
    backgroundColor: "#A80E0E",
    width: "37.5%"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  burgerImage: {
    position: "absolute",
    top: "5%",
    left: "10%"
  },
  bar: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0
  },
  text: {
    marginLeft: "0.7em",
    color: "white",
    fontSize: "4vw"
  },
  oferContainer: {
    width: "50%",
    height: "30%"
  },
  button: {
    marginTop: "3em",
    marginLeft: "5em",
    width: "10em",
    height: "3em",
    fontSize: "1em",
    backgroundColor: "#FFAA00",
    color: "#A80E0E",
    borderRadius: 45,
    textTransform: "lowercase",
    fontFamily: "Montserrat",
    "&:hover": {
      backgroundColor: "#FFAA40"
    }
  },
  ofer: {
    position: "relative",
    width: "fit-content",
    height: "100%"
  },
  oferBg: {
    width: "40vw"
  },
  oferTitle: {
    position: "absolute",
    top: "30%",
    left: "9%",
    color: "white",
    fontSize: "2vw",
    lineHeight: "1em",
    fontFamily: "Montserrat",
    width:'65%'
  },
  icon: {
    padding: "10px 20px",
    width: "33.333%"
  },
  badge: {
    backgroundColor: "#F9B826",
    color: "#A80E0E"
  },
  scroll: {
    position: "absolute",
    bottom: "5%",
    left: "50%"
  }
});

export default StyleApp;
