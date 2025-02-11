import { createHistogramHeight } from "@/lib/charts"; 

type HistogramComponentProps = {
  classBoundary: string;
  classInterval: number;
  frequency: number[];
};

// The structure of the data required to draw the histrogram
type HistogramDataType = {
  height: number;
  classbond: string;
}
// Logic to draw the histogram
export default function Histogram({
  classBoundary, frequency, classInterval 
}: HistogramComponentProps) {

  return (
    <div className="flex bg-[var(--sl-color-gray-6)] w-full min-h-[200px] h-[400px]">
      <Bar height={200} xValue={99.5} />
      <Bar height={100} xValue={104.5}/>
      <Bar height={150} xValue={109.5}/>
    </div>
  );
}

// Generate the data required to create the histogram
function histogramData({ classInterval, classBoundary, frequency}: HistogramComponentProps) {
  const histogramData: HistogramDataType[] = [];

  return 2;
}

function Bar({
  height, xValue
}: { height: number, xValue: number }) {

  const styles = {
    height: height + "px",
  };
  return (
    <div className="grid !m-0 content-end h-full w-20" >
      <div className="w-full border-t border-l border-r border-[var(--sl-color-gray-2)]" style={styles}></div>
      <div className="relative !m-0 w-full h-10 border-t-[var(--sl-color-gray-2)] border-t-2">
        {/* pointer for the x-axis scale */}
        <div className="absolute !m-0 top-0 -right-[1px] w-0.5 h-2 z-10 bg-[var(--sl-color-gray-2)]"></div>
        {/* the x-axis value */}
        <div className="absolute !m-0 bottom-1 -right-1/4 z-10">{xValue}</div>
      </div>
    </div> 
  );
}
