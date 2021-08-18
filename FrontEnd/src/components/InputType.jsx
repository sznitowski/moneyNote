import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const InputType = () => {
  const { type, setType } = useContext(OperationContext);

  return (
  <div className="App-input__group">
    <label htmlFor="operation">Tipe</label>
    <select name="operation" id="operation" value={type} onChange={e => setType(e.target.value)}>
      <option value="select">Select</option>
      <option value="income">Entry</option>
      <option value="expense">Exit</option>
    </select>
  </div>
  );
}

export default InputType;