import {observable} from 'mobx';

const name = observable({
  nameStore: '안녕하세요',
  number: 1,
});

const testName = observable({
  test: 1,
});

export {name, testName};
