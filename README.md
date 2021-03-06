# Domestic-Violence-Pernambuco
API to retrieve data about domestic violence in the state of Pernambuco - Brazil

## Front-end
The front-end code for this project is available <a href="https://github.com/Phnc/domestic-violence" target="_blank">here</a>.
And you can access the finished result on this <a href="https://domestic-violence-pe.netlify.app/#/intro" target="_blank">link</a>

## Usage
This application is available on heroku through this <a href="https://domestic-violence.herokuapp.com/" target="_blank">link</a>

## Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm run dev
```

# :triangular_flag_on_post: Endpoints

### `/data - GET`  Fetches all available data. Returns a JSON array.

### `/data/cases_year - GET` Fetches the number of cases per year. Returns an array with 7 positions, being the first the year of 2015 and the last 2021.

### `/data/nature - GET` Fetches the number of cases per type of crime. Returns a JSON array with the following structure
```json

  [
  {
    "natureza": "AMEAÇA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR",
    "quantidade": 73753
  },
  {
    "natureza": "LESÃO CORPORAL POR VIOLÊNCIA DOMÉSTICA/FAMILIAR",
    "quantidade": 51909
  },
  {
    "natureza": "INJÚRIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR",
    "quantidade": 26384
  },
  ]

```

### `/data/cases_age - GET` Fetches the number of cases per age group of the victims. Returns a JSON array with the structure
```json

 [
  {
    "idade": "35-64",
    "quantidade": 72855
  },
  {
    "idade": "30-34",
    "quantidade": 33153
  },
  {
    "idade": "25-29",
    "quantidade": 33019
  },
 ]
```
