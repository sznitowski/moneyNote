import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const InputDate = () => {
  const { date, setDate } = useContext(OperationContext);

  return (
    <div className="App-input__group">
      <label htmlFor="date">Date</label>
      <input
        className="form-control"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
    </div>
  );
};

export default InputDate;
