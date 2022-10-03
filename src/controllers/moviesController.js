const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Movie.findAll()
            .then((movies) => {
                var title = "LISTA de PELICULAS"
                return res.render('moviesList',{
                    movies,title
                })
            })
            .catch(error => console.log(error))
    },
    new : (req,res) => {
        db.Movie.findAll({order:[["release_date","DESC"]]})
            .then((movies) => {
                var title = "LISTA de PELICULAS Nuevas!"
                return res.render('moviesList',{
                    movies,title
                })
            })
            .catch(error => console.log(error))
    },
    recommended : (req,res) => {
        db.Movie.findAll({order:[["release_date","DESC"]],limit:5})
            .then((movies) => {
                var title = "LISTA de PELICULAS RECOMENDADAS!"
                return res.render('moviesList',{
                    movies,title
                })
            })
            .catch(error => console.log(error))
    },
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id)
        .then(movie => res.render('moviesDetail', {movie}))
        .catch(error => console.log(error))
    }
}