import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useSearchProduct } from '../../../../hooks/useSearchProduct';
import { InputSearch } from './InputSearch';

jest.mock('../../../../hooks/useSearchProduct', () => ({
    useSearchProduct: jest.fn()
}));

describe('InputSearch component should be', () => {

    let handleSearchClickMock: () => void;
    let handleInputChangeMock: (event: React.ChangeEvent<HTMLInputElement>) => void;
    const setListProductsFiltered = jest.fn();

    beforeEach(() => {
        handleInputChangeMock = jest.fn();
        handleSearchClickMock = jest.fn();
        (useSearchProduct as jest.Mock).mockReturnValue({
            handleInputChange: handleInputChangeMock,
            handleSearchClick: handleSearchClickMock
        });
    });

    test('renders input and button', () => {
        render(<InputSearch setListProductsFiltered={setListProductsFiltered} />);
        const inputElement = screen.getByRole('textbox');
        const buttonElement = screen.getByRole('button');
        expect(inputElement).not.toBeNull();
        expect(buttonElement).not.toBeNull();
    });

    test('handleInputChange is called when input change', () => {
        render(<InputSearch setListProductsFiltered={setListProductsFiltered} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'search term' } });
        expect(handleInputChangeMock).toHaveBeenCalledWith(expect.any(Object));
    });

    test('handleSearchClick is called when user makes button click', () => {
        render(<InputSearch setListProductsFiltered={setListProductsFiltered} />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(handleSearchClickMock).toHaveBeenCalled();
    });

    test('applies the correct CSS classes', () => {
        render(<InputSearch setListProductsFiltered={setListProductsFiltered} />);
        const inputElement = screen.getByRole('textbox');
        const buttonElement = screen.getByRole('button');
        expect(inputElement.className).toContain('w-full');
        expect(inputElement.className).toContain('bg-gray-100');
        expect(inputElement.className).toContain('border');
        expect(inputElement.className).toContain('border-gray-300');
        expect(inputElement.className).toContain('rounded');
        expect(inputElement.className).toContain('p-2');
        expect(inputElement.className).toContain('outline-none');
        expect(inputElement.className).toContain('focus:border');
        expect(inputElement.className).toContain('focus:border-blue-500');
        expect(buttonElement.className).toContain('bg-blue-500');
        expect(buttonElement.className).toContain('rounded');
        expect(buttonElement.className).toContain('p-2');
    });
});
