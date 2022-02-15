import "./style.css";

import { mapInit } from "./js/ymaps";

mapInit();

const map = document.querySelector("#map");

map.innerHTML = render({ list });
