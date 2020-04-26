import React from "react";

import { createStyles, withStyles } from "@material-ui/core/styles";
//import ColorTheme from "../styles/colorTheme";
import { Container, Typography } from "@material-ui/core";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.background}>
        <Typography className={classes.text}>Stock Watch</Typography>
        <Typography className={classes.body}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Typography>
        <Typography className={classes.body}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Typography>
        <Typography className={classes.body}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Typography>
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
