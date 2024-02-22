import React from 'react'
const Cloth = (wears) =>{
    return<h2> {wears.brand}</h2>;
}

function Wardrobe(){
    const Clothes = [
       { id: 1, brand:'Bottega venneta'},
       {id:2, brand:'Louis Vuiton'},
       {id:3, brand:'Balenciaga'}]
 return(<>
    <h2>My wardrobe collections</h2>
    <ol>
        {Clothes.map((cloth)=><Cloth key={cloth.id} brand={cloth.brand}/>)}
    </ol>
    </>
 )   
}
export default Wardrobe
