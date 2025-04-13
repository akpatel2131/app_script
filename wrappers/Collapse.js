import { IconChevronDown } from "@tabler/icons-react";
import { clsx } from "clsx";
import { useCallback, useState } from "react";
import { useUpdateEffect } from "react-use";

import * as styles from "./collapse.module.css";
import Divider from "./Divider";

export default function Collapse({
  accordion,
  arrowPosition = "end",
  defaultActiveKey,
  innerClassNames,
  items,
  onChange,
  openKeys,
}) {
  const [localOpenKeys, setLocalOpenKeys] = useState(
    openKeys ?? (defaultActiveKey ? [defaultActiveKey] : [])
  );

  useUpdateEffect(() => {
    if (openKeys) {
      setLocalOpenKeys(openKeys);
    }
  }, [openKeys]);

  const handleKeysChange = useCallback(
    (keys) => {
      setLocalOpenKeys(keys);
      onChange?.(keys);
    },
    [onChange]
  );

  const toggleCollapse = useCallback(
    (key) => {
      const close = localOpenKeys.includes(key);

      if (close) {
        handleKeysChange(localOpenKeys.filter((item) => item !== key));
        return;
      }

      if (accordion) {
        handleKeysChange([key]);
        return;
      }

      handleKeysChange([...localOpenKeys, key]);
    },
    [accordion, handleKeysChange, localOpenKeys]
  );

  return (
    <div className={clsx(styles.container, innerClassNames?.container)}>
      {items.map((item) => (
        <>
          <div
            className={clsx(
              styles.panel,
              innerClassNames?.panel,
              {
                [styles.activeItem]: localOpenKeys.includes(item.key),
              },
              localOpenKeys.includes(item.key) && innerClassNames?.activeItem
            )}
            key={item.key}
          >
            <button
              className={clsx(
                styles.wrapper,
                innerClassNames?.wrapper,
                item.noExpand && styles.noExpand
              )}
              onClick={() => {
                if (!item.noExpand) {
                  toggleCollapse(item.key);
                }
              }}
              variant="borderless"
            >
              <div
                className={clsx(
                  styles.headerContainer,
                  innerClassNames?.headerContainer,
                  {
                    [styles.arrowPosition]: arrowPosition === "start",
                  }
                )}
              >
                <div className={clsx(styles.header, innerClassNames?.header)}>
                  {item.header}
                </div>
                <IconChevronDown
                  className={clsx(styles.dropdownIcon, innerClassNames?.icon)}
                />
              </div>
            </button>
            {!item.noExpand && localOpenKeys.includes(item.key) && (
              <div className={clsx(styles.content, innerClassNames?.content)}>
                {item.children}
              </div>
            )}
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
}
