import React from 'react';
import memeData from "../data/memeData";

export default function Meme() {

    function getRandomMemeImg(memeArray) {
        const index = Math.floor(Math.random() * memeArray.length)
        return memeArray[index].url;
    }

    
    const [formData, setFormData] = React.useState({
        topText: '', 
        bottomText: '', 
        randomImage: getRandomMemeImg(memeData.data.memes)
    });


    function handleClick() {
        const newImg = getRandomMemeImg(memeData.data.memes);

        setFormData((oldMemeData) => {
            return {
                ...oldMemeData,
                randomImage: newImg
            }
        })
    }

    function handleInput(event) {
        const {name, value} = event.target;

        setFormData((oldFormData) => {
            return {
                ...oldFormData,
                [name]: value
            }
        })
    }

    return (
        <div className="meme">
            <div className="form">
               <div className="input">
                    <input type="text" name="topText" placeholder="Top text" onChange={handleInput}/>
                    <input type="text" name="bottomText" placeholder="Bottom text" onChange={handleInput}/>
               </div>
               <button onClick={handleClick} className="generate-btn">Get a new meme image 🖼</button>
            </div>
            <div className="meme-wrapper">
                <img src={formData.randomImage} className="memeImg"/>
                <h2 className="meme-text top">{formData.topText}</h2>
                <h2 className="meme-text bottom">{formData.bottomText}</h2>
            </div>
        </div>
    )
}