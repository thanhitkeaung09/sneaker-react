import React, {useState} from 'react';
import img1 from '../../images/image-product-1.jpg'
import img2 from '../../images/image-product-2.jpg'
import img3 from '../../images/image-product-3.jpg'
import img4 from '../../images/image-product-4.jpg'

import Temp1 from "../../images/image-product-1-thumbnail.jpg"
import Temp2 from "../../images/image-product-2-thumbnail.jpg"
import Temp3 from "../../images/image-product-3-thumbnail.jpg"
import Temp4 from "../../images/image-product-4-thumbnail.jpg"

const MyComponent = () => {
    const Temp = [Temp1,Temp2,Temp3,Temp4];
    const Image = [img1,img2,img3,img4];
    const [image,setImage] = useState(Image[0]);
    const [isActive,setActive] = useState(false);
    const handleImageChange = (index,e) =>{

        setImage(Image[index])
        let btn = document.querySelectorAll(".thumbnail-active")
        btn.forEach((el)=>{
            el.classList.remove("active")
        })
        e.currentTarget.classList.toggle("active")
        setActive(isActive => !isActive)



    }
    return (
        <div className={'w-[50%] flex justify-center '}>
            <div className="w-[50%]">
                <div className="w-full space-y-3">
                    <img src={image} alt="" className={'w-full h-full object-contain rounded'}/>
                    <div className="flex space-x-3">
                        {
                            Temp.map((i,index)=>{
                                return (
                                    <button onClick={handleImageChange.bind(null,index)} key={index} className={' thumbnail-active'} >
                                        <img src={i} className={' w-[100px] rounded'} alt=""/>
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
