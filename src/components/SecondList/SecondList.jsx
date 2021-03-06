import React, { memo, useEffect, useState } from "react";

import styles from "./secondList.module.scss";

const OneList = memo((props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Object.values(props));
  }, [props]);

  return (
    <ul className={styles.secondList}>
      {data.map((item) => {
        return (
          <li key={item.id} className={styles.secondListTitle}>
            <h4 className={styles.ListTitle}> {item.title}</h4>
          </li>
        );
      })}
    </ul>
  );
});

export default OneList;
