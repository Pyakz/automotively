import { isEmpty } from "lodash";
import moment from "moment";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../../stores/useStore";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const VehicleDetails = () => {
  const { vehicles } = useStore();
  const params = useParams();
  const vehicle = vehicles.find((vehicle) => vehicle.vin === params.vin);
  const navigate = useNavigate();

  return (
    <div className="text-slate-50">
      <nav className="mt-2 md:flex items-center justify-between">
        <FiArrowLeft
          onClick={() => navigate(-1)}
          size="25"
          color="white"
          className="hover:scale-125 cursor-pointer"
        />
      </nav>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:p-5 md:mt-15 mt-10">
        <div className="col-span-2 md:col-span-1">
          <h1 className="md:text-4xl text-3xl font-bold md:text-start text-center">
            {vehicle?.make} {vehicle?.model}
          </h1>

          <h2 className="text-lg md:text-start text-center">{vehicle?.year}</h2>

          <img
            className="w-[800px] h-auto"
            src={vehicle?.image_url}
            alt={`${vehicle?.make} ${vehicle?.model}`}
          />
          <div className="md:text-start text-center">
            <h2 className="md:text-5xl text-3xl font-bold">
              ${vehicle?.price.toLocaleString("en-US")}
            </h2>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 md:border-l-2 border-t-2 md:border-t-0  md:pt-0 pt-3 md:mt-0 mt-3 md:px-5 border-slate-700">
          <div className="">
            <h2 className="text-2xl font-bold">Details</h2>
            <div className="">
              <div className="md:flex w-full md:justify-between md:items-center md:mt-3 mt-5">
                <h2 className="text-xl">VIN:</h2>
                <h2 className="font-bold text-xl">{vehicle?.vin}</h2>
              </div>
              <div className="md:flex w-full md:justify-between md:items-center md:mt-3 mt-5">
                <h2 className="text-xl">Interior Color:</h2>
                <h2 className="font-bold text-xl">Gray</h2>
              </div>
              <div className="md:flex w-full justify-between md:items-center md:mt-3 mt-5">
                <h2 className="text-xl">Exterior Color:</h2>
                <h2 className="font-bold text-xl">Black</h2>
              </div>
              <div className="md:flex w-full md:justify-between md:items-center md:mt-3 mt-5">
                <h2 className="text-xl">MPG / Fuel Type</h2>
                <h2 className="font-bold text-xl">25-35 / Gasoline</h2>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <h2 className="text-lg font-bold">Ownership History</h2>
            <ul className="p-3">
              {isEmpty(vehicle?.ownership_history) && (
                <h3 className="text-lg">No recorded owners yet.</h3>
              )}
              {vehicle?.ownership_history.map((owner) => (
                <li
                  key={owner.owner}
                  className="bg-slate-800 rounded-lg my-2 p-2"
                >
                  <h3 className="font-bold text-lg">{owner.owner}</h3>
                  <h3>
                    {moment(owner.start_date).format("ll")} -{" "}
                    {owner.end_date !== null
                      ? moment(owner.end_date).format("ll")
                      : "present"}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h2 className="text-lg font-bold">Accident History</h2>
            <ul className="p-3">
              {isEmpty(vehicle?.accident_history) && (
                <h3 className="text-lg">No recorded accident yet.</h3>
              )}
              {vehicle?.accident_history.map((accident) => (
                <li
                  key={accident.date}
                  className="bg-slate-800 rounded-lg my-2 p-3"
                >
                  <h3 className="font-bold text-lg">
                    {moment(accident.date).format("ll")}
                  </h3>
                  <h3 className="pl-2">{accident.description}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-2 w-full border-slate-700 md:p-5">
        <h2 className="text-2xl font-bold mt-3">Gallery</h2>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          closable
          showCloseIcon={true}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-2"
        >
          {vehicle?.gallery?.map((photo: any, index) => (
            <a href={photo} key={photo + index} data-src={photo}>
              <img
                src={photo}
                data-src={photo}
                alt={`${vehicle?.make} ${vehicle?.model}`}
                className="col-span-1 row-span-2 sm:h-[200px] md:h-[250px] w-full ease-in-out rounded-md duration-300 cursor-pointer "
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default VehicleDetails;
