import { sequelize } from '.';
import { DataTypes, Model } from 'sequelize';

interface SortType {
  type: 'ASD' | 'DESC';
  value: string;
}

interface FilterType {
  type: 'or' | 'and';
  value: string;
}

export class CrontabView {
  name?: string;
  id?: number;
  position?: number;
  isDisabled?: 1 | 0;
  filters?: FilterType[];
  sorts?: SortType[];

  constructor(options: CrontabView) {
    this.name = options.name;
    this.id = options.id;
    this.position = options.position;
    this.isDisabled = options.isDisabled;
    this.filters = options.filters;
    this.sorts = options.sorts;
  }
}

interface CronViewInstance
  extends Model<CrontabView, CrontabView>,
    CrontabView {}
export const CrontabViewModel = sequelize.define<CronViewInstance>(
  'CrontabView',
  {
    name: {
      unique: 'name',
      type: DataTypes.STRING,
    },
    position: DataTypes.NUMBER,
    isDisabled: DataTypes.NUMBER,
    filters: DataTypes.JSON,
    sorts: DataTypes.JSON,
  },
);
