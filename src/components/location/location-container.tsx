import {useState} from "react";

export default function LocationContainer() {
  const [location] = useState<string>("Start island")

  return (
    <div className="w-full h-10 text-center border-b-2">
      <p>Current location: {location}</p>
    </div>
  )
}
