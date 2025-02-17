import { useEffect, useRef, useState } from 'react';
import TabPanel from './TabPanel';
import SubNav from './SubNav';
import {
  cardApplication,
  cardRecharge,
  usageGuide,
  balanceCheck,
  cardManagement,
  paymentRefund,
  convenienceFeatures,
} from './sections';
import IconArrowTop from './arrow-up.svg?react';

const tabs = [
  { key: 'cardApplication', label: '카드 신청', data: cardApplication },
  { key: 'cardRecharge', label: '카드 충전', data: cardRecharge },
  { key: 'usageGuide', label: '사용 방법', data: usageGuide },
  { key: 'balanceCheck', label: '잔액 확인', data: balanceCheck },
  { key: 'cardManagement', label: '카드 관리', data: cardManagement },
  { key: 'paymentRefund', label: '결제 및 환불', data: paymentRefund },
  { key: 'convenienceFeatures', label: '편의기능', data: convenienceFeatures },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [subActiveIndex, setSubActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const tabRefs = useRef([]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setSubActiveIndex(0);
    tabRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({ top: 0 });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > document.querySelector('#header').offsetHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header" className="sticky top-0 bg-white">
        <h1 className="a11y-hidden">이용 안내</h1>
        <nav className="overflow-auto border-b border-neutral-200" role="tablist">
          <div className="flex w-fit px-3">
            {tabs.map((tab, index) => {
              return (
                <button
                  ref={(el) => (tabRefs.current[index] = el)}
                  key={tab.key}
                  type="button"
                  className={`relative flex-auto cursor-pointer px-2 py-4 whitespace-nowrap after:absolute after:right-0 after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-black after:content-[''] ${
                    activeIndex === index ? 'font-bold after:bg-black' : 'after:bg-transparent'
                  }`}
                  onClick={() => handleClick(index)}
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-controls={tab.key}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </nav>
        <SubNav
          subActiveIndex={subActiveIndex}
          links={tabs[activeIndex].data.map(({ id, label }) => ({ key: id, href: `#${id}`, label }))}
        />
      </header>
      <TabPanel
        id={tabs[activeIndex].key}
        setSubActiveIndex={setSubActiveIndex}
        sectionsData={tabs[activeIndex].data}
      />
      <button
        type="button"
        className={`fixed right-4 bottom-4 cursor-pointer rounded-full border border-neutral-200 p-3 transition-all ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <IconArrowTop onClick={scrollToTop} width={50} height={50} className="h-8 w-8 fill-gray-800" />
      </button>
    </>
  );
}

export default App;
