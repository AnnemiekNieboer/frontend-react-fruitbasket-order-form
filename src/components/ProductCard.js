import React from "react";

function ProductCard({productName, productVariable, productFunction}) {
    return (
        <>
            <section className="product-card">
                <h2>{productName}</h2>
                <button
                    className="counter-button"
                    value={productVariable}
                    onClick={() => productFunction(productVariable - 1)}
                    disabled={productVariable === 0}>
                    -
                </button>
                <p>{productVariable}</p>
                <button
                    className="counter-button"
                    value={productVariable}
                    onClick={() => productFunction(productVariable + 1)}>
                    +
                </button>
            </section>
        </>
    )
}

export default ProductCard;