import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useState } from 'react';

const BottomNav = styled.section`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const NavItem = styled.a`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const Navbar = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <BottomNav>
        <Nav>
          <Link href="/" passHref>
            <NavItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="inline-block mb-1"
              >
                <path
                  d="M18.5 11.4v9h-13v-9c-1.1 0-2-.1-2 1v8c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-8c0-1.1-.9-1-2-1z"
                  fill="#00AA5B"
                />
                <path
                  d="M21.5 12.5h-19c-.9 0-1.3-1.1-.7-1.7l8.8-8.5c.8-.7 2-.7 2.8 0l8.8 8.5c.7.6.2 1.7-.7 1.7z"
                  fill="#00AA5B"
                />
                <path
                  d="M18.5 9.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2z"
                  fill="#00AA5B"
                />
                <path d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#fff" />
                <path
                  d="M14 15.5h-4c-.6 0-1 .4-1 1v6h6v-6c0-.6-.4-1-1-1z"
                  fill="#145638"
                />
              </svg>
              <span className="tab tab-home block text-xs">Beranda</span>
            </NavItem>
          </Link>
          <Link href="/mypokemon" passHref>
            <NavItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="inline-block mb-1"
              >
                <path
                  d="M18.5 11.4v9h-13v-9c-1.1 0-2-.1-2 1v8c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-8c0-1.1-.9-1-2-1z"
                  fill="#00AA5B"
                />
                <path
                  d="M21.5 12.5h-19c-.9 0-1.3-1.1-.7-1.7l8.8-8.5c.8-.7 2-.7 2.8 0l8.8 8.5c.7.6.2 1.7-.7 1.7z"
                  fill="#00AA5B"
                />
                <path
                  d="M18.5 9.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2z"
                  fill="#00AA5B"
                />
                <path d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#fff" />
                <path
                  d="M14 15.5h-4c-.6 0-1 .4-1 1v6h6v-6c0-.6-.4-1-1-1z"
                  fill="#145638"
                />
              </svg>
              <span className="tab tab-home block text-xs">My Pokemon</span>
            </NavItem>
          </Link>
        </Nav>
      </BottomNav>
    </>
  );
};

export default Navbar;
