export default () => ({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
  },
  subContainer: {
    padding: "5% 10%",
    display: "flex",
    flexDirection: "row"
  },
  payments: {
    display: "flow-root",
    flexDirection: "column",
    width: "40%"
  },
  paymentMethods: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    width: "50%"
  },
  firstLink: {
    marginTop: "10%",
    color: "#686868",
    cursor: "pointer",
    fontFamily: "Montserrat"
  },
  link: {
    marginTop: "15%",
    color: "#686868",
    cursor: "pointer",
    fontFamily: "Montserrat"
  },
  image: {
    width: "25%",
    marginRight: "5%",
    marginBottom: "5%"
  },
  copyRight: {
    color: "#686868",
    fontSize: 18,
    fontFamily: "Montserrat",
    textAlign: "center",
    marginBottom:'2%'
  },
  bar:{
    padding:'0 10%',
    width:'96.5%',
    marginBottom:'2%'
  }
});
