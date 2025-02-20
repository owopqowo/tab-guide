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
import IconArrowUp from './arrow-up.svg?react';
import IconMoon from './moon.svg?react';
import IconSun from './sun.svg?react';

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
  const [isdarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
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

  const handleCheck = () => {
    setIsDarkMode((currentTheme) => {
      const htmlElement = document.documentElement;
      const updatedTheme = !currentTheme;
  
      if (updatedTheme) {
        htmlElement.setAttribute("data-theme", "dark");
      } else {
        htmlElement.setAttribute("data-theme", "light");
      }
  
      return updatedTheme;
    });
  };

  useEffect(() => {
    const htmlElement = document.documentElement;

    const handleScroll = () => {
      if (window.scrollY > document.querySelector('#header').offsetHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (isdarkMode) {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header" className="sticky top-0 bg-white dark:bg-neutral-800">
        <div className="flex items-center justify-between px-3 py-1.5">
          <h1 className="text-xl">이용 안내</h1>
          <label
            className={`relative z-0 flex h-7.5 w-15 cursor-pointer items-center justify-between rounded-full border-1 border-neutral-400 dark:border-neutral-500 p-0.5 before:absolute before:-z-10 before:h-6 before:w-6 before:rounded-full before:bg-black dark:before:bg-white before:transition-transform before:content-[''] ${isdarkMode ? 'before:translate-x-7.5' : ''}`}
          >
            <input type="checkbox" className="a11y-hidden" checked={isdarkMode} onChange={handleCheck} />
            <IconSun className={`mx-[3px] h-4.5 w-4.5 ${isdarkMode ? 'fill-neutral-400 dark:fill-neutral-500' : 'fill-white dark:fill-black'} `} />
            <IconMoon className={`mx-[3px] h-4.5 w-4.5 ${isdarkMode ? 'fill-white dark:fill-black' : 'fill-neutral-400 dark:fill-neutral-500'} `} />
          </label>
        </div>
        <nav className="overflow-auto border-b border-neutral-200 dark:border-neutral-600" role="tablist">
          <div className="flex w-fit px-3">
            {tabs.map((tab, index) => {
              return (
                <button
                  ref={(el) => (tabRefs.current[index] = el)}
                  key={tab.key}
                  type="button"
                  className={`relative flex-auto cursor-pointer px-2 py-4 whitespace-nowrap after:absolute after:right-0 after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-black after:content-[''] ${
                    activeIndex === index ? 'font-bold after:bg-black dark:after:bg-white' : 'after:bg-transparent'
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
        className={`fixed right-4 bottom-4 cursor-pointer rounded-full border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 p-3 transition-all ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={scrollToTop}
      >
        <IconArrowUp className="h-8 w-8 fill-gray-800 dark:fill-gray-100" />
      </button>
    </>
  );
}

export default App;
