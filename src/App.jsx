import React from 'react';
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

const MyComponent = () => {
    return (
        <div className={'w-[80%] mx-auto min-h-[100] py-5'}>
            <Nav/>
            <Main/>
        </div>
    );
};

export default MyComponent;
