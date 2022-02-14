import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const hero = () => {
  const router = useRouter();
  const { slug } = router.query;

  let [data, setData] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch("http://localhost:3000/api/heroes")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above

      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === parseInt(slug)) {
            console.log(data[i]);
            setData(data[i]);
          }
        }
      });
  }, [slug]);

  console.log(router.query);

  return (
    <div className={styles.container}>
      {data ? (
        <>
          <h1>{data.name}</h1>
          <p>{data.powers}</p>
        </>
      ) : null}
    </div>
  );
};

export default hero;
