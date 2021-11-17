import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const SEARCH_USER = '/users/';
const SEARCH_USER_REPO = '/repos';

export async function get_user_by_name(login_name) {
    let users = [];
    let errors = [];
    axios.get(BASE_URL+SEARCH_USER+login_name)
      .then(response => {
        users.push(response.data)
      })
      .catch(e => {
        errors.push(e)
      })
    return users;  
  } 
  
  export async function get_repos_by_user(login_name) {
    let users = [];
    let errors = [];
    axios.get(BASE_URL+SEARCH_USER+login_name+SEARCH_USER_REPO)
      .then(response => {
        users.push(response.data)
      })
      .catch(e => {
        errors.push(e)
      })
    return users;  
  }   