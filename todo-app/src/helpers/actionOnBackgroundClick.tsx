export const actionOnBackgroundClick = (
	e: React.MouseEvent<HTMLElement>,
	targetClass: string,
	action: () => void
) => {
	const hasClosestClass = (element: Element, className: string): boolean => {
		return Boolean(element.closest('.' + className));
	};

	const targetElement = e.target as Element;
	if (!hasClosestClass(targetElement, targetClass)) action();
};
