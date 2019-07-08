import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <div className="f-left">
        <div className="author">website design by: Taylor Alfers</div>
        <div className="attributes">Icons made by Pikicon from <a href="https://www.flaticon.com">www.flaticon.com</a></div>
      </div>
      <div className="f-right">
        <div className="copy">copyright</div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: var(--mainDark);
  color: #fff;
  padding: 0 1rem 0 1rem;
  align-self: flex-end;

  .f-left, .f-right {
    display: flex;
    flex-direction: column;

    .author {
      font-size: 0.8rem;
    }

    .copy {
      font-size: 0.7rem;
    }

    .attributes {
      font-size: 0.55rem;
    }
  }
`;

export default Footer;
