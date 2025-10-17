import Link from "next/link";
import React from "react";

type Props = {};

export default function UserActivePage({}: Props) {
  return (
    <div className="">
      <div className="flex items-center justify-between border-b border-gray-200 px-2 py-4">
        <p>حمد رضا محمدی</p>
        <Link href={"users/1"}>مشاهده جزِیات</Link>
      </div>
    </div>
  );
}
