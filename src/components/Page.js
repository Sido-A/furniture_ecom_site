import React from "react";

function Page({ pageNumber }) {
  return (
    <a className="page" key={pageNumber}>
      {pageNumber}
    </a>
  );
}

export default Page;
