
function Card(props){
    return  <div style={ {border: "2px solid black" , padding:"5px" , textAlign:"center" , backgroundColor:"darkgreen" , color:"white"}}>
        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT41K3I3EU7HYPyCfJsr_Z0iuBCjYyxxQcSpShlZmBuPdBJ9MhJ0qUaJhnOVCxvNf6UgN_V3LiXcat08x_wIopmZSDus25vpb-WVe3P1zR-zwt42ZBYc014&usqp=CAE" height="200px" width="200px"/>
            <div>
             <h1>{props.cloth}</h1>
             <h2>{props.discount}</h2>
             <h2>{props.price} Rs.</h2>
             <h1>Shop Now</h1>
            </div> 
    </div>
}

export default Card;