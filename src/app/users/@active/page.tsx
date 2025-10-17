import UserCard from "../components/userCard";

export default function UserActivePage() {
  const DUMMY_ACTIVE_USERS = [
    {
      id: 1,
      name: "بابک علی کاهی",
    },
    {
      id: 2,
      name: "تست تستیان",
    },
    {
      id: 3,
      name: "احمد مرادی",
    },
    {
      id: 4,
      name: "مراد احمدی",
    },
  ];

  return (
    <div>
      {DUMMY_ACTIVE_USERS.map((item) => (
        <UserCard
          key={item.id}
          name={item.name}
          id={item.id}
        />
      ))}
    </div>
  );
}
