export const getUserId = () => {
  let id = sessionStorage.getItem("user_id");

  if (!id) {
    id = Math.floor(Math.random() * 1000) + 1 + "";
    sessionStorage.setItem("user_id", id);
  }

  return id;
};
