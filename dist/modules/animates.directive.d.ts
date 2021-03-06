import { ElementRef, OnInit } from '@angular/core';
import { AnimationService } from './animation.service';
import { AnimationBuilder } from '../builder';
import { AnimationOptions } from '../contracts';
export declare class AnimatesDirective implements OnInit {
    private _elementRef;
    private _defaultOptions;
    private _initOptions;
    private _animationBuilder;
    animates: AnimationOptions;
    animatesOnInit: AnimationOptions;
    animationBuilder: AnimationBuilder;
    constructor(_elementRef: ElementRef, animationService: AnimationService);
    ngOnInit(): void;
    start(options?: AnimationOptions): Promise<HTMLElement>;
    hide(options?: AnimationOptions): Promise<HTMLElement>;
    show(options?: AnimationOptions): Promise<HTMLElement>;
    animate(): Promise<HTMLElement>;
    pause(): void;
    resume(): void;
    toggle(): void;
    stop(): void;
    private setOptions(options);
}
