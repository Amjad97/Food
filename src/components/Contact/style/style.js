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
    fontSize: '2vw'
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
    marginTop: 20
  },
  account: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#707070",
    borderWidth: 2,
    marginRight: 15,
    width: 40,
    height: 40,
    "&:hover": {
      backgroundColor: "white"
    }
  }
});
