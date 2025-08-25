import { createContext, useContext, useState, type ReactNode } from 'react';

// ts 환경에서 context api 사용시 타입 지정 필요
// 기존 const OverlayContext = createContext(); 코드는 파라미터 타입을 지정하지 않아서 any로 타입이 지정됨
// createContext()는 기본값이 undefined 이기 때문에 useOverlay 내부의 useContext 사용시 에러가 터질 수 있음
type OverlayContextValue = {
  isOverlay: boolean;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const OverlayContext = createContext<OverlayContextValue | undefined>(undefined);

// children을 자식으로 넘겨받을때 구조분해 하기 전에 ReactNode 타입을 붙여줘야함
type Props = { children: ReactNode };

export function OverlayProvider({ children }: Props) {
  const [isOverlay, setOverlay] = useState(false);

  return (
    <OverlayContext.Provider value={{ isOverlay, setOverlay }}>{children}</OverlayContext.Provider>
  );
}

// createContext<... | undefined>(undefined)을 쓰면 호출 함수에서 null 체크를 해줘야 안전하게 사용가능
export function useOverlay() {
  const ctx = useContext(OverlayContext);
  if (!ctx) throw new Error('useOverlay must be used within OverlayProvider');
  return ctx;
}
