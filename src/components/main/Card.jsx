const Card = (data) => {
 console.log("ne geliyor");
 const {id,title,image,desc} = data;
 return(
  <div className="cards">
   <div className="title">
    <h1>{title}</h1>
   </div>
   <img src={image} alt="" />
   <div className="car-over">
    <p>
     {desc}
    </p>
   </div>
  </div>
 )
}
export default Card;

// {
//  const {id,title,image,desc} = item;
//  return(
//    <div className="cards">
//      <h1>{title}</h1>
//      <img src={image} alt="" />
//    </div>
//  )
// }