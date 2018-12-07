/* eslint-disable react/button-has-type */
import React from 'react';

import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

const RepositoryList = ({ repositories, onDel, onUpd }) => (
  <Container>
    {repositories.map(repo => (
      <Repository key={repo.id}>
        <header>
          <img src={repo.owner.avatar_url} alt={repo.name} />
          <strong>{repo.name}</strong>
          <small>{repo.owner.login}</small>
        </header>
        <ul>
          <li>
            {repo.stargazers_count}

            <small>starts</small>
          </li>
          <li>
            {repo.forks_count}

            <small>forks</small>
          </li>
          <li>
            {repo.open_issues_count}

            <small>open issues</small>
          </li>
          <li>
            {repo.lastCommit}

            <small>last Commit</small>
          </li>
        </ul>
        <footer>
          <button onClick={() => onDel(repo.id)}>
            <i className="fa fa-trash" />
          </button>
          <button className="updateButton" onClick={() => onUpd(repo)}>
            <i className="fa fa-refresh" />
          </button>
        </footer>
      </Repository>
    ))}
  </Container>
);
RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      owner: PropTypes.shape({
        login: PropTypes.string,
      }),
    }),
  ).isRequired,
  onDel: PropTypes.func.isRequired,
  onUpd: PropTypes.func.isRequired,
};

export default RepositoryList;
