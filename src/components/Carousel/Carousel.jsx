import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import global from '../../global.module.scss';
import styles from './Carousel.module.scss';

import { treatments } from '../../data/treatments';

const Carousel = () => {
  const track = useRef(null);
  const [width, setWidth] = useState();
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [startX, setStartX] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(null)

  // responsive carousel options
  const [windowDimension, setWindowDimension] = useState(window.innerWidth);

  const [col, setCol] = useState((windowDimension > 975) ? 3.5 : (windowDimension > 545) ? 2.5 : 1.5);
  const [row, setRow] = useState((windowDimension > 975) ? 40 : 20);
  const [gap, setGap] = useState((windowDimension > 425) ? 2 : 1);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowDimension(window.innerWidth);
    })
  }, []);

  useEffect(() => {
    setCol((windowDimension > 975) ? 3.5 : (windowDimension > 545) ? 2.5 : 1.5);
    setGap((windowDimension > 975) ? 40 : 20);
    setRow((windowDimension > 425) ? 2 : 1);
    // setWidth(track.current.offsetWidth / col - (gap - (gap / col)))
  }, [windowDimension])

  useEffect(() => {
    setWidth(track.current.offsetWidth / col - (gap - (gap / col)))
  });

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


  // gsap
  const app = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(Array.from(track.current.children), 0.25, {
        autoAlpha: 0, y: 50, stagger: 0.25,
        scrollTrigger: { 
          trigger: track.current, 
          start: '30px bottom'
        }
      })
    }, app)

    return () => ctx.revert();
  }, [])

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