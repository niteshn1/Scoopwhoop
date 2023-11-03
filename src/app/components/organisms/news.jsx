// import { Link } from "react-router-dom";
import newsData from "/src/utils/mockData/data.js";
// import Button from "../../atoms/Button";
// import Search from "../../atoms/Button/searchButton";
import NewsCard from "src/app/components/molecules/newsCard.jsx";

const Project = () => {
  let { Details } = newsData;
  return (
    <div className=" ml-[8rem] mr-[8rem] mt-96 bg-white">
      <div className="flex flex-row py-4">
        <h1 className=" text-xl pl-4 leading-normal  text-sky-700 font-bold tracking-wider pr-6">
          STORIES
        </h1>

        {/* <Button>Filter</Button> */}
      </div>
      <div className="  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 cursor-pointer ">
        {Details.map(({ id, title, description, category, src, author }) => (
          // <Link to="">
          <div className=" ml-[.5625rem]  mb-4  " key={id}>
            <NewsCard
              newsCategory={category}
              newsTitle={title}
              newsImage={src}
              description={description}
              newsAuthor={author}
            />
          </div>
          // </Link>
        ))}
      </div>

      <h2 className=" text-xl pl-4 leading-normal  text-sky-700 font-bold tracking-wider pr-6">
        Go to stories--
      </h2>
    </div>
  );
};

export default Project;
