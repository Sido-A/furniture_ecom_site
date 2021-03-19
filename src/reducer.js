export const initialState = {
  cart: [],
  user: null,
  initialProducts: [],
  products: [],
  productDetail: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        initialProducts: action.products,
        products: action.products,
      };

    case "LOGIN_USER":
      return {
        ...state,
        user: action.user,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        cart: [],
        user: action.user,
      };

    case "ADD_TO_CART":
      let selectedProductNewObj = {};
      if (state.cart.length !== 0) {
        const filterCart = state.cart.filter((cartItem) =>
          cartItem.id === action.selectedProduct.id ? cartItem : null
        );

        if (filterCart.length !== 0) {
          filterCart.map((cartItem) => {
            const countUpdatedItem = {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
            selectedProductNewObj = countUpdatedItem;
          });
        } else {
          selectedProductNewObj = action.selectedProduct;
        }
      } else {
        // if cart.length is 0
        console.log("no cart item");
        selectedProductNewObj = action.selectedProduct;
      }

      // checking existing cart
      let newCartItems = [];
      if (state.cart.length !== 0) {
        // if existing cartItem id and selected product id is equal
        // ignore the matched one
        const filteredExistingCartItems = state.cart.filter((cartItem) =>
          cartItem.id !== action.selectedProduct.id ? cartItem : false
        );
        // re-assign the filtered existing cart and count updated item
        newCartItems = [...filteredExistingCartItems, selectedProductNewObj];
      } else {
        newCartItems = [selectedProductNewObj];
      }

      return {
        ...state,
        cart: newCartItems,
      };

    case "SUBTRACT_FROM_CART":
      let removeProductNewObj = {};

      const filterCart = state.cart.filter((cartItem) =>
        cartItem.id === action.selectedProduct.id ? cartItem : null
      );

      if (filterCart.length !== 0) {
        filterCart.map((cartItem) => {
          const countUpdatedItem = {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
          removeProductNewObj = countUpdatedItem;
        });
      } else {
        removeProductNewObj = action.selectedProduct;
      }

      // checking existing cart
      let newSubtractedCartItems = [];
      if (state.cart.length !== 0) {
        // if existing cartItem id and selected product id is equal
        // ignore the matched one
        const filteredExistingCartItems = state.cart.filter((cartItem) =>
          cartItem.id !== action.selectedProduct.id ? cartItem : false
        );
        // re-assign the filtered existing cart and count updated item
        if (removeProductNewObj.quantity !== 0) {
          newSubtractedCartItems = [
            ...filteredExistingCartItems,
            removeProductNewObj,
          ];
        } else {
          newSubtractedCartItems = [...filteredExistingCartItems];
        }
      } else {
        newSubtractedCartItems = [removeProductNewObj];
      }

      return {
        ...state,
        cart: newSubtractedCartItems,
      };

    case "DELETE_FROM_CART":
      const notDeletedProducts = state.cart.filter((product) =>
        product.id !== action.selectedProduct.id ? product : null
      );

      return {
        ...state,
        cart: notDeletedProducts,
      };

    case "KEYWORDS":
      const text = action.searchedWords;
      if (text === "") {
        return {
          ...state,
          products: state.initialProducts,
        };
      } else {
        console.log(text);
        const matchedProducts = state.initialProducts.filter((product) => {
          const keywords = product.keywords;
          for (let i = 0; i < keywords.length; i++) {
            if (keywords[i].indexOf(text.toLowerCase()) > -1) {
              return product;
            }
          }
        });

        return {
          ...state,
          products: matchedProducts,
        };
      }

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
        ...state,
        products: sortPreference,
      };

    case "ADD_FILTER":
      const { checkedItems } = action;

      const cloneProducts = [...state.initialProducts];
      let localProducts = [];

      const filteredProducts = cloneProducts
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
                              if (
                                product.price > action["min-price"] &&
                                product.price < action["max-price"]
                              ) {
                                // return 'collection', 'color', 'category'
                                //**all matched**
                                return product;
                              }
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
                              if (
                                product.price > action["min-price"] &&
                                product.price < action["max-price"]
                              ) {
                                return product;
                              }
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
                        if (
                          product.price > action["min-price"] &&
                          product.price < action["max-price"]
                        ) {
                          return product;
                        }
                      } else {
                        // "Zero match"
                        return;
                      }
                    }
                  } else {
                    // return 'collection' **matched**
                    // no tick on color **category un-matched**
                    if (
                      product.price > action["min-price"] &&
                      product.price < action["max-price"]
                    ) {
                      return product;
                    }
                  }
                }
                // if no other check list aren't checked
                // return 'collection' matched product
                if (
                  product.price > action["min-price"] &&
                  product.price < action["max-price"]
                ) {
                  return product;
                }
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
                        if (
                          product.price > action["min-price"] &&
                          product.price < action["max-price"]
                        ) {
                          return product;
                        }
                      }
                    }
                  } else {
                    // return color matched only if no category checked
                    if (
                      product.price > action["min-price"] &&
                      product.price < action["max-price"]
                    ) {
                      return product;
                    }
                  }
                }
              }
            }
          } else if (checkedItems.category.length !== 0) {
            for (let i = 0; i < checkedItems.category.length; i++) {
              if (product.type === checkedItems.category[i]) {
                if (
                  product.price > action["min-price"] &&
                  product.price < action["max-price"]
                ) {
                  return product;
                }
              }
            }
          } else {
            // "No match"
            if (
              product.price > action["min-price"] &&
              product.price < action["max-price"]
            ) {
              return product;
            }
          }
        })
        .filter(Boolean);

      localProducts = Object.assign([], filteredProducts);

      return {
        ...state,
        products: localProducts,
      };

    case "REMOVE_FILTER":
      // action.products hold data from firebase
      const currentProducts = state.initialProducts;
      let filterRemoved = [];

      const priceRangeFilter = currentProducts
        .filter((product) => {
          if (
            product.price > action["min-price"] &&
            product.price < action["max-price"]
          ) {
            return product;
          }
        })
        .sort((productA, productB) =>
          productA.name !== productB.name
            ? productA.name < productB.name
              ? -1
              : 1
            : 0
        );

      filterRemoved = priceRangeFilter;
      return {
        ...state,
        products: filterRemoved,
      };

    case "PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: action.selectedProduct,
      };

    case "PURCHASED_EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
