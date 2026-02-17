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
      title: "Waffy-Wich Classics",
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
        { name: "Berry Red Velvet", price: "₹180", pocketPrice: "₹140" },
        { name: "Classic Red Velvet", price: "₹160", pocketPrice: "₹130" },
        { name: "Lotus Biscoff Dreams", price: "₹170", pocketPrice: "₹120" },
        { name: "Kiki's Cookie Crush", price: "₹150", pocketPrice: "₹110" },
      ],
    },
    {
      title: "Gourmet Waffy-Wich",
      color: "emerald",
      items: [
        { name: "KitKat Supreme", price: "₹210", isBestSeller: true },
        { name: "Crunchy Brownie Fudge", price: "₹230" },
        { name: "Drama by Chocolate", price: "₹230", isBestSeller: true },
        { name: "Nutella Heaven", price: "₹240" },
      ],
    },
    {
      title: "Chocolatey",
      color: "emerald",
      items: [
        {
          name: "Snickallicious",
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
          name: "Belgian Melt (Milk/Dark)",
          price: "₹160",
          pocketPrice: "₹110",
        },
        { name: "Coffee Crunch", price: "₹140", pocketPrice: "₹100" },
        { name: "Crackling Butterscotch", price: "₹130", pocketPrice: "₹90" },
        { name: "Creme of Orange", price: "₹160", pocketPrice: "₹130" },
      ],
    },
    {
      title: "Cheesecake Waffy-Wich",
      color: "emerald",
      items: [
        {
          name: "Mango Cheesecake",
          price: "₹150",
          pocketPrice: "₹130",
          isBestSeller: true,
        },
        { name: "Biscoff Cheesecake", price: "₹180", pocketPrice: "₹150" },
        { name: "Nutella Cheesecake", price: "₹190", pocketPrice: "₹160" },
        { name: "Blueberry Cheesecake", price: "₹160", pocketPrice: "₹140" },
        { name: "Strawberry Cheesecake", price: "₹160", pocketPrice: "₹130" },
      ],
    },
    {
      title: "Waffy-Wich Sundaes",
      color: "emerald",
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
      color: "amber",
      items: [
        {
          name: "Crunchy Almond Brownie Cake",
          price: "₹590",
          pocketPrice: "₹380",
        },
        {
          name: "Kiki's Crunch Party Cake",
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
      color: "emerald",
      items: [
        { name: "KitCrack Shake", price: "₹160" },
        { name: "Blueberry White Choco Shake", price: "₹160" },
        { name: "Nutty-Nutella Shake", price: "₹160" },
        { name: "Crushin' Cookies Shake", price: "₹160" },
        { name: "Belgian Choco Shake", price: "₹160" },
        { name: "Classic Cold Coffee", price: "₹130" },
      ],
    },
    {
      title: "Ice Cream Waffy-Wich",
      color: "emerald",
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
      title: "Coolers",
      color: "amber",
      items: [
        { name: "Lemon Iced Tea", price: "₹100" },
        { name: "Peach Iced Tea", price: "₹100" },
      ],
    },
    {
      title: "Extras",
      color: "emerald",
      items: [
        { name: "Extra Nutella", price: "₹50" },
        { name: "Ice Cream & Fudge", price: "₹50" },
        { name: "Ice Cream Scoops", price: "₹20/₹40" },
        { name: "Kirkrack Bits", price: "₹30" },
        { name: "Extra Fillings", price: "₹30" },
        { name: "Roasted Almonds", price: "₹30" },
        { name: "Biscoff Crunch", price: "₹10" },
        { name: "Oreo Crumbs", price: "₹10" },
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
      <section className="relative overflow-hidden bg-transparent text-white py-20 px-4 border-b border-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
        </div>
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
                  <span>Any Waffle</span>
                  <span className="font-bold text-lg">₹299</span>
                </div>
                <div className="flex justify-between items-center bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                  <span>Any Waffle</span>
                  <span className="font-bold text-lg">₹399</span>
                </div>
                <div className="flex justify-between items-center bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                  <span>Any Waffle</span>
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
                        <div className="text-right ml-4 flex-shrink-0">
                          <p className={`${colors.price} font-black`}>
                            {item.price}
                          </p>
                          {item.pocketPrice && (
                            <p className="text-xs text-gray-500 line-through">
                              {item.pocketPrice}
                            </p>
                          )}
                        </div>
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
