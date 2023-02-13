/// <reference types="react" />
declare const NavigatePrev: ({ onPrev }: {
    onPrev(): void;
}) => JSX.Element;
declare const NavigateNext: ({ onNext }: {
    onNext(): void;
}) => JSX.Element;
export { NavigatePrev, NavigateNext };
