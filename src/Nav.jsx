import { useState } from 'react';
import { links, social } from './data';

import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

const Nav = () => {
  const [toggle, setToggle] = useState(null);
  let position = 'nav-open';
  0;
  return (
    <nav className={toggle && position}>
      <img src="../public/omnifood-logo.png" alt="ImageLogo" />
      <section className="header__navbar">
        {links.map(navLink => {
          const { id, url, text } = navLink;
          return (
            <ul key={id} className="navbar">
              <li className="navbar__item">
                <a href={url} className="navbar__link">
                  {text}
                </a>
              </li>
            </ul>
          );
        })}
      </section>
      <section className="menuBtnGroup">
        <button className="menu__icon" onClick={() => setToggle(!toggle)}>
          <FiMenu className="icon-mobile first" />
        </button>
        <button className="menu__icon" onClick={() => setToggle(!toggle)}>
          <GrClose className="icon-mobile second" />
        </button>
      </section>
      <ul className="social-icons">
        {social.map(socialIcon => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;
{
  /* <section className="navSocial">
{social.map(navSocial => {
  const { id, url, icon } = navSocial;
  return (
    <a key={id} href={url} className="navbar__link">
      {icon}
    </a>
  );
})}
</section> */
}
