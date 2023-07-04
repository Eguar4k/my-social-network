import { PostsType, ProfileType } from "../types/typs";
import profileReducer, { actions } from "./profile-reducer";
// const profileReducer = require("./profile-reducer");
// const addPost = require("./profile-reducer");
let state = {
  posts: [
    { id: 1, message: "Hello,world", liksCounter: 0 },
    { id: 2, message: "It's my first post", liksCounter: 12 },
    { id: 3, message: "It's my second post", liksCounter: 25 },
    { id: 4, message: "It's my therd post", liksCounter: 48 },
    { id: 5, message: "It's my four post", liksCounter: 15 },
  ] as Array<PostsType>,
  newPostText: "Igor krasavchik",
  profile: null as ProfileType | null,
  status: "",
};
test("new post should be added", () => {
  // 1.test data
  let action = actions.addPost("Igor molodesch");

  //2.action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(6);
});
test("message of new post should be correct", () => {
  // 1.test data
  let action = actions.addPost("Igor molodesch");

  //2.action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts[5].message).toBe("Igor molodesch");
});
test("after deleting length of messangas should decrement", () => {
  // 1.test data
  let action = actions.deletePost(1);
  //2.action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(4);
});
test("after deleting length of messangas shouldn't decrement if id incorrect", () => {
  // 1.test data
  let action = actions.deletePost(1000);
  //2.action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(5);
});
