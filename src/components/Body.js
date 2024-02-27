import RestoCard from "./Restocard";
import { useEffect, useState } from "react";
import { ShimmerCard } from "./Shimmer";
import { TodoList } from "./TodoList";

/* body component */
const Body = () =>{

    let [restaurants, setRestaurants] =  useState([]);
    let [filteredRes , setfilteredRes] = useState([]);
    let [searchRes , setSearchRes] =  useState("");
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const data = await response.json();
        var resData = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(resData);
        setfilteredRes(resData);
    }

    return filteredRes === undefined || filteredRes.length === 0 ? (<div className="body page-width"><ShimmerCard /></div>) : (
        <div className="body page-width">
            <div className="search-container">
                <input type="text" placeholder="search" value={searchRes} onChange={
                    (e)=>{
                       setSearchRes(e.target.value);
                       if(e.target.value.length == 0){
                        setfilteredRes(restaurants);
                       }
                    }
                }></input>
                <button  className="search-btn" onClick={()=>{
                    let searchResult = restaurants.filter((res)=> res.info.name.toLowerCase().includes(searchRes.toLowerCase()) || res.info.cuisines.join(",").toLowerCase().includes(searchRes.toLowerCase()));
                    if(searchResult.length === 0){
                        setfilteredRes(restaurants);
                    } else {
                        setfilteredRes(searchResult);
                    }
                }}>Search</button>
            </div>
            <div className="filter-container">
                <button id="top-rated-btn" onClick={()=>{
                    const result = restaurants.filter((res) => res.info.avgRating >4);
                    setfilteredRes(result);
                    console.log(result)
                }}>Top Rated</button>
                <button id="top-rated-btn" onClick={()=>{
                    const result = restaurants.filter((res) => res.info.sla.deliveryTime <= 20);
                    setfilteredRes(result);
                    console.log(result)
                }}>Fast delivery</button>
                <button id="top-rated-btn" onClick={()=>{
                    setfilteredRes(restaurants);
                }}>Reset</button>
            </div>
            <div className="resto-card-container">
            {filteredRes.map((resto)=> <RestoCard key={resto.info.id} restoData = {resto} />)}  
            </div>
            <TodoList />
        </div>   
    )
}


export default Body;
