import {observable} from 'mobx';
import {v4 as uuidv4} from 'uuid';

interface IData {
  id?: string;
  title: string;
  body: string;
  date: string;
}

const LogContext = observable({
  dataArray: [],
  setData(data: IData) {
    const dataObject = {
      id: uuidv4(),
      title: data.title,
      body: data.body,
      date: data.date,
    };
    this.dataArray.push(dataObject);
  },
});

export {LogContext};
