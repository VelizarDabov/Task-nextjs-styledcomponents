import { forwardRef } from "react";
import styled from "styled-components";

export const StyledSectionBigHeadingCard = styled(forwardRef((props, ref) => <h1 {...props} ref={ref} />))`
  font-family: Poppins;
  font-weight: 600;
  font-size: 3rem;
  line-height: 3.94rem;
  text-align: center;
`;
