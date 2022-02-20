export default {}
/*

Intro:

    Our frontend application needs to fetch some data from an api.

    The server API format was decided to be the following:

    In case of success: { status: 'success', data: RESPONSE_DATA }

    The types UsersApiResponse and ProductApiResponse were already
    created. But, we figured out that the number of types needed to 
    be created is too big if new data types were required.

Exercise:

    1. Remove the UsersApiResponse and ProductsApiResponse types and use the generic ApiResponse type to specify a generic API response format for each function. 

*/

interface Entity {
    id: string;
}

interface User extends Entity {
    name: string;
}

interface Product extends Entity {
    description: string;
}

const mockUsers: User[] = [
    { id: "1", name: 'Santa Claus' },
    { id: "2", name: 'Jon Doe' }
];
const mockProducts: Product[] = [
    { id: "1", description: 'Product 1' },
    { id: "2", description: 'Product 2' }
];

// #############################################
// Replace these two types with a generic type 
// #############################################

type UsersApiResponse = {
        status: 'success';
        data: User[];
}


type ProductsApiResponse ={
        status: 'success';
        data: Product[];
} 

/*

type ApiResponse = {}

*/


// #############################################
// #############################################


 function fetchProducts(): ProductsApiResponse {
    return {
        status: 'success',
        data: mockProducts
    }
}
 function fetchUsers(): UsersApiResponse {
    return {
        status: 'success',
        data: mockUsers
    };
}

 function startApp() {
    const usersResponse = fetchUsers();
    const productsResponse = fetchProducts();
    console.log(`Successfully fetched ${usersResponse.data.length} users.`);
    console.log(`Successfully fetched ${productsResponse.data.length} products.`);

}

startApp();