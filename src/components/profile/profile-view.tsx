

interface ProfileProps {
  name: string
}

export default function ProfileView({name}: ProfileProps) {
  return (
    <div className="border-2 w-1/4 h-1/4 m-10 p-8">
      <p>Name: {name}</p>
      <p>Level: {0}</p>
      <p>Gold: {100}</p>
    </div>
  )
}
