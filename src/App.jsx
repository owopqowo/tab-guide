import { useRef, useState } from 'react';
import CardApplication from './CardApplication';
import CardRecharge from './CardRecharge';
import UsageGuide from './UsageGuide';
import BalanceCheck from './BalanceCheck';
import CardManagement from './CardManagement';
import PaymentRefund from './PaymentRefund';
import ConvenienceFeatures from './ConvenienceFeatures';

const tabs = [
  { key: 'cardApplication', label: '카드 신청', children: CardApplication() },
  { key: 'cardRecharge', label: '카드 충전', children: CardRecharge() },
  { key: 'usageGuide', label: '사용 방법', children: UsageGuide() },
  { key: 'balanceCheck', label: '잔액 확인', children: BalanceCheck() },
  { key: 'cardManagement', label: '카드 관리', children: CardManagement() },
  { key: 'paymentRefund', label: '결제 및 환불', children: PaymentRefund() },
  { key: 'convenienceFeatures', label: '편의기능', children: ConvenienceFeatures() },
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
