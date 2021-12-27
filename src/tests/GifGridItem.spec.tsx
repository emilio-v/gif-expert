import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../components/GifGridItem';

describe('<GifGridItem>', () => {
    const mock = {
        id: 'gif-id',
        title: 'title',
        url: 'http://gif-test.com',
    };

    test('it should show GifGridItem', () => {
        const wrapper = shallow(<GifGridItem {...mock} />);
        expect(wrapper).toMatchSnapshot();
    });
});
