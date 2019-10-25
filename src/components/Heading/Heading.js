import React from 'react';
import styled from 'styled-components';
// import { Colors } from '../../utils/constants';

const Text = styled.span`
    color: black;
    font-size: 20px;
    font-weight: 700;
    display: block;
    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};    
    width: ${props => props.width || ''};
    max-width: 503px;
    text-align: ${props => props.noTextAlign ? 'left' : 'center' };
    font-style: ${props => props.italic ? 'italic' : 'normal'};

    @media (min-width: 992px) {
        font-size: 30px;
        text-align: left;
    }
`;

export const Heading = (props) => (
    <Text {...props}>{props.children}</Text>
);
