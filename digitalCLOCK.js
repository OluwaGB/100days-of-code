import React  from "react";
function Showtime(){
  const styles={
    color:'dodgerblue',
    fontFamily:'verdana'
  }
  
    var label = <h style={styles}> Below is my react digital clock</h> 
    var d=new Date();
    var  el = <h2>The time is⚽
      {d.getHours()
    }:
    {d.getMinutes()}:
    {d.getSeconds()} </h2>;
    return(<>
           <h1>{label}</h1>
      <h2 style={styles}>
    {el}</h2>
    
    </>)
   
}
   setInterval(Showtime,1000);
  
    
    
    //setInterval(Showtime,1000);
    
    export default Showtime;
