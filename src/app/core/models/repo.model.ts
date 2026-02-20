
// src/app/core/models/repo.model.ts
export interface Repo {
  name: string;
  description: string;
  stargazerCount: number;
  url: string;
  homepageUrl: string;
  repositoryTopics: {
    nodes: {
      topic: {
        name: string;
      };
    }[];
  };
  languages: {
    nodes: {
      name: string;
    }[];
  };
}
