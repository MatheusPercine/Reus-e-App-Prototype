const { Router } = require('express');
const router = Router();

const UsuarioController = require('../controllers/UsuarioController');
const ProdutoController = require('../controllers/ProdutoController');
const FavoritoController = require('../controllers/FavoritoController');
const ComentarioController = require('../controllers/ComentarioController');
const CarrinhoController = require('../controllers/CarrinhoController');
const AuthController = require("../controllers/AuthController");

const validator = require("../config/validator");
const passport = require("passport");

const path = require("path");
const multer = require("multer");
const storage = require("../config/files");
const upload = multer({
    storage: storage,
    fileFilter: function (request, file, callback) {
        const ext = path.extname(file.originalname);
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
            return callback(new Error("Extensão de arquivo inválida. Tente png, jpg ou jpeg!"), false);
        };
        callback(null, true);
    },
    limits: {
        fileSize: 2048 * 2048
    }
});

router.use("/private", passport.authenticate('jwt', { session: false }));

router.put("/usuarios/profile/add/photo/:id", upload.single('foto'), UsuarioController.addUserPic);
router.put("/usuarios/profile/remove/photo/:id", UsuarioController.removeUserPic);
router.get('/usuarios', UsuarioController.index);
router.get('/usuarios/:id', UsuarioController.show);
router.post('/usuarios', validator.validationUsuario('create'), UsuarioController.create);
router.put('/private/usuarios/:id', UsuarioController.update);
router.delete('/usuarios/:id', UsuarioController.destroy);

router.get('/produtos', ProdutoController.index);
router.get('/produtos/:id', ProdutoController.show);
router.post('/private/produtos', ProdutoController.create);
router.put('/private/produtos/:id', ProdutoController.update);
router.delete('/private/produtos/:id', ProdutoController.destroy);


router.get('/favoritos',FavoritoController.index);
router.get('/favoritos/:id',FavoritoController.show);
router.post('/favoritos',FavoritoController.create);
router.put('/favoritos/:id', FavoritoController.update);
router.delete('/favoritos/:id', FavoritoController.destroy);

router.get('/comentarios', ComentarioController.index);
router.get('/comentarios/:id', ComentarioController.show);
router.post('/comentarios', ComentarioController.create);
router.put('/comentarios/:id', ComentarioController.update);
router.delete('/comentarios/:id', ComentarioController.destroy);

router.get('/carrinhos', CarrinhoController.index);
router.get('/carrinhos/:id', CarrinhoController.show);
router.post('/carrinhos', CarrinhoController.create);
router.put('/carrinhos/:id', CarrinhoController.update);
router.delete('/carrinhos/:id', CarrinhoController.destroy);


router.get('/private/getDetails', AuthController.getDetails);
router.post('/login', AuthController.login);
router.post('/register', validator.validationUsuario('create'), AuthController.register);

module.exports = router;