import ImageCard from "/src/app/components/atoms/ImageCard/index.jsx";

const NewsCard = ({
  newsCategory,
  newsTitle,
  newsImage,
  description,
  newsAuthor,
}) => {
  return (
    <div className="flex flex-col bg-white">
      <div className="hover:ease-in max-w-sm rounded overflow-hidden shadow-lg">
        <ImageCard
          iconDisplay="flex"
          classnames="w-[18.625rem] h-[12.625rem] bg-cover  m-auto  "
          userImage={newsImage}
        />
      </div>
      <div className="flex flex-row justify-between ">
        <div className="mt-0 mb-0 ml-5 leading-[2.25rem] py-1 ">
          <div className="flex flex-col ">
            <h1 className="font-bold text-l text-yellow-400 mb-0">
              {newsCategory}
            </h1>

            <p className="font-bold text-xs mb-0 ">{newsTitle}</p>
            {/* <h1 className="border border-green-800"> {registry}</h1> */}
          </div>
          <h2 className="text-base font-bold hover:text-cyan-600">
            {description}
          </h2>
          <button class="font-bold text-xs ">Read more</button>
          <h1 className="font-bold text-xs text-sky-700  mb-0">{newsAuthor}</h1>
          <div class="flex px-0 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
              #news
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
              #bollywood
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
              #sports
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
