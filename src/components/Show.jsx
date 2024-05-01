import React, { useState } from 'react';
import Styles from '../components/Show.module.css';

const Show = ({handleReflesh,material}) => {
  const [sort, setSort] = useState(material);
  const handleToggle = (index) => {
    const copy = [...sort];
    copy[index].bool = !copy[index].bool;
    setSort(copy);
  };

  const handleDelete = (e) => {
    const copy = [...sort];
    const newArray = copy.filter((elm) => {
      return e.target.dataset.id !== elm.id;
    });
    setSort(newArray);
    handleReflesh(newArray.length);
  };

  return (
    <div>
      <div className={Styles.title}>
        <h1 className={Styles.h1}>Our Tours</h1>
      </div>
    <div className={Styles.parent}>
        {sort.map((elm, index) => (
          <div key={elm.id} className={Styles.container}>
            <div className={Styles.image__parent}>
              <img className={Styles.image} src={elm.image} alt="" />
              <p className={Styles.price}>{"$"+elm.price}</p>
            </div>
            <article className={Styles.details}>
              <h3 className={Styles.kind}>{elm.name}</h3>
              <p className={Styles.font}>
                {elm.bool ? elm.info.slice(0, 180) + '...' : elm.info}
                <span className={Styles.span} onClick={()=>handleToggle(index)}>
                  {elm.bool ? "Read More" : "Show Less"}
                </span>
              </p>
            </article>
            <div className={Styles.btn}>
              <button data-id={elm.id} onClick={handleDelete}>Not Interested</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
