import { useDispatch, useSelector } from "react-redux";

const Setter = ({ name, increment, decrement }) => {
  const session = name === 'session';
  const select = useSelector(state => session ? state.display.minsSession : state.display.minsBreak);
  const dispatch = useDispatch();

  return (
    <div className="Setter">
      <h4 id={`${name}-label`}>{`${name.replace(/^\w/, (c) => c.toUpperCase())} Length`}</h4>
      <div class="item line-arrows">
        <i class="pointer fas fa-arrow-up" id={`${name}-increment`} onClick={() => dispatch(increment())}></i>
        <h4 class="item" id={`${name}-length`}>{select}</h4>
        <i class="pointer item fas fa-arrow-down" id={`${name}-decrement`} onClick={() => dispatch(decrement())}></i>
      </div>
    </div>
  )
}

export default Setter;
