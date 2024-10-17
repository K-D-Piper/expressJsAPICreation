//? IMPORT OUR MYSQL pool connection
const pool = require('../config/dbconfig')


class RestDao {



    constructor(){
        this.pool = pool;
    }


    findAll(req, res){
        pool.query('SELECT * from records', (err, rows) => {
            console.log(rows)

            res.send(rows);
        })
    }
}

module.exports = RestDao;