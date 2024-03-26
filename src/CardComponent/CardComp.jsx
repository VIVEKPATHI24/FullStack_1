import image from "./vivek.png"
export const CardComp =()=>{
    return(
        <div className = 'card-container'>
            <div className = 'card'>
             <img  className = 'card-image' src= {image} alt="picture" 
                    style={{ width: '200px', height: '150px' }}></img>
             <h3 className = 'cardtitle' >Vivek card</h3>
             <p className = 'cardtext'>Hello this is vivek</p>
             </div>
        </div>
    )
}
