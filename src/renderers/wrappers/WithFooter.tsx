import React from 'react';
import { Footer } from '../../components/Footer';
import { FooterProps } from '../../interfaces';

interface Props extends FooterProps {
    children : React.ReactElement;
   
}

export function WithFooterHOC({children , footerElement , isOuterContainer} : Props){
    return (
        <>
            {children}
            {footerElement && <Footer footerElement={footerElement} isOuterContainer={isOuterContainer} />}
        </>
    );
};
