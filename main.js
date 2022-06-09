import "./css/normalize.css";
import "./style.css";
import { fnGenerateBtn } from "./js/events";
import { rymAPI } from "./js/api";

// VARIABLES
const w = window;

// EVENTOS
w.addEventListener("load", () => {

  rymAPI();
  fnGenerateBtn();
  
});
