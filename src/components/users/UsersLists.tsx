import React from "react";
import { UserType } from "@/pages/users";
import Image from "next/image";

type Props = {
  usersResults: UserType[];
};

export default function Users({ usersResults }: Props) {
  return (
    <div className="grid gap-4 lg:grid-cols-4 w-4/5 mx-auto">
      {usersResults.map((user) => (
        <div
          key={user.id}
          className="grid w-full justify-center border-2 mx-auto rounded-md"
        >
          <div className="flex  w-[40px] mx-auto text-white my-4">
            <Image
              src={user.image}
              alt=""
              width={50}
              height={50}
              className="aspect-square rounded-full
              object-cover bg-slate-400
           "
            />
          </div>
          <div className="text-2xl text-black font-bold py-2">
            {user.firstName} {user.lastName}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-blue-800">{user.email}</div>
            <div>SSN: {user.ssn}</div>
            <div className="py-2">
              <span>D.O.B: {user.birthDate}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
