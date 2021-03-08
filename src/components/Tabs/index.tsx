import { useCallback, useEffect, useState } from 'react';
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
  const lineStyle2 = css({
    width: `${componentWidth / data.length}px`,
    left: `${underlinePosition}`,
  });
  const parentRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setComponentWidth(node.getBoundingClientRect().width);
    }
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
