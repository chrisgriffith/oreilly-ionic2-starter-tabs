import {Page} from 'ionic-angular';
import {ParkListPage} from '../parklist/parklist';
import {MapPage} from '../map/map';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ParkListPage;
  tab2Root: any = Page2;
}
