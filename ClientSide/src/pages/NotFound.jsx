import PageNotFound from "../../Other/NotFound.svg";
function NotFound() {
  return (
    <>
      <div className="h-76 w-full flex flex-col justify-center items-center text-[#FFE07F]">
        <img src={PageNotFound} alt="" className="h-50 " />
        <div>
          <h1 className="text-2xl text-center font-bold font-montserrat">
            404 Page Not Found
          </h1>
          <p>Either Under Maintenance or Does Not Exist</p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
