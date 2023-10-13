"use client";
import React, { useEffect, useState } from "react";

const News = () => 
  let [value, setValue] = useState("nitesh");
  async function ak() {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5eb459ae5baf4f1eb292c0fc7089015e"
    );
    let result = await response.json();
    // console.log(result);
    // console.log(result.articles);
    let p = result.articles.map((a) => {
      return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full hover:scale-110 cursor-pointer "
            src={a.urlToImage}
            alt="Bollywood"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{a.title}</div>
            <p class="text-gray-700 text-base">{a.description}</p>
            <button class="font-bold text-xl">Read more</button>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #news
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #bollywood
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #sports
            </span>
          </div>
        </div>
      );
    });
    // console.log(p);
    setValue(p);
  }
  ak();
  return (
    <div className="p-10 mt-96 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      {value ? (
        value
      ) : (
        <h1 className="font-bold text-center text-xl mb-2">
          Can't get data from the News AP<br></br>Daily limit exceeded.
        </h1>
      )}
    </div>
  );
}

export default News;
