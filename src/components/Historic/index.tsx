import React from 'react';
import { RContainer, RContent, RCardRound, RCardStone, RCardDetails, RCol, RRow } from './styles';

const Historic: React.FC = () => {
   return (
      <>
         <RContainer backgroundcolor="rgba(17, 17, 17, 0.5)">
            <RContent>
               <RRow>
                  <RCol>
                     <RCardRound>ROUND 2</RCardRound>
                  </RCol>
                  <RCol>
                     <RCardStone>22</RCardStone>
                  </RCol>
                  <RCol>
                     <RCardDetails>PAR</RCardDetails>
                  </RCol>
                  <RCol>
                     <RCardDetails>GRANDE</RCardDetails>
                  </RCol>
                  <RCol>
                     <RCardDetails>DUZIA 2</RCardDetails>
                  </RCol>
                  <RCol>
                     <RCardDetails>COLUNA 1</RCardDetails>
                  </RCol>
               </RRow>
            </RContent>
         </RContainer>
         <RContainer backgroundcolor="rgba(204, 17, 17, 0.5)">
            <RContent>
               <RRow>
                  <RCol>
                     <RCardRound>ROUND 1</RCardRound>
                  </RCol>
                  <RCol>
                     <RCardStone>5</RCardStone>
                  </RCol>
                  <RCol>
                     <RCardDetails>IMPAR</RCardDetails>
                  </RCol>
                  <RCol>
                     <RCardDetails>PEQUENA</RCardDetails>
                  </RCol>
                  <RCol>
                     <RCardDetails>DUZIA 1</RCardDetails>
                  </RCol>
                  <RCol>
                     <RCardDetails>COLUNA 2</RCardDetails>
                  </RCol>
               </RRow>
            </RContent>
         </RContainer>
      </>
   );
};

export default Historic;
