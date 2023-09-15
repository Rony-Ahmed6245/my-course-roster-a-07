
const Card = ({card, handelClickCard}) => {
    const {cover, des, title, price, credit} = card
    return (
        <div>
          <div className="card   bg-base-100 shadow-xl p-4 ">
                <figure>
                    <img className="w-full"  src={cover} alt={title} />
                </figure>
                <div className="">
                    <div className="h-[180px]">
                        <h2 className="card-title py-4 text-lg	font-semibold">{title}</h2>
                        <p className="py-4 font-normal	text-sm	text-[#1C1B1B99]">{des}</p>
                        
                    </div>
                    <div className="flex justify-between items-center py-4">
                            <div className="flex">
                                 <img src={'https://i.ibb.co/McJpgCK/dollar-sign-1.png'} alt="" />
                                <h3 className="font-medium	text-base	">Price:{price}</h3>
                                
                            </div>
                            <div className="flex">
                                <img src={'https://i.ibb.co/jz7S1X8/Frame.png'} alt="" />
                                <h3 className="font-medium 	text-base">Credit:{credit}hr</h3>
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