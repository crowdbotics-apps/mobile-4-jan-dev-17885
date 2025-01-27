import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen116788Navigator from '../features/BlankScreen116788/navigator';
import BlankScreen016787Navigator from '../features/BlankScreen016787/navigator';
import BlankScreen116786Navigator from '../features/BlankScreen116786/navigator';
import CopyOfBlankScreen016785Navigator from '../features/CopyOfBlankScreen016785/navigator';
import BlankScreen216783Navigator from '../features/BlankScreen216783/navigator';
import CopyOfBlankScreen116768Navigator from '../features/CopyOfBlankScreen116768/navigator';
import BlankScreen116767Navigator from '../features/BlankScreen116767/navigator';
import BlankScreen016748Navigator from '../features/BlankScreen016748/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen116788: { screen: BlankScreen116788Navigator },
BlankScreen016787: { screen: BlankScreen016787Navigator },
BlankScreen116786: { screen: BlankScreen116786Navigator },
CopyOfBlankScreen016785: { screen: CopyOfBlankScreen016785Navigator },
BlankScreen216783: { screen: BlankScreen216783Navigator },
CopyOfBlankScreen116768: { screen: CopyOfBlankScreen116768Navigator },
BlankScreen116767: { screen: BlankScreen116767Navigator },
BlankScreen016748: { screen: BlankScreen016748Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
