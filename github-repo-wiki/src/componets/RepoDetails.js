import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RepoDetails = () => {
  const { owner, repo } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${owner}/${repo}`)
      .then((response) => setDetails(response.data))
      .catch((error) => console.error('Error fetching repo details:', error));
  }, [owner, repo]);

  if (!details) return <div>Loading...</div>;

  return (
    <div>
      <h1>{details.name}</h1>
      <p>{details.description}</p>
      <p>Stars: {details.stargazers_count}</p>
      <p>Forks: {details.forks_count}</p>
      <p>Open Issues: {details.open_issues_count}</p>
      <a href={details.html_url}>View on GitHub</a>
    </div>
  );
};

export default RepoDetails;
