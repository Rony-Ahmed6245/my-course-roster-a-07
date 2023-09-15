
const Card = ({card, handelClickCard}) => {
    const {cover, des, title, price, credit} = card
    return (
        <div>
          <div className="card   bg-base-100 shadow-xl p-4 ">
                <figure>
                    <img className="w-full"  src={cover} alt={title} />
                </figure>
                <div className="">
                    <div className="">
                        <h2 className="card-title py-4 text-lg	font-semibold">{title}</h2>
                        <p className="py-4 font-normal	">{des}</p>
                        
                    </div>
                    <div className="flex justify-between items-center py-4">
                            <div className="flex">
                                 
                                <h3 className="font-medium		">Price:{price}</h3>
                                
                            </div>
                            <div className="flex">
                                
                                <h3 className="font-medium 	">Credit:{credit}hr</h3>
                            </div>
                        </div>

                    <div className="">
                             <button 
                             onClick={()=>handelClickCard(card)}
                             className="btn text-lg font-semibold outline-none text-[#fff] hover:text-[black] w-full bg-[#2F80ED]">Select</button>
                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;