import { useEffect,useRef,useState } from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import Cart from './Component/Cart/Cart';

function App() {
  //all sates
  const[Day, setDay]= useState('00');
  const[Hours, setHours]= useState('00');
  const[Minutes, setMinutes]= useState('00');
  const[Seconds, setSeconds]= useState('00');

  //reference sates

let interval= useRef();

  const startTime= ()=>{
    //countdown time putting here
  const countDownTime= new Date("jan 12, 2021 18:20:25").getTime();

  

  //start interval function
  interval=setInterval(()=>{
    const currentTime= new Date().getTime();
    const distance= countDownTime - currentTime;
    
    const cDays= Math.floor(distance/(1000*60*60*24));
    const cHours= Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const cMinutes= Math.floor((distance%(1000*60*60))/(1000*60));
    const cSeconds= Math.floor((distance%(1000*60))/(1000));

    if(distance<0){
      //clear interval
      clearInterval(interval.current);
    }
    else{
      //update all sates
      setDay(cDays);
      setHours(cHours);
      setMinutes(cMinutes);
      setSeconds(cSeconds);
    }

  },1000)
}

useEffect(()=>{
  startTime()
  return ()=>{
    clearInterval(interval.current);
  }
})


  return (
    <section className="container p-5" >
      
        <div className="row">
          <div className="col-6 col-lg-3">
            <Card>
              <Card.Header className="text-center text-white bg-danger">Days</Card.Header>
              <Card.Body className="text-center text-white bg-danger">{Day}</Card.Body>
            </Card>
          </div>
          <div className="col-6 col-lg-3">
            <Card>
              <Card.Header className="text-center text-white bg-warning">Hours</Card.Header>
              <Card.Body className="text-center text-white bg-warning">{Hours}</Card.Body>
            </Card>
          </div>
          <div className="col-6 col-lg-3">
            <Card>
              <Card.Header className="text-center text-white bg-success">Minutes</Card.Header>
              <Card.Body className="text-center text-white bg-success">{Minutes}</Card.Body>
            </Card>
          </div>
          <div className="col-6 col-lg-3">
            <Card>
              <Card.Header className="text-center text-white bg-primary">Seconds</Card.Header>
              <Card.Body className="text-center text-white bg-primary">{Seconds}</Card.Body>
            </Card>
          </div>
        </div>
    </section>
  );
}

export default App;
