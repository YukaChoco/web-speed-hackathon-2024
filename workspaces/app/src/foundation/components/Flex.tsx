import type * as CSS from 'csstype';
import styled from 'styled-components';

import { addUnitIfNeeded } from '../../lib/css/addUnitIfNeeded';

const _Flex = styled.div<{
  $align?: string;
  $direction?: string;
  $flexGrow?: CSS.Property.FlexGrow;
  $flexShrink?: CSS.Property.FlexShrink;
  $gap?: number;
  $minWidth?: number | string;
  $justify?: string;
  $p?: number;
  $pb?: number;
  $pl?: number;
  $position?: string;
  $pr?: number;
  $pt?: number;
  $px?: number;
  $py?: number;
}>`
  align-items: ${({ $align }) => $align};
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  gap: ${({ $gap = 0 }) => $gap}px;
  min-width: ${({ $minWidth }) => addUnitIfNeeded($minWidth)};
  justify-content: ${({ $justify }) => $justify};
  padding-bottom: ${({ $pb, $py }) => addUnitIfNeeded($py ?? $pb)};
  padding-left: ${({ $pl, $px }) => addUnitIfNeeded($px ?? $pl)};
  padding-right: ${({ $pr, $px }) => addUnitIfNeeded($px ?? $pr)};
  padding-top: ${({ $pt, $py }) => addUnitIfNeeded($py ?? $pt)};
  padding: ${({ $p }) => addUnitIfNeeded($p)};
`;

type Props = {
  align: CSS.Property.AlignItems;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  direction?: CSS.Property.FlexDirection;
  flexGrow?: CSS.Property.FlexGrow;
  flexShrink?: CSS.Property.FlexShrink;
  gap?: number;
  minWidth?: number | string;
  justify: CSS.Property.JustifyContent;
  p?: number;
  pb?: number;
  pl?: number;
  position?: CSS.Property.Position;
  pr?: number;
  pt?: number;
  px?: number;
  py?: number;
};

export const Flex: React.FC<Props> = ({
  align,
  as,
  children,
  direction,
  flexGrow,
  flexShrink,
  gap,
  minWidth,
  justify,
  p,
  pb,
  pl,
  position,
  pr,
  pt,
  px,
  py,
}) => {
  return (
    <_Flex
      $align={align}
      $direction={direction}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $gap={gap}
      $minWidth={minWidth}
      $justify={justify}
      $p={p}
      $pb={pb}
      $pl={pl}
      $position={position}
      $pr={pr}
      $pt={pt}
      $px={px}
      $py={py}
      as={as}
    >
      {children}
    </_Flex>
  );
};
