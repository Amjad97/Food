export default () => ({
  container: {
    paddingTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1
  },
  title: {
    textAlign: "center",
    color: "#A80E0E",
    fontSize: 40
  },
  brush: {
    marginTop: "2%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  subTitle: {
    textAlign: "center",
    color: "#382E36",
    fontSize: '2em',
    marginTop: "2%",
    fontFamily: 'Montserrat',
  },
  item: {
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "30%",
    cursor: "pointer",
    boxShadow: "0.7px 1px 2px 1px #E0E0E0",
    borderRadius: "5px"
  },
  itemImage: {
    height: "100%",
    width: "100%"
  },
  itemBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%"
  },
  textContainer: {
    padding: "2em",
  },
  itemTitle: {
    paddingTop: "1em",
    fontSize: "1.5em",
    fontFamily: "Montserrat",
  },
  itemDescription: {
    paddingTop: "1em",
    fontSize: "1vw",
    color: "#686868",
    whiteSpace: "nowrap",
    fontFamily: "Montserrat",
  },
  buttonItem: {
    width: "12em",
    height: "3em",
    fontSize: "1em",
    backgroundColor: "#FFAA00",
    color: "white",
    borderRadius: 45,
    fontFamily: "Montserrat",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#FFAA40"
    },
  },
  button: {
    width: "15em",
    height: "5em",
    fontSize: "1.2em",
    backgroundColor: "#A80E0E",
    color: "white",
    borderRadius: 45,
    textTransform: "capitalize",
    margin: "5em auto",
    "&:hover": {
      backgroundColor: "#A30A0A"
    }
  },
  price: {
    color: "#A80E0E",
    fontSize: "1.5em",
    paddingLeft: "1em",
    fontFamily: "Montserrat",
  }
});
