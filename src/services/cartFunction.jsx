import CONFIG from "../config/index";
function cartFunction(cartObject) {
    console.log("CartFunctionItems", cartObject)
    return (
        fetch(`${CONFIG.PROD.URL}/cart/update`, {
            method: "PUT",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify(cartObject),
        })
            .then((res) => {
                if (res.ok) return res.json();
                // Probably a duplicate email
                console.log("Error Adding to Cart")
            })

    );
}

export default cartFunction;