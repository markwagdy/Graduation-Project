const Validator=require("validator");
const isEmpty=require("is-empty");

module.exports=function validateRegisterInput(data){
    let errors={};

    //change empty params to empty strings
    data.username=!isEmpty(data.username) ? data.username :"";
    data.email=!isEmpty(data.email) ? data.email :"";
    data.password=!isEmpty(data.password) ? data.password:"";
    data.password2=!isEmpty(data.password2) ? data.password2:"";

    //Name checks
    if(Validator.isEmpty(data.username)){
        errors.username="Name is required";
    }

    //Email Checks
    if(Validator.isEmpty(data.email)){
        errors.email="Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email="Email is not valid";
    }

    //Password checks
    if(Validator.isEmpty(data.password))
    {
        errors.password="password is required";
    }
    if(Validator.isEmpty(data.password2))
    {
        errors.password2="Confirm password is required";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
      }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
      }


      return {
          errors,
          isValid:isEmpty(errors) //hn-return el error message wa isValid ba true lo errors fadya
      };


    


};