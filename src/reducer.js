export const initialState = {
  basket: [],
  user: null,
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };

    case "PREFERENCE":
      let sortPreference = [];
      if (action.selectedPreference.match("bestMatch")) {
        const alphaSort = state.products.sort((productA, productB) =>
          productA.name !== productB.name
            ? productA.name < productB.name
              ? -1
              : 1
            : 0
        );

        console.log(alphaSort);
        sortPreference = alphaSort;
      } else if (action.selectedPreference.match("priceLowHigh")) {
        const lowToHigh = state.products.sort((productA, productB) => {
          return parseInt(productA.price) - parseInt(productB.price);
        });
        sortPreference = lowToHigh;
      } else {
        const highToLow = state.products.sort((productA, productB) => {
          return parseInt(productB.price) - parseInt(productA.price);
        });
        sortPreference = highToLow;
      }
      return {
        state,
        products: sortPreference,
      };

    case "ADD_FILTER":
      console.log("ADD_FILTER");
      const { checkedItems, products } = action;

      const cloneProducts = [...products];
      let localProducts = [];

      const testProducts = cloneProducts
        .map((product) => {
          //check if 'collection' has been ticked
          if (checkedItems.collection.length !== 0) {
            for (let i = 0; i < checkedItems.collection.length; i++) {
              // if 'collection' **matches**
              // check if 'color' has been ticked
              if (product.name === checkedItems.collection[i]) {
                if (checkedItems.color.length !== 0) {
                  for (let i = 0; i < product.colors.length; i++) {
                    for (let j = 0; j < checkedItems.color.length; j++) {
                      // if 'color' **matches**
                      // check if 'category' has been ticked
                      if (product.colors[i] === checkedItems.color[j]) {
                        if (checkedItems.category.length !== 0) {
                          for (
                            let i = 0;
                            i < checkedItems.category.length;
                            i++
                          ) {
                            if (product.type === checkedItems.category[i]) {
                              // return 'collection', 'color', 'category'
                              //**all matched**

                              return product;
                            }
                          }
                        } else {
                          // return only 'collection','color' matched
                          //**category un-matched**

                          return product;
                        }
                      } else {
                        // if 'collection' **matched** but 'no color' match, move to ''check category''
                        if (checkedItems.category.length !== 0) {
                          for (
                            let i = 0;
                            i < checkedItems.category.length;
                            i++
                          ) {
                            if (product.type === checkedItems.category[i]) {
                              // return 'collection' and 'category' that matches
                              // no color **matched**

                              return product;
                            } else {
                              // "Zero match"
                              return;
                            }
                          }
                        } else {
                          // "Zero match"

                          return;
                        }
                      }
                    }
                  }
                } else {
                  // if 'collection' **matched** but no 'tick on color', move to ''check category''
                  if (checkedItems.category.length !== 0) {
                    for (let i = 0; i < checkedItems.category.length; i++) {
                      if (product.type === checkedItems.category[i]) {
                        // return collection, category matched
                        // no color chosen by the user
                        return product;
                      } else {
                        // "Zero match"
                        return;
                      }
                    }
                  } else {
                    // return 'collection' **matched**
                    // no tick on color **category un-matched**

                    return product;
                  }
                }
                // if no other check list aren't checked
                // return 'collection' matched product

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
          } else {
            // "No match"
            return;
          }
        })
        .filter(Boolean);

      localProducts = Object.assign([], testProducts);

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
