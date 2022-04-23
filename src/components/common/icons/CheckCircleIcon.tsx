import { PropsWithChildren } from 'react';

import Svg, { SvgProps } from '~/components/common/Svg';

export function CheckCircleIcon({ ...props }: PropsWithChildren<SvgProps>) {
  return (
    <Svg viewBox={24} {...props}>
      <path d="M10.575 13.6 8.575 11.575Q8.25 11.25 7.8 11.25Q7.35 11.25 7.025 11.6Q6.7 11.9 6.7 12.375Q6.7 12.85 7.025 13.15L9.775 15.925Q10.1 16.25 10.575 16.25Q11.05 16.25 11.375 15.925L16.975 10.325Q17.275 10.025 17.275 9.575Q17.275 9.125 16.95 8.8Q16.625 8.475 16.15 8.475Q15.675 8.475 15.375 8.8ZM12 22.2Q9.875 22.2 8.012 21.4Q6.15 20.6 4.775 19.225Q3.4 17.85 2.6 15.988Q1.8 14.125 1.8 12Q1.8 9.875 2.6 8.012Q3.4 6.15 4.775 4.775Q6.15 3.4 8.012 2.6Q9.875 1.8 12 1.8Q14.125 1.8 15.988 2.6Q17.85 3.4 19.225 4.775Q20.6 6.15 21.4 8.012Q22.2 9.875 22.2 12Q22.2 14.125 21.4 15.988Q20.6 17.85 19.225 19.225Q17.85 20.6 15.988 21.4Q14.125 22.2 12 22.2Z" />
    </Svg>
  );
}
