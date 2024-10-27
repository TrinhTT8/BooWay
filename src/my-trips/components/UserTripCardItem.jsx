import { PHOTO_REF_URL } from "@/constants/options";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { db } from "@/service/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const UserTripCardItem = ({ trip, onDelete }) => {
  const [photoURL, setPhotoURL] = useState();

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userChoice?.location?.label,
    };
    const result = await GetPlaceDetails(data);
    if (
      result.data.places.length > 0 &&
      result.data.places[0].photos &&
      result.data.places[0].photos.length > 0
    ) {
      const photoName = result.data.places[0].photos[0].name;
      const Url = PHOTO_REF_URL.replace("{NAME}", photoName);
      setPhotoURL(Url);
    } else {
      console.log("No photos found for this location.");
    }
  };

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  // Function to delete the trip
  const deleteTrip = async () => {
    const tripRef = doc(db, "AITrips", trip.id);
    try {
      await deleteDoc(tripRef);
      toast("Trip deleted successfully");
      if (onDelete) onDelete(trip.id); // Callback to update parent state if needed
    } catch (error) {
      console.error("Error deleting trip:", error);
      toast("Error deleting trip");
    }
  };

  return (
    <div className="relative hover:scale-105 transition-all hover:shadow-md">
      <Link to={"/view-trip/" + trip?.id}>
        <img
          className="object-cover rounded-xl mx-auto w-80 h-64"
          src={photoURL}
          alt="Trip location"
        />
        <h2 className="font-bold text-lg">
          {trip?.userChoice?.location?.label}
        </h2>
        <h2 className="text-sm text-gray-500">
          {trip?.userChoice?.noOfDays} days trip with "{trip?.userChoice?.budget}" budget.
        </h2>
      </Link>
      <button
        onClick={deleteTrip}
        className="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default UserTripCardItem;
