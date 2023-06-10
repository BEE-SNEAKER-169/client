import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/category/category.reducer";
import accountReducer from "./reducers/account/account.reducer";
import brandReducer from "./reducers/brand/brand.reducer";
import cardReducer from "./reducers/card/card.reducer";
import cardDetailReducer from "./reducers/card-detail/card-detail.reducer";
import colorReducer from "./reducers/color/color.reducer";
import customerInformationReducer from "./reducers/customer-information/customer-information.reducer";
import imageReducer from "./reducers/image/image.reducer";
import materialReducer from "./reducers/material/material.reducer";
import notificationReducer from "./reducers/notification/notification.reducer";
import orderReducer from "./reducers/order/order.reducer";
import orderDetailReducer from "./reducers/order-detail/order-detail.reducer";
import productReducer from "./reducers/product/product.reducer";
import productDetailReducer from "./reducers/product-detail/product-detail.reducer";
import promotionProductDetailReducer from "./reducers/promotion-product-detail/promotion-product-detail.reducer";
import promotionReducer from "./reducers/promotion/promotion.reducer";
import roleReducer from "./reducers/role/role.reducer";
import shoesCollarReducer from "./reducers/shoes-collar/shoes-collar.reducer";
import sizeReducer from "./reducers/size/size.reducer";
import soleHeightReducer from "./reducers/sole-height/sole-height.reducer";
import transactionReducer from "./reducers/transaction/transaction.reducer";
import voucherReducer from "./reducers/voucher/voucher.reducer";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    brand: brandReducer,
    card: cardReducer,
    cardDetail: cardDetailReducer,
    color: colorReducer,
    customerInformation: customerInformationReducer,
    image: imageReducer,
    material: materialReducer,
    notification: notificationReducer,
    order: orderReducer,
    orderDetail: orderDetailReducer,
    product: productReducer,
    productDetail: productDetailReducer,
    promotion: promotionReducer,
    promotionProductDetail: promotionProductDetailReducer,
    role: roleReducer,
    shoesCollar: shoesCollarReducer,
    size: sizeReducer,
    soleHeight: soleHeightReducer,
    transaction: transactionReducer,
    voucher: voucherReducer,
    category: categoryReducer
  },
});

export const dispatch = store.dispatch;
export const getState = store.getState;
