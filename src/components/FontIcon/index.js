/**
 * MyIcon icon set component.
 * Usage: <MyIcon name="icon-name" size={20} color="#4F8EF7" />
 */
import { Animated } from 'react-native'
import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
// const glyphMap = {
//     "clingme-group": 59769,
//     "message": 59770,
//     "smile": 59771,
//     "sad": 59772,
//     "cart-022": 59768,
//     "filter-line": 59765,
//     "C-letter": 59766,
//     "light-line": 59767,
//     "clock-line": 59764,
//     "diamond": 59763,
//     "share-02": 59762,
//     "setting-line": 59760,
//     "hand-guide": 59761,
//     "camera-redeem-02": 59759,
//     "map-location": 59758,
//     "target-location": 59756,
//     "no-wifi-2": 59757,
//     "flash": 59752,
//     "no-flash": 59753,
//     "rotate-camera": 59754,
//     "arrow-up-and-down": 59755,
//     "phone-money-2": 59750,
//     "phone-card-2": 59751,
//     "clingme-building": 59744,
//     "the-bank": 59745,
//     "super-market": 59746,
//     "no-wifi": 59747,
//     "delete": 59748,
//     "bar-code": 59749,
//     "news": 59741,
//     "play": 59742,
//     "cart-02": 59743,
//     "payment-history": 59734,
//     "edit": 59735,
//     "phone-money": 59736,
//     "phone-card": 59737,
//     "phone-book-line": 59738,
//     "copy-line": 59739,
//     "phone-line": 59740,
//     "ring-bell": 59720,
//     "cart": 59721,
//     "cash-out": 59722,
//     "edit-square": 59723,
//     "gift": 59724,
//     "minus-line": 59725,
//     "cash-back-line": 59726,
//     "money-pag": 59727,
//     "plus-line": 59728,
//     "plus-list-square": 59729,
//     "plus-square": 59730,
//     "code": 59731,
//     "tag": 59732,
//     "warning-round": 59733,
//     "search": 59648,
//     "search-active": 59649,
//     "3dots": 59650,
//     "home": 59651,
//     "home-active": 59652,
//     "ring": 59653,
//     "ring-active": 59654,
//     "user": 59655,
//     "user-active": 59656,
//     "camera-redeem": 59657,
//     "camera-redeem-active": 59658,
//     "close": 59659,
//     "back": 59660,
//     "question": 59661,
//     "camera": 59662,
//     "reload": 59663,
//     "close2": 59664,
//     "menu": 59665,
//     "Clingmepay": 59666,
//     "deliver": 59667,
//     "calendar": 59668,
//     "star": 59669,
//     "location": 59670,
//     "map": 59671,
//     "filter": 59672,
//     "map-list": 59673,
//     "plus": 59674,
//     "checkbox1": 59675,
//     "checkbox0": 59676,
//     "checkround0": 59677,
//     "checkround1": 59678,
//     "right": 59679,
//     "location2": 59680,
//     "dessert": 59681,
//     "clothes": 59682,
//     "calendar2": 59683,
//     "deliver3": 59684,
//     "Clingmepay2": 59685,
//     "3dots-horizontal": 59686,
//     "heart": 59687,
//     "share": 59688,
//     "direct": 59689,
//     "phone": 59690,
//     "wifi": 59691,
//     "air": 59692,
//     "carpark": 59693,
//     "arrow-down": 59694,
//     "baby-seat": 59695,
//     "smocking": 59696,
//     "karaoke": 59697,
//     "pool": 59698,
//     "chartbar": 59699,
//     "report-error": 59700,
//     "clock": 59701,
//     "outdoor-table": 59702,
//     "livemusic": 59703,
//     "infomation": 59704,
//     "globe": 59705,
//     "mail": 59706,
//     "folder": 59707,
//     "check": 59708,
//     "like": 59709,
//     "cmt": 59710,
//     "send": 59711,
//     "check2": 59712,
//     "add": 59713,
//     "cashback": 59714,
//     "eye-on": 59715,
//     "eye-off": 59716,
//     "fb": 59717,
//     "gg---Copy": 59718,
//     "gg": 59719,
//     "place-line-1": 59773,
//     "booking-line": 59774,
//     "delivery-line": 59775,
//     "bill-line": 59776,
//     "payment-line": 59777,
//     "Clingmepay-line": 59778,
//     "log-out-line": 59779,
//     "place-line-2": 59780,
//     "term-line": 59781,
//     "password-line": 59782,
//     "about-line": 59783,
//     "gift-code-line": 59784,
//     "group-line": 59785,
//     "place-line-3": 59786,
//     "user-info-line": 59787,
//     "help-line": 59788,
//     "camera-line": 59789,
//     "edit-line": 59790,
//     "email-line": 59791
// };

// const iconSet = createIconSet(glyphMap, 'icon-clingme-2-0', 'icon-clingme-2-0.ttf');

// export default Animated.createAnimatedComponent(iconSet);

const glyphMap = {
    "home": 59648,
    "wallet": 59649,
    "account": 59650,
    "mobile-money-in": 59651,
    "card": 59652,
    "save": 59653,
    "bill-pay": 59654,
    "money-tranfer": 59655,
    "account-balance": 59656,
    "history": 59657,
    "payment-method": 59658,
    "pass": 59659,
    "money-in": 59660
};
const iconSet = createIconSet(glyphMap, 'GB', 'GB.ttf');
export default iconSet

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;

