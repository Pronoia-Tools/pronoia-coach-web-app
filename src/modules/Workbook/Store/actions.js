import PronoiaAPI from "../../../api/PronoiaAPI";

// export const myAccion = async ({commit}) => {

// }

// export const myAccion = async ({commit},extValue) => {

// }

export const loadWorkbooks = async ({ commit }) => {
  // const data = [
  //   {
  //     image:
  //       "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
  //     category: "Novel",
  //     id: 1,
  //     title: "Build Your Nest",
  //     published: new Date(),
  //     edition: 1,
  //     language: "English",
  //     price: 30,
  //     currency: "USD",
  //     status: "Published",
  //     author: "Kestrel Gates",
  //     tags: ["maternal health", "midwifery", "doula", "midwife"],
  //     description:
  //       "Kestrel is the author of the globally celebrated book, Build Your Nest, A Post-Partum Planning Workbook. Build Your Nest is available in 7 languages, with more on the way. Kestrel is deeply focused on the health and well-being of birthing parents, as well as families and communities. This focus  guides her work as a coach and educator.",
  //     sections: [
  //       {
  //         type: "doc",
  //         content: [
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "left",
  //             },
  //           },
  //           {
  //             type: "horizontalRule",
  //           },
  //           {
  //             type: "heading",
  //             attrs: {
  //               textAlign: "left",
  //               level: 1,
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text: "SECTION 1",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "left",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis sollicitudin, consectetur massa ut, gravida leo. Aliquam sed tortor tortor. Integer feugiat eget sem quis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget ligula a libero sodales ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed erat eu sapien venenatis condimentum. Sed scelerisque pretium diam eu ullamcorper. Suspendisse id pulvinar turpis. Morbi malesuada imperdiet ante, vel volutpat mi aliquet eu. Nunc vitae arcu id odio luctus venenatis in et ipsum.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Vestibulum eget pretium mauris. In ultricies molestie quam, dignissim feugiat augue lobortis a. Integer eget nunc sed elit facilisis dignissim sed sed elit. Sed at dui ipsum. Mauris metus erat, consectetur quis ornare at, ultricies in velit. Phasellus a justo a nunc porta efficitur. Proin elit nulla, posuere sed elementum eu, blandit eget libero. Integer pulvinar est sed nisi gravida euismod. Vivamus at lectus tempor, convallis ligula at, congue risus. Nunc ligula arcu, ultrices et pellentesque quis, posuere at nisl. Quisque finibus nec nunc et vulputate. Donec consectetur nunc sit amet facilisis ultrices. Fusce vel iaculis metus. Vivamus at velit odio.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "heading",
  //             attrs: {
  //               textAlign: "left",
  //               level: 2,
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text: "SECTION 1.1",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Proin a sapien bibendum, fringilla odio at, semper metus. Proin eu libero semper, interdum est id, fringilla eros. Proin cursus orci lacus, ut gravida augue pretium sit amet. Sed eros nulla, vestibulum at sollicitudin et, tincidunt et enim. Etiam tincidunt neque ac maximus rhoncus. Proin consequat at neque a lacinia. Nullam vel vehicula leo, ut sodales ante.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Nulla facilisi. Vivamus quis eros urna. Donec ultrices efficitur dolor, et cursus purus sagittis in. Nunc tincidunt dolor enim, at malesuada lectus consequat ut. Nullam fringilla libero sit amet est cursus, et cursus dui accumsan. Proin non tortor gravida, malesuada enim vulputate, interdum tortor. Vestibulum nec odio rhoncus, venenatis erat eu, ultricies diam. Phasellus facilisis, metus sit amet consectetur facilisis, nisl nisi varius tortor, ullamcorper sagittis nisl ligula sit amet arcu. Cras facilisis tincidunt ipsum, ut interdum nibh dictum in. Vivamus sodales commodo metus, quis efficitur justo volutpat in. Nullam aliquam sapien a lacus consectetur viverra. Nam sollicitudin tellus ut libero tincidunt elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta sem quam, sit amet egestas nunc blandit vel. Ut ultrices nec tellus sit amet vehicula. Nam sollicitudin nisi mauris, eu ultrices arcu feugiat tristique.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "heading",
  //             attrs: {
  //               textAlign: "left",
  //               level: 3,
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text: "SECTION 1.1.1",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Nullam interdum quis lorem nec lobortis. Vivamus tincidunt varius massa id pellentesque. Morbi sem nunc, vulputate sit amet mollis id, vestibulum vel felis. Nunc ut enim felis. Nam massa enim, lobortis nec commodo a, consectetur at diam. Quisque varius felis tellus, eget porta lacus suscipit vel. Praesent felis ante, rutrum vitae molestie et, condimentum ut magna. Phasellus sodales felis vitae est tincidunt venenatis. Suspendisse non elit lacinia, varius metus a, pretium leo. Cras imperdiet hendrerit hendrerit. Cras imperdiet elit id augue cursus interdum. Sed vel ipsum eget elit congue vestibulum. Ut vel massa sapien. Donec nibh justo, blandit at libero id, laoreet bibendum nulla.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "left",
  //             },
  //             content: [
  //               {
  //                 type: "hardBreak",
  //               },
  //             ],
  //           },
  //         ],
  //         questions:[
  //           {
  //               id:"1",
  //               question:"what color is the sky?",
  //               answer:"Answer #",
  //           },
  //           {
  //               id:"2",
  //               question:"what color is the sky2?",
  //               answer:"Answer #1",
  //           },
  //           {
  //               id:"3",
  //               question:"what color is the sky3?",
  //               answer:"Answer #2",
  //           },
  //           {
  //               id:"4",
  //               question:"what color is the sky4?",
  //               answer:"Answer #3",
  //           }
  //         ]
  //       },
  //       {
  //         type: "doc",
  //         content: [
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "left",
  //             },
  //           },
  //           {
  //             type: "horizontalRule",
  //           },
  //           {
  //             type: "heading",
  //             attrs: {
  //               textAlign: "left",
  //               level: 1,
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text: "SECTION 2",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "left",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis sollicitudin, consectetur massa ut, gravida leo. Aliquam sed tortor tortor. Integer feugiat eget sem quis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget ligula a libero sodales ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed erat eu sapien venenatis condimentum. Sed scelerisque pretium diam eu ullamcorper. Suspendisse id pulvinar turpis. Morbi malesuada imperdiet ante, vel volutpat mi aliquet eu. Nunc vitae arcu id odio luctus venenatis in et ipsum.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Vestibulum eget pretium mauris. In ultricies molestie quam, dignissim feugiat augue lobortis a. Integer eget nunc sed elit facilisis dignissim sed sed elit. Sed at dui ipsum. Mauris metus erat, consectetur quis ornare at, ultricies in velit. Phasellus a justo a nunc porta efficitur. Proin elit nulla, posuere sed elementum eu, blandit eget libero. Integer pulvinar est sed nisi gravida euismod. Vivamus at lectus tempor, convallis ligula at, congue risus. Nunc ligula arcu, ultrices et pellentesque quis, posuere at nisl. Quisque finibus nec nunc et vulputate. Donec consectetur nunc sit amet facilisis ultrices. Fusce vel iaculis metus. Vivamus at velit odio.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "heading",
  //             attrs: {
  //               textAlign: "left",
  //               level: 2,
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text: "SECTION 2.1",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Proin a sapien bibendum, fringilla odio at, semper metus. Proin eu libero semper, interdum est id, fringilla eros. Proin cursus orci lacus, ut gravida augue pretium sit amet. Sed eros nulla, vestibulum at sollicitudin et, tincidunt et enim. Etiam tincidunt neque ac maximus rhoncus. Proin consequat at neque a lacinia. Nullam vel vehicula leo, ut sodales ante.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Nulla facilisi. Vivamus quis eros urna. Donec ultrices efficitur dolor, et cursus purus sagittis in. Nunc tincidunt dolor enim, at malesuada lectus consequat ut. Nullam fringilla libero sit amet est cursus, et cursus dui accumsan. Proin non tortor gravida, malesuada enim vulputate, interdum tortor. Vestibulum nec odio rhoncus, venenatis erat eu, ultricies diam. Phasellus facilisis, metus sit amet consectetur facilisis, nisl nisi varius tortor, ullamcorper sagittis nisl ligula sit amet arcu. Cras facilisis tincidunt ipsum, ut interdum nibh dictum in. Vivamus sodales commodo metus, quis efficitur justo volutpat in. Nullam aliquam sapien a lacus consectetur viverra. Nam sollicitudin tellus ut libero tincidunt elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta sem quam, sit amet egestas nunc blandit vel. Ut ultrices nec tellus sit amet vehicula. Nam sollicitudin nisi mauris, eu ultrices arcu feugiat tristique.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "heading",
  //             attrs: {
  //               textAlign: "left",
  //               level: 3,
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text: "SECTION 2.1.1",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Nullam interdum quis lorem nec lobortis. Vivamus tincidunt varius massa id pellentesque. Morbi sem nunc, vulputate sit amet mollis id, vestibulum vel felis. Nunc ut enim felis. Nam massa enim, lobortis nec commodo a, consectetur at diam. Quisque varius felis tellus, eget porta lacus suscipit vel. Praesent felis ante, rutrum vitae molestie et, condimentum ut magna. Phasellus sodales felis vitae est tincidunt venenatis. Suspendisse non elit lacinia, varius metus a, pretium leo. Cras imperdiet hendrerit hendrerit. Cras imperdiet elit id augue cursus interdum. Sed vel ipsum eget elit congue vestibulum. Ut vel massa sapien. Donec nibh justo, blandit at libero id, laoreet bibendum nulla.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "left",
  //             },
  //             content: [
  //               {
  //                 type: "hardBreak",
  //               },
  //             ],
  //           },
  //         ],
  //         questions:[]
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
  //     category: "Novel",
  //     title: "Existing anyway",
  //     published: new Date(),
  //     edition: 2,
  //     language: "English",
  //     price: 50,
  //     currency: "USD",
  //     status: "Editable",
  //     author: "Victor Manuel",
  //     tags: ["1", "2", "sasad"],
  //     description: "",
  //     sections: [],
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
  //     category: "Biography",
  //     title: "The world of busines",
  //     published: new Date(),
  //     edition: 1,
  //     language: "English",
  //     price: 200,
  //     currency: "USD",
  //     status: "Uneditable",
  //     author: "Victor Manuel",
  //     tags: ["1", "3", "sasad"],
  //     description: "",
  //     sections: [
  //       {
  //         type: "doc",
  //         content: [
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "left",
  //             },
  //           },
  //           {
  //             type: "horizontalRule",
  //           },
  //           {
  //             type: "heading",
  //             attrs: {
  //               textAlign: "left",
  //               level: 1,
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text: "SECTION 1",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "left",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis sollicitudin, consectetur massa ut, gravida leo. Aliquam sed tortor tortor. Integer feugiat eget sem quis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget ligula a libero sodales ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed erat eu sapien venenatis condimentum. Sed scelerisque pretium diam eu ullamcorper. Suspendisse id pulvinar turpis. Morbi malesuada imperdiet ante, vel volutpat mi aliquet eu. Nunc vitae arcu id odio luctus venenatis in et ipsum.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Vestibulum eget pretium mauris. In ultricies molestie quam, dignissim feugiat augue lobortis a. Integer eget nunc sed elit facilisis dignissim sed sed elit. Sed at dui ipsum. Mauris metus erat, consectetur quis ornare at, ultricies in velit. Phasellus a justo a nunc porta efficitur. Proin elit nulla, posuere sed elementum eu, blandit eget libero. Integer pulvinar est sed nisi gravida euismod. Vivamus at lectus tempor, convallis ligula at, congue risus. Nunc ligula arcu, ultrices et pellentesque quis, posuere at nisl. Quisque finibus nec nunc et vulputate. Donec consectetur nunc sit amet facilisis ultrices. Fusce vel iaculis metus. Vivamus at velit odio.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "heading",
  //             attrs: {
  //               textAlign: "left",
  //               level: 2,
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text: "SECTION 1.1",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Proin a sapien bibendum, fringilla odio at, semper metus. Proin eu libero semper, interdum est id, fringilla eros. Proin cursus orci lacus, ut gravida augue pretium sit amet. Sed eros nulla, vestibulum at sollicitudin et, tincidunt et enim. Etiam tincidunt neque ac maximus rhoncus. Proin consequat at neque a lacinia. Nullam vel vehicula leo, ut sodales ante.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Nulla facilisi. Vivamus quis eros urna. Donec ultrices efficitur dolor, et cursus purus sagittis in. Nunc tincidunt dolor enim, at malesuada lectus consequat ut. Nullam fringilla libero sit amet est cursus, et cursus dui accumsan. Proin non tortor gravida, malesuada enim vulputate, interdum tortor. Vestibulum nec odio rhoncus, venenatis erat eu, ultricies diam. Phasellus facilisis, metus sit amet consectetur facilisis, nisl nisi varius tortor, ullamcorper sagittis nisl ligula sit amet arcu. Cras facilisis tincidunt ipsum, ut interdum nibh dictum in. Vivamus sodales commodo metus, quis efficitur justo volutpat in. Nullam aliquam sapien a lacus consectetur viverra. Nam sollicitudin tellus ut libero tincidunt elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta sem quam, sit amet egestas nunc blandit vel. Ut ultrices nec tellus sit amet vehicula. Nam sollicitudin nisi mauris, eu ultrices arcu feugiat tristique.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "heading",
  //             attrs: {
  //               textAlign: "left",
  //               level: 3,
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text: "SECTION 1.1.1",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "justify",
  //             },
  //             content: [
  //               {
  //                 type: "text",
  //                 text:
  //                   "Nullam interdum quis lorem nec lobortis. Vivamus tincidunt varius massa id pellentesque. Morbi sem nunc, vulputate sit amet mollis id, vestibulum vel felis. Nunc ut enim felis. Nam massa enim, lobortis nec commodo a, consectetur at diam. Quisque varius felis tellus, eget porta lacus suscipit vel. Praesent felis ante, rutrum vitae molestie et, condimentum ut magna. Phasellus sodales felis vitae est tincidunt venenatis. Suspendisse non elit lacinia, varius metus a, pretium leo. Cras imperdiet hendrerit hendrerit. Cras imperdiet elit id augue cursus interdum. Sed vel ipsum eget elit congue vestibulum. Ut vel massa sapien. Donec nibh justo, blandit at libero id, laoreet bibendum nulla.",
  //               },
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             attrs: {
  //               textAlign: "left",
  //             },
  //             content: [
  //               {
  //                 type: "hardBreak",
  //               },
  //             ],
  //           },
  //         ],
  //         questions:[]
  //       },
  //     ],
  //   },
  // ];
  let response = await PronoiaAPI.get('/workbook');

  if (!response) return;
  commit("setWorkbooks", response.data);

  return response.data;

};

export const saveWorkbook = async ({ commit }, workbook) => {

  let response = await PronoiaAPI.post('/workbook', workbook );

  if (!response) return;
  commit("saveWorkbook", response.data);

  return response.data;
};

export const updateWorkbook = async ({ commit }, workbook) => {
  let response = await PronoiaAPI.put('/workbook/'+workbook.id, workbook );

  if (!response) return;
  commit("updateWorkbook", response.data);

  return response.data;
};

export const deleteWorkbook = async ({commit}, workbook) =>{

  let response = await PronoiaAPI.delete('/workbook/'+workbook.id);

  if (!response) return;
  commit("deleteWorkbook", response.data);

  return response.data;
};

  ///UNITS


export const loadWorkBookUnits = async ({ commit }, workbook) => {
  let response = await PronoiaAPI.get('/workbook/'+workbook.id+'/unit');

  if (!response) return;
  commit("updateWorkbook", response.data);

  return response.data;

};

export const updateWorkbookUnit = async ({ commit }, [workbook, unitSelectedIndex]) => {
   
  let unit = workbook.units[unitSelectedIndex];
  let response = await PronoiaAPI.put('/workbook/'+workbook.id+'/unit/'+unit.id, unit);

  if (!response) return;
  workbook.units[unitSelectedIndex] = response.data
  commit("updateWorkbook", workbook);

  return workbook;

};

export const updateWorkbookSection = async ({ commit }, section) => {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(section), 1000)
  );
  if (!data) return;
  console.log({ "updateWorkbookSection {{action}}": data });

  commit("updateWorkbookSection", data);

  return true;
};
export const updateWorkbookAddSection = async ({ commit }, idWorkBook) => {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(idWorkBook), 1000)
  );
  if (!data) return;
  console.log({ "updateWorkbookAddSection {{action}}": idWorkBook });

  commit("updateWorkbookAddSection", idWorkBook);

  return true;
};

export const updateWorkbookAddQuestion = async ({commit},{idWorkbook, sectionSelected, newQuestion}) =>{
  
    const data = await new Promise(resolve => setTimeout(() => resolve({idWorkbook,sectionSelected,newQuestion:{"id":"5",question:newQuestion}}), 1000));
    if(!data) return 
    // console.log({"updateWorkbookAddQuestion {{action}}":data})
  
    commit("updateWorkbookAddQuestion",{idWorkbook:data.idWorkbook, sectionSelected:data.sectionSelected, newQuestion:data.newQuestion})

    return true
}

