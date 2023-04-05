import { useState, useEffect, useRef } from 'react';
import global from '../../global.module.scss';
import styles from './Carousel.module.scss';

import { treatments } from '../../data/treatments';

const Carousel = ({ col, row, gap  }) => {
  // responsive
  const [winWidth, setWinWidth] = useState(window.innerWidth);


  const track = useRef(null);
  const [width, setWidth] = useState();
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [startX, setStartX] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(null)

  // const [itemsToShow, setItemsToShow] = useState(0);
  // const [numOfRows, setNumOfRows] = useState(1);
  // const [gapPerItem, setGapPerItem] = useState(0);


  // function responseToResize() {
  //   if (winWidth > 1366) {
  //     setItemsToShow(3.5)
  //   } else {
  //     setItemsToShow(3);
  //   }
  // }

  // const opt = {
  //   itemsToShow: 3.5,
  //   rows: 2,
  //   gap: 40 // px
  // }
  useEffect(() => {
    setWidth(track.current.offsetWidth / col - (gap - (gap / col)))
  });

  // // tracks window width
  // useEffect(() => {
  //   responseToResize();
  //   setWidth(track.current.offsetWidth / itemsToShow - (opt.gap - (opt.gap / itemsToShow)))
  // }, [winWidth]);


  // controlls
  function grab(event) {
    setIsGrabbing(true);
    setStartX(event.pageX - event.currentTarget.offsetLeft);
    setScrollLeft(event.currentTarget.scrollLeft);
  }
  function letgo() {
    setIsGrabbing(false);
  }
  function scrollGrab(event) {
    if (!isGrabbing) return;
    event.preventDefault();
    const x = event.pageX - event.currentTarget.offsetLeft;
    const walk = x - startX;
    event.currentTarget.scrollLeft = scrollLeft - walk;
  }


  return (
    <div className={styles.container}>
      <ul
        ref={track}
        className={styles.track}
        style={{
          gridTemplateColumns: `repeat(${Math.ceil(treatments.length / row)}, 1fr)`,
          gap: `${gap}px`,
          cursor: isGrabbing ? 'grabbing' : 'grab',
        }}
        onMouseDown={grab}
        onMouseUp={letgo}
        onMouseLeave={letgo}
        onMouseMove={scrollGrab}
      >
        {
          treatments.map((item, index) => (
            <li key={index} style={{ width: `${width}px` }} className={styles.item}>
              <img src={item.img} />
              <img src={item.logo} className={styles.logo} />
              <h2 className={global.title}>{item.name}</h2>
              <p className={`${global.paragraph} ${global.sm}`}>
                <b>{item.details[0]}</b>
                <br />
                {item.details[1]}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Carousel