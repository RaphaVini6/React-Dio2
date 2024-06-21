import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import RepoList from '../components/RepoList';

const Home = () => {
  const [repos, setRepos] = useState([]);

  const handleSearch = (query) => {
    axios
      .get(`https://api.github.com/search/repositories?q=${query}`)
      .then((response) => setRepos(response.data.items))
      .catch((error) => console.error('Error fetching repos:', error));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RepoList repos={repos} />
    </div>
  );
};

export default Home;
