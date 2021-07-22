import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "./SingleUserPage.css";
export default function SingleUserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `https://reqres.in/api/users/${userId}`;

    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data?.data);
      });
    setIsLoading(false);
    console.log(user);
  }, [userId]);
  function renderUser() {
    if (isLoading || user === null) {
      return "Loading...";
    }
  }
  return (
    <div className="user">
      <p>{isLoading ? "is Loading..." : ""}</p>
      <p> {user?.first_name + " " + user?.last_name}</p>
      <img src={user?.avatar} />
      <p> {user?.email}</p>
    </div>
  );
}
