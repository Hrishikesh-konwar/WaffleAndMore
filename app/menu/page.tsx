"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface MenuItem {
  name: string;
  price: string;
  pocketPrice?: string;
  description?: string;
  isBestSeller?: boolean;
}

interface MenuSection {
  title: string;
  subtitle?: string;
  color: "emerald" | "amber";
  items: MenuItem[];
}

export default function WaffleMenu() {
  const menuSections: MenuSection[] = [
    {
      title: "Waffle-Wich Classics",
      color: "emerald",
      items: [
        {
          name: "Classic Honey Butter",
          price: "₹90",
          pocketPrice: "₹70",
          description: "Pure golden perfection",
        },
        {
          name: "Maple Butter Bliss",
          price: "₹90",
          pocketPrice: "₹70",
          description: "Sweet maple dream",
        },
        {
          name: "Nutty Almondlicious",
          price: "₹170",
          pocketPrice: "₹130",
          description: "Crunchy almond heaven",
        },
      ],
    },
    {
      title: "Club Velvet",
      color: "amber",
      items: [
        { name: "Berry Red Velvet", price: "₹160", pocketPrice: "₹140" },
        { name: "Classic Red Velvet", price: "₹160", pocketPrice: "₹130" },
        { name: "Lotus Biscoff", price: "₹170", pocketPrice: "₹130" },
        { name: "Kiki's Cookie Crush", price: "₹150", pocketPrice: "₹110" },
      ],
    },
    {
      title: "Gourmet Waffle-Wich",
      color: "emerald",
      items: [
        { name: "KitKat Supreme", price: "₹210", pocketPrice: "₹230", isBestSeller: true },
        { name: "Crunchy Brownie Fudge", price: "₹230", pocketPrice: "₹240" },
        { name: "Drama by Chocolate", price: "₹230", pocketPrice: "₹240", isBestSeller: true },
        { name: "Nutella Heaven", price: "₹240", pocketPrice: "₹240" },
      ],
    },
    {
      title: "Chocolatey",
      color: "emerald",
      items: [
        {
          name: "Snick-alicious",
          price: "₹170",
          pocketPrice: "₹150",
          isBestSeller: true,
        },
        {
          name: "The Nutella Tease",
          price: "₹170",
          pocketPrice: "₹150",
          isBestSeller: true,
        },
        { name: "KitCrack Crunch", price: "₹170", pocketPrice: "₹120" },
        {
          name: "Belgian Melt - Milk/Dark",
          price: "₹150",
          pocketPrice: "₹110",
        },
        { name: "Coffee Crunch", price: "₹140", pocketPrice: "₹100" },
        { name: "Crackling Butterscotch", price: "₹120", pocketPrice: "₹90" },
        { name: "Crème d'Orange", price: "₹160", pocketPrice: "₹130" },
      ],
    },
    {
      title: "Cheesecake Waffle-Wich",
      color: "emerald",
      items: [
        {
          name: "Mango Cheesecake",
          price: "₹150",
          pocketPrice: "₹120",
          isBestSeller: true,
        },
        { name: "Biscoff Cheesecake", price: "₹180", pocketPrice: "₹150" },
        { name: "Nutella Cheesecake", price: "₹170", pocketPrice: "₹160" },
        { name: "Blueberry Cheesecake", price: "₹160", pocketPrice: "₹140" },
        { name: "Strawberry Cheesecake", price: "₹160", pocketPrice: "₹130" },
      ],
    },
    {
      title: "Double Chocolatey",
      color: "amber",
      items: [
        { name: "Triple Choco Rush", price: "₹170", pocketPrice: "₹130" },
        { name: "Dark Meets Light", price: "₹160", pocketPrice: "₹120" },
        { name: "Chocomanit Overload - Milk/Dark", price: "₹160", pocketPrice: "₹120" },
        { name: "Almond Brownie Crunch", price: "₹180", pocketPrice: "₹150" },
      ],
    },
    {
      title: "Mini Waffle-Wich Combos",
      color: "emerald",
      items: [
        { name: "Mix & Match Box (4/6)", price: "₹330/₹460" },
        { name: "All Choco Box (4/6)", price: "₹330/₹460" },
        { name: "Signature Box (4/6)", price: "₹340/₹480" },
        { name: "Mini Indulgence Box (8 + 2 Free Treats)", price: "₹760" },
      ],
    },
    {
      title: "Waffy-Wich Sundaes",
      color: "amber",
      items: [
        {
          name: "Brownie Bliss Sundae",
          price: "₹130",
          pocketPrice: "₹100",
          isBestSeller: true,
        },
        { name: "Berry Red Velvet Sundae", price: "₹130", pocketPrice: "₹100" },
        { name: "Biscoff Delight Sundae", price: "₹130", pocketPrice: "₹100" },
      ],
    },
    {
      title: "Waffy Cakes",
      color: "emerald",
      items: [
        {
          name: "Crunchy Almond Brownie Cake",
          price: "₹590",
          pocketPrice: "₹380",
        },
        {
          name: "Kiki's Crusty Party Cake",
          price: "₹590",
          pocketPrice: "₹380",
          isBestSeller: true,
        },
        { name: "Choco Explosion Cake", price: "₹590", pocketPrice: "₹380" },
        { name: "Berry Velvet Cake", price: "₹590", pocketPrice: "₹380" },
      ],
    },
    {
      title: "Shakes",
      color: "amber",
      items: [
        { name: "KitCrack Shake", price: "₹160" },
        { name: "Blueberry White Choco Shake", price: "₹160" },
        { name: "Nutty Nutella Shake", price: "₹160" },
        { name: "Crushin' Cookies Shake", price: "₹160" },
        { name: "Belgian Choco Shake", price: "₹160" },
        { name: "Classic Cold Coffee", price: "₹130" },
      ],
    },
    {
      title: "Coolers",
      color: "emerald",
      items: [
        { name: "Lemon Iced Tea", price: "₹100" },
        { name: "Peach Iced Tea", price: "₹100" },
      ],
    },
    {
      title: "Ice Cream Waffle-Wich",
      color: "amber",
      items: [
        {
          name: "Rocky Road Riot (RRR)",
          price: "₹190",
          pocketPrice: "₹150",
          isBestSeller: true,
        },
        { name: "Sundae on a Waffle", price: "₹170", pocketPrice: "₹120" },
        { name: "Cookie Trio Delight", price: "₹200", pocketPrice: "₹160" },
      ],
    },
    {
      title: "Extras",
      color: "emerald",
      items: [
        { name: "Extra Nutella", price: "₹50" },
        { name: "Ice Cream & Fudge", price: "₹50" },
        { name: "Ice Cream Scoop/Cup", price: "₹20/₹40" },
        { name: "Kitcrack Bits", price: "₹30" },
        { name: "Extra Fillings", price: "₹30" },
        { name: "Roasted Almonds", price: "₹30" },
        { name: "Biscoff Crumbs", price: "₹10" },
        { name: "Choco Sprinkles", price: "₹10" },
        { name: "Banana Slices", price: "₹10" },
      ],
    },
  ];

  const getColorClasses = (color: "emerald" | "amber") => {
    if (color === "emerald") {
      return {
        header: "bg-primary hover:bg-emerald-700",
        badge: "bg-primary/20 text-primary border border-primary",
        price: "text-primary",
      };
    }
    return {
      header: "bg-amber-500 hover:bg-amber-600",
      badge: "bg-amber-500/20 text-amber-400 border border-amber-500",
      price: "text-amber-400",
    };
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 relative">
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/60 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-transparent text-white py-10 px-4 border-b border-gray-800">
          <div className="max-w-4xl mx-auto text-center relative z-10"></div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Menu Header Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 text-balance uppercase tracking-wide">
                MENU
              </h2>
              <p className="text-lg text-gray-300">
                Freshly Made, Locally Loved
              </p>
              <p className="text-lg text-white font-semibold">
                A hug in every bite, anytime, anywhere
              </p>
            </div>
          </section>

          {/* Special Offers Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Happy Hours */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 p-8 text-white shadow-xl hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-3xl font-bold mb-4 relative z-10">
                  Happy Hours
                </h3>
                <p className="text-lg font-semibold mb-6 relative z-10">
                  12:00 PM - 5:00 PM
                </p>
                <div className="space-y-3 relative z-10">
                  <div className="flex justify-between items-center bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                    <span>Any 2 Waffle</span>
                    <span className="font-bold text-lg">₹299</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                    <span>Any 3 Waffle</span>
                    <span className="font-bold text-lg">₹399</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                    <span>Any 4 Waffle</span>
                    <span className="font-bold text-lg">₹499</span>
                  </div>
                </div>
              </div>

              {/* Family Combo */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-emerald-600 p-8 text-white shadow-xl hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-3xl font-bold mb-3 relative z-10">
                  Family Combo
                </h3>
                <p className="text-base font-semibold text-emerald-50 mb-4 relative z-10">
                  Buy 4 & Get 1 Free
                </p>
                <p className="text-4xl font-black mb-2 relative z-10">₹699</p>
                <div className="space-y-2 relative z-10">
                  <p className="text-sm text-emerald-100">Save up to ₹201</p>
                  <p className="text-xs text-emerald-100 italic">
                    Friends, family and waffles — that&apos;s a celebration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          <div>
            <h2 className="text-3xl font-black text-primary mb-8">Our Menu</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuSections.map((section, idx) => {
                const colors = getColorClasses(section.color);

                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow bg-gray-800 border border-gray-700"
                  >
                    {/* Section Header */}
                    <div
                      className={`${colors.header} text-white px-6 py-5 font-bold text-xl`}
                    >
                      {section.title}
                    </div>

                    {/* Items List */}
                    <div className="px-6 py-6 space-y-4 bg-gray-800">
                      {section.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start justify-between p-3 hover:bg-gray-700/50 rounded-lg transition-colors"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <p className="font-semibold text-white">
                                {item.name}
                              </p>
                              {item.isBestSeller && (
                                <span
                                  className={`${colors.badge} text-xs font-bold px-2.5 py-1 rounded-full`}
                                >
                                  ⭐ BEST
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-sm text-gray-400 italic">
                                {item.description}
                              </p>
                            )}
                          </div>
                          {/* <div className="text-right ml-4 flex-shrink-0">
                            <p className={`${colors.price} font-black`}>
                              {item.price}
                            </p>
                            {item.pocketPrice && (
                              <p className="text-xs text-gray-500 line-through">
                                {item.pocketPrice}
                              </p>
                            )}
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Note
        <div className="mt-16 pt-12 border-t border-gray-800 text-center">
          <p className="text-lg font-semibold text-primary mb-2">
            Swipe, Like, Bite
          </p>
          <p className="text-sm text-gray-400 mb-4">
            @_wafflesandmore_
          </p>
          <p className="text-xs text-gray-500">
            *T&amp;C apply | Images are for representation purpose only
          </p>
        </div> */}
        </div>

        <Footer />
      </div>
    </div>
  );
}
