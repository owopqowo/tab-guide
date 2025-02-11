import { useRef, useState } from 'react';
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

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [subActiveIndex, setSubActiveIndex] = useState(0);
  const tabRefs = useRef([]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setSubActiveIndex(0);
    tabRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({ top: 0 });
  };

  const tabs = [
    {
      key: 'cardApplication',
      label: '카드 신청',
      nav: (
        <SubNav
          onSubNavClick={setSubActiveIndex}
          subActiveIndex={subActiveIndex}
          links={cardApplication.map(({ id, label }) => ({ key: id, href: `#${id}`, label }))}
        />
      ),
      children: <TabPanel subActiveIndex={subActiveIndex} sectionsData={cardApplication} />,
    },
    {
      key: 'cardRecharge',
      label: '카드 충전',
      nav: (
        <SubNav
          onSubNavClick={setSubActiveIndex}
          subActiveIndex={subActiveIndex}
          links={cardRecharge.map(({ id, label }) => ({ key: id, href: `#${id}`, label }))}
        />
      ),
      children: <TabPanel subActiveIndex={subActiveIndex} sectionsData={cardRecharge} />,
    },
    {
      key: 'usageGuide',
      label: '사용 방법',
      nav: (
        <SubNav
          onSubNavClick={setSubActiveIndex}
          subActiveIndex={subActiveIndex}
          links={usageGuide.map(({ id, label }) => ({ key: id, href: `#${id}`, label }))}
        />
      ),
      children: <TabPanel subActiveIndex={subActiveIndex} sectionsData={usageGuide} />,
    },
    {
      key: 'balanceCheck',
      label: '잔액 확인',
      nav: (
        <SubNav
          onSubNavClick={setSubActiveIndex}
          subActiveIndex={subActiveIndex}
          links={balanceCheck.map(({ id, label }) => ({ key: id, href: `#${id}`, label }))}
        />
      ),
      children: <TabPanel subActiveIndex={subActiveIndex} sectionsData={balanceCheck} />,
    },
    {
      key: 'cardManagement',
      label: '카드 관리',
      nav: (
        <SubNav
          onSubNavClick={setSubActiveIndex}
          subActiveIndex={subActiveIndex}
          links={cardManagement.map(({ id, label }) => ({ key: id, href: `#${id}`, label }))}
        />
      ),
      children: <TabPanel subActiveIndex={subActiveIndex} sectionsData={cardManagement} />,
    },
    {
      key: 'paymentRefund',
      label: '결제 및 환불',
      nav: (
        <SubNav
          onSubNavClick={setSubActiveIndex}
          subActiveIndex={subActiveIndex}
          links={paymentRefund.map(({ id, label }) => ({ key: id, href: `#${id}`, label }))}
        />
      ),
      children: <TabPanel subActiveIndex={subActiveIndex} sectionsData={paymentRefund} />,
    },
    {
      key: 'convenienceFeatures',
      label: '편의기능',
      nav: (
        <SubNav
          onSubNavClick={setSubActiveIndex}
          subActiveIndex={subActiveIndex}
          links={convenienceFeatures.map(({ id, label }) => ({ key: id, href: `#${id}`, label }))}
        />
      ),
      children: <TabPanel subActiveIndex={subActiveIndex} sectionsData={convenienceFeatures} />,
    },
  ];

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
        {tabs[activeIndex].nav}
      </header>
      {tabs[activeIndex].children}
    </>
  );
}

export default App;
