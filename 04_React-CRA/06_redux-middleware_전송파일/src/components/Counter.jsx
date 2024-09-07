const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <h3>{number}</h3>
        <button onClick={onIncrease}>＋</button>
        <button onClick={onDecrease}>－</button>
      </div>
    </div>
  );
};
export default Counter;
