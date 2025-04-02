import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlanTrip = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* <img src="" alt="" style={{ width: "full" }} /> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%" }}>
          <div className="flex flex-row justify-aroundm, bg-[#cdbb8e] p-[0.3rem] w-[15rem] text-orange-950 font-medium ">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                flexDirection: "row",
                marginRight: "0.5rem",
              }}
            >
              <Icon icon="mdi:calendar-month-outline" />
              <p>21 March 2024 </p>
            </div>
            <div
              style={{
                display: "flex ",
                alignItems: "center",
                fontSize: "12px",
              }}
            >
              <Icon icon="mdi:arrow-left" />
              <p>21 March 2024 </p>
            </div>
          </div>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            BahamasFamily Trip
          </h2>

          <p>New York, United States of America | solo trip</p>
        </div>
        <div style={{ width: "50%" }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "30%",
                alignItems: "center",
                padding: "8px",
                alignSelf: "flex-start",
                marginLeft: "auto",
              }}
            >
              <button
                style={{
                  width: "70%",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "lightblue",
                  borderRadius: "6px",
                }}
              >
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
              />{" "}
            </div>
            <div
              style={{
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginLeft: "auto",
              }}
            >
              <img src="" alt="" />
              <Icon icon="mdi:settings-outline" width="24" height="24" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            height: "12rem",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.7rem",
            borderRadius: "5px",
          }}
        >
          <h2
            style={{
              alignSelf: "flex-start",

              fontSize: "1.5rem",
              fontWeight: "1rem",
            }}
          >
            Activities
          </h2>

          <p
            style={{
              alignSelf: "flex-start",
              marginBottom: "2rem",
              fontSize: "12px",
            }}
          >
            Build,personalize and optimize your itieraries with our trip planner
          </p>
          <button
            style={{
              backgroundColor: "blue",
              height: "2.5rem",
              width: "90%",
              borderRadius: "5px",
            }}
          >
            Add Activities
          </button>
        </div>
        <div
          style={{
            backgroundColor: "lightblue",
            color: "black",
            height: "12rem",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.7rem",
            borderRadius: "5px",
          }}
        >
          <h2
            style={{
              alignSelf: "flex-start",

              fontSize: "1.5rem",
              fontWeight: "1rem",
            }}
          >
            Hotels
          </h2>

          <p
            style={{
              alignSelf: "flex-start",
              marginBottom: "2rem",
              fontSize: "12px",
            }}
          >
            Build,personalize and optimize your itieraries with our trip planner
          </p>
          <button
            style={{
              backgroundColor: "blue",
              height: "2.5rem",
              width: "90%",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Add Hotels
          </button>
        </div>
        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            height: "12rem",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.7rem",
            borderRadius: "5px",
          }}
        >
          <h2
            style={{
              alignSelf: "flex-start",

              fontSize: "1.5rem",
              fontWeight: "1rem",
            }}
          >
            Flight
          </h2>

          <p
            style={{
              alignSelf: "flex-start",
              marginBottom: "2rem",
              fontSize: "12px",
            }}
          >
            Build,personalize and optimize your itieraries with our trip planner
          </p>
          <button
            style={{
              backgroundColor: "white",
              height: "2.5rem",
              width: "90%",
              borderRadius: "7px",
              color: "blue",
            }}
          >
            Add Flight
          </button>
        </div>
      </div>
      <p style={{ fontSize: "1.2rem", fontWeight: "bolded" }}>
        Trip itineraries
      </p>
      <p style={{ fontSize: "9px" }}>Your trip itineraries are placed here</p>
      <div style={{ backgroundColor: "lightgray", padding: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon icon="mdi:aeroplane-takeoff" width="24" height="24" />
            <p style={{ marginLeft: "10px" }}>Flights</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              width: "10%",
              marginLeft: "auto",
              display: "flex",
              flexDirection: "",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              style={{
                color: "blue",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px",
                border: "none",
                background: "transparent",
              }}
            >
              Add Flights
            </button>
          </div>
        </div>
        <div className="bg-white h-5 ">
          <div></div>
          <div></div>
          {/* <div>
            <Link>Flight details</Link>
            <Link>Price details</Link>
          </div> */}
        </div>
        <div style={{ backgroundColor: "white" }}></div>
      </div>
    </div>
  );
};

export default PlanTrip;
