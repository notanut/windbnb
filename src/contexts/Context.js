import React, { useState } from "react"
import stays from "../stays.json"
import star from "../images/star.svg"

const Context = React.createContext()

const ContextProvider = (props) => {
    const [filterOpen, setFilterOpen] = useState(false)

    const [locActive, setLocActive] = useState(true)

    const [ageActive, setAgeActive] = useState(false)
    const [location, setLocation] = useState('')

    const [adultCount, setAdultCount] = useState(0)
    const [childCount, setChildCount] = useState(0)
    const total = adultCount + childCount

    const [guests, setGuests] = useState(0)
    const [city, setCity] = useState('')

    const openFilter = () => {
        setFilterOpen(!filterOpen)
    }

    const activeLoc = () => {
        setLocActive(true)
        setAgeActive(false)
    }

    const activeAge = () => {
        setAgeActive(true)
        setLocActive(false)
    }

    const submitFilters = () => {
        openFilter()
        setGuests(total)
        setCity(location)
    }


    const stayComp = stays.filter((list) => {
        if (city === '') {
            return list
        }
        else if (list.city === city && list.maxGuests >= guests) {
            return list
        }
    }).map((stay, index) => {
        const {superHost, title, rating, type, beds, photo} = stay

                    return (
                        <article className="stay" key={index}>
                            <img src={photo} alt={title} className="stay__img"/>
                            <div className="stay__types">
                                <div className="stay__types__details">
                                    {superHost ? <span className="stay__types__details__host">super host</span> : ''}
                                    <span className="stay__types__details__desc">{type}{beds ? `.${beds} beds` : ''}</span>
                                </div>
                                <div className="stay__types__rating">
                                    <img src={star} alt="star rate" />
                                    <span className="stay__types__rating__score">{rating}</span>
                                </div>
                            </div>
                            <h2>{title}</h2>
                </article> )
    })


    return (
        <Context.Provider value={{ filterOpen, openFilter, setFilterOpen, locActive, activeLoc, ageActive, activeAge, location, setLocation, adultCount, setAdultCount, childCount, setChildCount, total, stayComp, submitFilters }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }