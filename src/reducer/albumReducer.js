import { types } from "../types/types";

export const albumInitialState = {
  auth: {
    isLogged: false,
    token: "",
    uid: "",
    email: "",
    name: "",
    lastname: "",
    role: "",
    is_logged_google: false,
  },
  collections: [],
  photos: [
    {
      id: 127352,
      description: "New photo in the beach A",
      url: "https://media.giphy.com/media/eh7t1ScpKTm5FGAu8A/giphy.gif?cid=82a1493b3xl7s3a0wax35g2bh9o8qs06c1h2doe3j6u0p4vx&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      date: "12/12/2024",
    },
    {
      id: 127454522,
      description: "New photo in the beach B",
      url: "https://media.giphy.com/media/JTghlLg0d1BpZvbQlG/giphy.gif?cid=82a1493bpuf2jprsit8h7p67b68el4x8eckgww0t3vgh7kyi&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      date: "25/05/2024",
    },
    {
      id: 127456322,
      description: "New photo in the beach B",
      url: "https://media.giphy.com/media/qiMbLh4WHEZyw/giphy.gif?cid=82a1493bxciboz57y2imvj9o663pvj39k6fc1zrmsen5xkfe&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      date: "25/05/2024",
    },
    {
      id: 1273521,
      description: "New photo in the beach A",
      url: "https://media.giphy.com/media/eh7t1ScpKTm5FGAu8A/giphy.gif?cid=82a1493b3xl7s3a0wax35g2bh9o8qs06c1h2doe3j6u0p4vx&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      date: "12/12/2024",
    },
    {
      id: 1274545522,
      description: "New photo in the beach B",
      url: "https://media.giphy.com/media/JTghlLg0d1BpZvbQlG/giphy.gif?cid=82a1493bpuf2jprsit8h7p67b68el4x8eckgww0t3vgh7kyi&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      date: "25/05/2024",
    },
    {
      id: 1274566322,
      description: "New photo in the beach B",
      url: "https://media.giphy.com/media/qiMbLh4WHEZyw/giphy.gif?cid=82a1493bxciboz57y2imvj9o663pvj39k6fc1zrmsen5xkfe&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      date: "25/05/2024",
    },
  ],
};

export const albumInitFunction = () => {
  // TODO : Cambiar funcionamiento por localStorage
  const auth = JSON.parse(localStorage.getItem("auth"));
  return { ...albumInitialState, auth: auth };
};

export const albumReducer = (initialState = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...initialState,
        auth: {
          uid: action.payload.uid,
          userName: action.payload.userName,
          isLogged: true,
        },
      };
    case types.logout:
      return {
        ...initialState,
        auth: {
          uid: initialState.uid,
          userName: initialState.userName,
          isLogged: initialState.isLogged,
        },
      };

    default:
      return initialState;
  }
};
