import styles from "../../styles/HamburgerMenu.module.scss";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";

function HamburgerMenu({ onClose }) {
  const navigate = useNavigate();
  const modalWrapperRef = useRef(null);
  const [isClickInside, setIsClickInside] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    function handleClickOutside(event) {
      if (
        modalWrapperRef.current &&
        !modalWrapperRef.current.contains(event.target)
      ) {
        setIsClickInside(false);
        if (onClose) {
          onClose(isClickInside);
        }
      } else {
        setIsClickInside(true);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalWrapperRef, onClose, isClickInside]);

  return (
    <>
      <section className={styles} ref={modalWrapperRef}>
        <div className={styles.container}>
          <div className={styles.items - wrapper}>
            <Link activeClass="active" smooth spy to="about">
              <p className={styles.item}>About</p>
            </Link>
            <Link activeClass="active" smooth spy to="skills">
              <p className={styles.item}>Skills</p>
            </Link>
            <Link activeClass="active" smooth spy to="projects">
              <p className={styles.item}>Web Projects</p>
            </Link>

            <a className={styles.item} href="https://blog.seppnasri.com">
              Blog
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HamburgerMenu;
