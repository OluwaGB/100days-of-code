import React from 'react'

const Car = (props)=>{
    return<li>
        I am a  {props.brand}
    </li>
}

function Garage() {
    const cars = ['Ford','BMW','Audi']
    return(<>
    <h1>Who lives in my garage?</h1>
        <ul>
         <b>  {cars.map((car)=> <Car brand = {car}/>)}</b>
        </ul>
        </>
    )
}
