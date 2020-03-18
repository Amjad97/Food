export default () => ({
  container: {
    paddingTop: "10%",
    marginBottom: "10%",
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
    padding: "20px 20px 0px 20px",
    marginRight: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "13%",
    height:'100%',
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0.7px 1px 2px 1px #E0E0E0"
    }
  },
  itemImage: {
    height: "70%"
  },
  itemTitle: {
    textTransform: "uppercase",
    fontWeight: 600,
    textAlign: "center",
    padding: 10,
    fontFamily: 'Montserrat',
  }
});
