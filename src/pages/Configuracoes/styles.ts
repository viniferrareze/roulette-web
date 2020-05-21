import styled from 'styled-components';

import { Button, Col, Form, Row, Table } from 'reactstrap';

export const RTable = styled(Table)`
   border: none !important;

   th:nth-child(odd) {
      background-color: rgba(17, 17, 17, 0.5);
   }
   th:nth-child(even) {
      background-color: rgba(204, 17, 17, 0.5);
   }
`;

export const RRow = styled(Row)`
   padding: 1rem !important;
   margin-left: 0px !important;
   margin-right: 0px !important;
`;

export const RCol = styled(Col)``;

export const Thead = styled.thead``;

export const Tr = styled.tr`
   color: #fff;
`;

export const Th = styled.th`
   text-align: center;
`;

export const Td = styled.td`
   text-align: center;
   font-weight: 800 !important;
   font-size: 20px;
   color: rgba(255, 255, 255, 0.7);
`;

export const RContainer = styled.div``;

export const Tbody = styled.tbody``;

export const RInput = styled.input``;

export const RButton = styled(Button)`
   background-color: #05ac07;
   border: none !important;
`;

export const RForm = styled(Form)`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 50px;
   border-radius: 50px;
   border: 1px solid #ccc;
   background-color: rgba(255, 255, 255, 0.1);
   padding: 2px;

   input {
      background-color: transparent;
      border: none;
      width: 90%;
      height: 50px;
      color: #fff;
      margin-left: 10px;
   }

   button {
      border-radius: 50px;
      height: 45px;
   }
`;
