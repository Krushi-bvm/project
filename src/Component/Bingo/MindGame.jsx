import React, { useEffect, useState } from 'react';
import img1 from '../../assets/Images/flower.png';
import img2 from '../../assets/Images/img3.jpg';
import img3 from '../../assets/Images/img2.jpg';
import img4 from '../../assets/Images/baby.webp';
import img5 from '../../assets/Images/image 3.png';
import img6 from '../../assets/Images/img4.jpg';
import img7 from '../../assets/Images/SlideImg.png';


import './bingo.css';

function MindGame() {
    const [imageStates, setImageStates] = useState(true);
    const [imageStates1, setImageStates1] = useState(true);
    const [imageStates2, setImageStates2] = useState(true);
    const [imageStates3, setImageStates3] = useState(true);
    const [imageStates4, setImageStates4] = useState(true);
    const [imageStates5, setImageStates5] = useState(true);
    const [imageStates6, setImageStates6] = useState(true);
    const [imageStates7, setImageStates7] = useState(true);
    const [imageStates8, setImageStates8] = useState(true);
    const [imageStates9, setImageStates9] = useState(true);
    const [imageStates10, setImageStates10] = useState(true);
    const [imageStates11, setImageStates11] = useState(true);
    const [imageArr, setImageArr] = useState([]);
    const [removeimg, setRmoveImg] = useState(false)
    const [removeimg1, setRmoveImg1] = useState(false)
    const [removeimg2, setRmoveImg2] = useState(false)
    const [removeimg3, setRmoveImg3] = useState(false)
    const [removeimg4, setRmoveImg4] = useState(false)
    const [removeimg5, setRmoveImg5] = useState(false)

    const handleClick = () => {
        setTimeout(() => {
            setImageStates(false)
            setImageStates1(false)
            setImageStates2(false)
            setImageStates3(false)
            setImageStates4(false)
            setImageStates5(false)
            setImageStates6(false)
            setImageStates7(false)
            setImageStates8(false)
            setImageStates9(false)
            setImageStates10(false)
            setImageStates11(false)

        }, 2000);



    }

    useEffect(() => {
        setTimeout(() => {
            setImageStates(false)
            setImageStates1(false)
            setImageStates2(false)
            setImageStates3(false)
            setImageStates4(false)
            setImageStates5(false)
            setImageStates6(false)
            setImageStates7(false)
            setImageStates8(false)
            setImageStates9(false)
            setImageStates10(false)
            setImageStates11(false)


        }, 2000);


    }, [])
    useEffect(() => {
        if (imageArr.length >= 2) {
            if (imageArr[imageArr.length - 1].name === imageArr[imageArr.length - 2].name && imageArr[imageArr.length - 1].id !== imageArr[imageArr.length - 2].id) {

                console.log(imageArr);
                if (imageArr[imageArr.length - 1].name == 'img1') {
                    setTimeout(() => {
                        setRmoveImg(true)

                    }, 2000);
                }
                if (imageArr[imageArr.length - 1].name == 'img2') {
                    setRmoveImg1(true)
                }
                if (imageArr[imageArr.length - 1].name == 'img3') {
                    setRmoveImg2(true)
                }
                if (imageArr[imageArr.length - 1].name == 'img4') {
                    setRmoveImg3(true)
                }
                if (imageArr[imageArr.length - 1].name == 'img5') {
                    setRmoveImg4(true)
                }
                if (imageArr[imageArr.length - 1].name == 'img6') {
                    setRmoveImg5(true)
                }


                //    setRmoveImg1(true)
                setImageArr([...imageArr,
                    removeimg]);


            }


        }
    }, [imageArr])
    console.log(imageArr, 'imageArr');

    console.log(removeimg);



    return (
        <div  >
            <div className="container">
                <div className="box border border-1" onClick={() => {
                    setImageStates(true)
                    setImageArr([...imageArr, {name:"img1" , id:'1'}])
                    handleClick('img1')

                }}>
                    {!removeimg  ? <>
                        {imageStates == true ? <img src={img1} alt="" width={150} height={150} /> : <img src={img5} alt="" width />} 
                    </>
                       :<div></div> 
                    }
                </div>
                <div className="box border border-1" onClick={() => {
                    setImageStates2(true);
                    setImageArr([...imageArr, {name:"img2" , id:'2'}])
                    handleClick('img2')
                }}>
                    {removeimg1 == true ? <div></div> : <>
                        {imageStates2 == true ? <img src={img2} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }</div>
                <div className="box border border-1" onClick={() => {
                    setImageStates1(true);
                    setImageArr([...imageArr,{name:"img1" , id:'3'}])
                    handleClick('img1')

                }}>
                    {removeimg == true ? <div></div> : <>
                        {imageStates1 == true ? <img src={img1} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }
                </div>
                <div className="box border border-1" onClick={() => {
                    setImageStates3(true);
                    setImageArr([...imageArr,{name:"img2" , id:'4'}])

                    handleClick('img2')

                }}>
                    {removeimg1 == true ? <div></div> : <>
                        {imageStates3 == true ? <img src={img2} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }

                </div>
            </div>
            <div className="container mt-3">
                <div className="box border rounded " onClick={() => {
                    setImageStates4(true)
                    setImageArr([...imageArr, {name:"img3" , id:'5'}])
                    handleClick('img3')

                }}>
                    {removeimg2 == true ? <div></div> : <>
                        {imageStates4 == true ? <img src={img3} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }
                </div>
                <div className="box border border-1" onClick={() => {
                    setImageStates5(true);
                    setImageArr([...imageArr,  {name:"img4" , id:'6'}])
                    handleClick('img4')
                }}>
                    {removeimg3 == true ? <div></div> : <>
                        {imageStates5 == true ? <img src={img4} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }</div>
                <div className="box border border-1" onClick={() => {
                    setImageStates6(true)
                    setImageArr([...imageArr,  {name:"img3" , id:'7'}])
                    handleClick('img3')

                }}>
                    {removeimg2 == true ? <div></div> : <>
                        {imageStates6 == true ? <img src={img3} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }
                </div>
                <div className="box border border-1" onClick={() => {
                    setImageStates7(true);
                    setImageArr([...imageArr,  {name:"img4" , id:'8'}])
                    handleClick('img4')
                }}>
                    {removeimg3 == true ? <div></div> : <>
                        {imageStates7 == true ? <img src={img4} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }</div>
            </div>
            <div className="container mt-3">
                <div className="box border border-1" onClick={() => {
                    setImageStates11(true)
                    setImageArr([...imageArr,  {name:"img5" , id:'9'}])
                    handleClick('img5')

                }}>
                    {removeimg4 == true ? <div></div> : <>
                        {imageStates11 == true ? <img src={img7} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }
                </div>
                <div className="box border border-1" onClick={() => {
                    setImageStates8(true);
                    setImageArr([...imageArr,  {name:"img6" , id:'10'}])
                    handleClick('img6')
                }}>
                    {removeimg5 == true ? <div></div> : <>
                        {imageStates8 == true ? <img src={img6} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }</div>
                <div className="box border border-1" onClick={() => {
                    setImageStates9(true)
                    setImageArr([...imageArr,  {name:"img5" , id:'11'}])
                    handleClick('img5')

                }}>
                    {removeimg4 == true ? <div></div> : <>
                        {imageStates9 == true ? <img src={img7} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }
                </div>
                <div className="box border border-1" onClick={() => {
                    setImageStates10(true);
                    setImageArr([...imageArr,  {name:"img6" , id:'12'}])
                    handleClick('img6')
                }}>
                    {removeimg5 == true ? <div></div> : <>
                        {imageStates10 == true ? <img src={img6} alt="" width={150} /> : <img src={img5} alt="" width />} </>
                    }</div>
            </div>






            {/* Add more container divs with box divs as needed */}
        </div>
    );
}

export default MindGame;
