import { Context } from "../contexts/Context"
import { useContext } from "react"
import loc from "../images/location.svg"
import close from "../images/close.svg"
import stays from "../stays.json"

const FilterMobile = () => {
    const context = useContext(Context)
    const locations = [...new Set(stays.map(stay => stay.city))]


    return (
        <>
            <div className={`filter ${context.filterOpen ? 'active' : ''}`}>
                <div className="filter__heading">
                    <h3 className="filter__heading__title">Edit your search</h3>
                    <img src={close} alt="close" className="filter__heading__close" 
                    onClick={() => context.openFilter()}
                    />
                </div>

                <div className="filter__nav">
                    <div 
                    className={`filter__nav__location ${context.locActive ? 'active' : ''}`}
                    onClick={() => context.activeLoc()}
                    >
                        <span className="filter__nav__location__label">location</span>
                        <p 
                        className={`filter__nav__location__placeholder ${context.location === '' ? '' : 'active'}`}>
                            {context.location === '' ? 'Add location' : `${context.location}, Finland` }
                        </p>
                    </div>
                    <div 
                    className={`filter__nav__guests ${context.ageActive ? 'active' : ''}`}
                    onClick={() => context.activeAge()}
                    >
                        <span className="filter__nav__guests__label">guests</span>
                        <p className="filter__nav__guests__placeholder">{context.total > 0 ? `${context.total} ${context.total > 1 ? 'guests' : 'guest'}` : 'Add guests'}</p>
                    </div>
                    </div>

                    <div className="filter__wrapper">

                        <div 
                        className={`filter__location ${context.locActive ? 'active' : ''}`}

                        >
                            {(locations.map((location, index) => (
                                <div className="filter__location__list" key={index}
                                onClick={() => context.setLocation(location)}
                                >
                                    <img src={loc} alt="location" />
                                    <p>{location}, Finland</p>
                                </div>
                            )))}
                        </div>

                        <div 
                        className={`filter__guests ${context.ageActive ? 'active' : ''}`}
                        >
                            <div className="filter__guests__adults">
                                <h3 className="age">Adults</h3>
                                <p className="desc">Age 13 or above</p>
                                <div className="filter__guests__adults__counts">
                                    <button 
                                    className="increment"
                                    onClick={() => context.setAdultCount(context.adultCount + 1)}
                                    >
                                        +
                                    </button>
                                    <span className="count">{context.adultCount}</span>
                                    <button 
                                    className="decrement"
                                    onClick={() => context.setAdultCount(context.adultCount > 0 ? context.adultCount - 1 : 0)}
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                            <div className="filter__guests__children">
                                <h3 className="age">Children</h3>
                                <p className="desc">Age 2-12</p>
                                <div className="filter__guests__children__counts">
                                    <button 
                                    className="increment"
                                    onClick={() => context.setChildCount(context.childCount + 1)}
                                    >
                                        +
                                    </button>
                                    <span className="count">{context.childCount}</span>
                                    <button 
                                    className="decrement"
                                    onClick={() => context.setChildCount(context.childCount > 0 ? context.childCount - 1 : 0)}
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                <button 
                    className="filter__search"
                    onClick={() => context.submitFilters()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        <span>search</span>
                </button>
            </div>
            <div 
            className={`overlay ${context.filterOpen ? 'active' : ''}`}
            onClick={() => context.openFilter()}
            ></div>
        </>
    )
}

export default FilterMobile