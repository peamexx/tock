function ItemSub(props) {  
    if(props.sub === 15) {
      return (
        <p className="code">{ props.sub }분 지연</p>
      );
    } else if(props.sub === 20) {
        return (
            <p className="code">{ props.sub }분 지연</p>
        );
    } else if(props.sub === 0) {
        return (
            <p className="code"></p>
        );
    } else if(props.sub === -1) {
        return (
            <p className="code">전일 종가</p>
        );
    }
  }
  
  export default ItemSub;