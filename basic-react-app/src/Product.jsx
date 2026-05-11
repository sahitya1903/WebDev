import './Product.css';
import Discount from './Discount';

function Product({ title, price = 1, features = [] }) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            {price > 30000 ? <Discount price={price} /> : null}
            <ul>{features.map((feature) => (
                <li key={feature}>{feature}</li>
            ))}
            </ul>

        </div>
    );
}

export default Product;