import './Product.css';
import Discount from './Discount';

function Product({ title, price = 1, features = [] }) {
    let isDiscount=price>3000;
    let styles={backgroundColor: isDiscount?'pink':null}; //dynamic styling
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            {isDiscount ? <Discount price={price} /> : null}
            <ul>{features.map((feature) => (
                <li key={feature}>{feature}</li>
            ))}
            </ul>

        </div>
    );
}

export default Product;