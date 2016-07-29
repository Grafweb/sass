import customName from './export-default';
import req from './export-require';
import bxsli from './bx-slider-custom';
import { als } from './export-norm';

$( document ).ready(function() {
  alert("ready");
  alert(req.getHello());
  //customName();
  bxsli();
  //norm();
  als();
});