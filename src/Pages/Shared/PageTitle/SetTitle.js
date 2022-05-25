import React from 'react';
import {Helmet} from 'react-helmet-async';

export default function SetTitle({children, title}) {
   return (
      <React.Fragment>
         <Helmet>
            <title>{title}</title>
         </Helmet>
         {children}
      </React.Fragment>
   );
}