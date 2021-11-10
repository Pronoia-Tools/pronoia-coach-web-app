import PronoiaAPI from "../../../api/PronoiaAPI";


export const loadTags = async ({ commit }, workbook) => {

  let response = await PronoiaAPI.get('/workbook/'+workbook+'/tags');

  console.log('estoy llegnado')
  if (!response) return;
  commit("setTags", response.data);

  return response.data;

};

export const loadWorkbooks = async ({ commit }) => {

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

export const updateWorkbookStructure = async ({commit}, [workbook, treeData]) => {
  let updatedWorkbook = {
    id: workbook.id,
    structure: {tree: treeData}
  }

  let response = await PronoiaAPI.put('/workbook/'+updatedWorkbook.id, updatedWorkbook );

  if (!response) return;
  commit("updateWorkbook", response.data);

  return response.data;
}

export const loadWorkBookUnits = async ({ commit }, workbook) => {
  let response = await PronoiaAPI.get('/workbook/'+workbook.id+'/unit');

  if (!response) return;
  commit("updateWorkbook", response.data);

  return response.data;

};

export const createWorkBookUnit = async ({ commit }, [workbook, unit]) => {
  let response = await PronoiaAPI.post('/workbook/'+workbook.id+'/unit', unit);

  if (!response) return;
  commit("updateWorkbook", response.data.workbook);

  return response.data.unit;
}

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

