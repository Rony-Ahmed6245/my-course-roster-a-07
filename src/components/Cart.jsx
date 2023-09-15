

const Cart = ({carts, totalCost, credit, creditRemaing}) => {
    

    return (
        <div >

            <h1 className="py-4 text-2xl md:text-2xl font-bold  text-green-500	">ADD Total Courses: {carts.length}</h1>
            <hr className=" bg-blue-400" />
            <h1 className="py-4  text-blue-500 font-bold text-lg">Credit Hour Remaining {creditRemaing} hr</h1>
            <hr className=" bg-blue-400" />
            <div className="py-4">
             { 
                carts.map((cart, i) => (
                <div key={i}>
                    <ol>
                        <li className="text-lg font-normal	 font-semibold py-2 text-gray-600 text-xs	">{i + 1}.{cart.title}</li>
                    </ol>
                    
                </div>
                ))
                }
            </div>
            <hr className=" bg-blue-400" />
            <h1 className="py-4 text-lg font-semibold">
                Total Credit Hour:{credit}
            </h1>
            <hr className=" bg-blue-400 " />
                <h2 className="text-xl font-medium">Total Price: {totalCost} USD</h2>
        </div>
    );
};

export default Cart;