import React, {useState} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Cart from "./Cart";
const MyComponent = () => {
    const [show,setShow] = useState(false);
    const DUMMYMENU = ['Collections',"Men","Women","About","Contact"]

    const handleToggle = () =>{
        setShow(prevState => !prevState)
    }
    return (
        <div className={'w-[80%] mx-auto border-b flex items-center justify-between fixed '} >
           <div className="flex items-center space-x-10 ">
               <div className="">
                   <h1 className={'text-2xl font-[700]'} >Sneakers</h1>
               </div>
               <div className="">
                   <ul className={'flex space-x-8'} >
                       {
                           DUMMYMENU.map((i,index)=><li key={index} className={'cursor-pointer py-8 after:w-full after:h-[2px] after:bg-orange-600 after:absolute relative after:bottom-0 after:left-0 after:scale-0 hover:after:scale-[1] hover:after:duration-500 '} >{i}</li>)
                       }
                   </ul>
               </div>
           </div>

            <div className="">
                <div className="flex items-center space-x-8">
                    <button onClick={handleToggle} className="relative">
                        <AiOutlineShoppingCart size={20} />
                        <Cart toggle={show} />
                    </button>
                    <div className="w-[30px] h-[30px] hover:ring hover:ring-orange-300 rounded-full duration-300">
                        <img src={require("../../images/image-avatar.png")} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
