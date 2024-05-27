const { generateOptions } = require("./utils");
const axios = require("axios");

async function getPopularRepositories(username, perPage = 10) {
  try {
    const response = await axios.get(
      //`https://api.github.com/orgs/${username}/repos`, NO FUNCIONA :(
      `https://api.github.com/search/repositories?q=org:${username}&sort=stars&order=desc`,
      {
        params: {
          per_page: perPage,
          sort: "stars",
          direction: "desc",
        },
      }
    );

    if (response.status === 200) {
      const repositories = response.data;
      return repositories;
    } else {
      console.log(`Failed to fetch repositories: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching repositories: ${error.message}`);
    return null;
  }
}

const getPopularReposOfGoogleUser = async function (req, res) {
  getPopularRepositories("google")
    .then((data) => {
      if (data) {
        const response = data.items.map(
          (repo) => `${repo.name} - Stars: ${repo.stargazers_count}`
        );
        console.log("response", response);
        res.send(response);
      }
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
};

module.exports = { getPopularReposOfGoogleUser };
