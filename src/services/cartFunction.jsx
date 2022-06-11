import CONFIG from "../config/index";

function cartFunction(cartObject) {
    return (
        fetch(`${CONFIG.PROD.URL}/cart/:id`, {
            method: "PUT",
            headers: new Headers({ "Content-Type": "Application/json" }),
            body: JSON.stringify(cartObject),
        })
            .then((res) => {
                if (res.ok) return res.json();
                console.log("Error adding to cart");
            })
    );
}

export default cartFunction;