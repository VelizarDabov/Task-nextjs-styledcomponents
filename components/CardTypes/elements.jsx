import { forwardRef } from "react";
import styled from "styled-components";

export const StyledSectionBigHeadingCard = styled(forwardRef((props, ref) => <h1 {...props} ref={ref} />))`
  font-family: Poppins;
  font-weight: 600;
  font-size: 3rem;
  line-height: 3.94rem;
  text-align: center;
`;

export const StyledSectionSubheadingCard = styled(forwardRef((props, ref) => <h2 {...props} ref={ref} />))`
font-family: Poppins;
font-size: 1.25rem;
line-height: 1.875rem;
font-weight: 300;
  margin: 10px;
  text-align: center;
`;

export const StyledSectionParagraphOne = styled((props) => <p {...props} />)`
font-family: Poppins;
font-size: 1rem;
line-height: 1.5rem;
font-weight: 400;
margin: 0;
overflow: hidden;
  width: 315px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

@media (max-width: 1000px) {
    width: 295px;
}
@media (max-width: 600px) {
  font-size: 0.7rem;
  line-height: 1.1rem;
  width: 175px;
}
`;
export const StyledSectionParagraph = styled(({ ...props }) => <h3 {...props} />)`
font-family: Poppins;
font-weight: 600;
font-size: 1.5rem;
margin: 5px;
&:hover{
  text-decoration: underline;
  color: #0070f3;
}
@media (max-width: 600px) {
  font-size: 1rem;
}
`;