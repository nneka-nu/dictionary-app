import { useCallback, useState } from 'react';
import { capitalCaseText } from '../../helpers';
import { tabsStyle } from './style';

type Props = {
  data: {
    text: string;
    count: number;
  }[];
  onTabClick: (tab: string) => void;
};

export default function Tabs({ data, onTabClick }: Props) {
  const [componentWidth, setComponentWidth] = useState(0);
  const [lineLeftPosition, setLineLeftPosition] = useState('0');

  const parentRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setComponentWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const handleTabClick = (tabIndex: number) => {
    const tab = capitalCaseText(data[tabIndex].text);
    const position = 100 * (tabIndex / data.length);
    setLineLeftPosition(`${position}%`);
    onTabClick(tab);
  };

  if (data.length === 0) return null;

  return (
    <div className={tabsStyle} ref={parentRef}>
      {data.map((item, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleTabClick(index)}
          >
            {capitalCaseText(item.text)}&nbsp;
            <span>{item.count >= 99 ? '(99+)' : `(${item.count})`}</span>
          </button>
        );
      })}
      <div
        className="line"
        style={{
          width: `${componentWidth / data.length}px`,
          left: `${lineLeftPosition}`,
        }}
      ></div>
    </div>
  );
}
