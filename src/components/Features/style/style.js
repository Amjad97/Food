export default () => ({
  container: {
    backgroundColor: "#FFAA00",
    width: "100%",
    height: "80vh",
    position: "relative"
  },
  bar: {
    marginTop: "-1.4%",
    width: "100%"
  },
  collection: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    margin: "0 10%",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "25%",
    height: "50%",
    borderRadius: "10px",
    margin: "2%"
  },
  title: {
    textAlign: "center",
    height: "16%",
    fontSize: '1.3vw',
    marginTop: 15,
    fontFamily: "Montserrat",
  },
  desc: {
    textAlign: "center",
    color: "#686868",
    marginTop: 15,
    lineHeight: 1.5,
    width: "70%",
    fontFamily: "Montserrat",
  }
});
