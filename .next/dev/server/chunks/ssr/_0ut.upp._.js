module.exports = [
"[project]/categories-data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Edit this file to add new categories or add apps to existing categories.
// `logoEmoji` can be either an emoji OR an image URL (or data:image URL).
// Next.js page reads this default export.
const CATEGORIES_DATA = [
    {
        id: "quick-commerce",
        tabLabel: "Quick Commerce",
        name: "Quick Commerce",
        icon: "⚡",
        iconBg: "rgba(255,107,53,0.12)",
        apps: [
            {
                name: "Zepto",
                desc: "Groceries in 10 mins",
                url: "https://www.zeptonow.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.mSBSW2ohsX9FEn9nHHampA?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#1a0a0a",
                logoFontSize: "1.5rem",
                badgeText: "Top Pick",
                badgeVariant: "badge-top",
                cardGlow: "radial-gradient(circle at top left, rgba(255,50,50,0.06), transparent)"
            },
            {
                name: "Instamart",
                desc: "Swiggy's instant mart",
                url: "https://www.swiggy.com/instamart",
                logoEmoji: "https://th.bing.com/th/id/ODF.wrmWOVnmPU-5cDEwBsBXmw?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#1a0f00",
                badgeText: undefined,
                badgeVariant: undefined,
                cardGlow: "radial-gradient(circle at top left, rgba(255,140,0,0.06), transparent)"
            },
            {
                name: "Blinkit",
                desc: "Zomato's 10-min delivery",
                url: "https://blinkit.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.yu5tcbqlpmr7qhzNVnO2Cg?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#1a1600",
                badgeText: "Top Pick",
                badgeVariant: "badge-top",
                cardGlow: "radial-gradient(circle at top left, rgba(255,220,0,0.06), transparent)"
            },
            {
                name: "BigBasket",
                desc: "Groceries & essentials",
                url: "https://www.bigbasket.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.aW3yIeZBp1vMI0rIeKaTSQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#0a150a"
            },
            {
                name: "Dunzo",
                desc: "Everything delivered fast",
                url: "https://www.dunzo.com",
                logoEmoji: "https://th.bing.com/th?q=Dunzo+App+Logo.png&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
                logoBg: "#0a0a1a"
            },
            {
                name: "JioMart",
                desc: "Reliance grocery delivery",
                url: "https://www.jiomart.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.uDCLiBdLg1cjB-wJDewoOA?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#0d0a1a",
                badgeText: "New",
                badgeVariant: "badge-new"
            }
        ]
    },
    {
        id: "food-delivery",
        tabLabel: "Food Delivery",
        name: "Food Delivery",
        icon: "🍔",
        iconBg: "rgba(255,60,80,0.1)",
        apps: [
            {
                name: "Swiggy",
                desc: "Food, grocery & more",
                url: "https://www.swiggy.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.wrmWOVnmPU-5cDEwBsBXmw?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#1a0a00",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            },
            {
                name: "Zomato",
                desc: "Food delivery & dining",
                url: "https://www.zomato.com",
                logoEmoji: "https://th.bing.com/th/id/OIP.JJsu_CpGo1_d3HMlEaT0AQHaHa?w=181&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                logoBg: "#1a0507",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            },
            {
                name: "Magicpin",
                desc: "Local food & deals",
                url: "https://www.magicpin.in",
                logoEmoji: "https://th.bing.com/th/id/ODF.Z1YJMIPrdJllJwqIUKC5Zw?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#0a0a1a"
            },
            {
                name: "EazyDiner",
                desc: "Restaurant reservations",
                url: "https://www.eazydiner.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.kEsa6JqdtOWmdFZFil6DLg?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#150a0a"
            }
        ]
    },
    {
        id: "10-mins-food-delivery",
        tabLabel: "10 Mins Food",
        name: "10 Mins Food Delivery",
        icon: "⏱️",
        iconBg: "rgba(255,140,80,0.1)",
        apps: [
            {
                name: "Zepto",
                desc: "10-minute food and snacks delivery",
                url: "https://www.zeptonow.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.mSBSW2ohsX9FEn9nHHampA?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#1a0a0a",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            },
            {
                name: "Swish",
                desc: "Quick food delivery in minutes",
                url: "https://justswish.in",
                logoEmoji: "https://th.bing.com/th/id/ODF.zq_qyjZ6mpYRTJTY9iiazw?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#14100a"
            },
            {
                name: "Bistro",
                desc: "Fast meal delivery near you",
                url: "https://bistro.blinkit.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.o_97fVp1cWi5uEQJNw_l-g?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#101820"
            }
        ]
    },
    {
        id: "transport-cab",
        tabLabel: "Transport",
        name: "Transport & Cab",
        icon: "🚕",
        iconBg: "rgba(100,200,255,0.08)",
        apps: [
            {
                name: "Ola",
                desc: "Cab, auto & bikes",
                url: "https://www.olacabs.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.RwtHX_42md6SW6alVlXuyQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#0d1200",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            },
            {
                name: "Uber",
                desc: "Rides across India",
                url: "https://www.uber.com/in",
                logoEmoji: "https://th.bing.com/th/id/ODF.hPgbsdf9Lkh0CUpnqfQ16Q?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#111111"
            },
            {
                name: "Rapido",
                desc: "Bike & auto rides",
                url: "https://www.rapido.bike",
                logoEmoji: "https://th.bing.com/th/id/ODF.7rm479Ayir-F84TvYuHWtQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#1a0f00"
            },
            {
                name: "Namma Yatri",
                desc: "Open-source cab app",
                url: "https://www.nammayatri.in",
                logoEmoji: "https://th.bing.com/th/id/ODF.Jv2A-2zjGLC5vzdZeYE5_g?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#0a1520",
                badgeText: "New",
                badgeVariant: "badge-new"
            },
            {
                name: "InDrive",
                desc: "Negotiate your fare",
                url: "https://www.bluedriver.in",
                logoEmoji: "https://th.bing.com/th/id/ODF.di7MliuLG6r8C1cyNRh8LA?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#00050a"
            }
        ]
    },
    {
        id: "entertainment-ott",
        tabLabel: "Entertainment",
        name: "Entertainment & OTT",
        icon: "🎬",
        iconBg: "rgba(200,100,255,0.08)",
        apps: [
            {
                name: "Netflix",
                desc: "Movies, shows & more",
                url: "https://www.netflix.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.thT5_5P7qbU5qM_2S8ogYg?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#150000",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            },
            {
                name: "Prime Video",
                desc: "Amazon originals & films",
                url: "https://www.primevideo.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.j5yYEvm4fypRecNm_-oyfg?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#00060f"
            },
            {
                name: "JioCinema",
                desc: "IPL, movies & more",
                url: "https://www.hotstar.com",
                logoEmoji: "https://th.bing.com/th/id/OIP.Zc2TU8EhadNEb8ACG-ApAwHaHa?w=101&h=108&c=7&qlt=90&bgcl=d00a4e&r=0&o=6&dpr=1.3&pid=13.1",
                logoBg: "#0a0015"
            },
            {
                name: "SonyLIV",
                desc: "Sports, shows & movies",
                url: "https://www.sonyliv.com",
                logoEmoji: "https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?h=100&w=100&q=high",
                logoBg: "#00080a"
            },
            {
                name: "ZEE5",
                desc: "Indian originals & films",
                url: "https://www.zee5.com",
                logoEmoji: "https://akamaividz2.zee5.com/image/upload/frontend/branding/images/version-2/logo.png",
                logoBg: "#080010"
            },
            {
                name: "MX Player",
                desc: "Free streaming platform",
                url: "https://www.mxplayer.in",
                logoEmoji: "https://qqcdnpictest.mxplay.com/pic/4f32e5f456b70bb20e9c043f1998c384/en/16x9/1600x900/test_pic1777441548295.webp",
                logoBg: "#0a0800"
            }
        ]
    },
    {
        id: "shopping-fashion",
        tabLabel: "Shopping",
        name: "Shopping & Fashion",
        icon: "🛍️",
        iconBg: "rgba(255,200,50,0.08)",
        apps: [
            {
                name: "Amazon",
                desc: "Everything delivered",
                url: "https://www.amazon.in",
                logoEmoji: "https://th.bing.com/th/id/ODF.QhaTy7HPvKoaJWwye8j2CQ?w=32&h=32&o=6&pid=AdsPlus",
                logoBg: "#100a00",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            },
            {
                name: "Flipkart",
                desc: "India's biggest marketplace",
                url: "https://www.flipkart.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.sMaWoyTr_evSHN4lewhiWQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#00050f"
            },
            {
                name: "Myntra",
                desc: "Fashion & lifestyle",
                url: "https://www.myntra.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.oDY-RkuXADEEjq75t-Xq1A?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#150010",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            },
            {
                name: "AJIO",
                desc: "Trendy fashion by Reliance",
                url: "https://www.ajio.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.13pt8CiWDUSiYx9mmxU2nA?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#0a0010"
            },
            {
                name: "Meesho",
                desc: "Budget fashion & resell",
                url: "https://www.meesho.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.G6EWRFSPcpkHxe0s6t4kdQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#10000a"
            },
            {
                name: "Nykaa",
                desc: "Beauty & wellness",
                url: "https://www.nykaa.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.mBXnLkI3ZUFFngnFCjqJFw?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#150008",
                badgeText: "Hot",
                badgeVariant: "badge-new"
            }
        ]
    },
    {
        id: "health-fitness",
        tabLabel: "Health",
        name: "Health & Fitness",
        icon: "💪",
        iconBg: "rgba(50,220,120,0.08)",
        apps: [
            {
                name: "Practo",
                desc: "Doctors & medicines",
                url: "https://www.practo.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.Oe7LddtWSQEu9K_7gJIWzA?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#001510",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            },
            {
                name: "1mg",
                desc: "Medicines & lab tests",
                url: "https://www.1mg.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.jddNucaONj8deezONOBOXg?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#150010"
            },
            {
                name: "Cult.fit",
                desc: "Gym & fitness classes",
                url: "https://www.curefit.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.ghIF6zRoPlv5LsDBjTyWzQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#000f0a"
            },
            {
                name: "PharmEasy",
                desc: "Online pharmacy & tests",
                url: "https://www.PharmEasy.in",
                logoEmoji: "https://th.bing.com/th/id/ODF.PNPqWHBnss7W1EV8r4UptA?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#001008"
            },
            {
                name: "HealthifyMe",
                desc: "AI diet & fitness coach",
                url: "https://www.healthifyme.com",
                logoEmoji: "https://www.healthifyme.com/in/images/Logo.png",
                logoBg: "#00100a",
                badgeText: "AI",
                badgeVariant: "badge-new"
            }
        ]
    },
    {
        id: "Pet-Services",
        tabLabel: "Pet Services",
        name: "Pet Services",
        icon: "🐶",
        iconBg: "rgba(255,60,80,0.1)",
        apps: [
            {
                name: "PawSpace",
                desc: "pet care services",
                url: "https://pawspace.in",
                logoEmoji: "https://th.bing.com/th/id/ODF.prxoTxIqhK0hLAdkHVg94A?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#1a0a00",
                badgeVariant: "badge-top"
            },
            {
                name: "PetNest",
                desc: "At home pet services",
                url: "https://thepetnest.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.KJpGHIzZIwGtCEKt_oeuTA?w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2",
                badgeVariant: "badge-top"
            },
            {
                name: "Vetic",
                desc: "Pet clinic services in banglore ",
                url: "https://www.vetic.in",
                logoEmoji: "https://th.bing.com/th/id/ODF.odEkoQ-_qrTO9J_aVuN5Cg?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#0a0a1a"
            },
            {
                name: "Woofly",
                desc: "Pet grooming services at home for banglore",
                url: "https://woofly.in",
                logoEmoji: "https://th.bing.com/th/id/OIP.a5qBm5MMehQYL-PsVzch8gAAAA?w=108&h=108&c=1&bgcl=f42c9b&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3",
                logoBg: "#150a0a"
            }
        ]
    },
    {
        id: "house-maid-services",
        tabLabel: "Maid Services",
        name: "House Maid Services",
        icon: "🧹",
        iconBg: "rgba(120,200,255,0.1)",
        apps: [
            {
                name: "Snabbit",
                desc: "Book home maid services",
                url: "https://snabbit.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.ugfCc_0gYldRkB1ySa_m3A?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#0a1220"
            },
            {
                name: "Broomees",
                desc: "Home cleaning and maid support",
                url: "https://broomees.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.0t9zsoZ-N-VRMg2L5CWjxA?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#101820"
            },
            {
                name: "BookMyBai",
                desc: "Find trusted bai and maid services",
                url: "https://www.bookmybai.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.xT2SEd_Z8wsRX6yAxiUR1w?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#1a1010"
            },
            {
                name: "Urban Company",
                desc: "At-home cleaning and maintenance",
                url: "https://www.urbancompany.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.Q8GTXOQWBrWEUqMY0Gd40w?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#102018",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            }
        ]
    },
    {
        id: "packers-movers",
        tabLabel: "Packers & Movers",
        name: "Packers and Movers",
        icon: "📦",
        iconBg: "rgba(255,190,90,0.1)",
        apps: [
            {
                name: "Moving Solutions",
                desc: "Compare packers and movers in Bangalore",
                url: "https://www.movingsolutions.in/packers-movers/bangalore",
                logoEmoji: "https://th.bing.com/th/id/ODF.HzRu4Wukv2UD9_hACxxSAg?w=32&h=32&o=6&pid=AdsPlus",
                logoBg: "#1a120a"
            },
            {
                name: "Cloud Packers Movers",
                desc: "Home and office relocation support",
                url: "https://www.cloudpackers.com/india/movers",
                logoEmoji: "https://th.bing.com/th/id/OADD2.1177577088128565_11XMOT37GWBW7NB?w=32&h=32&o=6&pid=21.2",
                logoBg: "#0a1220"
            },
            {
                name: "Porter",
                desc: "Packers and movers booking in Bangalore",
                url: "https://porter.in/packers-and-movers/bangalore",
                logoEmoji: "https://th.bing.com/th/id/ODF.y6aJMwJbrP5lsF0XM_V9fA?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#141008",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            },
            {
                name: "Agarwal Packers and Movers",
                desc: "Trusted long-distance and local shifting",
                url: "https://www.agarwalpackers.com/packersmoversbangalore",
                logoEmoji: "https://th.bing.com/th/id/ODF.n9mKzVjyUVPsqLAcwT7l-Q?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#101820"
            },
            {
                name: "Leo Packers and Movers",
                desc: "Household and corporate moving services",
                url: "https://leopackersandmovers.com/packers-and-movers",
                logoEmoji: "https://th.bing.com/th/id/ODF.glW0BLdi-wylmrcJ2E3zEw?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#1a1010"
            },
            {
                name: "Sulekha",
                desc: "Find verified packers and movers near you",
                url: "https://www.sulekha.com/packers-and-movers/bangalore",
                logoEmoji: "https://th.bing.com/th/id/ODF.dmHW_5PP7imR3JmT8iqCHA?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#120f20"
            },
            {
                name: "LogisticMart",
                desc: "Top packers and movers with price estimates",
                url: "https://www.logisticmart.com/bangalore/packers-and-movers",
                logoEmoji: "https://th.bing.com/th/id/ODF.E9I-soE85K-evD9tmxjG_g?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#0f1510"
            }
        ]
    },
    {
        id: "pg-house-rent",
        tabLabel: "PG & Rent",
        name: "PG & House Rent",
        icon: "🏠",
        iconBg: "rgba(120,160,255,0.12)",
        apps: [
            {
                name: "MagicBricks",
                desc: "Buy, sell and rent properties",
                url: "https://www.magicbricks.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.0L38-Q-hqz4CgnI2hChZZw?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#0b1020",
                badgeText: "Top Pick",
                badgeVariant: "badge-top"
            },
            {
                name: "NoBroker",
                desc: "Broker-free house rentals",
                url: "https://www.nobroker.in",
                logoEmoji: "https://th.bing.com/th/id/ODF.Lu8pTJ3C33lazJH6myE03w?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#101020"
            },
            {
                name: "Airbnb",
                desc: "Stays, rooms and monthly rentals",
                url: "https://www.airbnb.co.in",
                logoEmoji: "https://th.bing.com/th/id/OADD2.1310617863897614_1MEK0QR90KDIX8V?w=32&h=32&o=6&pid=21.2",
                logoBg: "#200b12"
            },
            {
                name: "Housing",
                desc: "Homes, flats and PG listings",
                url: "https://housing.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.o4LyQuqDOQwdS5Hi_wnWmg?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#0d1320"
            },
            {
                name: "99acres",
                desc: "Property and rental marketplace",
                url: "https://www.99acres.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.dUEAjkAFkOG4wXnoCCt0bw?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#1a120a"
            },
            {
                name: "RentMyStay",
                desc: "Managed rentals and stay options",
                url: "https://www.rentmystay.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.L3mc8YwZPegb_oYBo4Oc1w?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#120f20"
            },
            {
                name: "NestAway",
                desc: "Fully furnished home rentals",
                url: "https://www.nestaway.com",
                logoEmoji: "https://th.bing.com/th/id/ODF.BXtNV2qMDkS3fYyl50bkXA?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
                logoBg: "#101510"
            },
            {
                name: "OLX",
                desc: "Rent and resale property listings",
                url: "https://www.olx.in",
                logoEmoji: "https://th.bing.com/th/id/ODF.zxFnOmmh658scAeU36-tPg?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
                logoBg: "#150f08"
            }
        ]
    }
];
const __TURBOPACK__default__export__ = CATEGORIES_DATA;
}),
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$categories$2d$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/categories-data.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const heroImages = [
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UB_City%2C_Bangalore.JPG",
        alt: "UB City, Bangalore",
        className: "one"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vidhana_Soudha_Bangalore.jpg",
        alt: "Vidhana Soudha, Bangalore",
        className: "two"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bangalore_Palace_-_Jayamahal.jpg",
        alt: "Bangalore Palace",
        className: "three"
    }
];
const bottomImages = [
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Glasshouse_and_fountain_at_lalbagh.jpg",
        alt: "Lalbagh glasshouse, Bangalore"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lalbagh_Entrance%2C_Bangalore.jpg",
        alt: "Lalbagh entrance, Bangalore"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vidhan_Soudha_-_Bangalore.jpg",
        alt: "Vidhan Soudha, Bangalore"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bangalore_Palace_-_Jayamahal.jpg",
        alt: "Bangalore Palace"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UB_City%2C_Bangalore.JPG",
        alt: "UB City, Bangalore"
    }
];
function looksLikeImageUrl(value) {
    const s = String(value || "").trim();
    if (!s) return false;
    return /^https?:\/\//i.test(s) || /^data:image\//i.test(s) || /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(s);
}
function HomePage() {
    const [activeCategoryId, setActiveCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const totalApps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$categories$2d$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reduce((sum, cat)=>sum + (Array.isArray(cat.apps) ? cat.apps.length : 0), 0), []);
    const visibleCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const q = searchQuery.trim().toLowerCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$categories$2d$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((cat)=>{
            const categoryMatches = activeCategoryId === "all" || cat.id === activeCategoryId;
            if (!categoryMatches) return false;
            if (!q) return true;
            const categoryText = [
                cat.name,
                cat.tabLabel,
                cat.id
            ].filter(Boolean).join(" ").toLowerCase();
            const appMatches = (cat.apps || []).some((app)=>[
                    app.name,
                    app.desc,
                    app.url
                ].filter(Boolean).join(" ").toLowerCase().includes(q));
            return categoryText.includes(q) || appMatches;
        });
    }, [
        activeCategoryId,
        searchQuery
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "logo",
                    children: [
                        "Banglore",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "logo-dot",
                            children: "Hub"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 95,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-orb"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-gallery",
                        "aria-hidden": "true",
                        children: heroImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `hero-shot ${img.className}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: img.src,
                                    alt: img.alt
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            }, img.alt, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-badge",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge-dot"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            "India's #1 App Directory"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Every app your ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "city"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 113,
                                columnNumber: 26
                            }, this),
                            " runs on"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "From groceries in 10 minutes to cab rides at midnight — BangloreHub is your ultimate directory of apps that power Indian urban life."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "search-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "search-icon",
                                        children: "⌕"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "search-input",
                                        type: "text",
                                        placeholder: "Search apps or categories…",
                                        list: "category-suggestions",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                        id: "category-suggestions",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$categories$2d$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: cat.name || cat.tabLabel || ""
                                            }, cat.id, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "search-button",
                                className: "nav-pill",
                                type: "button",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-num",
                                        children: totalApps
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-label",
                                        children: "Apps Listed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-num",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$categories$2d$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].length
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-label",
                                        children: "Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tabs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `tab ${activeCategoryId === "all" ? "active" : ""}`,
                        onClick: ()=>setActiveCategoryId("all"),
                        children: "🧩 All"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$categories$2d$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `tab ${activeCategoryId === cat.id ? "active" : ""}`,
                            onClick: ()=>setActiveCategoryId(cat.id),
                            children: `${cat.icon || ""} ${cat.tabLabel || cat.name || ""}`.trim()
                        }, cat.id, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section",
                children: visibleCategories.map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "category-block",
                        "data-visible": "true",
                        "data-generated": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cat-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cat-icon",
                                        style: {
                                            background: cat.iconBg || "transparent"
                                        },
                                        children: cat.icon || ""
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cat-name",
                                        children: cat.name || ""
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cat-count",
                                        children: [
                                            (cat.apps || []).length,
                                            " apps"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "app-grid",
                                children: (cat.apps || []).map((app, appIdx)=>{
                                    const logoValue = app.logoEmoji ?? "";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "app-card",
                                        href: app.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: app.cardGlow ? {
                                            "--card-glow": app.cardGlow
                                        } : undefined,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "app-logo",
                                                style: {
                                                    background: app.logoBg,
                                                    fontSize: app.logoFontSize || undefined
                                                },
                                                children: looksLikeImageUrl(logoValue) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: logoValue,
                                                    alt: app.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 204,
                                                    columnNumber: 25
                                                }, this) : logoValue
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 196,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "app-info",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "app-name",
                                                        children: app.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 210,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "app-desc",
                                                        children: app.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 211,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 209,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `${app.name}-${appIdx}`, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            idx < visibleCategories.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 217,
                                columnNumber: 51
                            }, this) : null
                        ]
                    }, cat.id, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "more-note",
                children: "More categories and apps will be added soon."
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bottom-gallery",
                "aria-hidden": "true",
                children: bottomImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bottom-shot",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img.src,
                            alt: img.alt
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this)
                    }, img.alt, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    "Made with ♥ for urban India  ·  © 2025 ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "BangloreHub"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 233,
                        columnNumber: 58
                    }, this),
                    " ·  All apps are trademarks of their respective owners"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 232,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0ut.upp._.js.map