import { init } from '../htmlnano';


describe('deduplicateAttributeValues', () => {
    const options = {deduplicateAttributeValues: {}};

    it('it remove duplicate values from list-like attributes', () => {
        return init(
            '<a class=" foo  bar foo ">click</a>',
            '<a class=" foo  bar ">click</a>',
            options
        );
    });

    it('should not alter non-list-like attributes', () => {
        return init(
            '<a id="foo foo" href="bar  bar">click</a>',
            '<a id="foo foo" href="bar  bar">click</a>',
            options
        );
    });
});
