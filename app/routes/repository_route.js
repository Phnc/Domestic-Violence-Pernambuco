//const excelToJson = require('convert-excel-to-json');


/*const result = excelToJson({
    sourceFile: 'data/dados_violencia.xlsx',
    header:{
        rows: 1
    },
    columnToKey: {
        A: 'municipio',
        B: 'regiao',
        C: 'natureza',
        D: 'data',
        E: 'ano',
        F: 'sexo',
        G: 'idade',
        H: 'total_envolvidos'
    },
});*/

const json = require('../../data/dados.json');

module.exports = function (app) {

    app.get("/data", (req, res) => {
        /*const formattedResult = result.Plan1.map(obj => {
            let formatted = {
                ...obj,
                idade: obj.idade.substring(3),
            }
            return formatted;
        });*/

        res.send(json);
    });

    app.get("/data/cases_year", (req, res) => {
        const cases_2015 = json.filter((obj) => obj.ano == 2015).length;
        const cases_2016 = json.filter((obj) => obj.ano == 2016).length;
        const cases_2017 = json.filter((obj) => obj.ano == 2017).length;
        const cases_2018 = json.filter((obj) => obj.ano == 2018).length;
        const cases_2019 = json.filter((obj) => obj.ano == 2019).length;
        const cases_2020 = json.filter((obj) => obj.ano == 2020).length;
        const cases_2021 = json.filter((obj) => obj.ano == 2021).length;

        const array = [cases_2015, cases_2016, cases_2017, cases_2018, cases_2019, cases_2020, cases_2021];

        res.send(array);
    });

    app.get("/data/nature", (req, res) => {
        const categories = json.map((obj) => {
            let category = obj.natureza;
            return category;
        });

        const uniqueCategories = [... new Set(categories)];

        let arr = [];


        uniqueCategories.forEach((category) => {
            let len = json.filter((obj) => obj.natureza == category);
            arr.push({
                    natureza: category,
                    quantidade: len.length
                    });
        });

        arr.sort((a,b) => b.quantidade - a.quantidade);

        res.send(arr);
    });

    app.get("/data/cases_age", (req, res) => {
        let ages = json.map((obj) => {
            return obj.idade;
        });
        const uniqueAges = [... new Set(ages)];

        let arr = [];

        uniqueAges.forEach((age) => {
            let qtd = json.filter((obj) => obj.idade == age);
            let idade = age;
            if(idade == "zio)"){
                idade = "Não especificada"
            }
            arr.push({
                idade: idade,
                quantidade: qtd.length

            })
        });

        res.send(arr);

    });

}