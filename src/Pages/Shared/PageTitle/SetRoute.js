import React from 'react';
import SetTitle from './SetTitle';
import {useLocation} from 'react-router-dom';

export default function SetRoute({path, title, element}) {
   const {pathname} = useLocation();

   if (path === pathname) return <SetTitle title={title}>{element}</SetTitle>;
}