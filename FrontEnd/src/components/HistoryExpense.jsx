import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const HistoryExpense = () => {
  const { operations, expensesArray, HandleUpdate, HandleDelete } = useContext(OperationContext);

  return (
  <div className="App-history__expense">
    <h5 className="App-history__expense--title">Exit</h5>
    {/* Display all expense operations */}
    {expensesArray.map(operation => (
      <div className="App-history__expense-item" key={ operation.id }>
        <p className="App-history__expense-item--date">{ operation.date }</p>
        <p className="App-history__expense-item--amount">${ operation.amount }</p>
        <p className="App-history__expense-item--concept">{ operation.concept }</p>
        <button className="btn-update btn-info w-50" onClick={() => HandleUpdate(operations, operation)}>Udapte</button>
        <button className="btn-delete btn-danger w-50" onClick={() => HandleDelete(operations, operation.id)}>Delete</button>
      </div>
    ))}
  </div>
  );
}

export default HistoryExpense;