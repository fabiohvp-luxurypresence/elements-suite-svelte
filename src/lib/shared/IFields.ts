import type IFieldValue from './IFieldValue';

export default interface IFields {
	attr: { [key: string]: IFieldValue };
	style: { [key: string]: IFieldValue };
}
