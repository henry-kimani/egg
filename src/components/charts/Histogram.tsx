import { createHistogramHeight } from "@/lib/charts"; 
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type HistogramComponentProps = {
  classRange: string; // 100 -104
  frequency: number[];
  classInterval: number;
};


const ChartHeight = 500; // px


// Logic to draw the histogram
export default function Histogram({
  classRange , frequency, classInterval
}: HistogramComponentProps) {
  const lowerBound = parseInt(classRange.split("-")[0]) - 0.5;
  const maxHeight = maxGraphHeight(frequency, classInterval)

  const BarElements = histogramData({ classInterval, frequency, lowerBound }).map(bar => {
    return (
      <BarContainer>
        <Bar height={ bar.height } />
        <Scale value={ bar.upperBound } class="w-full !m-0" />
      </BarContainer>
    );
  });

  return (
    <div 
      className="grid grid-cols-[40px_1fr] grid-rows-[460px_40px] bg-[var(--sl-color-gray-7)] dark:bg-[var(--sl-color-gray-6)] max-w-full overflow-auto"
      style={{ height: ChartHeight }}
    >
      <Label class="w-full row-span-1 place-items-center" yAxis={true} label="height" />

      <div 
        className="flex !m-0"
        style={{ height: (ChartHeight-40) + "px"}}
      >
        <YAxis maxHeight={maxHeight} />
        { lowerBound > 1 ? <NotFromZero lowerBound={lowerBound} />: "" }
        { BarElements }
      </div>

      <Label class="col-span-2 place-items-center " yAxis={false}  label="class boundaries" />
    </div>
  );
}

function NotFromZero({ lowerBound: value }: { lowerBound: number }) {
  return (
    <BarContainer class="relative">
      <span className="absolute bottom-[26px]">vvvvvvv</span>
      <Scale class="border-t border-t-[var(--sl-color-gray-2)] relative">
        <div className="absolute !m-0 bottom-2 -right-1/4 z-10">{ value }</div>
        <div className="absolute !m-0 top-0 -right-[1px] w-0.5 h-2 z-10 bg-[var(--sl-color-gray-2)]"></div>
      </Scale>
    </BarContainer>
  );
}

function YAxis({ maxHeight }: { maxHeight: number}) {

  // Allow one more value in y-axis
  const yValues = [];
  for (let i=1; i <= Math.round(maxHeight); i++) {
    yValues.push(i);
  }

  return (
    <BarContainer class="w-4">
      <div className="h-[400px] grid gap-1 border-r border-r-[var(--sl-color-gray-2)]">
        {
          yValues.reverse().map(value => {
            return (
              <div className="relative !m-0 w-full">
                {/* pointer for the x-axis scale */}
                <div className="absolute !m-0 top-0 right-0 rotate-90 w-0.5 h-1 z-10 bg-[var(--sl-color-gray-2)]"></div>
                {/* the y-axis value */}
                <div className="absolute !m-0 -top-3 right-2 z-10">{value}</div>
              </div>
            );
          })
        } 
      </div>
      <Scale class="!m-0" />
    </BarContainer>

  );
}


function BarContainer({ children, class:classes }: { children: ReactNode, class?: string }) {
  return (
    <div className={cn("flex flex-col justify-end !m-0 min-w-16 max-w-20 h-[460px]", classes )}>
      { children }
    </div>
  );
}


function Scale({ class: classes, value, children }: { children?: ReactNode, class?: string, value?: number }) {
  return (
    <div className={cn(classes, "h-[40px]")}>
      {children ?
        children :
        <div className="relative">
          <div className="absolute !m-0 top-0 -right-[1px] w-0.5 h-2 z-10 bg-[var(--sl-color-gray-2)]"></div>
          <div className="absolute !m-0 top-2 -right-1/4 z-10">{value}</div>
        </div>
      }
    </div>
  );
}


// Render the bars
function Bar({ height
}: { height: number}) {
  height = height*100;
  return (
    <div 
      className="w-full border border-[var(--sl-color-gray-2)]" 
      style={{ height }} 
    ></div>
  );
}


function Label({ yAxis, class: classes, label }: { yAxis: boolean, class: string, label: string }) {
  return (
    <div 
      className={cn("grid !m-0", classes, {
        "-rotate-90": yAxis,
      })
    }>{label}</div>
  );
}


// Generate the data required to create the histogram
// Height
// xValue: the values used on the x-axis
function histogramData(
  {  classInterval, frequency, lowerBound}:
  { classInterval: number, frequency: number[], lowerBound: number }
) {

  return frequency.map(freq => {
    const height = createHistogramHeight({ freq, classInterval });
    lowerBound += 5;
    return {
      height,
      upperBound: lowerBound, // xValues
    }
  });
}


// return the maximum height of the graph
function maxGraphHeight(frequency: number[], classInterval: number) {
  let maxFreq = Math.max(...frequency);
  return createHistogramHeight({ freq: maxFreq, classInterval});
}
