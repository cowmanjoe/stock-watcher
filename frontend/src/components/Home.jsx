import React from "react";

import { createStyles, withStyles } from "@material-ui/core/styles";
import ColorTheme from "../styles/colorTheme";
import { Container, Typography } from "@material-ui/core";
import Logo from "../components/save-on-foods-winnipeg.jpg"

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.background} style={{topMargin: 20, leftMargin:50, rightMargin: 50}}>
        <Typography className={classes.text}>Stock Watch</Typography>
        <Typography className={classes.body} style={{fontSize:20}}>
          Stock Watch is a website that allows you to find out the current stock
          levels of store items that you need now!  By searching by item or seller, one
          can deduce what items are available, which stores currently are carrying them
          and the current in-store stock levels.  Additionally, one can filter search
          entries by distance as well as alphabetically, to ensure a store that you prefer,
          or a store close by, carries the item before you make the trek to buy it.
        </Typography>
        <img src={Logo}>
          
        </img>
      </Container>
    );
  }
}

const materialUiStyles = createStyles({
  background: {
    backgroundImage: "../styles/assets/homeBG.png",
    height: "75vh",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  text: {
    fontSize: "70px",
    fontFamily: "Roboto",
  },
  body: {
    textAlign: "justify",
    marginBottom: "20px",
  },
});

export default withStyles(materialUiStyles)(Home);
