import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey Buddies <br />
          I'm Aman
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        And I'm Programmer | Front-end developer | Wordpress developer | React developer......!
        Pursuing B.Tech
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;