import React from "@astrojs/react";

type TallyProps = {
  bars: number;
};

export default function Tally({ bars }: TallyProps) {
  return (
    <div className="">
      <CreateTally bars={bars} />
    </div>
  );
}

function CreateTally({ bars }: { bars: number }) {
  const tallyBars = ["|","||", "|||", "||||", <BarFive />];

  return <span>{tallyBars[bars - 1]}</span>
}

function BarFive() {
  return (
    <span className="relative">
      <CreateTally bars={4} />
      <div className="absolute w-0.5 h-8 -top-1 right-1/2 rotate-90 bg-[var(--sl-color-gray-3)]"></div>
    </span>
  );
}

