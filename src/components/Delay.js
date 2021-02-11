function Delay(props) {  
    if(props.delay === 15) {
      return (
        <p className="code">{ props.delay }분 지연</p>
      );
    } else if(props.delay === 20) {
        return (
            <p className="code">{ props.delay }분 지연</p>
        );
    } else if(props.delay === 0) {
        return (
            <p className="code"></p>
        );
    } else if(props.delay === -1) {
        return (
            <p className="code">전일 종가</p>
        );
    }
}
  
export default Delay;