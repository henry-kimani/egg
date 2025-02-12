import { createHistogramHeight } from "@/lib/charts"; 
type HistogramComponentProps = {
  classRange: string; // 100 -104
  frequency: number[];
  classInterval: number;
};

// Logic to draw the histogram
export default function Histogram({
  classRange , frequency, classInterval
}: HistogramComponentProps) {
  const lowerBound = parseInt(classRange.split("-")[0]) - 0.5;
  const maxHeight = maxGraphHeight(frequency, classInterval)

  const BarElements = histogramData({ classInterval, frequency, lowerBound, maxHeight }).map(bar => {
    return <Bar height={bar.height} xValue={bar.upperBound} maxHeight={maxHeight} />
  });
  
  return (
    <div className="flex bg-[var(--sl-color-gray-6)] w-full min-h-[200px] h-[400px] overflow-auto">
      <YAxis maxHeight={maxHeight} />
      {BarElements}
    </div>
  );
}

function YAxis({ maxHeight }: { maxHeight: number}) {
  const styles = {
    height: Math.round(maxHeight)*100 + "px",
  }

  return (
    <div className="grid content-end !m-0 min-w-14 w-20 h-full">
      <div className="w-full" style={styles}></div>
      <div className="w-full h-10"></div>
    </div>
  );
}

// Render the bars
function Bar({
  height, xValue, maxHeight
}: { height: number, xValue: number, maxHeight: number }) {

  const styles = {
    // applify the height of the bars
    height: height*maxHeight + "px" ,
  };
  return (
    <div className="grid !m-0 content-end h-full min-w-14 w-20">
      <div className="w-full border-t border-l border-r border-[var(--sl-color-gray-2)]" style={styles} ></div>

      {/* x-axis value*/}
      <div className="relative !m-0 w-full h-10 border-t-[var(--sl-color-gray-2)] border-t-2">
        {/* pointer for the x-axis scale */}
        <div className="absolute !m-0 top-0 -right-[1px] w-0.5 h-2 z-10 bg-[var(--sl-color-gray-2)]"></div>
        {/* the x-axis value */}
        <div className="absolute !m-0 bottom-1 -right-1/4 z-10">{xValue}</div>
      </div>

    </div> 
  );
}

// Generate the data required to create the histogram
// Height: as a percentage
// xValue: the values used on the x-axis
function histogramData(
  {  classInterval, frequency, lowerBound, maxHeight }:
  { classInterval: number, frequency: number[], lowerBound: number, maxHeight: number}
) {

  return frequency.map(freq => {
    const height = createHistogramHeight({ freq, classInterval });
    lowerBound += 5;
    return {
      height: height/Math.round(maxHeight)*100, //return the heights as percentages
      upperBound: lowerBound, // xValues
    }
  });
}

// return the maximum height of the graph
function maxGraphHeight(frequency: number[], classInterval: number) {
  let maxFreq = Math.max(...frequency);
  return createHistogramHeight({ freq: maxFreq, classInterval});
}
