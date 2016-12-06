export const loadVotes = () => {
  try {
    const votes = localStorage.getItem('votes');
    if (votes === null) {
      localStorage.setItem('votes', []);
      return [];
    }
    return JSON.parse(votes);
  } catch (err) {
    return [];
  }
};

export const saveVotes = (state) => {
  try {
    const votes = JSON.stringify(state);
    localStorage.setItem('votes', votes);
  } catch (err) {
    return;
  }
};

// add load / save token
