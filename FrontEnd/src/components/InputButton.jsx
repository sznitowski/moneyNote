  
import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const InputButton = () => {
  const { HandleSubmit } = useContext(OperationContext);

  return (
  <div className="App-input__group">
    <button className="btn-add btn-success btn-outline-light w-100 mt-5" onClick={ HandleSubmit }>Add</button>
  </div>
  );
}

export default InputButton;