

const getStoredApp = () => {
  const storedAppStr = localStorage.getItem("readList");
  if (storedAppStr) {
    const storedBookData = JSON.parse(storedAppStr);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedAppData = getStoredApp();

  if (!storedAppData.includes(id)) {
    storedAppData.push(id);
    const databaseData = JSON.stringify(storedAppData);
    localStorage.setItem("readList", databaseData);
  }
};

export { addToStoreDB, getStoredApp };
