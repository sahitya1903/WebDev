import Product from "./Product";
function ProductTab(){
    let options=['hi-tech','durable','fast'];
    // let options2=[<li>'hi-tech'</li>,<li>'durable'</li>,<li>'fast'</li>];
    return(
        <>
            <Product title='phone' price={20000} features={options}/>
            <Product title='laptop' price={80000} features={options}/>
            <Product title='pencil'/>
        </>
    )
}

export default ProductTab;