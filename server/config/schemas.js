export const schemas = {
  instas: {
    username: String,
    posts: Number,
    followers: Number,
    follwing: Number,
    name: String,
    post_list: {
      post_id: String,
      likes: Number,
      comments: {
        username: String,
        massage: String,
        time: String,
      },
    },
  },
};
