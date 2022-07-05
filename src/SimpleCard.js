import React from "react";
import Title from "./Title.js";
import Description from "./Description.js";
import Image from "./IMG.js";

function SimpleCard() {
  return (
    <div className="card">
      <Title title="Onomesino Esther Gold" />
      <Description description="I am a software developer" />
      {/* <div className='img'> */}
      <Image src={require("./Img.png")} alt="a flower" className="image"/>
            {/* </div> */}
    </div>
  );
}

export default SimpleCard;
