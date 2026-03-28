const getIdeas = (key) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
};

const saveIdeas = (key, ideas) => {
  localStorage.setItem(key, JSON.stringify(ideas));
};

export const getWantedIdeasID = () => getIdeas("wantedIdeas");
export const isWantedIdea = (id) => getWantedIdeasID().includes(id);

export const addWantedIdea = (id) => {
  const ideas = getWantedIdeasID();
  if (!isWantedIdea(id)) {
    ideas.push(id);
    saveIdeas("wantedIdeas", ideas);
  }
};
