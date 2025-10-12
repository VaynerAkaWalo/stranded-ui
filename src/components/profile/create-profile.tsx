import {Button, TextField} from "@mui/material";
import {type ChangeEvent, useState} from "react";
import {type CreateProfile, StrandedClient} from "@shared/clients/WilsonClient.ts";

export default function CreateProfile() {
  const [name, setName] = useState<string>("")

  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const createProfile = () => {
    if (name.length < 4) {
      return
    }

    const request: CreateProfile = {
      name
    }

    StrandedClient.CreateProfile(request).then(() => {
      window.location.reload()
    })
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="h-1/3 w-1/3 border-2 flex flex-col items-center justify-evenly">
        <TextField label="Type your name" value={name} onChange={updateName}/>
        <Button variant="contained" onClick={createProfile}>Start your adventure</Button>
      </div>
    </div>
  )
}
