import { useContext, useEffect } from "react";
import OperationContext from "../context/OperationContext";

import HeaderBalanceItem from './HeaderBalanceItem';


const Header = () => {
  const { RetrieveOperations } = useContext(OperationContext);

  // Sum of all the income items amount
  // Sum of all the expense items amount
  // Result of the income minus the expense

  // This will display and update all operations saved in the server
  // Without this, deleted items in the client would still be stored into the server
  useEffect(() => {
    RetrieveOperations();
  }, []);

  return (
    <div className="App-header">
      {/* Current Balance */}
      <HeaderBalanceItem title="Balance actual:" value={""}/>
    </div>
  );
}

export default Header;