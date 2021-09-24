// export const myAccion = async ({commit}) => {

// }

// export const myAccion = async ({commit},extValue) => {

// }

export const loadWorkbooks = async ({ commit }) => {
  const data = [
    {
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
      id: "1",
      title: "Build Your nest",
      published: new Date(),
      edition: 1,
      language: "Spanish",
      price: 30,
      currency: "USD",
      status: "Published",
      author: "Victor Manuel",
      category: "Novel",
      tags: ["1", "11", "sasad"],
    },
    {
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
      id: "2",
      title: "Existing anyway",
      published: new Date(),
      edition: 2,
      language: "English",
      price: 50,
      currency: "USD",
      status: "Editable",
      author: "Victor Manuel",
      tags: ["1", "2", "sasad"],
      category: "Novel",
    },
    {
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
      id: "3",
      title: "The world of busines",
      published: new Date(),
      edition: 1,
      language: "English",
      price: 20,
      currency: "USD",
      status: "Uneditable",
      author: "Victor Manuel",
      category: "Biography",
      tags: ["1", "3", "sasad"],
    },
  ];
  setTimeout(() => {
    commit("setWorkbooks", data);
  }, 1000);
};

export const saveWorkbook = async ({ commit }, workbook) => {
  // console.log(commit,workbook)

  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(workbook), 1000)
  );
  if (!data) return;
  console.log(data);
  commit("saveWorkbook", { id: "4", ...data });

  return true;
};

export const updateWorkbook = async ({ commit }, workbook) => {
  console.log(commit, workbook);

  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(workbook), 1000)
  );
  if (!data) return;

  commit("updateWorkbook", data);

  return true;
};

export const deleteWorkbook = async ({ commit }, id) => {
  console.log(commit, id);

  // if(!data) return
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(id), 1000)
  );
  if (!data) return;

  commit("deleteWorkbook", id);

  return true;
};
