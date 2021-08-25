import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const HistoryIncome = () => {
  const { operations, incomesArray, HandleUpdate, HandleDelete } =
    useContext(OperationContext);

  return (
    <div className="main-container-income">
      <h5 className="App-history__income--title text-success">
        INCOME HISTORY
      </h5>

      <div className="container-income-title">
        <div className="row">
          <div className="col">DATE</div>
          <div className="col">AMOUNT</div>
          <div className="col">CONCEPT</div>
          <div className="col">ACTION</div>
        </div>
      </div>

      {/* Display all income operations */}
      {incomesArray.map((operation) => (
        <div className="App-history__income-item" key={operation.id}>
          <div className="container-operations">
            <div className="row">
              <div className="col">{operation.date}</div>
              <div className="col">${operation.amount}</div>
              <div className="col">{operation.concept}</div>
            </div>

            <div className="d-grid">
              <button
                className="btn-update btn-info btn-outline-light"
                onClick={() => HandleUpdate(operations, operation)}
              >
                Udapte
              </button>
              <button
                className="btn-delete btn-danger btn-outline-light"
                onClick={() => HandleDelete(operations, operation.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryIncome;
