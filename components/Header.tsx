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

const Title = tw.h1`
  relative
  font-bagelRegular
  text-4xl
  text-primary
  sm:text-5xl
  lg:text-6xl
`;

const TitleShadow = tw(Title)`
  -translate-x-4
  translate-y-10
  font-cedarville
  text-5xl
  text-secondary/20
  sm:text-6xl
  lg:text-7xl
`;
