
import React from 'react';
import Products from "../pages/products"

const page = () => {
    return (
       <>
       <Products/>
       </>
    );
};

export default page;




export function BayfayHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0F19] text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-400/10 blur-[100px] rounded-full" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
              Hyperlocal Commerce Platform
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              BayFay
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Transforming
              </span>
              Local Commerce
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed">
              Empower local businesses with a connected ecosystem that brings
              together customers, merchants, delivery partners, and
              administrators on one powerful platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 font-medium transition-all hover:scale-105">
                Explore BayFay
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md px-6 py-4 font-medium hover:bg-white/10 transition">
                <PlayCircle size={18} />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="relative h-[650px] hidden lg:block">
            {/* Dashboard */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-0 right-0 w-[480px] rounded-3xl bg-white/5 p-3 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(249,115,22,0.15)]"
            >
              <img
                src="/images/bayfay-dashboard.png"
                alt="Dashboard"
                className="rounded-2xl w-full"
              />
            </motion.div>

            {/* Mobile App */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-0 top-24 w-[220px] rounded-3xl bg-white/5 p-2 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
            >
              <img
                src="/images/bayfay-mobile-app.png"
                alt="Mobile App"
                className="rounded-2xl w-full"
              />
            </motion.div>

            {/* Delivery Panel */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute bottom-10 right-10 w-[260px] rounded-3xl bg-white/5 p-2 backdrop-blur-xl border border-white/10 z-10"
            >
              <img
                src="/images/bayfay-delivery-panel.png"
                alt="Delivery Panel"
                className="rounded-2xl w-full"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-24 bottom-24 rounded-2xl border border-orange-500/20 bg-[#111827]/90 backdrop-blur-xl px-5 py-4 shadow-xl"
            >
              <p className="text-sm text-gray-400">Active Orders</p>
              <h3 className="text-3xl font-bold text-orange-400">1,248+</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}