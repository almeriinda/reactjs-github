import React, { useState, useEffect } from "react";
import Axios from "axios";

function ListUserRepo(props) {
  console.log(props.user.login)
  const [repos, setRepo] = useState([]);
  
  const fetchRepos = async () => {
    const { data } = await Axios.get(
      "https://api.github.com/users/"+ props.user.login +"/repos"
    );
    const repos = data;
    setRepo(repos);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos]);

  
  return (
    <div class="wrapper">
      {repos.map((repo) => (
        <button class="btn_repo" key={repo.id}>{repo.name}</button>
      ))}
    </div>
  );
}

export default ListUserRepo;