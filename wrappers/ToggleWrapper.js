import { clsx } from "clsx";
import styles from "./toggleWrapper.module.css";

export default function ToggleWrapper({ className, showItems, children }) {
  return (
    <div
      className={clsx(styles.root, {
        [styles.showItems]: showItems,
      },className)}
    >
      {children}
    </div>
  );
}
