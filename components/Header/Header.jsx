import styles from "../../styles/Header.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "../../assets/logo/logo.png";
import HamburgerIcon from "../../assets/icons/hamburger.svg";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link as LinkScroll } from "react-scroll";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  function handleModalClose() {
    setOpenModal(false);
  }

  useEffect(() => {
    setOpenModal(false);
  }, [router.asPath]);

  function handleModalOpen(event) {
    event.stopPropagation();
    if (openModal) {
      setOpenModal(false);
    } else setOpenModal(true);
  }

  return (
    <header className={styles}>
      <div className={styles.container}>
        <LinkScroll href="/" to="home" smooth>
          <image src={Logo} className={styles.logo} alt="site logo" />
        </LinkScroll>
        <image
          src={HamburgerIcon}
          className={openModal ? styles[`burger--active`] : styles.burger}
          alt="hamburger menu"
          onClick={handleModalOpen}
        />
        <nav className={styles.nav}>
          <LinkScroll activeClass="active" smooth spy to="about">
            <p className={styles.navItem}>About</p>
          </LinkScroll>
          <LinkScroll activeClass="active" smooth spy to="skills">
            <p className={styles.navItem}>Skills</p>
          </LinkScroll>
          <LinkScroll activeClass="active" smooth spy to="projects">
            <p className={styles.navItem}>Web Projects</p>
          </LinkScroll>
          <a href="https://blog.seppnasri.com" className={styles.navItem}>
            Blog
          </a>
        </nav>
      </div>
      {openModal && <HamburgerMenu onClose={handleModalClose} />}
    </header>
  );
}

export default Header;
