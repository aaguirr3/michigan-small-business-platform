(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/michigan-small-business-platform-3/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/michigan-small-business-platform-3/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/michigan-small-business-platform-3/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/michigan-small-business-platform-3/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "border-b border-border/50 bg-white/95 backdrop-blur-sm sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3 flex-shrink-0 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 40 40",
                                    className: "w-6 h-6 text-primary",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 4c-2.2 0-4 1.8-4 4v14c0 3.3 2.7 6 6 6h2v-2h-2c-2.2 0-4-1.8-4-4V8c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v2h2V8c0-2.2-1.8-4-4-4H12zm14 6v10c0 1.1.9 2 2 2s2-.9 2-2v-10c0-1.1-.9-2-2-2s-2 .9-2 2zm6 0v10c0 1.1.9 2 2 2s2-.9 2-2v-10c0-1.1-.9-2-2-2s-2 .9-2 2zM8 22h2v10c0 1.1-.9 2-2 2s-2-.9-2-2v-10zm4 0h2v10c0 1.1-.9 2-2 2s-2-.9-2-2v-10z"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                        lineNumber: 13,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                    lineNumber: 12,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:inline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: "MittenLaunch"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-foreground/50",
                                        children: "Michigan Business Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 sm:gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/grants",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium",
                                    children: "Grants"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/compliance",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium",
                                    children: "Permits"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/business-formation",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium",
                                    children: "Start Business"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/talent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium",
                                    children: "Talent"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/michigan-small-business-platform-3/components/header.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompliancePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/michigan-small-business-platform-3/components/header.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CompliancePage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("qa");
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("general");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [responses, setResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showDocUpload, setShowDocUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadedFile, setUploadedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Permit Checker State
    const [businessIdea, setBusinessIdea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessLocation, setBusinessLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAnalyzing, setIsAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [permitAnalyses, setPermitAnalyses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleAskQuestion = async (e)=>{
        e.preventDefault();
        if (!question.trim()) return;
        setIsLoading(true);
        // Simulate AI response - in production this would call the AI SDK
        const mockResponse = {
            id: Date.now().toString(),
            question: question,
            response: generateMockResponse(question, category),
            category: category,
            requiresLegalReview: shouldFlagLegal(question),
            timestamp: new Date().toLocaleString()
        };
        setResponses((prev)=>[
                mockResponse,
                ...prev
            ]);
        setQuestion("");
        setIsLoading(false);
    };
    const handleFileUpload = (e)=>{
        if (e.target.files?.[0]) {
            setUploadedFile(e.target.files[0].name);
        // In production, would upload to server for AI analysis
        }
    };
    const handlePermitCheck = async (e)=>{
        e.preventDefault();
        if (!businessIdea.trim()) return;
        setIsAnalyzing(true);
        // AI-powered permit analysis
        const analysis = generatePermitAnalysis(businessIdea, businessLocation);
        setPermitAnalyses((prev)=>[
                analysis,
                ...prev
            ]);
        setBusinessIdea("");
        setBusinessLocation("");
        setIsAnalyzing(false);
    };
    const generatePermitAnalysis = (idea, location)=>{
        const ideaLower = idea.toLowerCase();
        const locationLower = location.toLowerCase();
        const isRural = locationLower.includes("rural") || !locationLower.includes("detroit") && !locationLower.includes("grand rapids");
        const permits = [];
        const countyConsiderations = [];
        const costs = [];
        const steps = [];
        const missingDocs = [];
        // Business License (always required)
        permits.push("Michigan Business License");
        costs.push({
            item: "Business License",
            cost: "$50 - $200"
        });
        steps.push("Register your business name with the Michigan Department of Licensing and Regulatory Affairs (LARA)");
        missingDocs.push("Business name registration form");
        // Industry-specific permits
        if (ideaLower.includes("food") || ideaLower.includes("restaurant") || ideaLower.includes("food truck")) {
            permits.push("Food Service License");
            permits.push("Food Safety Certification");
            permits.push("Mobile Food Vendor Permit (if applicable)");
            costs.push({
                item: "Food Service License",
                cost: "$200 - $500"
            });
            costs.push({
                item: "Food Safety Certification",
                cost: "$100 - $300"
            });
            steps.push("Complete ServSafe or equivalent food safety training");
            steps.push("Pass health department inspection");
            missingDocs.push("Food safety certificate");
            missingDocs.push("Menu and food handling procedures");
        }
        if (ideaLower.includes("alcohol") || ideaLower.includes("bar") || ideaLower.includes("liquor")) {
            permits.push("Michigan Liquor License");
            costs.push({
                item: "Liquor License",
                cost: "$600 - $5,000+"
            });
            steps.push("Apply through Michigan Liquor Control Commission");
            steps.push("Complete background check and fingerprinting");
            missingDocs.push("Liquor license application");
            missingDocs.push("Background check results");
        }
        if (ideaLower.includes("retail") || ideaLower.includes("store") || ideaLower.includes("shop")) {
            permits.push("Sales Tax License");
            costs.push({
                item: "Sales Tax License",
                cost: "Free"
            });
            steps.push("Register for sales tax with Michigan Department of Treasury");
            missingDocs.push("Sales tax registration form");
        }
        if (ideaLower.includes("healthcare") || ideaLower.includes("medical") || ideaLower.includes("clinic")) {
            permits.push("Healthcare Facility License");
            permits.push("Professional Licensing (if applicable)");
            costs.push({
                item: "Healthcare License",
                cost: "$500 - $2,000"
            });
            steps.push("Apply through Michigan Department of Health and Human Services");
            missingDocs.push("Professional licenses for staff");
            missingDocs.push("Facility inspection report");
        }
        if (ideaLower.includes("childcare") || ideaLower.includes("daycare")) {
            permits.push("Childcare License");
            permits.push("Background Checks (all staff)");
            costs.push({
                item: "Childcare License",
                cost: "$200 - $500"
            });
            steps.push("Complete childcare licensing application");
            steps.push("Pass home/facility safety inspection");
            missingDocs.push("Background checks for all staff");
            missingDocs.push("Safety inspection report");
        }
        // Zoning and location
        if (ideaLower.includes("home") || ideaLower.includes("residential")) {
            permits.push("Home Occupation Permit");
            countyConsiderations.push("Check local zoning ordinances for home-based businesses");
            steps.push("Verify your property is zoned for business use");
            missingDocs.push("Property deed or lease agreement");
        }
        permits.push("Zoning Permit");
        costs.push({
            item: "Zoning Permit",
            cost: "$50 - $300"
        });
        steps.push("Verify property zoning compliance with local planning department");
        missingDocs.push("Property address and zoning verification");
        // County-specific considerations
        if (isRural) {
            countyConsiderations.push("Rural counties may have simplified permit processes");
            countyConsiderations.push("Check with county clerk for local business registration requirements");
            countyConsiderations.push("Some rural areas offer reduced fees for new businesses");
        } else {
            countyConsiderations.push("Urban areas may require additional permits (signage, parking, etc.)");
            countyConsiderations.push("Check city-specific business requirements");
        }
        // EIN and tax
        permits.push("Federal EIN (Employer Identification Number)");
        costs.push({
            item: "EIN Registration",
            cost: "Free"
        });
        steps.push("Apply for EIN through IRS (can be done online)");
        missingDocs.push("EIN application (SS-4 form)");
        // Employment considerations
        if (ideaLower.includes("employ") || ideaLower.includes("hire") || ideaLower.includes("staff")) {
            permits.push("Workers' Compensation Insurance");
            permits.push("Unemployment Insurance Registration");
            costs.push({
                item: "Workers' Comp Insurance",
                cost: "$500 - $2,000/year"
            });
            steps.push("Register with Michigan Department of Labor and Economic Opportunity");
            missingDocs.push("Workers' compensation policy");
        }
        return {
            id: Date.now().toString(),
            businessIdea: idea,
            location: location || "Michigan",
            requiredPermits: permits,
            countyConsiderations: countyConsiderations,
            costs: costs,
            steps: steps,
            missingDocuments: missingDocs,
            timestamp: new Date().toLocaleString()
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-bold text-foreground mb-3 tracking-tight",
                                children: "Permits & Compliance"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-foreground/60 max-w-2xl",
                                children: "Check what permits you need, get compliance answers, and understand Michigan business regulations—all powered by AI."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 mb-6 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("qa"),
                                className: `px-4 py-2 font-medium transition-colors ${activeTab === "qa" ? "border-b-2 border-primary text-primary" : "text-foreground/60 hover:text-foreground"}`,
                                children: "Q&A Assistant"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("permit"),
                                className: `px-4 py-2 font-medium transition-colors ${activeTab === "permit" ? "border-b-2 border-primary text-primary" : "text-foreground/60 hover:text-foreground"}`,
                                children: "Permit Checker"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    activeTab === "qa" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-border mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-foreground",
                                                        children: "Ask a Question"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        children: "Ask about tax compliance, licensing, employment law, safety, or other business compliance topics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    onSubmit: handleAskQuestion,
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-foreground mb-2",
                                                                    children: "Compliance Category"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: category,
                                                                    onChange: (e)=>setCategory(e.target.value),
                                                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "general",
                                                                            children: "General Business"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 262,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "tax",
                                                                            children: "Tax Compliance"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 263,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "licensing",
                                                                            children: "Licensing & Permits"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 264,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "employment",
                                                                            children: "Employment Law"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "safety",
                                                                            children: "Health & Safety"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 266,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "labor",
                                                                            children: "Labor Regulations"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 267,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-foreground mb-2",
                                                                    children: "Your Question"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    placeholder: "e.g., What are the requirements for getting a business license in Michigan?",
                                                                    value: question,
                                                                    onChange: (e)=>setQuestion(e.target.value),
                                                                    rows: 4,
                                                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "submit",
                                                            className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground",
                                                            disabled: isLoading || !question.trim(),
                                                            children: isLoading ? "Getting Answer..." : "Get AI Answer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    responses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-foreground mb-4",
                                                children: "Your Questions & Answers"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: responses.map((response)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                        className: "border-border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start justify-between gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                                    className: "text-lg text-foreground",
                                                                                    children: response.question
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                    lineNumber: 303,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                                    className: "mt-2",
                                                                                    children: [
                                                                                        "Category: ",
                                                                                        response.category.charAt(0).toUpperCase() + response.category.slice(1)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                    lineNumber: 304,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        response.requiresLegalReview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold whitespace-nowrap",
                                                                            children: "⚠️ Legal Review Recommended"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 309,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-muted/50 p-4 rounded-lg mb-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-foreground leading-relaxed",
                                                                            children: response.response
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 317,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 316,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    response.requiresLegalReview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-accent/10 border border-accent/20 p-4 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-foreground font-medium mb-2",
                                                                                children: "Important Notice"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 321,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-foreground/80",
                                                                                children: "This topic involves legal considerations. We recommend consulting with a qualified attorney in Michigan to ensure your business is fully compliant."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 322,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 320,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-foreground/50 mt-4",
                                                                        children: response.timestamp
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 328,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, response.id, true, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-foreground",
                                                        children: "Document Review"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        children: "Upload business documents for AI analysis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                onChange: handleFileUpload,
                                                                className: "hidden",
                                                                id: "file-upload",
                                                                accept: ".pdf,.doc,.docx,.txt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "file-upload",
                                                                className: "cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl mb-2",
                                                                        children: "📄"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-foreground",
                                                                        children: uploadedFile ? uploadedFile : "Click to upload or drag and drop"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 356,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-foreground/50 mt-1",
                                                                        children: "PDF, DOC, or TXT files"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 17
                                                    }, this),
                                                    uploadedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        className: "w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground",
                                                        size: "sm",
                                                        children: "Analyze Document"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-foreground",
                                                        children: "Quick Resources"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        children: "Common compliance topics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 375,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-sm text-foreground",
                                                                children: "Tax Filing Deadlines"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-foreground/60",
                                                                children: "Michigan business tax schedule"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-sm text-foreground",
                                                                children: "Business License Requirements"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-foreground/60",
                                                                children: "What you need to start legally"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-sm text-foreground",
                                                                children: "Employment Law Basics"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-foreground/60",
                                                                children: "Employee rights & responsibilities"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-sm text-foreground",
                                                                children: "Workplace Safety Standards"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-foreground/60",
                                                                children: "OSHA & Michigan requirements"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-sm text-foreground",
                                                                children: "Environmental Compliance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-foreground/60",
                                                                children: "Regulations for your industry"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-accent/30 bg-accent/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm text-foreground",
                                                    children: "Disclaimer"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-foreground/70 leading-relaxed",
                                                    children: "This tool provides general information only and is not legal advice. Always consult with qualified professionals (attorneys, accountants, etc.) before making compliance decisions."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    activeTab === "permit" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-foreground",
                                                children: "AI Permit Checker"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: "Describe your business idea and location to get a comprehensive list of required Michigan permits, licenses, costs, and steps."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handlePermitCheck,
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-foreground mb-2",
                                                            children: "Describe Your Business Idea"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            placeholder: "e.g., I want to start a food truck in Alpena selling tacos and burritos",
                                                            value: businessIdea,
                                                            onChange: (e)=>setBusinessIdea(e.target.value),
                                                            rows: 4,
                                                            className: "w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-foreground mb-2",
                                                            children: "Business Location (City/County)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "e.g., Alpena, Alpena County or Rural Michigan",
                                                            value: businessLocation,
                                                            onChange: (e)=>setBusinessLocation(e.target.value),
                                                            className: "w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "submit",
                                                    className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground",
                                                    disabled: isAnalyzing || !businessIdea.trim(),
                                                    children: isAnalyzing ? "Analyzing Permits..." : "Check Required Permits"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this),
                            permitAnalyses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-foreground mb-4",
                                        children: "Your Permit Analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: permitAnalyses.map((analysis)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "border-border",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                            className: "text-foreground",
                                                                            children: analysis.businessIdea
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 478,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                            className: "mt-1",
                                                                            children: [
                                                                                "📍 ",
                                                                                analysis.location
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                            lineNumber: 479,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-foreground/50",
                                                                    children: analysis.timestamp
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-foreground mb-3 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "📋"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 488,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " Required Permits & Licenses (",
                                                                            analysis.requiredPermits.length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 487,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                                                                        children: analysis.requiredPermits.map((permit, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-3 bg-primary/10 border border-primary/20 rounded-lg",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-foreground",
                                                                                    children: permit
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                    lineNumber: 493,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, idx, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 492,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 490,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 486,
                                                                columnNumber: 25
                                                            }, this),
                                                            analysis.countyConsiderations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-foreground mb-3 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "🏛️"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 503,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " County-Level Considerations"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 502,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "space-y-2",
                                                                        children: analysis.countyConsiderations.map((consideration, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "text-sm text-foreground flex items-start gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "•"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                        lineNumber: 508,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: consideration
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                        lineNumber: 509,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, idx, true, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 507,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 505,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-foreground mb-3 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "💰"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 519,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " Estimated Costs"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 518,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2",
                                                                        children: [
                                                                            analysis.costs.map((cost, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex justify-between items-center p-2 bg-muted/50 rounded",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-sm text-foreground",
                                                                                            children: cost.item
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                            lineNumber: 524,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-sm font-semibold text-foreground",
                                                                                            children: cost.cost
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                            lineNumber: 525,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                    lineNumber: 523,
                                                                                    columnNumber: 31
                                                                                }, this)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pt-2 border-t border-border",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex justify-between items-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-semibold text-foreground",
                                                                                            children: "Estimated Total"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                            lineNumber: 530,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-bold text-primary",
                                                                                            children: [
                                                                                                "$",
                                                                                                analysis.costs.reduce((sum, c)=>{
                                                                                                    const num = parseInt(c.cost.replace(/[^0-9]/g, "")) || 0;
                                                                                                    return sum + num;
                                                                                                }, 0).toLocaleString(),
                                                                                                "+"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                            lineNumber: 531,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                    lineNumber: 529,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 528,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 521,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-foreground mb-3 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "✅"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 545,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " Steps to Get Started"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 544,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                                        className: "space-y-2 list-decimal list-inside",
                                                                        children: analysis.steps.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "text-sm text-foreground",
                                                                                children: step
                                                                            }, idx, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 549,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 547,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 543,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-foreground mb-3 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "📄"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 557,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " Documents You'll Need"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 556,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: analysis.missingDocuments.map((doc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$michigan$2d$small$2d$business$2d$platform$2d$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium",
                                                                                children: doc
                                                                            }, idx, false, {
                                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                                lineNumber: 561,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, analysis.id, true, {
                                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                                lineNumber: 470,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                        lineNumber: 420,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/michigan-small-business-platform-3/app/compliance/page.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s(CompliancePage, "nKhP8qTu8wCE5AU27t4T+wkVug4=");
_c = CompliancePage;
// Mock response generator - in production would use AI SDK
function generateMockResponse(question, category) {
    const responses = {
        tax: `Michigan businesses must file annual business tax returns with the Michigan Department of Treasury. For LLCs and S-Corps, you'll need to file Form MI-1040 and pay the Michigan Business Tax. Sales tax is applicable on most goods and services. Quarterly estimated tax payments are required if you expect to owe more than $500 in taxes. Keep detailed records of all income and expenses for at least 7 years. Consider consulting a Michigan CPA for your specific situation.`,
        licensing: `Business licenses in Michigan vary by industry and location. You'll typically need: (1) A state business license, (2) Industry-specific permits, (3) County/local business licenses. The process usually takes 2-4 weeks. You can apply online through Michigan.gov or through your local county clerk. Document requirements vary - have your business plan, ownership information, and location details ready.`,
        employment: `When hiring employees in Michigan, you must: Obtain an EIN from the IRS, Register with the Michigan Department of Labor, Withhold payroll taxes, Provide workers' compensation insurance, Follow minimum wage laws ($10.33/hour as of 2024), Comply with break laws (meal periods required for shifts over 6 hours). Keep detailed payroll records for at least 3 years. Consult an employment attorney about your employee handbook and policies.`,
        safety: `Michigan follows OSHA standards for workplace safety. Requirements include: Maintaining a safe work environment, Having emergency procedures, Proper equipment training, Injury reporting within 24 hours, Maintaining safety records for 5+ years. Conduct regular safety audits and document everything. Industry-specific requirements may apply to your business.`,
        general: `All Michigan businesses must: Have a business structure (sole proprietorship, LLC, Corporation), Obtain an EIN from the IRS, Register with the state, Pay appropriate taxes, Maintain business records, Comply with employment laws if you have employees, Obtain necessary licenses and permits. Start by visiting Michigan.gov/business for official guidance.`
    };
    return responses[category] || responses["general"] || "We recommend consulting with a Michigan business attorney or accountant for detailed guidance on your specific situation.";
}
function shouldFlagLegal(question) {
    const legalKeywords = [
        "contract",
        "lawsuit",
        "dispute",
        "liability",
        "attorney",
        "legal",
        "agreement",
        "employment contract",
        "intellectual property",
        "trademark",
        "patent",
        "copyright"
    ];
    return legalKeywords.some((keyword)=>question.toLowerCase().includes(keyword));
}
var _c;
__turbopack_context__.k.register(_c, "CompliancePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_michigan-small-business-platform-3_1341142c._.js.map