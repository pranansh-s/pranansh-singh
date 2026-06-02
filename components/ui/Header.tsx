import { FC, memo } from 'react';

import tw from 'tailwind-styled-components';

interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = memo(({ title }) => (
  <HeaderContainer>
    <TitleShadow aria-hidden>{title}</TitleShadow>
    <Title>{title}</Title>
  </HeaderContainer>
));

export default Header;

const HeaderContainer = tw.header`
  relative
  w-max
`;

const Title = tw.h2`
  relative
  font-bagelRegular
  text-3xl
  text-primary
  sm:text-4xl
  lg:text-5xl
  uppercase
`;

const TitleShadow = tw(Title)`
  lowercase
  -translate-x-4
  translate-y-6
  font-cedarville
  text-4xl
  text-secondary/20
  sm:text-5xl
  lg:text-6xl
`;
