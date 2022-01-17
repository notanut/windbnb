import { Context } from "../contexts/Context"
import { useContext, useState, useEffect } from "react"
import logo from "../images/logo.svg"
import search from "../images/search.svg"
import Filter from "./Filter"
import FilterMobile from "./FilterMobile"

const Header = () => {
    const context = useContext(Context)
        const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', setWidth(window.innerWidth))
    })

    return (
        <header 
        className="header">
            <div className="header__logo">
                <img src={logo} alt="windbnb logo" />
            </div>
            <div className="header__filter" onClick={() => context.openFilter()}>
                <p className="header__filter__location">{context.location === '' ? 'Helsinki' : context.location}, Finland</p>
                <p className="header__filter__guests">{context.total > 0 ? `${context.total} ${context.total > 1 ? 'guests' : 'guest'}` : 'Add guests'}</p>
                <img src={search} alt="search" className="header__filter__search"/>
            </div>
            {width >= 475 ? <Filter /> : <FilterMobile />}
        </header>
    )
}

export default Header
