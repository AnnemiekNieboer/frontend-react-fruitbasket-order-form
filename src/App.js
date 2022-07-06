import React from 'react';
import './App.css';
import ProductCard from "./components/ProductCard";
import LabelInputForm from "./components/LabelInputForm";

function App() {
    let [counterButtonStrawberry, setButtonStrawberry] = React.useState(0);
    let [counterButtonBanana, setButtonBanana] = React.useState(0);
    let [counterButtonApple, setButtonApple] = React.useState(0);
    let [counterButtonKiwi, setButtonKiwi] = React.useState(0);
    const [firstNameValue, setFirstNamevalue] = React.useState("");
    const [lastNameValue, setLastNameValue] = React.useState("");
    const [ageValue, setAgeValue] = React.useState(0);
    const [postalCodeValue, setPostalCodeValue] = React.useState("")
    const [deliveryFrequencyValue, setDeliveryFrequencyValue] = React.useState("everyWeek");
    const [deliveryTime, toggleDeliveryTime] = React.useState("not selected");
    const [commentValue, setCommentValue] = React.useState("");
    const [agreementValue, toggleAgreementValue] = React.useState(false);

    function resetAllProducts() {
        setButtonStrawberry(0);
        setButtonBanana(0);
        setButtonApple(0);
        setButtonKiwi(0);
    }

    function submitForm(e) {
        e.preventDefault();
        console.log(`Aardbeien: ${counterButtonStrawberry}`);
        console.log(`Banane: ${counterButtonBanana}`);
        console.log(`Appels: ${counterButtonApple}`);
        console.log(`Kiwi's: ${counterButtonKiwi}`);
        console.log(`Voornaam: ${firstNameValue}`);
        console.log(`Achternaam: ${lastNameValue}`);
        console.log(`Leeftijd: ${ageValue}`);
        console.log(`Postcode: ${postalCodeValue}`);
        console.log(`Bezorgfrequentie: ${deliveryFrequencyValue}`);
        console.log(`Levertijd: ${deliveryTime}`);
        console.log(`Opmerkingen: ${commentValue}`);
        console.log(`Akkoord met de voorwaarden: ${agreementValue}`);
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

                <form onSubmit={submitForm}>
                    <LabelInputForm
                        labelName="Voornaam"
                        name="firstName"
                        type="text"
                        value={firstNameValue}
                        inputFunction={setFirstNamevalue}
                    />
                    <label htmlFor="firstName">
                        Voornaam
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstNameValue}
                            onChange={(e) => setFirstNamevalue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="lastName">
                        Achternaam
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={lastNameValue}
                            onChange={(e) => setLastNameValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="age">
                        Leeftijd
                        <input
                            name="age"
                            id="age"
                            type="number"
                            min="0"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="postalCode">
                        Postcode
                        <input
                            name="postalCode"
                            id="postalCode"
                            type="text"
                            value={postalCodeValue}
                            onChange={(e) => setPostalCodeValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="deliveryFrequency">
                        Bezorgfrequentie
                        <select
                            name="deliveryFrequency"
                            id="deliveryFrequency"
                            value={deliveryFrequencyValue}
                            onChange={(e) => setDeliveryFrequencyValue(e.target.value)}
                        >
                            <option value="everyWeek">Iedere week</option>
                            <option value="everyOtherWeek">Om de week</option>
                            <option value="everyMonth">Elke maand</option>

                        </select>
                    </label>
                    <label htmlFor="duringTheDay">
                        <input
                            name="deliveryTime"
                            id="duringTheDay"
                            type="radio"
                            value="duringTheDay"
                            onChange={(e) => toggleDeliveryTime(e.target.value) }
                        />
                        Overdag
                    </label>
                    <label htmlFor="duringTheEvening">
                        <input
                            name="deliveryTime"
                            id="duringTheEvening"
                            type="radio"
                            value="duringTheEvening"
                            onChange={(e) => toggleDeliveryTime(e.target.value)}
                        />
                        's Avonds
                    </label>
                    <label>
                        Opmerking
                        <textarea
                            name="message"
                            rows="6"
                            cols="40"
                            value={commentValue}
                            onChange={(e) => setCommentValue(e.target.value)}
                        >
                </textarea>
                    </label>

                    <label htmlFor="termsAgree">
                        <input
                            type="checkbox"
                            name="termsAgree"
                            id="termsAgree"
                            value={agreementValue}
                            onChange={() => toggleAgreementValue(!agreementValue)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <button
                        type="submit"
                        disabled={agreementValue === false}
                    >
                        Verzend
                    </button>
                </form>
            </section>

        </>
    );
}

export default App;
