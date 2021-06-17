import classes from "./Button.module.css";
import BasicPromise from "../../../methods/BasicPromise";
import ErrorPromise from "../../../methods/ErrorPromise";
import CatchPromise from "../../../methods/CatchPromise";
import FinallyPromise from "../../../methods/FinallyPromise";
import BasicCallback from "../../../methods/BasicCallback";
import CallbackInCallback from "../../../methods/CallbackInCallback";
import ErrorCallback from "../../../methods/ErrorCallback";

const Button = (props) => {
  const onClickhandler = () => {
    if (props.title === "Success Promise") {
      BasicPromise();
    } else if(props.title === "Error Promise") {
        ErrorPromise();
    } else if(props.title === "Catch Promise") {
        CatchPromise();
    } else if(props.title === "Finally Promise") {
        FinallyPromise();
    } else if(props.title === "Basic Callback") {
        BasicCallback();
    } else if(props.title === "Callback in Callback") {
        CallbackInCallback();
    } else if(props.title === "Error in Callback") {
        ErrorCallback();
    }
  };
  return (
    <button onClick={onClickhandler} className={classes.button}>
      {props.title}
    </button>
  );
};

export default Button;
