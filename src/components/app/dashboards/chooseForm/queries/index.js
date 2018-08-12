import React from 'react';
import StarsQuery from "./stars/starsQuery";

export const Queries = ({queryType}) => {
    console.log(queryType);
    switch (queryType) {
        case 'stars':
            return <StarsQuery/>;
        default:
            return null;
    }
};
