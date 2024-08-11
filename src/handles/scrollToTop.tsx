// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
//
// const ScrollToTop: React.FC = () => {
//     const { pathname } = useLocation();
//
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);
//
//     return null;
// };

// export default ScrollToTop;


// import { useEffect } from "react";
// import { useLocation } from "react-router";
//
// const ScrollToTop = (props) => {
//     const location = useLocation();
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location]);
//
//     return <>{props.children}</>
// };
//
// export default ScrollToTop;


import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
    children: ReactNode;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>;
};

export default ScrollToTop;
