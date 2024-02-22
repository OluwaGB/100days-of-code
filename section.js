import React from 'react'

/*function Greeting(){
    return<div className='div'><br/>
<br/>
        <nav><span><a href="#">Home</a>
        <a href="#">Market</a>
        <a href="#">Platforms</a>
        <a href="#">Tools</a>
        <a href="#">Company</a>
        <a href="#">Partners</a>
        <a href="#">Trading</a></span>
        <button>Register</button>
        <button>Sign In</button>
        </nav>
        <br/>
        <br/>
        <br/>
        </div>
        }*/
     function Section(){
        const design = {
            display:'flex',
            color:'black',
            fontFamily:'Arial',
            //outline:'1px solid blue'
            justifyContent:'space-between',
            padding:'auto'
        }
        return <div className="column" style={design} >
            <div className='div1' style={{outline:'1px solid dodgerblue',
        margin:'8px',backgroundColor:'whitesmoke'}}>
                <img src=""></img>
                <h1>Electrical inspection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='div1' style={{outline:'1px solid blue',padding:'8px',
        margin:'8px',backgroundColor:'dodgerblue',color:'white'}}>
                <img src=""></img>
                <h1>Electrical Wiring</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='div1' style={{outline:'1px solid dodgerblue',
        margin:'8px',backgroundColor:'whitesmoke'}}>
                <img src=""></img>
                <h1>Material supply</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
     }   

/*function Nav(){
    return<h2>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
    </h2>
}*/

//export default Greeting//when exporting component as default,you can import it with any name
export default Section
