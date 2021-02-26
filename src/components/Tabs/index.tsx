import { useCallback, useState } from 'react';
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

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let btnText = e.currentTarget.textContent || '';
    btnText = (btnText && btnText.split(' ')[0]) || data[0].text;
    btnText = btnText.toLowerCase();
    const tab = btnText[0].toUpperCase() + btnText.slice(1);
    console.log({ btnText });
    const textIndex = data.findIndex(
      (item) => item.text.toLowerCase() === btnText.toLowerCase()
    );
    const position = 100 * (textIndex / data.length);
    console.log({ len: data.length, textIndex, position });
    setLineLeftPosition(`${position}%`);
    onTabClick(tab);
  };

  if (data.length === 0) return null;

  return (
    <div className={tabsStyle} ref={parentRef}>
      {data.map((item, index) => {
        const text = item.text.toLowerCase();
        const capitalCaseText = text[0].toUpperCase() + text.slice(1);
        return (
          <button key={index} type="button" onClick={handleTabClick}>
            {capitalCaseText}{' '}
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
