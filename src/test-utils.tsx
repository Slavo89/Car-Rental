import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import {
	BrowserRouter,
} from 'react-router-dom';

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: BrowserRouter, ...options });



// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
