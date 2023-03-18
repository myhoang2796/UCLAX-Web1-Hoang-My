import React from 'react';
import styled from 'styled-components';

/* Images ---------------------------*/
import logoUrl from './f45.png';

const SiteLogo = () => {
    return (
        <SiteLogoStyled className='SiteLogo'>
            <img src={ logoUrl } alt='f45.png' />
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #062139;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;