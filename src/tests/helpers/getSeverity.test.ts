import { getSeverity } from '../../helpers/getSeverity';

describe('getSeverity', () => {

    test('Should returns "success" for indoor products', () => {
        const product = { type: 'indoor' };
        const result = getSeverity(product);
        expect(result).toBe('success');
    });

    test('Should returns "warning" for outdoor products', () => {
        const product = { type: 'outdoor' };
        const result = getSeverity(product);
        expect(result).toBe('warning');
    });

    test('Should returns null for products with unknown type', () => {
        const product = { type: 'unknown' };
        const result = getSeverity(product);
        expect(result).toBeNull();
    });
    
});