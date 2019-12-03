import React, { ReactChildren, useRef, useEffect, useState } from 'react';
import Header from './header';
import throttle from 'lodash/throttle';
import styled from 'styled-components';

interface LayoutProps {
  title: string;
  children: ReactChildren;
}

const StyledMain = styled.main`
  @media screen and (min-width: 1200px) {
    width: 65%;
  }
`;

const StyledFooter = styled.footer`
  padding: 0 1rem 1rem;
`;

function Layout(props: LayoutProps) {
  const { title, children } = props;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const mainRef = useRef<HTMLElement>(null);

  const throttledScroll = throttle((event: Event) => {
    if (event?.target?.documentElement?.scrollTop) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, 100);

  useEffect(() => {
    if (!mainRef.current) {
      return;
    }
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [!!mainRef.current]);
  return (
    <div style={{ height: '100%' }}>
      <Header isScrolled={isScrolled} title={title} />
      <StyledMain
        ref={mainRef}
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: '0 1rem',
        }}
      >
        {children}
      </StyledMain>
      <StyledFooter>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </StyledFooter>
    </div>
  );
}

export default Layout;
