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
        </>
    );
}

export default App;
