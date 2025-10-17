import Link from "next/link";
import React from "react";

type Props = {
  id?: number;
  name: string;
  hasDetail?: boolean;
};

function UserCard({ name, id, hasDetail = false }: Props) {
  let classess = "flex border-b border-gray-200 px-2 py-4";

  if (hasDetail) {
    classess += " flex-col h-4/5";
  } else {
    classess += " items-center justify-between";
  }

  return (
    <div className={classess}>
      <p>{name}</p>
      {id && (
        <Link
          className="rounded bg-blue-700 px-4 py-2 text-white"
          href={`users/${id}`}
        >
          مشاهده جزِیات
        </Link>
      )}
      {hasDetail && (
        <>
          <p className="mb-6 text-gray-500">
            این متن تستی برای کاربر فعال میباشد. این متن تستی برای کاربر فعال میباشد. این متن تستی برای کاربر فعال میباشد. این متن تستی برای کاربر
            فعال میباشد. این متن تستی برای کاربر فعال میباشد. این متن تستی برای کاربر فعال میباشد. این متن تستی برای کاربر فعال میباشد. این متن تستی
            برای کاربر فعال میباشد. این متن تستی برای کاربر فعال میباشد.{" "}
          </p>
          <Link
            className="w-fit rounded bg-blue-700 px-4 py-2 text-white"
            href={`/users`}
          >
            برگشت
          </Link>
        </>
      )}
    </div>
  );
}

export default UserCard;
