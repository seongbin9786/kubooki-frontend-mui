const categories = [
  {
    link: '/',
    name: '전체',
    value: 'ALL'
  },
  {
    link: '/kgunews',
    name: '경기소식',
    value: 'KGU_NEWS'
  },
  {
    link: '/series',
    name: '기획연재',
    value: 'SERIES'
  },
  {
    link: '/people',
    name: '경대피플',
    value: 'PEOPLE'
  }
];

class NewsConstants {

  getCategoriesObject() {
    return categories;
  }

  getCategoryValueByName(categoryName) {
    const idx = categories.findIndex(elem => elem.name === categoryName);
    const { value } = categories[idx];

    return value;
  }

  getCategoryNameByValue(categoryValue) {
    const idx = categories.findIndex(elem => elem.value === categoryValue);
    const { name } = categories[idx];

    return name;
  }

  getTabIndexByCategoryName(categoryName) {
    return categories.findIndex(elem => elem.name === categoryName);
  }

  getLinkByIndex(idx) {
    const { link } = categories[idx];

    return link;
  }

  getLinkByCategoryValue(categoryValue) {
    const idx = categories.findIndex(elem => elem.value === categoryValue);
    const { link } = categories[idx];

    return link;
  }

  getTabIndexByPath(path) {
    return categories.findIndex(elem => elem.link === path);
  }

  getCategoryValueByIndex(idx) {
    const { value } = categories[idx];

    return value;
  }

  getTabIndexByCategoryValue(categoryValue) {
    return categories.findIndex(elem => elem.value === categoryValue);
  }
}

export default new NewsConstants();