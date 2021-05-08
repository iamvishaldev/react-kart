import Commerce from '@chec/commerce.js';
import keys from '../../env.json';

const commerce = new Commerce(keys.REACT_APP_CHEC_PUBLIC_KEY, true);

export default commerce;
