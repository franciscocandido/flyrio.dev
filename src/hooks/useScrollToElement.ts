export default function useScrollToElement(target: string): void {
  const elementId: HTMLElement | null = document.getElementById(target);

  return elementId?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
