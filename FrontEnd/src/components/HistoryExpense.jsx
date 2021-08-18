import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const HistoryExpense = () => {
  const { operations, expensesArray, HandleUpdate, HandleDelete } = useContext(OperationContext);

  return (
  <div className="App-history__expense">
    <h3 className="App-history__expense--title">Exit</h3>
    {/* Display all expense operations */}
    {expensesArray.map(operation => (
      <div className="App-history__expense-item" key={ operation.id }>
        <p className="App-history__expense-item--date">{ operation.date }</p>
        <p className="App-history__expense-item--amount">${ operation.amount }</p>
        <p className="App-history__expense-item--concept">{ operation.concept }</p>
        <button className="btn-update" onClick={() => HandleUpdate(operations, operation)}>Udapte</button>
        <button className="btn-delete" onClick={() => HandleDelete(operations, operation.id)}>Delete</button>
      </div>
    ))}
  </div>
  );
}

export default HistoryExpense;