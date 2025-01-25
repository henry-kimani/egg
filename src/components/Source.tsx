import React from '@astrojs/react';

type ReferenceType = {
  href?: string;
  name: string; // Quote: name of the person, Ref: name of that reference
  type: "quote" | "ref";
}

export default function ReferenceType({ href, name, type }: ReferenceType) {
  return (
    <i className='text-end'>
      { type === "ref" ? <Source href={href} name={name} />: <Quote name={name} /> }
    </i>
  )
}

function Source( { href, name }: Omit<ReferenceType, "type">) {
  return (
    <p>source:
      <a href={href}>
        {name}
      </a>
    </p>
  );
}


function Quote({ name }: { name: ReferenceType["name"] }){
  return (
    <p>~ 
      {name}
    </p>
  );
}
