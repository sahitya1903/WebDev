function Discount({ price }) {
    return (
        <>
            <p>Discount of 10% applicable</p>
            <h5>Discounted Price: {price * 0.9}</h5>
        </>
    );
}

export default Discount;