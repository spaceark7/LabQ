import '../Style/NewsCard.css'
import t from "../assets/news-1.png"
const NewsCard = () => {
    return ( 
        <div className="newsCard">
            <div className="newsImg">
                <img src={t} alt=""/>
            </div>
            <div className="newsText">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora, iste perspiciatis quos deserunt accusamus laborum, voluptas, non necessitatibus animi soluta praesentium eligendi quod quisquam voluptate at similique aliquam illo.</p>
            </div>
        </div>
     );
}
 
export default NewsCard;