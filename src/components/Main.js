import { useContext } from "react"
import { Context } from "../contexts/Context"

const Main = () => {
    const context = useContext(Context)
    const len = context.stayComp.length
    return (
        <main>
            <div className="heading">
                <h1>Stays in Finland</h1>
                <div className="p">{`${len >= 12 ? '12+' : len} ${len > 1 ? 'stays' : 'stay'}`}</div>
            </div>
            <section>
                {context.stayComp}
            </section>
        </main>
    )
}

export default Main
