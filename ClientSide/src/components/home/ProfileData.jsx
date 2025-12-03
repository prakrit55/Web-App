import profile from "../../assets/HomeImages/profileDefault.webp";
import { Link } from "react-router-dom";
function ProfileData(props) {
  return (
    <div className="flex flex-col justify-center items-center text-blue-50 ">
      <div className="h-35 w-35 rounded-full mt-10 mb-5">
        <img
          src={props.profileImage || profile}
          alt=""
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold font-montserrat">
          {props.name || "Guest"}
        </h1>
        <Link
          to="/login"
          className="text-blue-50 hover:text-blue-600 font-montserrat"
        >
          Login/Signup
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-3 mt-5 p-3">
        <div className="bg-blue-50 h-13 w-full rounded-xl"></div>
        <div className="bg-blue-50 h-13 w-full rounded-xl"></div>
        <div className="bg-blue-50 h-13 w-full rounded-xl"></div>
      </div>
    </div>
  );
}

export default ProfileData;
