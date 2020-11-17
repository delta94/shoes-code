export type shoeTypes = {
  shoeId: string;
  imageUri: string;
  type?: string;
  createdAt?: any;
  updatedAt?: any;
};

export type slipperType = {
  slipperId: string;
  imageUri: string;
  type?: string;
  createdAt?: any;
  updatedAt?: any;
};

export type shoesReducerTypes = {
  shoesList: shoeTypes[];
  fetchShoesLoading: boolean;
  fetchShoesError: string;
  loadMoreShoesLoading: boolean;
  loadMoreShoesError: string;
  addShoeLoading: boolean;
  addShoeError: string;
  updateShoeLoading: boolean;
  updateShoeError: string;
  deleteShoeLoading: boolean;
  deleteShoeError: string;
  lastShoe: any;
};

export type slipperReducerTypes = {
  slippersList: slipperType[];
  fetchSlippersLoading: boolean;
  fetchSlippersError: string;
  loadMoreSlippersLoading: boolean;
  loadMoreSlippersError: string;
  addSlipperLoading: boolean;
  addSlipperError: string;
  updateSlipperLoading: boolean;
  updateSlipperError: string;
  deleteSlipperLoading: boolean;
  deleteSlipperError: string;
  lastSlipper: any;
};

export type productTypes = {
  name: string;
  description?: string;
};

export type settingsReducerTypes = {
  shoeTypes: productTypes[];
  slipperTypes: productTypes[];
  fetchProductsLoading: boolean;
  fetchProductsError: string;
  updateProductsLoading: boolean;
  updateProductsError: string;
};

export type authReducerTypes = {
  token: string;
};

export type profileType = {
  phoneNumber: string;
  username: string;
  photoURL: string;
};

export type userReducerTypes = {
  profile: profileType;
  shoePrefixes: string[];
  slipperPrefixes: string[];
  colorCodes: string[];
  fetchSuggestionLoading: boolean;
  fetchSuggestionError: string;
  addSuggestionLoading: boolean;
  addSuggestionError: string;
  updateSuggestionLoading: boolean;
  updateSuggestionError: string;
};

export type rootReducerTypes = {
  auth: authReducerTypes;
  user: userReducerTypes;
  shoes: shoesReducerTypes;
  slippers: slipperReducerTypes;
  settings: settingsReducerTypes;
};
