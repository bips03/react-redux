import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { add, sub } from './actions/counter'
import toggleAuth from './actions/toggleAuth';


function App() {
  const counter = useSelector(state => state.counter)
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const increase = () => dispatch(add())
  const decrease = () => dispatch(sub())
  const toggle = () => dispatch(toggleAuth())

  return (
    <div className="App">
      {auth && <h1>{counter}</h1> }
      <button onClick = {increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={toggle}>Toggle Auth</button>
    </div>
  );
}

export default App;
