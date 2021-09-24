export const getWorkBooks = (state) => {
  // console.log(id)
  const workbooks = state.workbooks;
  console.log(workbooks);
  if (!workbooks) return;

  return [...workbooks];
};
export const getLoading = (state) => {
  // console.log(id)
  const loading = state.loading;

  return loading;
};

export const getWorkBookByTitle = (state) => (
  search = "",
  language = "",
  status = ""
) => {
  // console.log(state,search,language,status)
  if (search.length === 0 && language.length === 0 && status.length === 0)
    return state.workbooks;

  return state.workbooks.filter((workbook) => {
    if (
      (workbook.title.toLowerCase().includes(search.toLowerCase()) &&
        search !== "") ||
      workbook.language === language ||
      workbook.status === status
    ) {
      return workbook;
    }
  });
};

export const getWorkBookFilter = (state) => (
  title = "",
  author = "",
  language = "",
  category = "",
  price1 = "",
  price2 = "",
  arrangeBy = ""
) => {
  console.log(price1, price2);
  if (
    title.length === 0 &&
    language.length === 0 &&
    author.length === 0 &&
    category.length === 0 &&
    price1.length === 0 &&
    price2.length === 0 &&
    arrangeBy.length === 0
  )
    return state.workbooks;

  const result = state.workbooks.filter((workbook) => {
    if (
      (workbook.title.toLowerCase().includes(title.toLowerCase()) &&
        title !== "") ||
      workbook.language === language ||
      (workbook.author.toLowerCase().includes(author.toLowerCase()) &&
        author !== "") ||
      workbook.category === category ||
      (workbook.price > parseInt(price1, 10) &&
        workbook.price < parseInt(price2, 10))
    ) {
      console.log(workbook);
      return workbook;
    }
  });

  if (arrangeBy.length !== 0) {
    const orderNewest = (res) => {
      return res.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    };
    const orderCheapest = (res) => {
      return res.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    };

    if (arrangeBy === "Newest" && result.length !== 0) {
      return orderNewest(result);
    }
    if (arrangeBy === "Newest" && result.length === 0) {
      return orderNewest(state.workbooks);
    }
    if (arrangeBy === "Cheapest" && result.length !== 0) {
      return orderCheapest(result);
    }
    if (arrangeBy === "Cheapest" && result.length === 0) {
      return orderCheapest(state.workbooks);
    }
  } else {
    return result;
  }
};

export const getWorkBookById = (state) => (id) => {
  // console.log(id)
  const workbook = state.workbooks.find((workbook) => workbook.id === id);
  if (!workbook) return;

  return { ...workbook };
};
