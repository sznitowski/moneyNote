  
import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const HistoryIncome = () => {
  const { operations, incomesArray, HandleUpdate, HandleDelete } = useContext(OperationContext);

  return (
  <div className="App-history__income">
    <h5 className="App-history__income--title text-success">Income history</h5>

    <table className="table table-success table-sm">  
        <tbody>
        <tr> 
        <th scope="col">Date</th>
        <th scope="col">Amount</th>
        <th scope="col">Type</th>
        </tr>
        </tbody>
        </table>

    {/* Display all income operations */}
    {incomesArray.map(operation => (

      

      <div className="App-history__income-item" key={ operation.id }>


        <table className="table table-success table-sm">
          
        <tbody>
         <tr> 
          

        <td className="App-history__income-item--date">{ operation.date }</td>
        <td className="App-history__income-item--amount">${ operation.amount }</td>
        <td className="App-history__income-item--concept">{ operation.concept }</td>

        </tr>
        </tbody>
        </table>
        <div className="container gap-2 d-md-block">
        <button className="btn-update btn-light btn-light btn-outline-info w-50" onClick={() => HandleUpdate(operations, operation)}>Udapte</button>
        <button className="btn-delete btn-light btn-outline-danger w-50" onClick={() => HandleDelete(operations, operation.id)}>Delete</button>
      </div>
      </div>
    ))}
  </div>
  );
}

export default HistoryIncome;