import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions/countAction";
const Counter = (props) => {
  return (
    <>
      <div>
        {props.count} <br />
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
        <h1>Counter</h1>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};
export default connect(mapStateToProps, { increment, decrement })(Counter);
