import type * as CSS from 'csstype';
import styled, { keyframes } from 'styled-components';
import { Image } from './Image';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const Skeleton = styled.div<{ $height: number | string; $width: number | string; $isRounded?: boolean }>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background: linear-gradient(to right, #f6f7f8 4%, #edeef1 25%, #f6f7f8 36%);
  background-size: 1000px 100%;
  animation: ${shimmer} 3s infinite linear;
  border-radius: ${({ $isRounded }) => ($isRounded ? '50%' : '0')};
`;

type Props = {
  height: number | string;
  objectFit: CSS.Property.ObjectFit;
  width: number | string;
  imageUrl: string | null;
  isRounded?: boolean;
} & JSX.IntrinsicElements['img'];

export const ImageWithSkeleton: React.FC<Props> = ({
  height,
  loading = 'eager',
  objectFit,
  width,
  imageUrl,
  isRounded,
  ...rest
}) => {
  if (imageUrl) {
    return <Image {...rest} height={height} objectFit={objectFit} width={width} loading={loading} src={imageUrl} />;
  }
  return <Skeleton $height={height} $width={width} $isRounded={isRounded} />;
};

export default ImageWithSkeleton;
