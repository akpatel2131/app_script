import styles from "./filter.module.css";
import React, { useState, useMemo, useCallback } from "react";
import Collapse from "../wrappers/Collapse";
import Divider from "@/wrappers/Divider";

const filters = {
  1: ["men", "woman", "Baby&kids"],
  2: ["men", "woman", "Baby&kids"],
  3: ["men", "woman", "Baby&kids"],
  4: ["men", "woman", "Baby&kids"],
  5: ["men", "woman", "Baby&kids"],
  6: ["men", "woman", "Baby&kids"],
  7: ["men", "woman", "Baby&kids"],
  8: ["men", "woman", "Baby&kids"],
};

function CollapserHeader({ title, selectedFilter = "" }) {
  return (
    <div className={styles.collpaseHeaderContainer}>
      <div className={styles.collapseHeader}>{title}</div>
      <div className={styles.selectedFilters}>
        {selectedFilter ? selectedFilter.join("") : "ALL"}
      </div>
    </div>
  );
}

function CollapseChildren({
  filterOption,
  itemKey,
  setSelectedFilters,
  selectedFilters,
}) {
  const handleOptions = useCallback(
    (item) => {
      const filterOption = selectedFilters[itemKey] ?? [];

      const isExist = filterOption.includes(item);
      if (isExist) {
        const options = filterOption.filter((element) => element !== item);
        setSelectedFilters({
          ...selectedFilters,
          [itemKey]: options,
        });
        return;
      }

      const addOptions = filterOption ? [...filterOption, item] : [item];
      setSelectedFilters({
        ...selectedFilters,
        [itemKey]: addOptions,
      });
    },
    [selectedFilters, itemKey, setSelectedFilters]
  );

  const handleClearAll = useCallback(() => {
    setSelectedFilters({
      ...selectedFilters,
      [itemKey]: null,
    });
  }, [itemKey]);

  const isChecked = useCallback(
    (item) => {
      const isExist = selectedFilters[itemKey]?.includes(item);
      return !!isExist;
    },
    [selectedFilters, itemKey]
  );

  return (
    <div className={styles.collapseChildrenContainer}>
      <button
        className={styles.unSelectAllButton}
        onClick={() => handleClearAll()}
      >
        Unselect All
      </button>
      <div className={styles.filterOptionContainer}>
        {filterOption.map((item, index) => (
          <div className={styles.filterOptions} key={index}>
            <input
              className={styles.checkbox}
              type="checkbox"
              onClick={() => handleOptions(item)}
              checked={isChecked(item)}
            />
            <div className={styles.filterName}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Filter() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const collapseContent = useMemo(() => {
    return [
      {
        header: (
          <CollapserHeader
            title="Ideal For"
            selectedFilters={selectedFilters["1"]}
          />
        ),
        children: (
          <CollapseChildren
            filterOption={filters["1"]}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
            itemKey="1"
          />
        ),
        key: 1,
      },
      {
        header: (
          <CollapserHeader title="Occasion" selectedFilters={selectedFilters} />
        ),
        children: (
          <CollapseChildren
            filterOption={filters["2"]}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
            itemKey="2"
          />
        ),
        key: 2,
      },
      {
        header: (
          <CollapserHeader title="Work" selectedFilters={selectedFilters} />
        ),
        children: (
          <CollapseChildren
            filterOption={filters["3"]}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
            itemKey="3"
          />
        ),
        key: 3,
      },
      {
        header: (
          <CollapserHeader title="Fabric" selectedFilters={selectedFilters} />
        ),
        children: (
          <CollapseChildren
            filterOption={filters["4"]}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
            itemKey="4"
          />
        ),
        key: 4,
      },
      {
        header: (
          <CollapserHeader title="Segment" selectedFilters={selectedFilters} />
        ),
        children: (
          <CollapseChildren
            filterOption={filters["5"]}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
            itemKey="5"
          />
        ),
        key: 5,
      },
      {
        header: (
          <CollapserHeader
            title="Suitable For"
            selectedFilters={selectedFilters}
          />
        ),
        children: (
          <CollapseChildren
            filterOption={filters["6"]}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
            itemKey="6"
          />
        ),
        key: 6,
      },
      {
        header: (
          <CollapserHeader
            title="Raw Material"
            selectedFilters={selectedFilters}
          />
        ),
        children: (
          <CollapseChildren
            filterOption={filters["7"]}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
            itemKey="7"
          />
        ),
        key: 7,
      },
      {
        header: (
          <CollapserHeader title="Pattern" selectedFilters={selectedFilters} />
        ),
        children: (
          <CollapseChildren
            filterOption={filters["8"]}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
            itemKey="8"
          />
        ),
        key: 8,
      },
    ];
  }, [selectedFilters]);
  
  return (
    <div className={styles.filterContainer}>
      <div className={styles.customizeOption}>
        <input
          className={styles.checkbox}
          type="checkbox"
          onClick={() => setIsChecked((prev) => !prev)}
          checked={isChecked}
        />
        <div className={styles.customizeTitle}>Customizble</div>
      </div>
      <Divider />
      <Collapse items={collapseContent} />
    </div>
  );
}
