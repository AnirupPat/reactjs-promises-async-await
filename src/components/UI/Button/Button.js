import classes from "./Button.module.css";
import BasicPromise from "../../../methods/BasicPromise";
import ErrorPromise from "../../../methods/ErrorPromise";
import CatchPromise from "../../../methods/CatchPromise";
import FinallyPromise from "../../../methods/FinallyPromise";
import BasicCallback from "../../../methods/BasicCallback";
import CallbackInCallback from "../../../methods/CallbackInCallback";
import ErrorCallback from "../../../methods/ErrorCallback";
import PromiseChaining from "../../../methods/PromiseChaining";
import ReturningPromises from "../../../methods/ReturningPromises";
import ErrorHandlePromiseChaining from "../../../methods/ErrorHandlePromiseChaining";
import ThenAfterCatchPromiseCall from "../../../methods/ThenAfterCatchPromiseCall";
import ErrorRethrownPromiseCall from "../../../methods/ErrorRethrownPromiseCall";


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
    } else if(props.title === "Promise Chaining") {
        PromiseChaining();
    } else if(props.title === "Returning Promises") {
        ReturningPromises();
    } else if(props.title === "Error Handle Promise Chaining") {
        ErrorHandlePromiseChaining();
    } else if(props.title === "Then After Catch Promise Call") {
        ThenAfterCatchPromiseCall();
    } else if(props.title === "Error Rethrown Promise Call") {
        ErrorRethrownPromiseCall();
    }
  };
  return (
    <button onClick={onClickhandler} className={classes.button}>
      {props.title}
    </button>
  );
};

export default Button;
