
interface Window {
  ktt10?: {
    setup: (config: { 
      id?: string; 
      accountId: string; 
      color: string;
      icon?: string;
      type?: string;
    }) => void;
    open: () => void;
    close: () => void;
  };
}
