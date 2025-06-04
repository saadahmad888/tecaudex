import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


const SearchBar = () => {
    return (
        <div>
            <div className="searchbarWrapper">
                <IoSearchOutline />
                <input type="text" name="" placeholder='Search' id="" />
            </div>
        </div>
    )
}

export default SearchBar