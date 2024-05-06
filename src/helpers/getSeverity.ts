export const getSeverity = (product) => {
    switch (product.type) {
        case 'indoor':
            return 'success';

        case 'outdoor':
            return 'warning';

        default:
            return null;
    }
}