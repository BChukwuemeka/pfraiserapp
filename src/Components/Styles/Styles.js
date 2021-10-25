import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #F4F5FF;
  background-clip: border-box;
  

 
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.p`
  line-height: 25px;
  color: #6c757d;
  font-size: 0.9rem;
  padding: 1em 0;
`;

export const AmountRaised = styled.p`
font-size: 1.25rem;
margin: 1em 0;
`;

export const ExpiryDate = styled.p`
font-size: 1.25rem;
margin: 1em 0;
`;


export const Image = styled.img`
  width: 100%;
`;

export const Location = styled.p`
font-size: 1.25rem;
margin: 1em 0;
`;

export const FundingGoal = styled.p`
font-size: 1.25rem;
margin: 1em 0;
`;




//campaign top-card//
export const ContainerTwo= styled.div`
  background-color: #F4F5FF;
  display: flex;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  

  `

export const BodyTwo= styled.div`
display: flex;
flex: 1 1 auto;
min-height: 1px;
padding: 1.25rem;
justify-content: center;
align-items: center;

`;

export const TitleTwo= styled.h1`
font-size: 1.25rem;
font-weight: bold;


@media (max-width: 768px){
  font-size: 1rem;
}
`;

export const TextTwo= styled.p`
line-height: 25px;
color: #6c757d;
`;

export const ImageTwo= styled.img`




@media (max-width: 768px){
  
}


`;

export const AmountRaisedTwo = styled.p`
font-size: 1.25rem;
margin: 1em 0;

@media (max-width: 768px){
  font-size: 1rem;
}
`;

export const ExpiryDateTwo = styled.p`
font-size: 1.25rem;
margin: 1em 0;

@media (max-width: 768px){
  font-size: 1rem;
}
`;

export const LocationTwo = styled.p`
font-size: 1.25rem;
margin: 1em 0;

@media (max-width: 768px){
  font-size: 1rem;
}
`;

export const FundingGoalTwo = styled.p`
font-size: 1.25rem;
margin: 1em 0;

@media (max-width: 768px){
  font-size: 1rem;
}
`;




export const Button = styled.button`
  cursor: pointer;
  margin: auto;
 
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
 
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  user-select: none;
 
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: #28a745;
    background-color: #fff;
    border-color: #28a745;
  }

  @media (max-width: 768px){
  font-size: 0.7rem;
}
`
;