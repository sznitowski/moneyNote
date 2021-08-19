  
import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const InputButton = () => {
  const { HandleSubmit } = useContext(OperationContext);

  return (
  <div className="App-input__group">
    <button className="btn-add btn-success w-100 mt-3" onClick={ HandleSubmit }>Add</button>
  </div>
  );
}

export default InputButton;