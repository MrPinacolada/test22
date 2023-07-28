## Demo

Demo link : [Click here](https://mrpinacolada.github.io/test22/)

## Installation

Install test22weatherbox with npm

```bash
  npm install test22weatherbox
```
or with docker

```bash
  docker pull mrpinacolada/tests:latest
```

## Usage/Examples

import :

```
  import {mountWeatherModule} from "test22weatherbox";
  import "test22weatherbox/dist/test22weatherbox.css";
```

Usage :

```
onMounted(()=>{
mountWeatherModule('id_of_your_div')
})

```
