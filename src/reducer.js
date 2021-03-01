export const initialState = {
  basket: [],
  user: null,
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLOR":
      return null;

    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };

    case "ADD_FILTER":
      const { checkedItems, products } = action;

      console.log("check 1", checkedItems);

      const cloneProducts = [...products];
      let localProducts = [];

      const testProducts = cloneProducts
        .map((product) => {
          //check if collection has been ticked
          if (checkedItems.collection.length !== 0) {
            for (let i = 0; i < checkedItems.collection.length; i++) {
              // if collection matches check if any other check list were checked
              if (product.name === checkedItems.collection[i]) {
                if (checkedItems.color.length !== 0) {
                  for (let i = 0; i < product.colors.length; i++) {
                    for (let j = 0; j < checkedItems.color.length; j++) {
                      if (product.colors[i] === checkedItems.color[j]) {
                        if (checkedItems.category.length !== 0) {
                          for (
                            let i = 0;
                            i < checkedItems.category.length;
                            i++
                          ) {
                            if (product.type === checkedItems.category[i]) {
                              // return collection, color, category all matched
                              return product;
                            }
                          }
                        } else {
                          // return collection,color matches but category un-matched
                          return product;
                        }
                      } else {
                        // if no color match check category
                        if (checkedItems.category.length !== 0) {
                          for (
                            let i = 0;
                            i < checkedItems.category.length;
                            i++
                          ) {
                            if (product.type === checkedItems.category[i]) {
                              // return collection and category that matches
                              return product;
                            }
                          }
                        } else {
                          // if collection exist but no color, no category list checked return product
                          return product;
                        }
                      }
                    }
                  }
                } else {
                  if (checkedItems.category.length !== 0) {
                    for (let i = 0; i < checkedItems.category.length; i++) {
                      if (product.type === checkedItems.category[i]) {
                        // return collection, color, category all matched
                        return product;
                      }
                    }
                  } else {
                    // return collection,color matches but category un-matched
                    return product;
                  }
                }
                // if no other check list aren't checked return collections matched product
                console.log("return collection only", product);

                return product;
              }
            }
            //if collection.length is 0, check if any color are checked
          } else if (checkedItems.color.length !== 0) {
            for (let i = 0; i < product.colors.length; i++) {
              for (let j = 0; j < checkedItems.color.length; j++) {
                if (product.colors[i] === checkedItems.color[j]) {
                  if (checkedItems.category.length !== 0) {
                    for (let i = 0; i < checkedItems.category.length; i++) {
                      if (product.type === checkedItems.category[i]) {
                        return product;
                      }
                    }
                  } else {
                    // return color matched only if no category checked
                    return product;
                  }
                }
              }
            }
          } else if (checkedItems.category.length !== 0) {
            for (let i = 0; i < checkedItems.category.length; i++) {
              if (product.type === checkedItems.category[i]) {
                return product;
              }
            }
          }
        })
        .filter(Boolean);

      console.log("test products", testProducts);
      localProducts = Object.assign([], testProducts);

      // if (
      //   checkedItems.hasOwnProperty("collection") &&
      //   checkedItems.collection.length !== 0
      // ) {
      //   const collection = cloneProducts
      //     .map((product) => {
      //       for (let i = 0; i < checkedItems.collection.length; i++) {
      //         if (product.name === checkedItems.collection[i]) {
      //           return product;
      //         }
      //       }
      //     })
      //     .filter(Boolean);
      //   localProducts = Object.assign([], collection);
      // } else if (
      //   checkedItems.hasOwnProperty("color") &&
      //   checkedItems.color.length !== 0
      // ) {
      //   //color sort
      //   const color = cloneProducts
      //     .map((product) => {
      //       for (let i = 0; i < product.colors.length; i++) {
      //         for (let j = 0; j < checkedItems.color.length; j++) {
      //           if (product.colors[i] === checkedItems.color[j]) {
      //             return product;
      //           }
      //         }
      //       }
      //     })
      //     .filter(Boolean);

      //   localProducts = Object.assign([], color);
      // } else if (
      //   checkedItems.hasOwnProperty("category") &&
      //   checkedItems.category.length !== 0
      // ) {
      //   console.log("check 2", checkedItems);

      //   const category = cloneProducts
      //     .map((product) => {
      //       for (let i = 0; i < checkedItems.category.length; i++) {
      //         if (product.type === checkedItems.category[i]) {
      //           return product;
      //         }
      //       }
      //     })
      //     .filter(Boolean);
      //   localProducts = Object.assign([], category);
      // }

      return {
        ...state,
        products: localProducts,
      };

    case "REMOVE_FILTER":
      return {
        ...state,
        products: action.products,
      };

    default:
      return state;
  }
};

export default reducer;
