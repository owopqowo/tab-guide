import { useRef, useState } from 'react';
import cardApplication from './cardApplication';
import cardRecharge from './cardRecharge';
import usageGuide from './usageGuide';
import balanceCheck from './balanceCheck';
import cardManagement from './cardManagement';
import paymentRefund from './paymentRefund';
import convenienceFeatures from './convenienceFeatures';

const tabs = [
  { key: 'cardApplication', label: '카드 신청', children: cardApplication() },
  { key: 'cardRecharge', label: '카드 충전', children: cardRecharge() },
  { key: 'usageGuide', label: '사용 방법', children: usageGuide() },
  { key: 'balanceCheck', label: '잔액 확인', children: balanceCheck() },
  { key: 'cardManagement', label: '카드 관리', children: cardManagement() },
  { key: 'paymentRefund', label: '결제 및 환불', children: paymentRefund() },
  { key: 'convenienceFeatures', label: '편의기능', children: convenienceFeatures() },
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
      {tabs[activeIndex].children}
    </>
  );
}

export default App;
