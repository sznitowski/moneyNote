import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const InputConcept = () => {
  const { concept, setConcept } = useContext(OperationContext);
  
  return (
  <div className="App-input__group">
    <label htmlFor="concept">Concept</label>
    <input type="text" value={concept} onChange={e => setConcept(e.target.value)} placeholder="Example: Donations"></input>
  </div>
  );
}

export default InputConcept;