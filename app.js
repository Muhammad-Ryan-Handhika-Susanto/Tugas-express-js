var express = require("express");
var app = express();

// Menggunakan method get
app.get('/biodata', function(req, res){
    const nama = req.query.nama;
    const tempat_lahir = req.query.tempat_lahir;
    const tanggal_lahir = req.query.tanggal_lahir;
    const alamat = req.query.alamat;

    res.send({
        'nama': nama,
        'tempat_lahir': tempat_lahir,
        'tanggal_lahir': tanggal_lahir,
        'alamat': alamat
    });
});

// Menggunakan method post
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/biodata', (req, res) => {
    const nama = req.body.nama;
    const tempat_lahir = req.body.tempat_lahir;
    const tanggal_lahir = req.body.tanggal_lahir;
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempat_lahir': tempat_lahir,
        'tanggal_lahir': tanggal_lahir,
        'alamat': alamat
    });
});

var express = app.listen(8080, function(){
    console.log(`Server listening on port ${port}`)
});
