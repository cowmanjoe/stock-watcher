import React from "react";

import IconButton from "@material-ui/core/IconButton";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
const BackButton = () => {
  let history = useHistory();
  return (
    <IconButton icon={ArrowBack} onClick={() => history.goBack()}></IconButton>
  );
};

export default BackButton;
