import React from "react";
import Head from "next/head";
import Search from "@/components/search/Search";
import useUserFetch from "@/components/hooks/useUserFetch";
import UserList from "@/components/users/UsersLists";
type UsersProps = {
  users: UserType[];
};

export interface UserType {
  id: number;
  ssn: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  birthDate: string;
}

export default function Users({ users }: UsersProps) {
  const { keyword, usersResults, setKeyWord } = useUserFetch({ users });
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search keyword={keyword} setKeyWord={setKeyWord} />
      <UserList usersResults={usersResults} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/users");
  const { users } = await res.json();

  return {
    props: {
      users,
    },
  };
}