import { removeScroll } from './modules/removeScroll';
import { activeByScroll } from './modules/activeByScroll';
import { sliderAbout } from './modules/slider';
import { featuresSlider } from './modules/features-slider';
import { modal } from './modules/modal';
import { form } from './modules/form';

removeScroll('#menu');
activeByScroll('.page__page-up-btn');
sliderAbout();

featuresSlider('.slider__item',
  '.slider__arrow-left',
  '.slider-arrow-right',
  '.slider__index-active',
  '.slider__index-total',
  'slider__item--active');

modal('.modal', '.overlay', '.modal__close', '.button--open-modal');
form('feedback-form');
form('modal-form');
