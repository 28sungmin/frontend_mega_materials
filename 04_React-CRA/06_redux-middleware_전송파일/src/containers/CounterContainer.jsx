import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from "../modules/counter";

// const CounterContainer = ({ number, increase, decrease }) => {
const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  console.log(number);
  return (
    <>
      {/* <Counter number={number} onIncrease={increase} onDecrease={decrease} /> */}
      <Counter
        number={number}
        onIncrease={increaseAsync}
        onDecrease={decreaseAsync}
      />
    </>
  );
};
export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase,
    decrease,
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
