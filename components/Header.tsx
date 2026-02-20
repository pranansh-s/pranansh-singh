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
  text-primary
`;

const Title = tw.h1`
  relative
  font-bagelRegular
  text-5xl
  text-primary
  lg:text-6xl
`;

const TitleShadow = tw(Title)`
  -translate-x-3
  translate-y-10
  font-cedarville
  text-6xl
  opacity-20
  lg:text-7xl
`;
