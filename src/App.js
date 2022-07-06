import React from 'react';
import './App.css';
import ProductCard from "./components/ProductCard";
import LabelInputForm from "./components/LabelInputForm";
import GeneralButton from "./components/GeneralButton";

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
        console.log(`Bananen: ${counterButtonBanana}`);
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
                <GeneralButton
                buttonType="button"
                nameValue="Reset"
                onClick={resetAllProducts}
                />

                <form onSubmit={submitForm}>
                    <LabelInputForm
                        labelName="Voornaam"
                        nameValue="firstName"
                        type="text"
                        value={firstNameValue}
                        inputFunction={setFirstNamevalue}
                    />
                    <LabelInputForm
                        labelName="Achternaam"
                        nameValue="lastName"
                        type="text"
                        value={lastNameValue}
                        inputFunction={setLastNameValue}
                    />

                    <LabelInputForm
                        labelName="Leeftijd"
                        nameValue="age"
                        type="number"
                        value={ageValue}
                        inputFunction={setAgeValue}
                        min="0"
                    />
                    <LabelInputForm
                        labelName="Postcode"
                        nameValue="postalCode"
                        type="text"
                        value={postalCodeValue}
                        inputFunction={setPostalCodeValue}
                    />
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
                    <LabelInputForm
                        nameValue="duringTheDay"
                        type="radio"
                        value="duringTheDay"
                        inputFunction={toggleDeliveryTime}
                        labelNameUnderneath="Overdag"
                        name="deliveryTime"
                    />

                    <LabelInputForm
                        nameValue="duringTheEVening"
                        type="radio"
                        value="duringTheEvening"
                        inputFunction={toggleDeliveryTime}
                        labelNameUnderneath="'s Avonds"
                        name="deliveryTime"
                    />
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
                    <GeneralButton
                    buttonType="submit"
                    nameValue="Verzend"
                    disabled={agreementValue === false}
                    />
                </form>
            </section>

        </>
    );
}

export default App;
