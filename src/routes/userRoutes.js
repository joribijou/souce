import  express  from "express";
import userController from "../controller/usercontroller";
import DataChequer from "../middlewares/dataChequer";

// import  Validator  from "../middlewares/validator";
// import  VerifyAccess  from "../middlewares/verifyAccess";


 const router=express.Router();

router.post(
    
    "/",
    DataChequer.userRegisterIsEmpty,
    DataChequer.emailExist,
    // Validator.userAccountRule(),
    // Validator.in/6502af056fcd820d0ec0274eputValidator,  
userController.createUser
    );
    
router.get("/",userController.getAllUsers)
router.delete("/",userController.deleteAllUsers)
router.get('/:ido',userController.getOneUser)
router.delete("/:id",userController.deleteOneUser)
router.patch("/:id",userController.updateUser)
router.post("/login",userController.login)

export default router;