class ApiClient {
  constructor(){}

  loadAllProducts(){
    return (this.loadCategories()
    .then((categories) => {
      var promises = [];
      for (var category of categories) {
        promises.push(this.loadProducts(category.id));
      }
      return Promise
        .all(promises)
        .then(function(results) {
          /*
          results is an array of arrays of objects.
          We need to flatten it into an array of objects.
          [].concat(...results) do the job.
          see: http://lorenstewart.me/2016/11/21/flatten-a-multi-dimensional-array-using-es6/
          */
          return [].concat(...results);
        });
    }));
  }

  loadCategories(){
    return (fetch('/api/categories').
    then(function(response){
        return response.json().then(function (categories){
          return categories;
        });
    }));
  }

  loadProducts(categoryId){
    return (
      fetch('/api/categories/' + categoryId + '/products')
      .then(function(response){
        return response.json().then(function (products){
          return products;
        });
      }));
  }

  loadProduct(categoryId, productId){
    return(
      fetch('/api/categories/' + categoryId + '/products/' + productId)
      .then(function(response){
        return response.json().then(function (product){
          return product;
        });
      }));
  }
}

export default ApiClient;
