import LogoutButton from "@components/wrapper/logout-button.tsx";

export default function HeaderSection() {
  return (
    <div className="px-4 py-4 border-2 rounded-2xl mx-auto flex items-center bg-stone-900">
      <p className="text-2xl font-bold">Stranded</p>
      <LogoutButton />
    </div>
  );
}
