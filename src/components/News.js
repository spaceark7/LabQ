import React from "react";
import '../Style/News.css'
import Carousel from 'react-elastic-carousel'
import t from '../assets/home.svg'
import NewsCard from "./NewsCard";

const News = () => {

    
 
    return ( 
        <div className="news-container">
            <h2>Informasi Kesehatan</h2>
            <div className="news-slider">
                <Carousel itemsToShow={3} showArrows={false}>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </Carousel>
            </div>
        </div>
        );
}
 
export default News;