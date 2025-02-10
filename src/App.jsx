import { useRef, useState } from 'react';
import TabPanel from './TabPanel';
import {
  cardApplication,
  cardRecharge,
  usageGuide,
  balanceCheck,
  cardManagement,
  paymentRefund,
  convenienceFeatures,
} from './sections';

const tabs = [
  { key: 'cardApplication', label: '카드 신청', children: <TabPanel sectionsData={cardApplication} /> },
  { key: 'cardRecharge', label: '카드 충전', children: <TabPanel sectionsData={cardRecharge} /> },
  { key: 'usageGuide', label: '사용 방법', children: <TabPanel sectionsData={usageGuide} /> },
  { key: 'balanceCheck', label: '잔액 확인', children: <TabPanel sectionsData={balanceCheck} /> },
  { key: 'cardManagement', label: '카드 관리', children: <TabPanel sectionsData={cardManagement} /> },
  { key: 'paymentRefund', label: '결제 및 환불', children: <TabPanel sectionsData={paymentRefund} /> },
  { key: 'convenienceFeatures', label: '편의기능', children: <TabPanel sectionsData={convenienceFeatures} /> },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);

  const handleClick = (index) => {
    setActiveIndex(index);
    tabRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 bg-white">
        <h1 className="a11y-hidden">이용 안내</h1>
        <nav className="overflow-auto border-b border-neutral-200">
          <div className="flex w-fit px-3">
            {tabs.map((tab, index) => {
              return (
                <button
                  ref={(el) => (tabRefs.current[index] = el)}
                  key={tab.key}
                  type="button"
                  className={`relative flex-auto cursor-pointer px-2 py-4 whitespace-nowrap ${
                    activeIndex === index
                      ? "font-bold after:absolute after:right-0 after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-black after:content-['']"
                      : ''
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </nav>
      </header>
      {tabs[activeIndex].children}
    </>
  );
}

export default App;
