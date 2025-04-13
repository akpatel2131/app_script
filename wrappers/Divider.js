import styles from "./divider.module.css";
import React from "react";
import { clsx } from "clsx";

export default function Divider({ className = "", vertical = false }) {
  return React.createElement(
    "div",
    {
      className: clsx(
        styles.root,
        !vertical && styles.isHorizontal,
        vertical && styles.isVertical,
        className
      ),
      role: "separator",
    },
    null
  );
}
