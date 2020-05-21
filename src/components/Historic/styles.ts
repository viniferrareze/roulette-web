import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';

export const RContainer = styled(Container)`
   background-color: ${props => props.backgroundcolor} !important;
   margin-bottom: 10px;
   border-radius: 10px;
`;

export const RContent = styled.div`
   padding: 10px;
`;

export const RRow = styled(Row)``;

export const RCol = styled(Col)`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const RCardDetails = styled.h6`
   font-weight: 600 !important;
   font-size: 12px;
   color: #fff;
`;

export const RCardRound = styled.h2`
   font-weight: 600 !important;
   font-size: 12px;
   color: #fff;
`;

export const RCardStone = styled.h2`
   font-weight: 800 !important;
   font-size: 20px;
   color: rgba(255, 255, 255, 0.7);
`;
