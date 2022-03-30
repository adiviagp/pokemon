import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  return (
    <>
      <BottomNav>
        <Nav>
          <Link href="/" passHref>
            {/* {router.asPath === '/' || router.asPath.indexOf('/pokemon') > -1 ? ( */}
            {router.asPath === '/' ? (
              <NavItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="21"
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
            ) : (
              <NavItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                  className="inline-block mb-1"
                >
                  <path
                    d="M12 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                    fill="#525A67"
                  />
                  <path
                    d="M21.9 9.2l-9.2-7.7c-.4-.3-.9-.3-1.3 0L2.2 9.2c-.8.6-.4 1.8.6 1.8H4v8c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-8h1.2c1 0 1.4-1.2.7-1.8z"
                    stroke="#525A67"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M13.5 13h-3c-.6 0-1 .4-1 1v6h5v-6c0-.6-.4-1-1-1z"
                    stroke="#525A67"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </svg>
                <span className="tab tab-home block text-xs">Beranda</span>
              </NavItem>
            )}
          </Link>
          <Link href="/mypokemon" passHref>
            {router.asPath === '/mypokemon' ? (
              <NavItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                  className="inline-block mb-1"
                >
                  <path
                    d="M9 11.3a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6zm-8.2 7v1.9c0 .6.4 1 1 1h14.5c.6 0 1-.4 1-1v-1.9c0-1-1-6.3-8.2-6.3-7.2 0-8.3 5.4-8.3 6.3z"
                    fill="#05AA5B"
                    stroke="#00AA5B"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                  <path d="M12 7c0 1.7-1.3 3-3 3S6 8.7 6 7" fill="#fff" />
                  <path
                    d="M9 18c-2.2 0-4-1.8-4-4 0-.6.4-1 1-1s1 .4 1 1c0 1.1.9 2 2 2s2-.9 2-2c0-.6.4-1 1-1s1 .4 1 1c0 2.2-1.8 4-4 4z"
                    fill="#145638"
                  />
                </svg>
                <span className="tab tab-home block text-xs">My Pokemon</span>
              </NavItem>
            ) : (
              <NavItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mb-1"
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                >
                  <path
                    d="M9 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-8 7v2c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-2c0-1-1-6.5-8-6.5S1 16 1 17z"
                    stroke="#525A67"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </svg>
                <span className="tab tab-home block text-xs">My Pokemon</span>
              </NavItem>
            )}
          </Link>
        </Nav>
      </BottomNav>
    </>
  );
};

export default Navbar;
