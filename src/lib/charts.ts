type CreateHistogramProps = {
  freq: number;
  classInterval: number
};

export function createHistogramHeight({ freq, classInterval }: CreateHistogramProps) {
  return freq/classInterval;
}
