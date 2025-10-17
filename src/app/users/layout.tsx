type Props = {
  active: React.ReactNode;
  all: React.ReactNode;
};

const UserLayout = ({ active, all }: Props) => {
  return (
    <div className="pb-2">
      <div className="bg-gray-100 px-4 py-8">
        <h3 className="text-2xl">بخش کاربران</h3>
        <p className="mt-2 text-xl">لیست تمامی کاربران و لیست تمامی کاربرانی که فعالیت بیشتری در این مدت داشتند به نمایش گذاشته میشود</p>
      </div>
      <div className="flex min-h-96 gap-4">
        <div className="w-1/2 flex-1 border-e border-gray-200">
          <p className="bg-black px-4 py-6 text-center text-xl text-white">کاربران فعال</p>
          {active}
        </div>
        <div className="w-1/2 flex-1 border-s border-gray-200">
          <p className="bg-black px-4 py-6 text-center text-xl text-white">لیست کاربران</p>

          {all}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
