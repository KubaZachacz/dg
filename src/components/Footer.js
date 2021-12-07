import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'components/Router'

const StyledFooter = styled.footer`
  position: ${({ isFloating }) => isFloating ? 'absolute' : 'static'};
  bottom: 16px;
  left: 8px;
  right: 8px;

  padding: ${({ isFloating }) => isFloating ? 0 : '8px 0'};

  
  text-align: center;
  font-size: 12px;

  & > a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = ({ isFloating }) => {
  return (
    <StyledFooter isFloating={isFloating}>
      Kancelaria Radcy Prawnego Dawid Gawrysiak | <a href="mailto:kancelaria@dgprawo.pl">kancelaria@dgprawo.pl</a> | <a href="tel:661582832">+48 661 497 118</a> |{" "}
      <a href="/rodo">Klauzula informacyjna RODO</a> |{" "}
    </StyledFooter>
  )
}

export default Footer
