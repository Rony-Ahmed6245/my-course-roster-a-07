


import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import Cart from "./Cart";
// toast 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [cards, setCards] = useState([])
    const [carts, setCarts] = useState([])
    
    const [totalCost, setTotalCost] = useState(0)
    const [credit, setCredit] = useState(0)
    const [creditRemaing, setCreditRemaing] = useState(20);

    useEffect(()=>{
        fetch('/course.json')
        .then(res=> res.json())
        .then(data => setCards(data))
    }, [])


    const handelClickCard =(card) =>{
        const isExit = carts.find((item)=>item.id == card.id );

        

        
        let creditCost = card.credit;
        let cost = card.price ;
        if(isExit){
          return  toast("Already Exit...")
        }else{
            carts.forEach((item)=>{
                cost = cost + item.price
            })
            carts.forEach((item)=>{
                creditCost = creditCost + item.credit
            })
        }

        const creditRemaing = 20 - creditCost;
        if (creditCost > 20) {
            // alert('end credit')
          return  toast("Oops! Not enough credit hour")
          } else{



        setCreditRemaing(creditRemaing)
        setCredit(creditCost)
        setTotalCost(cost)
        setCarts([...carts, card])
          }
       
        
    }


    // console.log(carts);
    // console.log(cards);

    return (
        <div>
            <div className=" md:flex item-center justify-center "> 
                <section className="md:w-1/3 px-4 mx-4 md:mx-2 lg:mx-2 md:order-2 mt-8 p-8  shadow-xl rounded-md mb-10 bg-base-100 ">
                    <Cart carts={carts}
                    totalCost={totalCost}
                    credit={credit}
                    creditRemaing={creditRemaing}
                    ></Cart>
                </section>

                <section className="md:w-2/3 grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-8">
                        {
                        cards.map((card)=>(
                            <Card key={card.id}
                             card={card}
                             handelClickCard={handelClickCard}
                             ></Card>
                        ))
                        }
                </section>
               

                
            </div>
        </div>
    );
};





Home.propTypes = {
    
};
export default Home;