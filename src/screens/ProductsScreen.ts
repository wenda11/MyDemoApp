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
  productsScreen: define(
    '',
    resourceIdSelector(`com.saucelabs.mydemoapp.android:id/productRV`),
  ),
  productItem: define(
    '',
    '//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup[1]',
  ),
  productPrice: define(
    '',
    '(//android.widget.TextView[@content-desc="Product Price"])[1]',
  ),
  productImage: define(
    '',
    '(//android.widget.ImageView[@content-desc="Product Image"])[1]',
  ),
  cartButton: define(
    '',
    '//android.widget.RelativeLayout[@content-desc="View cart"]',
  ),
};

/**
 * ProductsScreen
 *
 * @class ProductsScreen
 * @extends AppScreen
 */
export class ProductsScreen extends AppScreen {
  constructor() {
    //We do not have a better identifier
    super(use(selectors.productsScreen));
  }

  get productItem(): any {
    return $(use(selectors.productItem));
  }

  get productPrice(): any {
    return $(use(selectors.productPrice));
  }

  get emailInput(): any {
    return $(use(selectors.productImage));
  }

  get cartButton(): any {
    return $(use(selectors.cartButton));
  }
}
