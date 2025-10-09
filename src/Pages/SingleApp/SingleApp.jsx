import { Link } from "react-router";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
const SingleApp = ({ app }) => {

  const { image, title, companyName,id } = app;

  return (
    <Link to={`/appDetails/${id}`}>
    <div>
      <div className="card bg-base-100  shadow-sm  hover:scale-105 transition ease-in-out ">
        <figure className="p-4 bg-gray-200">
          <img className="rounded-lg w-full h-[300px]" src={image} />
        </figure>
        <div className=" p-4">
          <h2 className="mb-3 font-bold text-lg">
            {title} <span>{companyName}</span>{" "}
          </h2>

          <div className="flex justify-between items-center ">
            <div className="bg-[#F1F5E8] flex px-3 py-2 items-center gap-2 rounded-lg">
              <img className="h-[18px]" src={download} alt="" />
              <p className="text-[#00D390] ">9M</p>
            </div>
            <div className="bg-[#FFF0E1] flex px-3 py-2 items-center gap-2 rounded-lg">
              <img className="h-[20px]" src={rating} alt="" />
              <p className="text-[#FF8811]">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SingleApp;
