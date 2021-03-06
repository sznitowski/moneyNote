const HeaderBalanceItem = ({title, value}) => {
    return (
    <div className="App-header__current-balance text-primary">
      <div className="App-header__current-balance--title">{title}</div>
      <div className="App-header__current-balance--value">{value}</div>
    </div>
    );
  }
  
  export default HeaderBalanceItem;