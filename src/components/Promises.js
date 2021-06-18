import Button from "./UI/Button/Button";

const Promises = () => {
  return (
    <div>
      <Button title="Success Promise" />
      <Button title="Error Promise" />
      <Button title="Catch Promise" />
      <Button title="Finally Promise" />
      <Button title="Basic Callback" />
      <Button title="Callback in Callback" />
      <Button title="Error in Callback" />
      <Button title="Promise Chaining" />
      <Button title="Returning Promises" />
      <Button title="Error Handle Promise Chaining" />
      <Button title="Then After Catch Promise Call" />
      <Button title="Error Rethrown Promise Call" />
      <Button title="Unhandled Rejections Promise" />
      <Button title="Basic Promise All" />
      <Button title="Promise All Fetch" />
      <Button title="Complex Promise All Fetch" />
      <Button title="Promise All Rejection" />
      <Button title="Promise All Settled" />
      <Button title="Promise Race" />
      <Button title="Promise Any" />
      <Button title="PromiseAnyAggregateError" />
      <Button title="Basic Async" />
    </div>
  );
};

export default Promises;
