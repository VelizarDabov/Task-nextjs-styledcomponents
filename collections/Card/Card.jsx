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

const Card = ({
  title,
  description,
  image,
  imageOne,
  imageTwo,
  imageThree,
  titleOne,
  titleTwo,
  titleThree,
  ...props
}) => {
  return (
    <StyledContainerCard {...props}>
      <StyledTitle>{title}</StyledTitle>
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

        {/* paragraph one */}
        <StyledSectionParagraphs>
          <StyledSectionWrapper>
            <StyledSectionImage>
              <Image
                objectFit="contain"
                layout="responsive"
                src={imageOne.src}
                alt={imageOne.alt}
                width={40}
                height={40}
              />
            </StyledSectionImage>
            <StyledSectionTitleOneParagraph>
              <StyledTitleParagraph>{titleOne}</StyledTitleParagraph>
              <StyledSectionParagraph>
                Complete <b>brief writing or simple guidance</b> on what to
                include, we ve got you covered
              </StyledSectionParagraph>
            </StyledSectionTitleOneParagraph>
          </StyledSectionWrapper>

          {/* paraghraph two */}

          <StyledSectionWrapper>
            <StyledSectionImage>
              <Image
                objectFit="contain"
                layout="responsive"
                src={imageTwo.src}
                alt={imageTwo.alt}
                width={40}
                height={40}
              />
            </StyledSectionImage>
            <StyledSectionTitleOneParagraph>
              <StyledTitleParagraph>{titleTwo}</StyledTitleParagraph>
              <StyledSectionParagraph>
                Complete <b>brief writing or simple guidance</b> on what to
                include, we ve got you covered
              </StyledSectionParagraph>
            </StyledSectionTitleOneParagraph>
          </StyledSectionWrapper>

          {/* paragraph three */}

          <StyledSectionWrapper>
            <StyledSectionImage>
              <Image
                objectFit="contain"
                layout="responsive"
                src={imageThree.src}
                alt={imageThree.alt}
                width={40}
                height={40}
              />
            </StyledSectionImage>
            <StyledSectionTitleOneParagraph>
              <StyledTitleParagraph>{titleThree}</StyledTitleParagraph>
              <StyledSectionParagraph>
                Complete <b>brief writing or simple guidance</b> on what to
                include, we ve got you covered
              </StyledSectionParagraph>
            </StyledSectionTitleOneParagraph>
          </StyledSectionWrapper>
        </StyledSectionParagraphs>
      </StyledSectionContainerSmallCard>
    </StyledContainerCard>
  );
};

export default Card;
