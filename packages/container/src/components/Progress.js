import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    bar: {
      width: "100%",
    },
  };
});

const Progress = () => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};

export default Progress;
