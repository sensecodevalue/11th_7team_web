import { PropsWithChildren } from 'react';

import Svg, { SvgProps } from '~/components/common/Svg';

export function CheckIcon({ ...props }: PropsWithChildren<SvgProps>) {
  return (
    <Svg viewBox={24} {...props}>
      <path d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z" />
    </Svg>
  );
}
