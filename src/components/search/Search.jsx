import style from "./Search.module.css"
import SearchIcon from "../../assets/search-icon.svg"
const Search = () => {
  return (
    <section id={style.searchWrapper}>
      <input type="text" name="" id="" placeholder="search" />
      <span><img src={SearchIcon} alt="" /></span>
    </section>
  )
}

export default Search