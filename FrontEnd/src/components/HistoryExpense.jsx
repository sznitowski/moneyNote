import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const HistoryExpense = () => {
  const { operations, expensesArray, HandleUpdate, HandleDelete } =
    useContext(OperationContext);

  return (
    <div className="main-container-expense">
      <h5 className="App-history__expense--title text-danger">
        EXPENSES HISTORY
      </h5>

      <div className="container-expense-title">
        <div className="row row-cols-4">
          <div className="col">DATE</div>
          <div className="col">AMOUNT</div>
          <div className="col">CONCEPT</div>
          <div className="col">ACTION</div>
        </div>
      </div>

      {/* Display all expense operations */}
      {expensesArray.map((operation) => (
        <div className="App-history__expense-item" key={operation.id}>
          <div className="container-operations">
            <div className="row row-cols-4">
              <div className="col">{operation.date}</div>
              <div className="col">${operation.amount}</div>
              <div className="col">{operation.concept}</div>

              <div className="d-grid">
                <button
                  className="btn-update btn-info btn-outline-dark"
                  onClick={() => HandleUpdate(operations, operation)}
                >
                  Udapte
                </button>
                <button
                  className="btn-delete btn-danger btn-outline-dark"
                  onClick={() => HandleDelete(operations, operation.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryExpense;
