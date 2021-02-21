import React from "react";

function Page({ pageNumber }) {
  return (
    <div className="page" key={pageNumber}>
      <p>{pageNumber}</p>
    </div>
  );
}

export default Page;
