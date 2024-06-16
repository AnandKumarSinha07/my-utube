import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

  const dispatch=useDispatch();
  const toggleMenuhandler=()=>{
       dispatch(toggleMenu());
  }
 
  return (
    <div className="grid grid-flow-col p-5  shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          onClick={()=>toggleMenuhandler()}
          alt=""
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8CAgL+/v4AAADV1dW7u7uioqIFBQX7+/vy8vL29vZaWlqlpaW3t7e/v78JCQnd3d0ZGRl4eHiDg4Orq6uxsbGbm5toaGhNTU1tbW3Hx8eOjo7Q0NAaGhqTk5M1NTU8PDwoKCjq6ur1VL5kAAAC90lEQVR4nO3cW1PbMBCGYdmbItk5OKcGCi1Q/v+PrFaGtlOm05vubsa8z8BMriJ/lq3oYDklAAAAAAAAAAAAAAAAAAAAAAAAAAAA4IPpU9/bFqAlGJfxjyOof6UdhI2U+uiExTRfaLaWr9afdRHtDFqX8tfSUxpWxvaDpgyI2G6QtFuLvduvIbVYSyzlIYt0nf5bka4W8e1SUkTCPj2K5C53+mck61dPctj6J9Rmbn+Q3A7hZ8L//qFlnCZ5Gr0Dtlb8IpNeRpayfn+9TuRzvSn8L9T1fI06yHJy/2Us9WfqWevQJWAnt8m7selriXdOdVjLkGMy71q8S9ino/hcpFmy3Hh0n95ZibZ0pvU4f7/I9NLOqrujvB6FrZrwkkISluFL7VN1ptdqvdVrGacxJGHtDg+P3x36pU/ncSwRCVuPf9idNzd2NpvN+X5MUcNEt8F32Pjwj4kGo1H+NTDMdw0BbWvwWlICAAAAsFR6h1GwrpDMExgBM1E6helQrJ7EmHkaLXJc7bbbT5Z2+1Fn2ENGifXMbu8c5trW96XEJCzlNB9C93YsVh8uAXXYngM56RqwvSxy9n9sSItbZZeAGvEw+Dc0tbyH10Vu+4TzGrBzwFqJa/EJqAlP7s/UlNrOPNeEk+06fjN1k9y2x8s8Lb8OP8J9uPS2dPm/h2rZfRq1/H7p8scWH2B8uPgxPgAAAAA35k+XXsOziYYJg+P9OgjThIEh3c5xWFV6PqvvvyMo+e63iFoDbntmxGPPTAm6To/zHmevfU/+VvMOVtNwunNt6ua9a760eTuKff01IfsPdQpz2XtI3/YB+6wfRuwDVmuvqzRkL7cWeJGcjZfxA/fj6xndTxpRftsma/dOhcE13Rwx6UsVrNuawPdiaOM9jg+tS2N5pb6+2ySg761rXrU9dXo/TR/UL22/wS8O7xiKHQg7vCcqMOC8Mms5xg+epXmbZLB+X1vwbFS/+HfuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAP5+ANVYO1E5SC3VAAAAAElFTkSuQmCC"
        />
        <img
          className="h-8 mx-4"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>

      <div className="col-span-10 ml-56">
        <input
         placeholder="Search"
         className="w-1/2 rounded-l-full p-1 border border-gray-400 hover-events-none"
         type="text" />
        <button className="border border-gray-600 p-1 rounded-r-full ">Search</button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8 ml-56"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};
export default Head;
