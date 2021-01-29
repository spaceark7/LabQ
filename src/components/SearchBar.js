import '../Style/SearchBar.css'
import {FaSearch} from "react-icons/all"
const SearchBar = () => {
    return ( 
        <form action="search">
                        <input type="search" name="pencarian" id="pencarian"/>
                        <label htmlFor="searchSubmit"> <FaSearch/></label>
                        <input id="searchSubmit" type="submit" value="Go" style={{display: "none"}}/>
                    </form>
     );
}
 
export default SearchBar;