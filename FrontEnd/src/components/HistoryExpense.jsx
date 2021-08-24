import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const HistoryExpense = () => {
  const { operations, expensesArray, HandleUpdate, HandleDelete } = useContext(OperationContext);

  return (
  <div className="App-history__expense">
    <h5 className="App-history__expense--title text-danger">Expenses history</h5>

    <table className="table table-danger table-bordered table-sm">  
        <tbody>
        <tr> 
        <th scope="col">Date</th>
        <th scope="col">Amount</th>
        <th scope="col">Type</th>
        </tr>
        </tbody>
        </table>

    {/* Display all expense operations */}
    {expensesArray.map(operation => (
      <div className="App-history__expense-item" key={ operation.id }>

        <table className="table table-danger table-sm">  
        <tbody>
        <tr> 
        <td className="App-history__expense-item--date">{ operation.date }</td>
        <td className="App-history__expense-item--amount">${ operation.amount }</td>
        <td className="App-history__expense-item--concept">{ operation.concept }</td>
        

        </tr>
        </tbody>
        </table>

        <div className="container gap-2 d-md-block">
        <button className="btn-update btn-light btn-outline-info w-50" onClick={() => HandleUpdate(operations, operation)}>Udapte</button>
        <button className="btn-delete btn-light btn-outline-danger w-50" onClick={() => HandleDelete(operations, operation.id)}>Delete</button>
      </div>
      </div>
    ))}
  </div>
  );
}

export default HistoryExpense;