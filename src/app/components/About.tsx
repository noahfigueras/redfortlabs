"use client";

const values = [
  {
    title: "Security First",
    description: "Every line of code, every architecture decision is made with security as the foundation, not an afterthought.",
    icon: "🛡️",
  },
  {
    title: "Innovation Driven",
    description: "We stay ahead of the curve, researching and implementing bleeding-edge technologies before they become mainstream.",
    icon: "⚡",
  },
  {
    title: "Transparency",
    description: "Clear communication, honest assessments, and full visibility into our processes and findings.",
    icon: "🔍",
  },
  {
    title: "Excellence",
    description: "Good enough is never enough. We pursue perfection in every project, audit, and implementation.",
    icon: "⭐",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#dc2626]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#dc2626] text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Fortifying the Future of
              <span className="gradient-text"> Decentralized Technology</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              RedFortLabs was founded by a team of security researchers, AI engineers, 
              and blockchain developers who believe that the future of technology must 
              be built on unshakeable foundations.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We combine offensive security expertise with cutting-edge AI research 
              and blockchain innovation to deliver solutions that are not just 
              functional, but truly secure.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-[#171717] rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-[#dc2626] mb-1">2019</div>
                <div className="text-gray-500 text-sm">Founded</div>
              </div>
              <div className="p-4 bg-[#171717] rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-[#dc2626] mb-1">25+</div>
                <div className="text-gray-500 text-sm">Team Members</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-[#171717]/50 rounded-xl border border-gray-800 hover:border-[#dc2626]/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["Ethereum", "Polygon", "Chainlink", "OpenZeppelin", "ConsenSys"].map(
              (company) => (
                <div
                  key={company}
                  className="text-xl font-bold text-gray-600 hover:text-gray-400 transition-colors duration-300"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}