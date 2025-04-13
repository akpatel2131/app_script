import logo from "../images/Logo.svg";
import search from "../images/search.svg";
import { IconChevronDown } from "@tabler/icons-react";
import profile from "../images/profile.svg";
import heart from "../images/heart.svg";
import cart from "../images/cart.svg";
import nextOrSource from "../tools/nextOrSource";
import ToggleWrapper from "../wrappers/ToggleWrapper";
import useBreakpoints from "../tools/useBreakPoints";
import { IconMenu2 } from "@tabler/icons-react";

import styles from "./navbar.module.css";
import { useState } from "react";

const TOP_NAV_OPTIONS = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

export default function Navbar() {
  const [toggleOption, setToggleOption] = useState(false);
  const { isMobile } = useBreakpoints();
  const topNavActionButtons = [
    {
      image: nextOrSource(search),
      alt: "search",
    },
    {
      image: nextOrSource(heart),
      alt: "heart",
    },
    {
      image: nextOrSource(cart),
      alt: "cart",
    },
    ...(isMobile ? [] : [
      {
        image: nextOrSource(profile),
        alt: "profile",
      }
    ])
  ];

  return (
    <div className={styles.topNavWrapper}>
      <div className={styles.navbarContainer}>
        <div className={styles.menuButton}>
          {isMobile && (
            <button onClick={() => setToggleOption((prev) => !prev)}>
              <IconMenu2 stroke={2} />
            </button>
          )}
          <img
            className={styles.images}
            src={nextOrSource(logo)}
            alt="companny-logo"
          />
        </div>
        <div className={styles.navHeader}>Logo</div>
        <div className={styles.navActionContainer}>
          {topNavActionButtons.map((item, index) => (
            <button key={index}>
              <img className={styles.images} src={item.image} alt={item.alt} />
            </button>
          ))}
          {!isMobile && <button className={styles.language}>ENG <IconChevronDown className={styles.downArrow} /></button>}
        </div>
      </div>
      <ToggleWrapper showItems={isMobile ? toggleOption : true}>
        <div className={styles.navOptionsContainer}>
          {TOP_NAV_OPTIONS.map((item, index) => (
            <button key={index} className={styles.navOptions}>
              {item}
            </button>
          ))}
        </div>
      </ToggleWrapper>
    </div>
  );
}
