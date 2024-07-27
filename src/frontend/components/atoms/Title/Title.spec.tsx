import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title component should be', () => {
    test('renders the title text', () => {
        render(<Title textToDisplay="My Title" hasDescription={false} description="" />);
        const titleElement = screen.getByText('My Title');
        expect(titleElement).not.toBeNull();
    });

    test('renders the description when hasDescription is true', () => {
        render(<Title textToDisplay="My Title" hasDescription={true} description="This is a description" />);
        const descriptionElement = screen.getByText('This is a description');
        expect(descriptionElement).not.toBeNull();
    });

    test('does not render the description when hasDescription is false', () => {
        render(<Title textToDisplay="My Title" hasDescription={false} description="This is a description" />);
        expect(screen.queryByText('This is a description')).toBeNull();
    });
});
