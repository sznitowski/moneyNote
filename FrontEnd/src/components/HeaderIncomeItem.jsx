const HeaderIncomeItem = ({title, value}) => {
    return (
    <div className="App-header__total-income text-success">
      <div className="App-header__total-income--title">{title}</div>
      <div className="App-header__total-income--value">+{value}</div>
    </div>
    );
  }
  
  export default HeaderIncomeItem;