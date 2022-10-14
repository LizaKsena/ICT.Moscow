/* eslint-disable no-const-assign */
import { useEffect, useState } from 'react';
import styles from '../styles/Index.module.sass';
import BasicCard from './Card';
import { jsonData } from '../data';

export default function Home() {
  const [listData, setListData] = useState([]);
  const [num, setNum] = useState(8);
  const [btApp, setBtApp] = useState([]);
  const [filter, setFilter] = useState([]);
  const [clickBt, setClickBt] = useState(false);
  const [count, setCount] = useState(8);

  useEffect(() => {
    setListData(jsonData.slice(0, num));
    setCount(jsonData.length);
  }, []);

  useEffect(() => {
    const arrApp = jsonData.map((el) => (el.application));
    setBtApp(arrApp.filter((item, pos) => arrApp.indexOf(item) === pos));
  }, []);

  const choseApp = (fil) => {
    setFilter((pref) => [...pref, fil]);
    setClickBt(!clickBt);
    setListData(jsonData.filter((el) => filter.includes(el.application)).slice(0, num));
    setCount(jsonData.filter((el) => filter.includes(el.application)).length);
  };

  const clean = () => {
    setNum(8);
    setFilter([]);
    setListData(jsonData.slice(0, num));
    setCount(jsonData.length);
  };

  const showMore = () => {
    setNum(num += 8);
    setListData(jsonData.filter((el) => filter.includes(el.application)).slice(0, num));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_box}>
        <h1 className={styles.box_title}>
          Заголовок &nbsp;
          <span>
            (
            {count}
            )
          </span>
        </h1>
        <div className={styles.box_button_click}>
          { filter?.filter((elem, id) => filter.indexOf(elem) === id).map((el) => `${el},   `)}
        </div>

        <div className={styles.box_application}>
          <div style={{ background: '#303030' }}>
            {btApp.map((el, id) => (
              <button
                className={styles.button}
                onClick={() => choseApp(el)}
                type="button"
                id={id}
              >
                {el}
              </button>
            ))}
          </div>

          <div className={styles.box_application_box_button}>
            <img src="Снимок экрана 2022-10-13 в 13.41.12.png" width="70" alt="img" />
            <button type="button" id="check" className={styles.box_application_button} onClick={() => clean()}>
              сбросить
              <br />
              все фильтры
            </button>
          </div>
        </div>
        <div className={styles.box_card}>

          {listData.map((el) => (
            <BasicCard
              city={el.city}
              country={el.country}
              title={el.title}
              id={el.id}
              dateUp={el.updated}
              dateCr={el.created}
              description={el.description}
              developer={el.developer}
              solution={el?.solution}
              object={el.object}
              application={el.application}
            />
          ))}
        </div>
        {listData.length < 8 || num > listData.length
          ? null
          : (
            <div className={styles.box_button}>
              <img src="рамка.png" width="255" alt="border" className={styles.button_border} />
              <button className={styles.button_more} type="button" onClick={() => showMore()}>
                Показать еще
              </button>
            </div>
          )}
      </div>
    </div>
  );
}
