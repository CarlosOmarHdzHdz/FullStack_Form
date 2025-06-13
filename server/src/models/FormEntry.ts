import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface FormEntryAttributes {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface FormEntryCreationAttributes extends Optional<FormEntryAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class FormEntry extends Model<FormEntryAttributes, FormEntryCreationAttributes> implements FormEntryAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public message!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

FormEntry.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    message: {
      type: new DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'form_entries',
    sequelize,
    timestamps: true,
  }
);