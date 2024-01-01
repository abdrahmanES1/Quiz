const mongoose = require('mongoose');
const ansis = require('ansis')
class DataBase {
    static async connect() {
        await mongoose.connect(process.env.DATA_BASE_URL).then(() => {
            console.log(ansis.green("🎉 Database Connection successfully established"));
        }).catch((err) => {
            console.log(ansis.red("🚨 "+err?.message));
        })
    }
}

module.exports = DataBase