// The Card to be exported goes here
import React from 'react'
import { StyledContainerCard, StyledDescriptionCard, StyledImageContainer, StyledSectionContainerSmallCard, StyledSectionImageOne, StyledSectionParagraph, StyledSectionParagraphs, StyledSectionTitleOneParagraph, StyledSectionWrapperOne, StyledTextContainer, StyledTitle, StyledTitleOne, StyledTitleOneParagraph } from './elements'
import Image from 'next/image'



const Card = ({ title,description,image,imageOne, imageTwo, imageThree,titleOne, ...props}) => {
  return (
    <StyledContainerCard {...props}>
<StyledTitle>{title}</StyledTitle>
<StyledTextContainer>
  <StyledDescriptionCard>{description}</StyledDescriptionCard>
</StyledTextContainer>

{/* small card */}
<StyledSectionContainerSmallCard>
<StyledImageContainer>
            <Image objectFit='contain' layout="responsive" src={image.src} alt={image.alt} width={380} height={380} />     
          </StyledImageContainer>
</StyledSectionContainerSmallCard>

{/* paragraph */}
    <StyledSectionParagraphs>
<StyledSectionWrapperOne>
  <StyledSectionImageOne>
<Image objectFit='contain' layout='responsive' src={imageOne.src} alt={imageOne.alt} width={40} height={40}/>
  </StyledSectionImageOne>
  <StyledSectionTitleOneParagraph>
    <StyledTitleOneParagraph>
{titleOne}
    </StyledTitleOneParagraph>
    <StyledSectionParagraph>
                  Complete <b>brief writing or 
                  simple guidance</b> on what to 
                  include, we ve got you covered
                </StyledSectionParagraph>
  </StyledSectionTitleOneParagraph>
</StyledSectionWrapperOne>
    </StyledSectionParagraphs>





    </StyledContainerCard>

  
  )
}

export default Card