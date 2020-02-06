import React from 'react'
import './Tasktwo.css'

function Tasktwo() {
    const h1Text = "DESIGNING / BUILDING / CODING / HACKING"
    const h2Text = "NETWORKING / FRIENDS / MENTORS / COMPETITIONS"
    const h3Text = "COFFEE / TEA / GREEN TEA / FOOD / SNACKS / SWAGS / T-SHIRTS"
    const h4Text = "SUPER FAST INTERNET / TALKS / DID WE MENTION GREEN TEA? / PRIZES / BRAND NEW APIs"
    const h5Text = "AND / A / WHOLE / LOT / MORE"

    return (
        <div id="main_content" >
            <div className="square-dark-pink" />
            <div className="small-blue" />
            <div className="circle" />
            <div className="small-pink-square" />
            <div className="medium-pink-square" />
            <div className="mini-blue-square" />

            <div id="container">
                <div className="number">30</div>
                <div>
                    <i className="hours">HOURS</i>
                    <i className="hours of">OF ...</i>
                </div>
            </div>

            <div className="bottom-section">
                <h1>{h1Text}</h1>
                <h2>{h2Text}</h2>
                <h3>{h3Text}</h3>
                <h4>{h4Text}</h4>
                <h5>{h5Text}<hr className="underline" /></h5>
            </div>

        </div>
    )
}

export default Tasktwo