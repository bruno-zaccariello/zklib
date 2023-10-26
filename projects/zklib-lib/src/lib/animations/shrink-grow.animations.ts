import { trigger, state, style, animate, transition } from '@angular/animations';

export const shrinkGrowAnimation = trigger('shrinkGrow', [
    state('normal', style({
        transform: 'scale(1)'
    })),
    state('shrink', style({
        transform: 'scale(0.9)'
    })),
    state('grown', style({
        transform: 'scale(1.2)'
    })),
    transition('normal => shrink', [
        animate('100ms')
    ]),
    transition('shrink => grown', [
        animate('200ms')
    ]),
    transition('grown => normal', [
        animate('300ms')
    ])
]);
