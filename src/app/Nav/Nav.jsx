import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "azure",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Side - Logo/Search */}
      <div>
        <input
          type="search"
          placeholder="Search"
          style={{
            backgroundColor: "grey",
            width: "180px",
            borderRadius: "5px",
            padding: "5px",
            border: "none",
          }}
        />
      </div>

      {/* Center - Navigation Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <NavItem href="/" icon="mdi-light:home" text="Home" />
        <NavItem
          href="/dashBoard"
          icon="icon-park:dashboard-one"
          text="Dashboard"
        />
        <NavItem href="/wallet" icon="famicons:wallet" text="Wallet" />
        <NavItem
          href="/plan-trip"
          icon="icon-park-outline:list"
          text="Plan a Trip"
        />
        <NavItem
          href="/commission"
          icon="solar:hand-stars-bold"
          text="Commission"
        />
        <NavItem
          href="/notifications"
          icon="ion:notifications-outline"
          text="Notifications"
        />
        <NavItem href="/cart" icon="solar:cart-3-outline" text="Cart" />
      </div>

      {/* Right Side - Actions */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            padding: "8px 15px",
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
        <NavItem href="/add" icon="ic:sharp-add-box" />
        <NavItem href="/extra-wallet" icon="famicons:wallet" />
        <p style={{ fontSize: "18px", margin: "0", cursor: "pointer" }}>v</p>
      </div>
    </nav>
  );
};

// Reusable Nav Item Component
const NavItem = ({ href, icon, text }) => {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "black" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Icon icon={icon} width={24} height={24} />
        {text && (
          <span
            style={{ fontSize: "12px", fontWeight: "500", textAlign: "center" }}
          >
            {text}
          </span>
        )}
      </div>
    </Link>
  );
};

export default Nav;
