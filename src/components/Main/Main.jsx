import React from 'react';
import ImageContainer from "./ImageContainer";
import TextContainer from "./TextContainer";

const MyComponent = () => {
    return (
        <div className={' flex min-h-[100vh] items-center'} >
            <ImageContainer/>
            <TextContainer/>
        </div>
    );
};

export default MyComponent;
