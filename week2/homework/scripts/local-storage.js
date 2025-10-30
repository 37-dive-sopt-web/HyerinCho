import { members } from "../data/members-data.js";

const MEMBERS_DATA_KEY = 'membersData';

const initLocalStorage = () => {
  const initData = localStorage.getItem(MEMBERS_DATA_KEY);
  if (!initData || JSON.parse(initData).length === 0){
    localStorage.setItem(MEMBERS_DATA_KEY, JSON.stringify(members || []));
  }
}

const getLocalStorage = () => {
  try {
    const getValue = localStorage.getItem(MEMBERS_DATA_KEY);
    return getValue ? JSON.parse(getValue) : [];
  } catch {
    return [];
  }
}

const deleteLocalStorage = () => {
  localStorage.removeItem(MEMBERS_DATA_KEY);
}

const setLocalStorage = (value) => {
  localStorage.setItem(MEMBERS_DATA_KEY, JSON.stringify(value));
}

export {
  initLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
  setLocalStorage,
}