import { UseClickAway } from '@ari/types/hooks/use-click-away';
import { useEffect, useRef } from 'react';
/**
 * 检测点击目标元素外部的 Hook
 */
export const useClickAway: UseClickAway = (
    target,
    handler,
    events = ['mousedown', 'touchstart']
) => {
    const handlerRef = useRef(handler);
    handlerRef.current = handler;

    useEffect(() => {
        const listener = (event: Event) => {
            const targetElement = target instanceof HTMLElement ? target : target?.current;

            if (!targetElement?.contains(event.target as Node)) {
                handlerRef.current(event as MouseEvent | TouchEvent);
            }
        };

        events.forEach(event => {
            document.addEventListener(event, listener);
        });

        return () => {
            events.forEach(event => {
                document.removeEventListener(event, listener);
            });
        };
    }, [target, events]);
};