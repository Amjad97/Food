export default () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "50%",
    marginLeft: "25%"
  },
  phone: {
    color: "white",
    paddingTop: 30,
    fontSize: '2.5vw'
  },
  time: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 30
  },
  apointment: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20
  },
  location: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 30
  },
  street: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20
  },
  buttonItem: {
    width: "10em",
    height: "3em",
    fontSize: "1em",
    backgroundColor: "#FFAA00",
    color: "white",
    borderRadius: 45,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#FFAA40"
    }
  },
  accounts: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50
  },
  account: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#707070",
    borderWidth: 2,
    marginRight: 15,
    width: 60,
    height: 60,
    "&:hover": {
      backgroundColor: "white"
    }
  }
});
