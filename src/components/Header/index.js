import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

import logo from '../../assets/logo.png';

import {
  Container,
  Content,
  Mobile,
  MobileNavigation,
  MobileContent,
  MobileMenu,
  CloseIcon,
} from './styles';

const links = {
  navigation: [
    {
      title: 'SAPATOS',
      link: '/sapatos',
    },
    {
      title: 'NOVIDADES',
      link: '/novidades',
    },
    {
      title: 'QUEM SOMOS',
      link: '/quem-somose',
    },
    {
      title: 'BAZAR',
      link: '/bazar',
    },
  ],
  controls: [
    {
      title: 'BUSCAR',
      link: '/buscar',
    },
    {
      title: 'MINHA CONTA',
      link: '/minha-conta',
    },
    {
      title: 'SACOLA',
      link: '/sacola',
    },
  ],
};

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <Container>
      <Content>
        <nav>
          <NavLink to="/students" activeStyle={{ color: '#333' }}>
            SAPATOS
          </NavLink>
          <NavLink to="/plans" activeStyle={{ color: '#333' }}>
            NOVIDADES
          </NavLink>
          <NavLink to="/enrollment" activeStyle={{ color: '#333' }}>
            QUEM SOMOS
          </NavLink>
          <NavLink to="/help_orders" activeStyle={{ color: '#333' }}>
            PEDIDOS DE AUXÍLIO
          </NavLink>
        </nav>

        <img src={logo} alt="logo" />

        <nav>
          <NavLink to="/students" activeStyle={{ color: '#333' }}>
            BUSCAR
          </NavLink>
          <NavLink to="/plans" activeStyle={{ color: '#333' }}>
            MINHA CONTA
          </NavLink>
          <NavLink to="/enrollment" activeStyle={{ color: '#333' }}>
            SACOLA
          </NavLink>
        </nav>
      </Content>
      <Mobile>
        <MdMenu size={32} onClick={() => setMenuOpened(true)} />
        <img src={logo} alt="logo" />
        <div />
        {menuOpened && (
          <MobileNavigation>
            <MobileContent>
              <MobileMenu>
                {links.navigation.map(link => (
                  <li>
                    <NavLink to={link.link}>{link.title}</NavLink>
                  </li>
                ))}
              </MobileMenu>
              <MobileMenu style={{ marginTop: '50px' }}>
                {links.controls.map(link => (
                  <li>
                    <NavLink to={link.link}>{link.title}</NavLink>
                  </li>
                ))}
              </MobileMenu>
            </MobileContent>
            <CloseIcon>
              <MdClose size={24} onClick={() => setMenuOpened(false)} />
            </CloseIcon>
          </MobileNavigation>
        )}
      </Mobile>
    </Container>
  );
}
