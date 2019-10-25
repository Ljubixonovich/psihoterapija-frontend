import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils';

const StyledParagraph = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${Colors.black};
    text-align: center;
       
    @media (min-width: 992px) {
        text-align: left;
        width: ${props => props.width || ""};
    }
`;

export const Paragraph = (props) => (
   <StyledParagraph {...props}>{props.children}</StyledParagraph>
)
