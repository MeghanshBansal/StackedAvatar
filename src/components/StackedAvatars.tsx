import React from "react";

function StackedAvatars() {
  let imageurl: string[] = [
    "https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__340.jpg",
    "https://cdn.pixabay.com/photo/2018/08/12/16/59/ara-3601194__340.jpg",
    "https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875__340.jpg",
    "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__340.jpg",
    "https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521__340.jpg",
    // "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777__340.jpg",
    // "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg",
  ];
  const items = [];
  if (imageurl.length <= 4) {
    if (imageurl.length > 0) {
      items.push(
        <img
          className="rounded-full border-4 border-white h-20 w-20"
          src={imageurl[0]}
          alt=""
        ></img>
      );
    }
    if (imageurl.length <= 4 && imageurl.length > 1) {
      for (let i = 1; i < imageurl.length; i++) {
        items.push(
          <img
            className="rounded-full border-4 border-white h-20 w-20 -ml-8"
            src={imageurl[i]}
            alt=""
          ></img>
        );
      }
    }
    return (
      <div className="p-5">
        <div className="flex">{items}</div>
      </div>
    );
  } else {
    return (
      <div className="py-5 px-5 ">
        <div className="flex">
          <img
            className="rounded-full border-4 border-white h-20 w-20"
            src={imageurl[0]}
            alt=""
          ></img>
          <img
            className="rounded-full border-4 border-white h-20 w-20 -ml-8"
            src={imageurl[1]}
            alt=""
          ></img>
          <img
            className="rounded-full border-4 border-white h-20 w-20 -ml-8"
            src={imageurl[2]}
            alt=""
          ></img>
          <img
            className="rounded-full border-4 border-white h-20 w-20 -ml-8"
            src={imageurl[3]}
            alt=""
          ></img>
          <span className="flex items-center justify-center font-semibold bg-gray-200 text-gray-600 rounded-full border-4 border-white h-20 w-20 -ml-8">
            +{imageurl.length - 4}
          </span>
        </div>
      </div>
    );
  }
}

export default StackedAvatars;
