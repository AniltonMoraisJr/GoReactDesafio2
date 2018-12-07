import React, { Component } from 'react';
import moment from 'moment';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import RepositoryList from '../../components/RepositoryList';

import api from '../../services/api';
import Loading from '../../components/Loading';

class Main extends Component {
  state = {
    repositories: [],
    repositoryInput: '',
    repositoryError: false,
    isLoading: false,
    isRepoLoading: false,
  };

  componentDidMount() {
    if (localStorage.getItem('repos')) {
      this.setState({
        repositories: JSON.parse(localStorage.getItem('repos')),
      });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    try {
      const { repositories: lastRepos, repositoryInput } = this.state;
      const { data: repositores } = await api.get(repositoryInput);

      repositores.lastCommit = moment(repositores.updated_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...lastRepos, repositores],
        repositoryError: false,
      });

      localStorage.setItem('repos', JSON.stringify(this.state.repositories));
    } catch (error) {
      this.setState({
        repositoryError: true,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  updateRepository = async ({ owner: { login: owner }, name: repo }) => {
    this.setState({
      isRepoLoading: true,
    });
    try {
      const { repositories: lastRepos } = this.state;
      const { data: repository } = await api.get(`${owner}/${repo}`);

      repository.lastCommit = moment(repository.updated_at).fromNow();

      this.setState(
        {
          repositoryInput: '',
          repositories: lastRepos.map(rep => (rep.id === repository.id ? (rep = repository) : rep)),
          repositoryError: false,
        },
        function () {
          localStorage.setItem('repos', JSON.stringify(this.state.repositories));
        },
      );
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        isRepoLoading: false,
      });
    }
  };

  deleteRepository = (id) => {
    this.setState(
      {
        repositories: this.state.repositories.filter(el => el.id !== id),
      },
      function () {
        localStorage.setItem('repos', JSON.stringify(this.state.repositories));
      },
    );
  };

  render() {
    const {
      repositories, repositoryInput, repositoryError, isLoading, isRepoLoading,
    } = this.state;
    return (
      <Container>
        <img src={logo} alt="Logo" />
        <Form withError={repositoryError} onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {isLoading ? <i className="fa fa-spinner fa-spin" /> : 'Ok'}
          </button>
        </Form>
        {isRepoLoading ? <Loading /> : ''}
        <RepositoryList
          repositories={repositories}
          onDel={this.deleteRepository}
          onUpd={this.updateRepository}
        />
      </Container>
    );
  }
}

export default Main;
