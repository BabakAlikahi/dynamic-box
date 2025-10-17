import React from "react";

type Props = {
  active: React.ReactNode;
  all: React.ReactNode;
};

const UserLayout = ({ active, all }: Props) => {
  return (
    <div className="px-10">
      <div className="bg-gray-100 px-4 py-8">
        <h3 className="text-2xl">بخش کاربران</h3>
        <p className="mt-2 text-xl">لیست تمامی کاربران و لیست تمامی کاربرانی که فعالیت بیشتری در این مدت داشتند به نمایش گذاشته میشود</p>
      </div>
      <div className="flex gap-2">
        <div className="h-full w-1/2 border-e border-gray-500">
          <p className="bg-black px-4 py-6 text-center text-xl text-white">کاربران فعال</p>
          {active}
        </div>
        <div className="w-1/2 border-s border-gray-500">
          <p className="bg-black px-4 py-6 text-center text-xl text-white">لیست کاربران</p>

          {all}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
