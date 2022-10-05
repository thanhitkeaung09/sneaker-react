import React from 'react';

const MyComponent = ({toggle}) => {
    return (
        <div className={toggle ? 'cart scale-y-1' : 'cart scale-y-0'}>
            <div className="rounded">
                <div className=" border-b ">
                    <h1 className={'text-xl p-5 '} >Cart</h1>
                </div>
                <p className={'p-10'}>Your Cart is empty</p>
            </div>
        </div>
    );
};

export default MyComponent;
