import React from 'react';
import { Link } from 'react-router-dom';

const RepoList = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id}>
          <Link to={`/repo/${repo.owner.login}/${repo.name}`}>{repo.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
