export default function useScrollToElement(target: string): void {
  const elementId: HTMLElement | null = document.getElementById(target);

  elementId?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}