import {serverUrl} from '../../app/const'

export const getCategories = (pageSize : number, pageNumber : number) =>  { 
    return fetch(serverUrl+`/categories?${new URLSearchParams({
        pagination: JSON.stringify({
          pageSize: pageSize,
          pageNumber: pageNumber,
        }),
        sorting: JSON.stringify({ type: 'ASC', field: 'id' }),
      }).toString()}`)
        .then(response => response.json())
}

export const getProducts = (pageSize : number, pageNumber : number) => { 
    return fetch(serverUrl+`/products?${new URLSearchParams({
        pagination: JSON.stringify({
          pageSize: pageSize,
          pageNumber: pageNumber,
        }),
        sorting: JSON.stringify({ type: 'ASC', field: 'id' }),
      }).toString()}`)
        .then(response => response.json())
}