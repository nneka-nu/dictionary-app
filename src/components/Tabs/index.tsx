import { useEffect, useRef, useState } from 'react';
import { css, cx } from '@emotion/css';
import { capitalCaseText } from '../../helpers';
import { lineStyle1, tabsStyle } from './style';

type Props = {
  activeTabIndex: number;
  data: {
    label: string;
    count: number;
  }[];
  onTabClick: (tabIndex: number) => void;
};

export default function Tabs({ activeTabIndex, data, onTabClick }: Props) {
  const [componentWidth, setComponentWidth] = useState(0);
  const [underlinePosition, setUnderlinePosition] = useState('0');
  const parentRef = useRef<HTMLDivElement | null>(null);
  const lineStyle2 = css({
    width: data.length > 0 ? `${componentWidth / data.length}px` : `0`,
    left: `${underlinePosition}`,
  });

  useEffect(() => {
    const handleResize = () => {
      if (parentRef.current) {
        setComponentWidth(parentRef.current.clientWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setUnderlinePosition(`${100 * (activeTabIndex / data.length)}%`);
  }, [activeTabIndex, data.length]);

  if (data.length === 0) return null;

  return (
    <div className={tabsStyle} ref={parentRef}>
      {data.map((item, index) => {
        return (
          <button key={index} type="button" onClick={() => onTabClick(index)}>
            {capitalCaseText(item.label)}&nbsp;
            <span>{item.count >= 99 ? '(99+)' : `(${item.count})`}</span>
          </button>
        );
      })}
      <div className={cx(lineStyle1, lineStyle2)} />
    </div>
  );
}
