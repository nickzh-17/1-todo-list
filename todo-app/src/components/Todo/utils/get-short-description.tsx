export const getShortDesctiption = (
	description: string,
	maxLength: number
): string => {
	const RATIO = 0.8;
	const descriptionLength = description.length;
	const descRatioLength = Math.ceil(descriptionLength * RATIO);

	if (descRatioLength <= maxLength) return description;

	return description.slice(0, Math.ceil(maxLength - 1)) + '…';
};
