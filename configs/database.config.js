const mongoose = require('mongoose');
const ansis = require('ansis')
class DataBase {
    static async connect() {
        await mongoose.connect('mongodb://127.0.0.1:27017/Exams').then(() => {
            console.log(ansis.green("🎉 Database Connection successfully established"));
        }).catch((err) => {
            console.log(ansis.red("🚨 "+err?.message));
        })
    }
}

module.exports = DataBase