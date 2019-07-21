import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <div className="f-left">
        <div className="author">website design by: Taylor Alfers</div>
        <div className="attributes">Icon made by inipagistudio from <a href="https://www.flaticon.com">www.flaticon.com</a></div>
      </div>
      <div className="f-right">
        <div className="copy"><i class="far fa-copyright"></i> Copyright 2019</div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  min-height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: var(--mainYellow);
  color: var(--mainDark);
  padding: 0 3rem 0 3rem;
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
