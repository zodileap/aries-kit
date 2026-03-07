/**
 * 检测点击目标元素外部的 Hook
 * 
 * @param target - 目标元素
 * @param handler - 点击外部时的回调函数
 * @param events - 需要监听的事件，默认为 ['mousedown', 'touchstart']
 */
export type UseClickAway = (target: React.RefObject<HTMLElement> | HTMLElement | null, handler: (event: MouseEvent | TouchEvent) => void, events?: string[]) => void;
