const pool = require('../config/dbconfig');



class TypeDao {



    constructor() {
        this.pool = pool;
    }

    findAll(req, res){
        pool.query('SELECT * FROM dining_type', (err, rows) => {
            console.log(rows);
            res.send(rows);
        })
    }

}

module.exports = TypeDao;