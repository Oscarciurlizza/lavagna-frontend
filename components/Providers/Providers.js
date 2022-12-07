import React from "react";

export default function Providers() {
  return (
    <div className="bg-black">
      <div className="sm:max-w-screen-xl mx-auto py-40">
        <div className="flex justify-between items-center gap-x-40">
          <div className="w-full">
            <h2 className="text-white text-6xl font-medium">
              Friends with{" "}
              <span className="font-extralight">everyone you know.</span>
            </h2>
          </div>

          <div className="w-full">
            <p className="text-white text-xl leading-relaxed">
              Our ecosystem of best-in-class players includes technology
              providers, asset managers, law firms, consultants and advisors,
              all supporting our clients to get things done Lorem, ipsu.
            </p>
          </div>
        </div>
        <div>providers</div>
      </div>
    </div>
  );
}
