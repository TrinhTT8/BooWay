import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";

const MyTrips = () => {
  const navigate = useNavigate(); // Corrected useNavigation to useNavigate
  const [userTrips, setUserTrips] = useState([]);

  // Function to get all trips of a user
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/"); // Redirect to home if user not found
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    const trips = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setUserTrips(trips);
  };

  // Delete trip from local state after it’s deleted from Firestore
  const handleDeleteTrip = (tripId) => {
    setUserTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
  };

  useEffect(() => {
    GetUserTrips();
  }, []);

  return (
    <div className="p-10 md:px-20 lg:px-36">
      <h2 className="font-bold text-4xl text-center">My Trips</h2>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
        {userTrips.map((trip) => (
          <UserTripCardItem trip={trip} key={trip.id} onDelete={handleDeleteTrip} />
        ))}
      </div>
    </div>
  );
};

export default MyTrips;
