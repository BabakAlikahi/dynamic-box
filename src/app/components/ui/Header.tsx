import React from "react";

type Props = {
  subject: string;
};

function Header({ subject }: Props) {
  return (
    <div className="py-8 text-center capitalize">
      <h1 className="text-4xl font-bold text-neutral-950">{subject}</h1>
      <h4 className="mt-2 text-xl font-semibold text-neutral-500">author: babak alikahi</h4>
    </div>
  );
}

export default Header;
