const createUserInfo = (data) => {
  return ({
    id: data[`id`],
    email: data[`email`],
    name: data[`name`],
    avatar: `https://4.react.pages.academy${data[`avatar_url`]}`,
  });
};

export default createUserInfo;
