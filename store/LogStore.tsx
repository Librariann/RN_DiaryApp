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
  updateData(data: IData) {
    this.dataArray = this.dataArray.map((item: IData) => {
      if (item.id === data.id) {
        return {
          ...item,
          title: data.title,
          body: data.body,
        };
      }
      return item;
    });
  },
  deleteData(id: string) {
    this.dataArray = this.dataArray.filter((item: IData) => {
      if (item.id !== id) {
        return item;
      }
    });
  },
});

export {LogContext};
