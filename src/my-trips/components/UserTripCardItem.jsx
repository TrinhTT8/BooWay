import { PHOTO_REF_URL } from "@/constants/options";
import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserTripCardItem = ({ trip }) => {
  const [photoURL, setPhotoURL] = useState();

 const GetPlacePhoto = async () => {
    const data = {
        textQuery: trip?.userChoice?.location?.label,
    };
    const result = await GetPlaceDetails(data);
    if (result.data.places.length > 0 && result.data.places[0].photos && result.data.places[0].photos.length > 0) {
        const photoName = result.data.places[0].photos[0].name; // Use the first photo of the first place
        const Url = PHOTO_REF_URL.replace("{NAME}", photoName);
        setPhotoURL(Url);
    } else {
        console.log("No photos found for this location.");
    }
};
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transition-all hover:shadow-md">
        <img
          className="object-cover rounded-xl mx-auto w-80 h-64"
          src={photoURL}
        />
        <h2 className="font-bold text-lg">
          {trip?.userChoice?.location?.label}
        </h2>
        <h2 className="text-sm text-gray-500">
          {trip?.userChoice?.noOfDays} days trip with "
          {trip?.userChoice?.budget}" budget.
        </h2>
      </div>
    </Link>
  );
};

export default UserTripCardItem;
