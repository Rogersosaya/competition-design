import clsx from "clsx";
import React from "react";

function TitleTwo({title, borderColor}) {
  return (
    <div className={clsx("text-2xl md:text-4xl font-semibold mb-4 border-l-4 border-primary px-8", borderColor)}>
      {title}
    </div>
  );
}

export default TitleTwo;
