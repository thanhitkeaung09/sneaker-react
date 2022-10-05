import React from 'react';


const MyComponent = ({children}) => {
    return (
        <button className={'px-20 py-3 bg-orange-500 text-[16px] rounded-lg text-white flex items-center space-x-3 hover:bg-orange-300'} >
            {children}
        </button>
    );
};

export default MyComponent;
