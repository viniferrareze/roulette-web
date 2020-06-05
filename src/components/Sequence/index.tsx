import React from 'react';

import Card from '../Card';

import { RTable, Tbody, Td, Th, Thead, Tr } from './styles';

const Sequence: React.FC = () => {
   return (
      <Card title="Sequência">
         <RTable responsive>
            <Thead>
               <Tr>
                  <Th>Pequena</Th>
                  <Th>Grande</Th>
               </Tr>
            </Thead>
            <Tbody>
               <Tr>
                  <Td>1</Td>
                  <Td>1</Td>
               </Tr>
            </Tbody>
         </RTable>
         <RTable responsive>
            <Thead>
               <Tr>
                  <Th>Par</Th>
                  <Th>Impar</Th>
               </Tr>
            </Thead>
            <Tbody>
               <Tr>
                  <Td>1</Td>
                  <Td>1</Td>
               </Tr>
            </Tbody>
         </RTable>
         <RTable responsive>
            <Thead>
               <Tr>
                  <Th>Vermelho</Th>
                  <Th>Preto</Th>
               </Tr>
            </Thead>
            <Tbody>
               <Tr>
                  <Td>1</Td>
                  <Td>1</Td>
               </Tr>
            </Tbody>
         </RTable>
         <RTable responsive>
            <Thead>
               <Tr>
                  <Th>Duzia 1</Th>
                  <Th>Duzia 2</Th>
                  <Th>Duzia 3</Th>
               </Tr>
            </Thead>
            <Tbody>
               <Tr>
                  <Td>1</Td>
                  <Td>1</Td>
                  <Td>1</Td>
               </Tr>
            </Tbody>
         </RTable>
         <RTable responsive>
            <Thead>
               <Tr>
                  <Th>Coluna 1</Th>
                  <Th>Coluna 2</Th>
                  <Th>Coluna 3</Th>
               </Tr>
            </Thead>
            <Tbody>
               <Tr>
                  <Td>1</Td>
                  <Td>1</Td>
                  <Td>1</Td>
               </Tr>
            </Tbody>
         </RTable>
      </Card>
   );
};

export default Sequence;
