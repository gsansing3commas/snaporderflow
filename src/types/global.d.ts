
interface Window {
  ktt10?: {
    setup: (config: { id: string; accountId: string; color: string }) => void;
    open: () => void;
    close: () => void;
  };
}
