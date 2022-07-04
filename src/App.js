import React from 'react';
import './App.css';
import ProductCard from "./components/ProductCard";

function App() {
    let [counterButtonStrawberry, setButtonStrawberry] = React.useState(0);
    let [counterButtonBanana, setButtonBanana] = React.useState(0);
    let [counterButtonApple, setButtonApple] = React.useState(0);
    let [counterButtonKiwi, setButtonKiwi] = React.useState(0);

    function resetAllProducts() {
        setButtonStrawberry(0);
        setButtonBanana(0);
        setButtonApple(0);
        setButtonKiwi(0);
    }

    return (
        <>
            <section className="order-form__outer-container">
                <h1>Fruitmand bezorgservice</h1>
                <ProductCard
                    productName={"🍓 Aardbeien"}
                    productVariable={counterButtonStrawberry}
                    productFunction={setButtonStrawberry}
                />
                <ProductCard
                    productName={"🍌 Bananen"}
                    productVariable={counterButtonBanana}
                    productFunction={setButtonBanana}
                />
                <ProductCard
                    productName={"🍏 Appels"}
                    productVariable={counterButtonApple}
                    productFunction={setButtonApple}
                />
                <ProductCard
                    productName={"🥝 Kiwi's"}
                    productVariable={counterButtonKiwi}
                    productFunction={setButtonKiwi}
                />
                <button
                    className="reset-button"
                    onClick={resetAllProducts}>
                    Reset
                </button>
                <form>
                    <label htmlFor="firstName">
                        Voornaam
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                        />
                    </label>
                    <label htmlFor="lastName">
                        Achternaam
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                        />
                    </label>
                    <label htmlFor="age">
                        Leeftijd
                        <input
                            name="age"
                            id="age"
                            type="number"
                        />
                    </label>
                    <label htmlFor="postalCode">
                        Postcode
                        <input
                            name="postalCode"
                            id="postalCode"
                            type="text"
                        />
                    </label>
                    <label htmlFor="deliveryFrequency">
                        Bezorgfrequentie
                        <select
                            name="deliveryFrequency"
                            id="deliveryFrequency"
                        >
                            <option value="everyWeek">Iedere week</option>
                            <option value="everyOtherWeek">Om de week</option>
                            <option value="everyMonth">Elke maand</option>

                        </select>
                    </label>
                    <label htmlFor="duringTheDay">
                        <input
                            name="duringTheDay"
                            id="duringTheDay"
                            type="radio"
                        />
                        Overdag
                    </label>
                    <label htmlFor="duringTheEvening">
                        <input
                            name="duringTheEvening"
                            id="duringTheEvening"
                            type="radio"
                        />
                        's Avonds
                    </label>
                    <label>
                        Opmerking
                        <textarea
                            name="message"
                            rows="6"
                            cols="40"
                        >
                </textarea>
                    </label>

                    <label htmlFor="termsAgree">
                        <input
                            type="checkbox"
                            name="termsAgree"
                            id="termsAgree"
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <button
                        type="submit">
                        Verzend
                    </button>
                </form>
            </section>

        </>
    );
}

export default App;
