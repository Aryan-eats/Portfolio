"use client";

export function MobileCards() {
  return (
    <div className="p-4 space-y-4">

      
      <div className="rounded-2xl p-4 bg-linear-to-br from-[#0ea5e9]/30 to-[#10b981]/30 backdrop-blur-md border border-white/10 shadow-lg text-white">
        <h2 className="text-lg font-semibold">Card Title 1</h2>
        <p className="text-sm opacity-80 mt-1">
          Simple mobile friendly description goes here.
        </p>
      </div>

      
      <div className="rounded-2xl p-4 bg-linear-to-br from-[#6366f1]/30 to-[#8b5cf6]/30 backdrop-blur-md border border-white/10 shadow-lg text-white">
        <h2 className="text-lg font-semibold">Card Title 2</h2>
        <p className="text-sm opacity-80 mt-1">
          Works perfectly on all screens.
        </p>
      </div>

    
      <div className="rounded-2xl p-4 bg-linear-to-br from-[#f472b6]/30 to-[#ec4899]/30 backdrop-blur-md border border-white/10 shadow-lg text-white">
        <h2 className="text-lg font-semibold">Card Title 3</h2>
        <p className="text-sm opacity-80 mt-1">
          Clean and attractive UI for your mobile users.
        </p>
      </div>

    </div>
  );
}
