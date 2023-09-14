import React, { CSSProperties } from 'react';
import { FooterProps } from '../interfaces';
import clsx from 'clsx';

export function Footer ({footerElement , isOuterContainer} : FooterProps ) {
    return (
        <div className={clsx([styles.footer_wrapper , {position : isOuterContainer ? 'absolute' : 'static'}])} >
            {footerElement}
        </div>
    );
};



const styles: Record<string, CSSProperties> = {
    footer_wrapper: {
        width: '100%',
        bottom: 0,
        left: 0,
    },
    
};
