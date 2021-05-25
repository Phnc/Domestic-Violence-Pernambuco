const excelToJson = require('convert-excel-to-json');


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

}