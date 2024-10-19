class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  // postComment:

  async postComments(commentObject) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`,
        commentObject
      );
      return response.data;
    } catch (error) {
      console.error("Error posting comment:", error);
      throw error;
    }
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`
      );
      console.log(response.data[1].name);

      // Sort the comments from newest to oldest
      const sortedComments = response.data.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });

      return sortedComments;
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
    }
  }

  // GetShows Section

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/showdates?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching shows:", error);
      throw error;
    }
  }
}
