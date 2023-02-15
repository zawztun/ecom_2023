import React from "react";
import { UserType } from "@/pages/users";
import { useState, useEffect } from "react";
type UserHookProps = {
  users: UserType[];
};

const useUserFetch = ({ users }: UserHookProps) => {
  const [keyword, setKeyWord] = useState("");
  const [usersResults, setUsersResults] = useState(users);

  useEffect(() => {
    const res = users.filter((user) =>
      user.firstName.toLowerCase().includes(keyword)
    );
    if (keyword.length < 3) {
      setUsersResults(users);
    } else {
      setUsersResults(res);
    }
  }, [keyword]);

  return { keyword, usersResults, setKeyWord };
};
export default useUserFetch;
