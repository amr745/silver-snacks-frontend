

const order = ({cartItem}) => {
    return (
        <div>
            {cartItem.map((item) => (
                <div key={item._id}>
                    <h1>{item.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default order;