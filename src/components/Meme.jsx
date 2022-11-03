import React from 'react';
import memeData from "../data/memeData";

export default function Meme() {

    function getRandomMemeImg(memeArray) {
        return memeArray[Math.floor(Math.random() * memeArray.length)].url;
    }

    const [memeImg, setMemeImg] = React.useState('');

    function handleClick() {
        setMemeImg(getRandomMemeImg(memeData.data.memes))
    }

    return (
        <div className="meme">
            <div className="form">
               <div className="input">
                    <input type="text" placeholder="Top text"/>
                    <input type="text" placeholder="Bottom text"/>
               </div>
               <button onClick={handleClick} className="generate-btn">Get a new meme image 🖼</button>
            </div>
            {memeImg ? <img src={memeImg} className="memeImg"/> : null}
        </div>
    )
}