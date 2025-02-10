import React from '@astrojs/react';

type ReferenceType = {
  href?: string;
  name: string; // Quote: name of the person, Ref: name of that reference
  type: "quote" | "ref" | "readmore";
}

type ExternalLink = Omit<ReferenceType, "type">;

export default function ReferenceType({ href, name, type }: ReferenceType) {
  return (
    <i className='text-end'>
      { type === "ref" ?
        <Source href={href} name={name} /> :
        type === "quote" ?
          <Quote name={name} /> :
          <ReadMore name={name} href={href} />
      }
    </i>
  )
}

function Source( { href, name }: ExternalLink) {
  return (
    <p>Source:&nbsp;
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

function ReadMore({ name, href }: ExternalLink ) {
  return (
    <p>∴&nbsp;
      <a href={href}>
      {name}
      </a>
    </p>
  );
}
