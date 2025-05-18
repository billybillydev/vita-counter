declare namespace Alpine {
    const primitiveAttributes = [
        "x-show",
        "x-model",
        "x-modelable",
        "x-text",
        "x-init",
        "x-effect",
        "x-teleport",
        "x-cloak",
        "x-id",
        "x-ref",
        "x-html",
        "x-ignore",
    ] as const;

    const eventNames = [
        "click",
        "submit",
        "change",
        "input",
        "focus",
        "blur",
    ] as const;

    const arrowKeys = ["up", "down", "left", "right"] as const;

    const controlKeys = ["caps-lock", "ctrl", "alt", "meta", "shift"] as const;

    const actionKeys = [
        "tab",
        "enter",
        "escape",
        "space",
        "slash",
    ] as const;

    const navigationKeys = ["page-up", "page-down"] as const;

    const keyboardKeys = [
        ...arrowKeys,
        ...controlKeys,
        ...actionKeys,
        ...navigationKeys,
    ] as const;

    const mouseEventNames = ["mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave"] as const;

    const modifiers = [
        "stop",
        "prevent",
        "outside",
        "window",
        "document",
        "debounce",
        "throttle",
        "once",
        "passive",
        "capture",
        "self",
    ] as const;

    const transitionSuffixes = [
        ":enter",
        ":leave",
        ":enter-start",
        ":enter-end",
        ":leave-start",
        ":leave-end",
    ] as const;

    const htmlAttributes = [
        "class",
        "style",
        "id",
        "name",
        "value",
        "type",
        "placeholder",
        "disabled",
        "readonly",
        "autofocus",
        "required",
        "checked",
        "selected",
        "multiple",
        "min",
        "max",
        "step",
        "accept",
        "autocapitalize",
        "autocorrect",
        "autocomplete",
        "src",
        "srcset",
        "alt",
        "href",
        "target",
        "rel",
        "spellcheck",
        "tabindex",
        "accesskey",
        "inputmode",
        "dir",
        "lang",
        "contenteditable",
        "draggable",
        "dropzone",
    ] as const;

    type EventBinding<T, U = undefined, V = undefined, W = undefined> = W extends string | number
        ? `${T & string}.${U & string}.${V & string}.${W & string}`
        : V extends string | number
        ? `${T & string}.${U & string}.${V & string}`
        : U extends string | number
        ? `${T & string}.${U & string}`
        : `${T & string}`;

    type EventPrefix = "@" | "x-on:";

    export type PrimitiveAttibute = Record<
        (typeof primitiveAttributes)[number],
        unknown
    >;
    export type EventAttributes = Record<
        `${EventPrefix}${EventBinding<
            (typeof eventNames)[number],
            (typeof modifiers)[number] | undefined,
        >}`,
        unknown
    >;

    export type KeyboardAttributes = Record<
        `${EventPrefix}${| EventBinding<
            "keydown" | "keyup",
            (typeof controlKeys)[number] | undefined,
            (typeof actionKeys)[number] | undefined,
            (typeof modifiers)[number] | undefined
        >
        | EventBinding<
            "keydown" | "keyup",
            (typeof controlKeys)[number] | undefined,
            (typeof actionKeys)[number] | undefined
        >
        | EventBinding<
            "keydown" | "keyup",
            (typeof controlKeys)[number] | undefined,
            (typeof modifiers)[number] | undefined
        >
        | EventBinding<
            "keydown" | "keyup",
            (typeof actionKeys)[number] | undefined,
            (typeof modifiers)[number] | undefined
        >
        | EventBinding<
            "keydown" | "keyup",
            (typeof modifiers)[number] | undefined
        >
        }`,
        unknown
    >;

    export type MouseAttributes = Record<
        `${EventPrefix}${| EventBinding<
            typeof mouseEventNames,
            (typeof controlKeys)[number] | undefined,
            (typeof modifiers)[number] | undefined
        >
        | EventBinding<typeof mouseEventNames, (typeof modifiers)[number] | undefined>
        }`,
        unknown
    >;

    export type TransitionAttributes = {
        [key in `x-transition${
        |   EventBinding<(typeof transitionSuffixes)[number]>
        |   EventBinding<(typeof transitionSuffixes)[number], string | undefined>
        | ""}` | `x-transition.${string}`]: unknown;
    };

    export type BindAttributes = {
        [key in `${":" | "x-bind:"}${(typeof htmlAttributes)[number]}`]: unknown;
    };

    export type EncapsulateAttributes = PrimitiveAttibute &
        EventAttributes &
        KeyboardAttributes &
        MouseAttributes &
        TransitionAttributes &
        BindAttributes;
}
