import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { accountActions } from "./state/index";
import { accountReducer } from "./state/reducers/account";

function App() {
  const account = useSelector((state) => {
    return state.account;
  });

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    accountActions,
    dispatch
  );

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1)}>Deposit</button>
      <button onClick={() => withdrawMoney(1)}>Withdraw</button>
    </div>
  );
}

export default App;
