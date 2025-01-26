import { createSelector } from "@reduxjs/toolkit";

export const selectCars = state => {
  const result = state.carData.items
  return result
};
export const selectLoading = state => state.carData.loading;
export const selectError = state => state.carData.error;
export const selectPage = state => state.carData.page;
export const selectLimit = state => state.carData.limit;
export const selectSkip = state => state.carData.skip;
export const selectFilter = state => state.carData.filter;
export const selectFavorites = state => state.carData.favoriteItems;
export const selectIsLoadingCarsData = state => state.carData.loading;

export const selectFilterBrand = state => state.filters.brand;
export const selectFilterPrice = state => state.filters.price;
export const selectFilterMileageFrom = state => state.filters.mileageFrom;
export const selectFilterMileageTo = state => state.filters.mileageTo;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.username;
export const selectIsLoadingUserData = state => state.auth.isLoading;
