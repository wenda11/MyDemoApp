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
  productsDetailsScreen: define(
    '',
    resourceIdSelector(`com.saucelabs.mydemoapp.android:id/productIV`),
  ),
   productTitle: define(
     '',
     '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/productTV"]',
   ),
};

/**
 * ProductsDetailsScreen
 *
 * @class ProductsDetailsScreen
 * @extends AppScreen
 */
export class ProductsDetailsScreen extends AppScreen {
      constructor() {
        //We do not have a better identifier
        super(use(selectors.productsDetailsScreen));
      }
      get productTitle(): any {
          return $(use(selectors.productTitle));
        }
}
