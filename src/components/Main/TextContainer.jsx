import React, {useState} from 'react';
import {FaPlus} from "react-icons/fa"
import {FaMinus} from "react-icons/fa";
import DynamiteBtn from "../UI/DynamiteBtn";
import {AiOutlineShoppingCart} from "react-icons/ai";

const MyComponent = () => {
    const [counter,setCounter] = useState(0);
    const handleCounting = (type) => type ? setCounter(prevState => prevState+1) : counter > 0 && setCounter(prevState => prevState-1)
    const handleChange = (e) =>{
        setCounter(Number(e.target.value))
    }
    return (
        <div className={'w-[50%]'} >
            <div className={'w-[80%] space-y-4'}>
                <div className="space-y-4">
                    <p className={'uppercase text-orange-500 font-bold tracking-widest text-xs'} >sneaker company</p>
                    <h1 className={'text-[40px] font-bold'} >Fall Limited Edition Sneakers</h1>
                    <p className={'text-gray-400'}>  These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                </div>

                {/*price*/}
                <div className="">
                    <div className={'flex items-center space-x-4'}>
                        <p className={'text-2xl font-bold'}>$125.00</p>
                        <div className="bg-orange-200 rounded px-1 py-1">
                            <p className={'text-orange-400 text-[12px]'}>
                                50%
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <p className={'text-gray-300 font-bold text-[15px] line-through'} >$250.00</p>
                    </div>
                </div>
                {/*button*/}
                <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded">
                        <button onClick={handleCounting.bind(null,false)} >
                            <FaMinus className={'text-orange-300'}/>
                        </button>
                        <input type="number" value={counter} onChange={handleChange}  className={'bg-gray-100 font-bold text-center w-[80px] outline-none'}/>
                        <button onClick={handleCounting.bind(null,true)}>
                            <FaPlus className={'text-orange-300'}  />
                        </button>
                    </div>
                    <div className="">
                        <DynamiteBtn>
                            <AiOutlineShoppingCart/>
                            <p>Add Cart</p>
                        </DynamiteBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
