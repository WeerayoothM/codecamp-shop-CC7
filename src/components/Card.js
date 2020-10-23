import React from 'react'
import Counter from './Counter'

function Card() {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 p-2">
                <div className="card" style={{ width: "18rem" }}>
                    <img
                        src="https://miro.medium.com/max/2503/1*6sDRYpNGjN_GHy3ueIRGCA.png"
                        className="card-img-top"
                        alt="shopping card"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                        <Counter />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
