export const useTitle = (title) => {
  document.title = title;
};

export const isEmpty = (object) => {
  return Object.keys(object).length < 1;
};

export const isImportant = (value) => {
  return `${value} !important`;
};

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const mapToAvatarOption = (items) => {
  return items.map((item) => {
    return {
      ...item,
      value: item.id,
      label: item.name,
      img: item.image,
      letter: item.name.substring(0, 2).toUpperCase(),
    };
  });
};

export const mapToOption = (items) => {
  return items.map((item) => {
    return {
      ...item,
      value: item.id,
      label: item.name,
    };
  });
};
