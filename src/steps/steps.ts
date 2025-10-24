import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { ProductsScreen } from '../screens/ProductsScreen';
import { CartScreen } from '../screens/CartScreen';
import { ProductsDetailsScreen } from '../screens/ProductDetailsScreen';

const cartScreen = new CartScreen();
const productsScreen = new ProductsScreen();
const productsDetailsScreen = new ProductsDetailsScreen();


Given(/^I am on products screen$/, async () => {
    await productsScreen.isShown();
 });

When(/^I select specific item$/, async () => {
    await productsScreen.productItem.click();
 });

Then(/^I am navigated to itemDetails screen$/, async () => {
     await productsDetailsScreen.isShown();
 });

When(/^I navigate to empty cart$/, async () => {
    await productsScreen.cartButton.click(); 
    await cartScreen.isShown();
 });

 Then(/^I am shown No items in cart validation message$/, async () => {
     await cartScreen.noItemsTitle.isDisplayed();
     await cartScreen.goShoppingButton.click();
     await productsScreen.isShown();
 });

 When(/^I add item to cart$/, async () => { 
    await cartScreen.addToCart.click();
 });

 Then(/^Item is added to cart$/, async () => {
     const title = await productsDetailsScreen.productTitle.getText();
     await productsScreen.cartButton.click();
     expect(await cartScreen.itemTitle.getAttribute('text')).toBe(title);
 });

 When(/^I am on itemDetails screen$/, async () => { 
    await productsScreen.isShown();
    await productsScreen.productItem.click();
    await productsDetailsScreen.isShown();
 });
