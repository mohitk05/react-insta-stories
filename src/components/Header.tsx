import React from "react";
import { HeaderProps } from "./../interfaces";

const Header = ({
  externalLink,
  profileImage,
  heading,
  subheading,
}: HeaderProps) => (
  <a style={styles.link} href={externalLink} target="_blank" rel="noreferrer">
    <div style={styles.main}>
      {profileImage && <img style={styles.img} src={profileImage} />}
      <span style={styles.text}>
        <p style={styles.heading}>{heading}</p>
        <p style={styles.subheading}>{subheading}</p>
      </span>
    </div>
  </a>
);

const styles = {
  main: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: "drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))",
    border: "2px solid rgba(255, 255, 255, 0.8)",
  },
  text: {
    display: "flex",
    flexDirection: "column" as const,
    filter: "drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))",
  },
  heading: {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.9)",
    margin: 0,
    marginBottom: 2,
  },
  subheading: {
    fontSize: "0.6rem",
    color: "rgba(255, 255, 255, 0.8)",
    margin: 0,
  },
};

export default Header;
