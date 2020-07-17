import React from 'react'

export default function ItemsPreview({ state }) {
    console.log(state)
    return (
        <section className="container">
            <div className="row">
                {state.items.map(product => {
                    return (
                        <div className="col-md-4 col-12" key={product.id}>
                            <div className="items-preview-img-container">
                                <img className="card-img-top" src={product.imageUrl} alt="card"/>
                            </div>
                            <div className="text-center card-content">
                                <h3 className="display-5">{product.title}</h3>
                                <h5>${product.price}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
