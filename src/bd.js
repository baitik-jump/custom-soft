import cevie_stock from './images/Ar-15/cevie_stock.png';
import cevie_1 from './images/Ar-15/cevie_1.png';
import cevie_2 from './images/Ar-15/cevie_2.png';
import optika_stock from './images/Ar-15/optika_stock.png';
import optika_1 from './images/Ar-15/optika_1.png';
import optika_2 from './images/Ar-15/optika_2.png';
import rukoyat_stock from './images/Ar-15/rukoyat_stock.png';
import rukoyat_1 from './images/Ar-15/rukoyat_1.png';
import rukoyat_2 from './images/Ar-15/rukoyat_2.png';
import priklad_stock from './images/Ar-15/priklad_stock.png';
import priklad_1 from './images/Ar-15/priklad_1.png';
import priklad_2 from './images/Ar-15/priklad_2.png';
import dtk_stock from './images/Ar-15/dtk_stock.png';
import dtk_1 from './images/Ar-15/dtk_1.png';
import dtk_2 from './images/Ar-15/dtk_2.png';
import gasblok_stock from './images/Ar-15/gasblok_stock.png';
import gasblok_1 from './images/Ar-15/gasblok_1.png';
import ar15_preview from './images/Ar-15/preview.png';
import ar15_base from './images/Ar-15/base.png';

export const parts = [
  {
    id: 1,
    dotId: 1,
    name: 'Штатное цевье Middle AR-15',
    weapon: [1],
    src: cevie_stock,
    styleSrc: 'cevie_img1',
    price: 0
  },
  {
    id: 2,
    dotId: 1,
    name: 'Цевье AR-15 Brigand Arms EDGE Lightweigth Carbon Fiber',
    weapon: [1],
    src: cevie_1,
    styleSrc: 'cevie_img2',
    price: 51000
  },
  {
    id: 3,
    dotId: 1,
    name: 'Цевье AR-15 Fortis 16"',
    weapon: [1],
    src: cevie_2,
    styleSrc: 'cevie_img3',
    price: 43800
  },
  {
    id: 1,
    dotId: 2,
    name: 'Штатная рукоять для переноски AR-15',
    weapon: [1],
    src: optika_stock,
    styleSrc: 'scope1_img',
    price: 0
  },
  {
    id: 2,
    dotId: 2,
    name: 'Оптический прицел U.S.Optics SR-8 1-8x27',
    weapon: [1],
    src: optika_1,
    styleSrc: 'scope2_img',
    price: 175000
  },
  {
    id: 3,
    dotId: 2,
    name: 'Голографический прицел EOTech EXPS2-0',
    weapon: [1],
    src: optika_2,
    styleSrc: 'scope3_img',
    price: 80000
  },
  {
    id: 1,
    dotId: 3,
    name: 'Штатная рукоятка AR-15',
    weapon: [1],
    src: rukoyat_stock,
    styleSrc: 'grip1_img',
    price: 0
  },
  {
    id: 2,
    dotId: 3,
    name: 'Рукоятка AR-15 Gladman Skeleton',
    weapon: [1],
    src: rukoyat_1,
    styleSrc: 'grip2_img',
    price: 10500
  },
  {
    id: 3,
    dotId: 3,
    name: 'Сошка-подиум FAB Defense AR-PODIUM',
    weapon: [1],
    src: rukoyat_2,
    styleSrc: 'grip3_img',
    price: 9500
  },
  {
    id: 1,
    dotId: 4,
    name: 'Штатный приклад AR-15',
    weapon: [1],
    src: priklad_stock,
    styleSrc: 'priklad1_img',
    price: 0
  },
  {
    id: 2,
    dotId: 4,
    name: 'Приклад телескопический ELF Ultralight',
    weapon: [1],
    src: priklad_1,
    styleSrc: 'priklad2_img',
    price: 22600
  },
  {
    id: 3,
    dotId: 4,
    name: 'Приклад телескопический FAB Defense GL-Shock',
    weapon: [1],
    src: priklad_2,
    styleSrc: 'priklad3_img',
    price: 7700
  },
  {
    id: 1,
    dotId: 5,
    name: 'Штатный ДТК AR-15',
    weapon: [1],
    src: dtk_stock,
    styleSrc: 'dtk1_img',
    price: 0
  },
  {
    id: 2,
    dotId: 5,
    name: 'ДТК AR-15 Strike Industries',
    weapon: [1],
    src: dtk_1,
    styleSrc: 'dtk2_img',
    price: 22800
  },
  {
    id: 3,
    dotId: 5,
    name: 'Компенсатор ADC AR-15',
    weapon: [1],
    src: dtk_2,
    styleSrc: 'dtk3_img',
    price: 17800
  },
  {
    id: 1,
    dotId: 6,
    name: 'Штатный газблок AR-15',
    weapon: [1],
    src: gasblok_stock,
    styleSrc: 'gasblock1_img',
    price: 0
  },
  {
    id: 2,
    dotId: 6,
    name: 'Регулируемый газовый блок для AR-15 JP JPGS-5B',
    weapon: [1],
    src: gasblok_1,
    styleSrc: 'gasblock2_img',
    price: 13500
  }
]

export const weapon = [
  {
    id : 1,
    name : 'Базовая AR-15 ствол 18" кал. 223Rem',
    preveiwSrc : ar15_preview,
    src: ar15_base
  },
]
