import React from "react";
import { StyledHeroContainer, StyledHeroWrapper } from "./StyledHero";
import HeroList from "./heroList/HeroList";
import SearchBar from "components/searchBar/SearchBar";

const Hero = ({
  mediaQuery,
  setMediaQuery,
  defaultListTitle,
  medias,
  popularMedias,
}) => {
  return (
    <StyledHeroContainer>
      <SearchBar mediaQuery={mediaQuery} setMediaQuery={setMediaQuery} />
      <StyledHeroWrapper>
        <HeroList
          defaultListTitle={defaultListTitle}
          medias={medias}
          popularMedias={popularMedias}
        />
      </StyledHeroWrapper>
    </StyledHeroContainer>
  );
};

export default Hero;
