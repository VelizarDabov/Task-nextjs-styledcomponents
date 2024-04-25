// The Card to be exported goes here
import React from "react";
import {
  StyledContainerCard,
  StyledDescriptionCard,
  StyledImageContainer,
  StyledSectionContainerSmallCard,
  StyledSectionImage,
  StyledSectionParagraph,
  StyledSectionParagraphs,
  StyledSectionTitleOneParagraph,
  StyledSectionWrapper,
  StyledTextContainer,
  StyledTitle,
  StyledTitleParagraph,
} from "./elements";
import Image from "next/image";
import {  cardProps1 } from "../../pages";
const Card = ({
  title,
  description,
  image,
  ...props
}) => {
  return (
    <StyledContainerCard {...props}>
      <StyledTitle id='card'>{title}</StyledTitle>
      <StyledTextContainer>
        <StyledDescriptionCard>{description}</StyledDescriptionCard>
      </StyledTextContainer>
    


      {/* small container */}
      <StyledSectionContainerSmallCard>
        <StyledImageContainer>
          <Image
            objectFit="contain"
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={380}
            height={380}
          />
        </StyledImageContainer>
        <StyledSectionParagraphs>
      {cardProps1.map((item, index) => (
        <StyledSectionWrapper key={index}>
          <StyledSectionImage>
            <Image
              objectFit="contain"
              layout="responsive"
              src={item.src}
              alt={item.alt}
              width={40}
              height={40}
            />
          </StyledSectionImage>
          <StyledSectionTitleOneParagraph>
            <StyledTitleParagraph>{item.title}</StyledTitleParagraph>
            <StyledSectionParagraph>
              {item.description}
            </StyledSectionParagraph>
          </StyledSectionTitleOneParagraph>
        </StyledSectionWrapper>
      ))}
        </StyledSectionParagraphs>
      </StyledSectionContainerSmallCard>
    </StyledContainerCard>
  );
};

export default Card;
