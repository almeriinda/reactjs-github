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
    console.log(props.user)
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  
  return (
    <div>
      <h6>Lista de Repositórios</h6>
      {repos.map((repo) => (
        <p key={repo.id}>{repo.name}</p>
      ))}
    </div>
  );
}

export default ListUserRepo;