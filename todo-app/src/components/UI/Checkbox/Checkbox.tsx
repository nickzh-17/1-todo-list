import { FC } from 'react';
import classes from './Checkbox.module.css';

interface CheckboxParams {
	checked: boolean;
	setChecked: () => void;
}

export const Checkbox: FC<CheckboxParams> = ({ checked, setChecked }) => {
	return <div className={classes.checkbox} />;
};
