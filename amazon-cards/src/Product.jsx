import './Product.css';
import Price from './Price';

function Product({title,idx}) {
    let oldPrices=['10,000','20,000','16,000','4,000'];
    let newPrices=['9,000','19,000','15,000','3,000'];
    let description=[['8000 DPI', 'Programmable Buttons'],
        ['Designed for Apple Pro','12 hours battery'],
        ["Fastest Budget Laptop",'Core i7'],
        ["Wireless Mouse",'Wifi+Bluetooth Receiver']];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;