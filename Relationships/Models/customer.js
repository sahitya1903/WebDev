const mongoose=require('mongoose');
const {Schema}=mongoose;

main()
    .then(console.log('Connection successful'))
    .catch(err=>console.log(err));

async function main(params) {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}


//One to Many Relation (Approach 2)
const orderSchema= new Schema({
    item:String,
    price:Number,
})

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:'Order',
        },
    ],
});

//PRE Middleware
// customerSchema.pre('findOneAndDelete',async()=>{
//     console.log('PRE MIDDLEWARE');
// })

//POST Middleware
customerSchema.post('findOneAndDelete',async(customer)=>{
    console.log('POST MIDDLEWARE');
    if(customer.orders.length){
        let res=await Order.deleteMany({_id:{ $in: customer.orders }});
        console.log(res);
    }
})

const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);

const addOrders=async()=>{
    let res=await Order.insertMany([
        {item:'Chips',price:10},
        {item:'Samosa',price:20}
    ]);
    console.log(res);
}

// addOrders();

const addCustomer=async()=>{
    let cust1=new Customer({
        name:'Karan'
    });

    let order1=await Order.findOne({item:'pizza'});
    // let order2=await Order.findOne({item:'Samosa'});

    cust1.orders.push(order1);
    let res=await cust1.save();
    console.log(res);
}

// addCustomer();

const findCustomer=async()=>{
    let result=await Customer.find({}).populate('orders');
    console.log(result[0]);
}

// findCustomer();

//adding new customer with order
const addCust=async()=>{
    let cust=new Customer({
        name:'Karan'
    });

    let newOrder=new Order({
        item:'pizza',
        price:100
    });
    
    cust.orders.push(newOrder);
    await newOrder.save();
    await cust.save();
    console.log('added new customer')
}

// addCust();

const delCust=async()=>{
    let data=await Customer.findByIdAndDelete('69be75d138f7abd92a67f736');
    console.log(data);
}

delCust();