module.exports = [
(()=>{"use strict";return[
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const title = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"].name} — ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"].descriptor}`;
const ogImage = {
    url: "/assets/social/og-image.png",
    width: 1200,
    height: 630,
    alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"].name}: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"].tagline}`
};
const metadata = {
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"]),
    title: {
        default: title,
        template: `%s · ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"].name}`
    },
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"].description,
    alternates: {
        canonical: "/"
    },
    openGraph: {
        type: "website",
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"],
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"].name,
        title,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"].description,
        images: [
            ogImage
        ]
    },
    twitter: {
        card: "summary_large_image",
        title,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"].description,
        images: [
            ogImage.url
        ]
    },
    icons: {
        icon: [
            {
                url: "/brand/favicon.svg",
                type: "image/svg+xml"
            },
            {
                url: "/brand/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png"
            },
            {
                url: "/brand/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png"
            },
            {
                url: "/brand/favicon.ico",
                sizes: "any"
            }
        ],
        apple: "/brand/apple-touch-icon.png"
    },
    manifest: "/site.webmanifest",
    robots: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALLOW_INDEXING"] ? {
        index: true,
        follow: true
    } : {
        index: false,
        follow: false
    }
};
const viewport = {
    themeColor: "#f6efe2",
    colorScheme: "light"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "skip-link",
                    href: "#main",
                    children: "Skip to content"
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/content/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** All editable business content lives here. Every business detail is fictional. */ __turbopack_context__.s([
    "ALLOW_INDEXING",
    ()=>ALLOW_INDEXING,
    "SITE_URL",
    ()=>SITE_URL,
    "brand",
    ()=>brand,
    "contact",
    ()=>contact,
    "gallery",
    ()=>gallery,
    "highlights",
    ()=>highlights,
    "hours",
    ()=>hours,
    "logos",
    ()=>logos,
    "photos",
    ()=>photos,
    "principles",
    ()=>principles,
    "serviceGroups",
    ()=>serviceGroups,
    "socials",
    ()=>socials,
    "team",
    ()=>team
]);
const SITE_URL = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const ALLOW_INDEXING = process.env.ALLOW_INDEXING === "true";
const brand = {
    name: "Arden & Shear",
    descriptor: "Barbers & Hair Studio",
    tagline: "Sharp lines, soft landings.",
    description: "Arden & Shear is a fictional barbershop and hair studio: precise cuts, honest color, and unhurried appointments. A web-design portfolio concept."
};
const logos = {
    compact: {
        src: "/brand/logo-compact.svg",
        width: 243,
        height: 40
    },
    compactLight: {
        src: "/brand/logo-compact-light.svg",
        width: 243,
        height: 40
    }
};
const contact = {
    phone: "(503) 555-0142",
    phoneHref: "tel:+15035550142",
    email: "hello@ardenandshear.example",
    address: [
        "214 Alder Row",
        "Alderbrook, OR 97000"
    ]
};
const hours = [
    {
        days: "Tuesday – Friday",
        time: "9 am – 7 pm"
    },
    {
        days: "Saturday",
        time: "8 am – 5 pm"
    },
    {
        days: "Sunday – Monday",
        time: "Closed"
    }
];
const socials = [
    {
        id: "instagram",
        label: "Instagram",
        href: process.env.INSTAGRAM_URL ?? "https://www.instagram.com/"
    },
    {
        id: "facebook",
        label: "Facebook",
        href: process.env.FACEBOOK_URL ?? "https://www.facebook.com/"
    },
    {
        id: "tiktok",
        label: "TikTok",
        href: process.env.TIKTOK_URL ?? "https://www.tiktok.com/"
    }
];
const serviceGroups = [
    {
        id: "barbering",
        title: "Barbering",
        icon: "scissors",
        blurb: "Scissor and clipper work, finished with a razor.",
        items: [
            {
                name: "Classic cut",
                price: 42,
                note: "45 min"
            },
            {
                name: "Skin fade",
                price: 48,
                note: "50 min"
            },
            {
                name: "Beard sculpt",
                price: 30,
                note: "30 min"
            },
            {
                name: "Hot-towel shave",
                price: 45,
                note: "40 min"
            },
            {
                name: "Kids’ cut, 12 & under",
                price: 30
            }
        ]
    },
    {
        id: "studio",
        title: "Hair studio",
        icon: "palette",
        blurb: "Cutting, color and care for every length.",
        items: [
            {
                name: "Cut & blow-dry",
                price: 68,
                from: true,
                note: "60 min"
            },
            {
                name: "Single-process color",
                price: 95,
                from: true
            },
            {
                name: "Balayage",
                price: 180,
                from: true,
                note: "3 hrs"
            },
            {
                name: "Gloss & tone",
                price: 65
            },
            {
                name: "Scalp treatment",
                price: 40
            }
        ]
    },
    {
        id: "together",
        title: "Together",
        icon: "users",
        blurb: "Pairings and small favors worth asking about.",
        items: [
            {
                name: "Cut + beard",
                price: 68,
                note: "75 min"
            },
            {
                name: "Wedding-day prep",
                price: 120,
                from: true
            },
            {
                name: "Senior cut, 65+",
                price: 34
            },
            {
                name: "Maintenance trim, within 3 weeks",
                price: 30
            }
        ]
    }
];
const highlights = [
    {
        label: "Skin fade",
        price: "$48",
        icon: "scissors"
    },
    {
        label: "Shave",
        price: "$45",
        icon: "sparkles"
    },
    {
        label: "Balayage",
        price: "from $180",
        icon: "palette"
    }
];
const team = [
    {
        name: "Mateo Arden",
        icon: "razor",
        role: "Founder · Master barber",
        specialty: "Skin fades & razor work",
        base: "/assets/team/team-01",
        bio: "Fifteen years behind the chair. Mateo opened the shop to prove a haircut can take an hour and still feel like a good use of one."
    },
    {
        name: "Priya Shah",
        icon: "palette",
        role: "Senior stylist",
        specialty: "Color & balayage",
        base: "/assets/team/team-02",
        bio: "Priya mixes every formula by hand and plans color around how you actually style your hair on a Tuesday."
    },
    {
        name: "Jonah Whitlock",
        icon: "mustache",
        role: "Barber",
        specialty: "Beards & scissor cuts",
        base: "/assets/team/team-03",
        bio: "A scissor-over-comb traditionalist with a soft spot for a well-kept beard line."
    },
    {
        name: "Lena Okafor",
        icon: "scissors",
        role: "Stylist",
        specialty: "Texture & curls",
        base: "/assets/team/team-04",
        bio: "Lena cuts curls dry, shape first, so what you see in the mirror is what you take home."
    }
];
const gallery = [
    {
        alt: "Dark wavy cut with a skin fade and a trimmed beard, side profile",
        ratio: "4/5"
    },
    {
        alt: "Auburn hair in a loose, messy bun with face-framing strands",
        ratio: "1/1"
    },
    {
        alt: "Swept-back brown cut with a clean taper, side profile",
        ratio: "4/5"
    },
    {
        alt: "Layered bob with caramel highlights, in the salon",
        ratio: "3/2"
    },
    {
        alt: "Tousled blonde bob with soft, wavy ends",
        ratio: "4/5"
    },
    {
        alt: "Dark curls with a low taper, head tilted down",
        ratio: "1/1"
    },
    {
        alt: "Long dark waves with soft caramel dimension",
        ratio: "4/5"
    },
    {
        alt: "Curly textured top with a tight fade, seen from behind in the salon",
        ratio: "3/2"
    },
    {
        alt: "Long, straight hair with honey balayage, from behind",
        ratio: "1/1"
    },
    {
        alt: "Tight curls on top with a low fade and a short beard",
        ratio: "4/5"
    },
    {
        alt: "Slicked-back cut with a skin fade and a groomed beard",
        ratio: "1/1"
    },
    {
        alt: "Curly top with a crisp fade, rear three-quarter view",
        ratio: "3/2"
    }
].map((g, i)=>({
        ...g,
        base: `/assets/gallery/cut-${String(i + 1).padStart(2, "0")}`
    }));
const photos = {
    hero: {
        base: "/assets/hero/hero",
        alt: "A stylist trimming a client's hair with scissors and a comb in a bright, plant-filled salon",
        ratio: "4/3"
    },
    interiors: [
        {
            base: "/assets/interior/interior-01",
            alt: "A row of barber chairs facing arched mirrors in warm afternoon light",
            ratio: "4/5"
        },
        {
            base: "/assets/interior/interior-02",
            alt: "The open salon floor with a slatted reception counter and tall windows",
            ratio: "3/2"
        }
    ]
};
const principles = [
    {
        icon: "clock",
        title: "Unhurried",
        text: "Every appointment carries buffer time, so nobody is watching the door."
    },
    {
        icon: "messages",
        title: "Consulted",
        text: "We talk first, cut second. You’ll know the plan before the first snip."
    },
    {
        icon: "check",
        title: "Kept",
        text: "Free neckline and fringe touch-ups for two weeks after any cut."
    }
];
}),
]})(),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=_0gbuayi-c4gh7._.js.map