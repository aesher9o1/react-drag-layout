import React from 'react'
import './Tasktwo.css'

function Tasktwo() {
    return (
        <div className="card tasktwo" >
            <section style={{ position: "relative" }}>
                <section style={{ margin: "0 auto 0 auto", position: 'absolute' }}>
                    <p>
                        <i className="num-hours">30</i>
                        <br />
                        <i className="hours">
                            HOURS<br />
                            <i className="of">OF...</i>
                        </i>

                    </p>
                </section>
            </section>
        </div>
    )
}

export default Tasktwo