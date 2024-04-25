import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 8.125rem;
  font-family: sans-serif;
  
  @media (min-width: 640px) {
    width: 50%; 
    margin-left: 0; 
    margin-right: 2rem; 
  }
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
  @media (min-width: 640px) {
    max-width: 32.03rem; 
    margin-left: 0; 
    margin-right: auto; 
  }
  @media (max-width: 640px) {
    display: none; /* Hide the image for screens smaller than 600px */
  }
`;
