import { Icon } from "@iconify/react";
import React from "react";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "brown",
        padding: "20px",
        height: "100vh",
        color: "white",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
        <SidebarItem icon="mdi:home" text="Dashboard" />
        <SidebarItem icon="mdi:clipboard-list" text="Tasks" />
        <SidebarItem icon="mdi:wallet" text="Wallet" />
        <SidebarItem icon="mdi:car" text="Trips" />
        <SidebarItem icon="mdi:gift" text="Rewards" />
        <SidebarItem icon="mdi:settings" text="Settings" />
        <SidebarItem icon="mdi:settings" text="Settings" />
        <SidebarItem icon="mdi:settings" text="Settings" />
      </ul>
      <button></button>
    </div>
  );
}

// Reusable Sidebar Item Component
const SidebarItem = ({ icon, text }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "15px",
        cursor: "pointer",
      }}
    >
      <Icon icon={icon} width={24} height={24} />
      <p style={{ fontSize: "16px", margin: 0 }}>{text}</p>
    </li>
  );
};

export default Sidebar;
