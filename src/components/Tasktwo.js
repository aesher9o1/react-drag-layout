import React from 'react'
import './Tasktwo.css'

function Tasktwo() {
    return (
        <div id="main_content" >
            <div id="container">
                <div className="number">
                    30
                </div>
                <br />
                <div >
                    <i className="hours">HOURS</i>
                    <i className="hours of">OF ...</i>
                </div>
            </div>
            <div className="bottom-section">
                <h1>DESIGNING / BUILDING / CODING / HACKING</h1>
                <h2>NETWORKING / FRIENDS / MENTORS / COMPETITIONS</h2>
                <h3>COFFEE / TEA / GREEN TEA / FOOD / SNACKS / SWAGS / T-SHIRTS</h3>
                <h4>SUPER FAST INTERNET / TALKS / DID WE MENTION GREEN TEA? / PRIZES / BRAND NEW APIs</h4>

                <h5>AND / A / WHOLE / LOT / MORE
                    <hr className="underline" />
                </h5>


            </div>
        </div>
    )
}

export default Tasktwo