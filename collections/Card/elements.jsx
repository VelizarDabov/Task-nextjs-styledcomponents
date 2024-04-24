import styled from "styled-components";
import { 
    SectionContainerCard,
    SectionBigHeading,
    SectionBigHeadingCard, 
   
    } from "../../components";

// Styled elements for the Card go here
export const StyledContainerCard = styled(({ height, ...props }) => <SectionContainerCard {...props} />)`
  align-items: center;
`;
export const StyledTitle = styled((props) => <SectionBigHeadingCard {...props} />)`
  margin: 50px 0 0 0;
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;