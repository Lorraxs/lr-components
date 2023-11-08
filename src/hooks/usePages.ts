import { useCallback, useEffect, useMemo, useState } from 'react';

export type PageItem = {
  name: string;
  label?: string;
  element?: React.ReactNode;
  childrens?: PageItem[];
  onRender?: () => void;
};

export type UsePages = {
  activePageIndex: number;
  activePage: PageItem;
  switchPage: (pageIdx: number) => void;
  pageItems: (PageItem & {
    isSelect: boolean;
    onClick: () => void;
  })[];
};

const usePages = (pages: PageItem[], isShowing: boolean) => {
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const activePage = useMemo(
    () => pages[activePageIndex],
    [activePageIndex, pages]
  );
  const switchPage = useCallback(
    (pageIdx: number) => {
      const page = pages[pageIdx];
      if (page) {
        setActivePageIndex(pageIdx);
      }
    },
    [pages, setActivePageIndex]
  );
  const pageItems = useMemo(() => {
    return pages.map((page, idx) => {
      return {
        ...page,
        onClick: () => {
          switchPage(idx);
        },
        isSelect: idx === activePageIndex,
      };
    });
  }, [pages, switchPage, activePageIndex]);

  useEffect(() => {
    if (activePage?.onRender && isShowing) {
      activePage.onRender();
    }
  }, [activePage, isShowing, pages]);

  useEffect(() => {
    setActivePageIndex(0);
  }, [pages]);

  return {
    activePageIndex,
    activePage,
    switchPage,
    pageItems,
  };
};

export default usePages;
