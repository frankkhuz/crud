"use client";
import Image from "next/image";
import Link from "next/link";
import Body from "./Body/Body";
import Nav from "./Nav/Nav";
import PlanTrip from "./Nav/planTrip/page";

export default function Home() {
  return (
    <div>
      {/* <Nav />
      <Body /> */}
      <PlanTrip />
    </div>
  );
}
