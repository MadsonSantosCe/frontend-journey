"use client";

import { fetchUsers } from "@/redux/reducers/usersReducer";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Users() {
  const dispatch = useDispatch<AppDispatch>();
  const { Users, loading, error } = useSelector(
    (state: RootState) => state.Users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {Users.map((user) => (
          <li key={user.id}>
            <h2>Name: {user.name}</h2>
            <p> User Name: {user.username}</p>
            <p>Email: {user.email}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
