import '../Style/ProdukCard.css'
const ProdukCard = (props) => {
    const prodImg = require('../assets/'+ props.value.image_name);
    let backGround = '';
    if (props.style == true) {
        backGround = {
            background : "#D67EA7"
        }
    }
    else {
        backGround = {
            background : "#1A5C7B"
        }
    }
    return (  
        <div className="card">
            <div className="card-image">
                
                <img src={prodImg.default} alt="image" style={ backGround }/>
            </div>
            <div className="card-text">
                <h2>{props.value.produk_name}</h2>
                <p>{props.value.description}</p>
            </div>
        </div>
    );
}
 
export default ProdukCard;