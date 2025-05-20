import type { ReactNode } from "preact/compat";

interface Props {
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode
}

export default function SpecificHeading(props: Props) {
  const { heading, children } = props;

  return heading === "h1" ? <h1>{children}</h1> 
    : heading === "h2" ? <h2>{children}</h2> 
      : heading === "h3" ? <h3>{children}</h3> 
        : heading === "h4" ? <h4>{children}</h4> 
          : heading === "h5" ? <h5>{children}</h5> 
            : <h6>{children}</h6> 
  
}
