"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PlanTrip = () => {
  // --- Flights Section State and Functions ---
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: "American Airlines",
      flightNumber: "AA-892",
      departure: "08:35",
      departureDate: "Sun,20 Aug",
      arrival: "09:35",
      arrivalDate: "Sun,20 Aug",
      price: "N 123,450.00",
    },
  ]);
  const addFlight = () => {
    const newId = flights.length ? flights[flights.length - 1].id + 1 : 1;
    const newFlight = {
      id: newId,
      airline: "American Airlines",
      flightNumber: "AA-892",
      departure: "08:35",
      departureDate: "Sun,20 Aug",
      arrival: "09:35",
      arrivalDate: "Sun,20 Aug",
      price: "N 123,450.00",
    };
    setFlights([...flights, newFlight]);
  };
  const deleteFlight = (id) => {
    setFlights(flights.filter((f) => f.id !== id));
  };

  // --- Hotels Section State and Functions ---
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Riviera Resort, Lekki",
      address1: "18, Kenneth Agbakuru street, off Access Bank Admiralty Way",
      address2: "Lekki Phase 1",
      price: "N 123,450.00",
      totalPrice: "NGN 560,000",
      description: "King size room",
    },
  ]);
  const addHotel = () => {
    const newId = hotels.length ? hotels[hotels.length - 1].id + 1 : 1;
    const newHotel = {
      id: newId,
      name: "Riviera Resort, Lekki",
      address1: "18, Kenneth Agbakuru street, off Access Bank Admiralty Way",
      address2: "Lekki Phase 1",
      price: "N 123,450.00",
      totalPrice: "NGN 560,000",
      description: "King size room",
    };
    setHotels([...hotels, newHotel]);
  };
  const deleteHotel = (id) => {
    setHotels(hotels.filter((h) => h.id !== id));
  };

  // --- Activities Section State and Functions ---
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "The Museum of Modern Art",
      description1: "Works from Van Gogh to Warhol & beyond plus a sculpture",
      description2: "garden,2 cafes & The modern restaurant",
      price: "N 123,450.00",
      time: "10:30 AM on Mar 19",
    },
  ]);
  const addActivity = () => {
    const newId = activities.length
      ? activities[activities.length - 1].id + 1
      : 1;
    const newActivity = {
      id: newId,
      title: "The Museum of Modern Art",
      description1: "Works from Van Gogh to Warhol & beyond plus a sculpture",
      description2: "garden,2 cafes & The modern restaurant",
      price: "N 123,450.00",
      time: "10:30 AM on Mar 19",
    };
    setActivities([...activities, newActivity]);
  };
  const deleteActivity = (id) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  return (
    <div className="h-screen w-screen p-2">
      {/* Header Image */}
      <div className="relative w-full h-24">
        <Image
          src="https://i.pinimg.com/474x/e8/b2/7a/e8b27aba9af1540dff13cbd8177d68fc.jpg"
          alt="Some description"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-white mt-4 border border-amber-900 p-2">
        {/* Top Section: Trip Details & Header Icons */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
            <div className="flex bg-[#f4f3ef] p-1 w-60 text-orange-950 font-medium mb-1.5 text-xs space-x-2">
              <div className="flex items-center space-x-1">
                <Icon icon="mdi:calendar-month-outline" />
                <p>21 March 2024</p>
              </div>
              <div className="flex items-center space-x-1">
                <Icon icon="mdi:arrow-left" />
                <p>21 March 2024</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold">BahamasFamily Trip</h2>
            <p>New York, United States of America | solo trip</p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex justify-end space-x-2 p-2">
              <button className="w-28 h-8 flex items-center justify-center bg-blue-200 rounded">
                <Icon
                  icon="iconamoon:notification-thin"
                  width="10"
                  height="10"
                />
              </button>
              <Icon
                icon="entypo:dots-three-horizontal"
                width="20"
                height="20"
              />
            </div>
            <div className="flex justify-end items-center p-2">
              <img src="" alt="" />
              <Icon icon="mdi:settings-outline" width="24" height="24" />
            </div>
          </div>
        </div>

        {/* Action Cards Row */}
        <div className="flex mt-4 space-x-0.5 flex-col md:flex-row">
          <div className="bg-black text-white h-48 w-full md:w-1/5 flex flex-col justify-between items-center p-3 rounded">
            <h2 className="self-start text-xl font-bold">Activities</h2>
            <p className="self-start text-xs mb-8">
              Build, personalize and optimize your itineraries with our trip
              planner
            </p>
            {/* (For this card, no add/delete functionality is added.) */}
            <button className="bg-blue-500 h-10 w-11/12 rounded">
              Add Activities
            </button>
          </div>

          <div className="bg-blue-200 text-black h-48 w-full md:w-1/5 flex flex-col justify-between items-center p-3 rounded">
            <h2 className="self-start text-xl font-bold">Hotels</h2>
            <p className="self-start text-xs mb-8">
              Build, personalize and optimize your itineraries with our trip
              planner
            </p>
            <button className="bg-blue-500 text-white h-10 w-11/12 rounded">
              Add Hotels
            </button>
          </div>

          <div className="bg-blue-600 text-white h-48 w-full md:w-1/5 flex flex-col justify-between items-center p-3 rounded">
            <h2 className="self-start text-xl font-bold">Flight</h2>
            <p className="self-start text-xs mb-8">
              Build, personalize and optimize your itineraries with our trip
              planner
            </p>
            <button className="bg-white text-blue-600 h-10 w-11/12 rounded">
              Add Flight
            </button>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold mt-4">Trip itineraries</p>
          <p className="text-xs">Your trip itineraries are placed here</p>
        </div>

        {/* ----- Flights Section ----- */}
        <div className="bg-gray-200 p-2 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon icon="mdi:aeroplane-takeoff" width="24" height="24" />
              <p>Flights</p>
            </div>
            <div className="bg-white w-full md:w-[10%] ml-auto flex justify-between items-center h-full rounded">
              <button
                onClick={addFlight}
                className="text-blue-600 w-full h-full flex justify-center items-center p-2 bg-transparent border-none"
              >
                Add Flights
              </button>
            </div>
          </div>
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="flex flex-col md:flex-row justify-between mt-4 space-y-4 md:space-y-0"
            >
              <div className="bg-blue-50 w-full md:w-[85%] rounded flex flex-col justify-between p-2">
                {/* Flight Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Icon
                      icon="twemoji:small-airplane"
                      width="26"
                      height="26"
                      className="mt-4"
                    />
                    <div className="flex flex-col">
                      <p className="text-lg">{flight.airline}</p>
                      <div className="flex justify-between items-center space-x-2">
                        <span>{flight.flightNumber}</span>
                        <button className="bg-blue-900 text-white text-sm px-2 py-1 rounded">
                          First Class
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full md:w-1/2">
                    <div>
                      <p className="text-xl ml-2">{flight.departure}</p>
                      <p className="">{flight.departureDate}</p>
                    </div>
                    <div className="w-full md:w-[60%]">
                      <div className="flex justify-between">
                        <Icon
                          icon="ph:airplane-takeoff-duotone"
                          width="20"
                          height="20"
                        />
                        <span>Duration: 1h 45m</span>
                        <Icon
                          icon="ph:airplane-landing-duotone"
                          width="20"
                          height="20"
                        />
                      </div>
                      <div className="flex">
                        <div className="bg-blue-200 w-1/3 h-2 rounded"></div>
                        <div className="bg-blue-600 w-1/3 h-2"></div>
                        <div className="bg-blue-200 w-1/3 h-2 rounded"></div>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-l">LOS</p>
                        <span>Direct</span>
                        <p className="text-l">SIN</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl">{flight.arrival}</p>
                      <p>{flight.arrivalDate}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/6 flex items-center justify-center">
                    <span>{flight.price}</span>
                  </div>
                </div>
                <div className="flex flex-row border justify-between w-[75%] text-sm p-1.5">
                  <span>Facilities: </span>
                  <div>
                    <Icon
                      icon="icon-park-solid:baggage-delay"
                      width="17"
                      height="17"
                    />
                  </div>
                  <span>Baggage : 20kg,Cabin Baggage: 8kg</span>
                  <div>
                    <Icon
                      icon="mdi:movie-open-settings-outline"
                      width="17"
                      height="17"
                    />
                  </div>
                  <p>In flight entertainment</p>
                  <div>
                    <Icon
                      icon="garden:cutlery-stroke-16"
                      width="16"
                      height="16"
                    />
                  </div>
                  <p>In flight meal</p>
                  <div>
                    <Icon icon="ph:usb-duotone" width="17" height="17" />
                  </div>
                  <p>USB Port</p>
                </div>
                <div className="text-blue-600 flex justify-between w-full text-sm">
                  <div className="flex w-full md:w-[20%] justify-between">
                    <p>Flight details</p>
                    <p>Price details</p>
                  </div>
                  <div>
                    <p>Edit details</p>
                  </div>
                </div>
              </div>
              <div className="bg-red-200 w-full md:w-5 flex items-center justify-center">
                <button onClick={() => deleteFlight(flight.id)}>X</button>
              </div>
            </div>
          ))}
        </div>

        {/* ----- Hotels Section ----- */}
        <div className="bg-blue-950 p-4 mt-5">
          <div className="flex justify-between">
            <div className="flex text-white">
              <Icon icon="ri:hotel-fill" width="24" height="24" />
              <p>Hotels</p>
            </div>
            <div className="bg-white w-full md:w-[10%] ml-auto flex justify-between items-center h-full rounded">
              <button
                onClick={addHotel}
                className="text-blue-600 w-full h-full flex justify-center items-center p-2 bg-transparent border-none"
              >
                Add Hotels
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 p-2">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="flex p-1 flex-row w-full">
                <div className="bg-blue-50 w-full rounded flex flex-row justify-between h-[10rem] p-2">
                  <div className="h-[9rem] w-full md:w-[10%] bg-amber-300">
                    {/* Image placeholder */}p
                  </div>
                  <div className="w-full md:w-[85%]">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <div>
                          <p className="text-xl">{hotel.name}</p>
                          <div className="flex flex-col">
                            <span>{hotel.address1}</span>
                            <span>{hotel.address2}</span>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm w-full">
                          <div className="text-blue flex">
                            <Icon
                              icon="mdi:google-maps"
                              width="20"
                              height="20"
                            />
                            <p>Show in map</p>
                          </div>
                          <div className="flex">
                            <Icon icon="noto:star" width="20" height="20" />
                            <span>8.5(436)</span>
                          </div>
                          <div className="flex">
                            <Icon
                              icon="ph:bed-duotone"
                              width="20"
                              height="20"
                            />
                            <p>{hotel.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p>{hotel.price}</p>
                        <div className="flex flex-col items-end">
                          <span>Total Price {hotel.totalPrice}</span>
                          <span>1 room x 10 nights inc.taxes</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm items-center border-t border-b border-t-gray-400 border-b-gray-400">
                      <div className="w-full md:w-[20%] flex justify-between">
                        <p>Facilities:</p>
                        <Icon
                          icon="ph:swimming-pool-light"
                          width="22"
                          height="22"
                        />
                        <p>Pool</p>
                        <Icon
                          icon="material-symbolslight:wine-bar-outline-rounded"
                          width="24"
                          height="24"
                        />
                        <p>Bar</p>
                      </div>
                      <div className="flex flex-row justify-between w-full md:w-[35%]">
                        <Icon icon="uil:calendar" width="20" height="20" />
                        <p>Check in: 20-04-2024</p>
                        <Icon icon="uil:calendar" width="20" height="20" />
                        <p>Check out: 29-04-2024</p>
                      </div>
                    </div>
                    <div className="text-blue-600 flex justify-between">
                      <div className="w-full md:w-[20%] flex justify-between">
                        <p>Hotel details</p>
                        <p>Price details</p>
                      </div>
                      <div>Edit details</div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-200 w-full md:w-5 flex items-center justify-center">
                  <button onClick={() => deleteHotel(hotel.id)}>X</button>
                </div>
              </div>
            ))}
            {/* (Optional duplicate block can be rendered similarly if desired.) */}
          </div>
        </div>

        {/* ----- Activities Section ----- */}
        <div className="bg-blue-700 p-4 mt-5">
          <div className="flex justify-between">
            <div className="flex text-white">
              <Icon icon="ph:road-horizon-duotone" width="24" height="24" />{" "}
              <p>Activities</p>
            </div>
            <div className="bg-white w-full md:w-[10%] ml-auto flex justify-between items-center h-full rounded">
              <button
                onClick={addActivity}
                className="text-blue-600 w-full h-full flex justify-center items-center p-2 bg-transparent border-none"
              >
                Add Activities
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            {activities.map((activity) => (
              <div key={activity.id} className="flex p-1 flex-row w-full">
                <div className="bg-blue-50 w-full rounded flex flex-row justify-between h-[10.5rem] p-2">
                  <div className="h-[9rem] w-full md:w-[12%] bg-amber-300">
                    {/* Image placeholder */}p
                  </div>
                  <div className="w-full md:w-[85%]">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <div>
                          <p className="text-xl">{activity.title}</p>
                          <div className="flex flex-col">
                            <span>{activity.description1}</span>
                            <span>{activity.description2}</span>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm w-full">
                          <div className="text-blue flex">
                            <Icon
                              icon="mdi:google-maps"
                              width="20"
                              height="20"
                            />
                            <p className="text-blue-600 flex">Directions</p>
                          </div>
                          <div className="flex">
                            <Icon icon="noto:star" width="20" height="20" />
                            <span>4.5(436)</span>
                          </div>
                          <div className="flex">
                            <Icon icon="wi:time-3" width="20" height="20" />{" "}
                            <p>1 Hour</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl">{activity.price}</p>
                        <div className="flex flex-col items-end">
                          <span className="text-m">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm items-center border-t border-b border-t-gray-400 border-b-gray-400 h-8">
                      <div className="w-full md:w-[45%] flex justify-between text-stone-500">
                        <div className="flex justify-between w-full">
                          <p>
                            What's Included: Admission to the Empire State
                            Building{" "}
                          </p>
                          <span className="text-blue-700 mr-">See more </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-600 flex w-full justify-between">
                      <div className="w-full md:w-[20%] flex justify-between">
                        <p>Hotel details</p>
                        <p>Price details</p>
                      </div>
                      <div>Edit details</div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-200 w-full md:w-5 flex items-center justify-center">
                  <button onClick={() => deleteActivity(activity.id)}>X</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
