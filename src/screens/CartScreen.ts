import {
  define,
  resourceIdSelector,
  use,
} from '../helpers/selectors';
import { AppScreen } from './AppScreen';


const androidPackageName = 'com.saucelabs.mydemoapp.android'
/**
 * Suffixes of selectors:
 *    Screen  - base container
 *    Input   - form text input
 *    Button  - form button, click element
 *    Dialog  - dialog window (success, warning, error) with localized string
 *    Link    - clickable link to show another window / form
 *    Text    - any localized text on screen (not in dialog!)
 */
const selectors = {
  cartScreen: define(
    '',
    resourceIdSelector(`com.saucelabs.mydemoapp.android:id/cartCL`),
  ),

  itemsAmountInCart: define(
    '',
    '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV"]',
  ),
  addToCart: define(
    '',
    '//android.widget.Button[@content-desc="Tap to add product to cart"]',
  ),
  productPrice: define(
    '',
    '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/priceTV"]',
  ),
  decreaseItemAmount: define(
    '',
    '//android.widget.ImageView[@content-desc="Decrease item quantity"]',
  ),
  increaseItemAmount: define(
    '',
    '//android.widget.ImageView[@content-desc="Increase item quantity"]',
  ),
  totalItemAmount: define(
    '',
    '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noTV"]',
  ),
  noItemsTitle: define(
    '',
    '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noItemTitleTV"]',
  ),
  goShoppingButton: define( 
    '',
    '//android.widget.Button[@resource-id="com.saucelabs.mydemoapp.android:id/shoppingBt"]',
  ),
  itemTitle: define( 
    '',
    '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/titleTV"]',
  ),
};

/**
 * CartScreen
 *
 * @class CartScreen
 * @extends AppScreen
 */
export class CartScreen extends AppScreen {
  constructor() {
    //We do not have a better identifier
    super(use(selectors.cartScreen));
  }

  get itemsAmountInCart(): any {
    return $(use(selectors.itemsAmountInCart));
  }

  get addToCart(): any {
    return $(use(selectors.addToCart));
  }
  get productPrice(): any {
    return $(use(selectors.productPrice));
  }
  get noItemsTitle(): any {
    return $(use(selectors.noItemsTitle));
  }  
  get goShoppingButton(): any {
    return $(use(selectors.goShoppingButton));
  }
    get itemTitle(): any {
    return $(use(selectors.itemTitle));
  }
}
