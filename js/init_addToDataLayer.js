
var addProduct = fetchQueryParams['addProduct'];
if (addProduct) {
    // update the product value of the Data Layer
    window.digitalData.products = window.digitalData.products  || [];
    window.digitalData.products.push({
    	'productAnalyticsName' : 'test-product',
    	'productLine' : 'TST'
    });
}

var dotOrgSearch = fetchQueryParams['orgSearch'];
if (dotOrgSearch) {
    // update the product value of the Data Layer
    window.digitalData.search = window.digitalData.search  || [];
    window.digitalData.search.searchResults = 'test search results';
    window.digitalData.search.searchTerm = 'test+search';
}
