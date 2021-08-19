  
import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const HistoryIncome = () => {
  const { operations, incomesArray, HandleUpdate, HandleDelete } = useContext(OperationContext);

  return (
  <div className="App-history__income">
    <h5 className="App-history__income--title">Entry</h5>
    {/* Display all income operations */}
    {incomesArray.map(operation => (
      <div className="App-history__income-item" key={ operation.id }>
        <p className="App-history__income-item--date">{ operation.date }</p>
        <p className="App-history__income-item--amount">${ operation.amount }</p>
        <p className="App-history__income-item--concept">{ operation.concept }</p>
        <button className="btn-update btn-info w-50" onClick={() => HandleUpdate(operations, operation)}>Udapte</button>
        <button className="btn-delete btn-danger w-50" onClick={() => HandleDelete(operations, operation.id)}>Delete</button>
      </div>
    ))}
  </div>
  );
}

export default HistoryIncome;