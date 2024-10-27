import { PHOTO_REF_URL } from "@/constants/options";
import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
const HotelCardItem = ({ h }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    h && GetPlacePhoto();
  }, [h]);

 const GetPlacePhoto = async () => {
    try {
        const data = {
            textQuery: h?.name,
        };
        const result = await GetPlaceDetails(data);
        if (result.data.places.length > 0 && result.data.places[0].photos.length > 0) {
            const photoName = result.data.places[0].photos[0].name;
            const photoUrl = PHOTO_REF_URL.replace("{NAME}", photoName);
            setPhotoUrl(photoUrl);
        } else {
            console.log("No photos found for this hotel.");
        }
    } catch (error) {
        console.error("Error fetching place photo:", error);
    }
};
  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          h?.name +
          ", " +
          h?.address
        }
        target="_blank"
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-80 h-52 rounded-md" src={photoUrl} alt={h?.name} />
          <div className="flex w-full items-center justify-between px-8 mt-2">
            <div className="font-bold">{h.name}</div>
            <div className="flex items-center">
              {h.rating}
              <CiStar />
            </div>
          </div>
          <div className=" w-full px-8 my-1 text-md">{h.address}</div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCardItem;
