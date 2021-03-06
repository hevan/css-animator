import { AnimationOptions } from '../contracts';
export declare class AnimationBuilder {
    [key: string]: any;
    private _type;
    private _fillMode;
    private _timingFunction;
    private _playState;
    private _direction;
    private _duration;
    private _delay;
    private _iterationCount;
    private _animationClasses;
    private _classHistory;
    private _listeners;
    private _timeouts;
    private _keepFlow;
    show(element: HTMLElement): Promise<HTMLElement>;
    hide(element: HTMLElement): Promise<HTMLElement>;
    stop(element: HTMLElement, reset?: boolean, detach?: boolean): Promise<HTMLElement>;
    animate(element: HTMLElement, mode?: string): Promise<HTMLElement>;
    addAnimationClass(name: string): AnimationBuilder;
    removeAnimationClass(name: string): AnimationBuilder;
    setOptions(options: AnimationOptions): AnimationBuilder;
    setType(type: string): AnimationBuilder;
    setFillMode(fillMode: string): AnimationBuilder;
    setTimingFunction(timingFunction: string): AnimationBuilder;
    setPlayState(playState: string): AnimationBuilder;
    setDirection(direction: string): AnimationBuilder;
    setDuration(duration: string | number): AnimationBuilder;
    setDelay(delay: string | number): AnimationBuilder;
    setIterationCount(iterationCount: string | number): AnimationBuilder;
    applyAllProperties(element: HTMLElement): AnimationBuilder;
    applyFillMode(element: HTMLElement): AnimationBuilder;
    applyTimingFunction(element: HTMLElement): AnimationBuilder;
    applyPlayState(element: HTMLElement): AnimationBuilder;
    applyDirection(element: HTMLElement): AnimationBuilder;
    applyDuration(element: HTMLElement): AnimationBuilder;
    applyDelay(element: HTMLElement): AnimationBuilder;
    applyIterationCount(element: HTMLElement): AnimationBuilder;
    setKeepFlow(keepFlow: boolean): AnimationBuilder;
    type: string;
    fillMode: string;
    timingFunction: string;
    playState: string;
    direction: string | number;
    delay: string | number;
    iterationCount: string | number;
    keepFlow: boolean;
    private applyStyle(element, property, value, shim?);
    private removeListenersForElement(element, detach?, reject?);
    private removeTimeoutsForElement(element, detach?, reject?);
    private resetElement(element);
    private animationEndEvent(element);
    private animationStartEvent(element);
    private applyCssClasses(element, add?);
    private removeCssClasses(element);
    private getElementPosition(element);
    private getElementInitialProperties(element);
    private pinElement(element, initialProps);
    private checkValue(value);
    private getValueOrDefault(obj, objKey, fallback?);
}
