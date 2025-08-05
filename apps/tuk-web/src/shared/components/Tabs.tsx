import { createContext, useContext, ReactNode, HTMLAttributes } from 'react';

import { cn } from '@/shared/lib';

interface TabsContextType {
  value: string;
  onChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const Tabs = ({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) => {
  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children }: { children: ReactNode }) => {
  return <div className="flex h-[3.375rem] gap-4 border-b border-gray-200 px-5">{children}</div>;
};

interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

const TabsTrigger = ({ value, children, className, ...props }: TabsTriggerProps) => {
  const { value: activeValue, onChange } = useTabsContext();

  const isActive = value === activeValue;

  return (
    <button
      className={cn(
        'pretendard-body-14-M relative w-[5.625rem] transition-colors',
        isActive ? 'text-gray-900' : 'text-gray-500',
        className
      )}
      onClick={() => onChange(value)}
      {...props}
    >
      {children}
      {isActive && (
        <div className="absolute bottom-0 left-1/2 h-[2px] w-[5.625rem] -translate-x-1/2 bg-gray-900" />
      )}
    </button>
  );
};

const useTabsContext = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs.Trigger must be used within <Tabs>');
  return ctx;
};

const TabsContent = ({
  value: contentValue,
  children,
  className,
  ...props
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) => {
  const { value: activeValue } = useTabsContext();

  if (activeValue !== contentValue) return null;

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;
