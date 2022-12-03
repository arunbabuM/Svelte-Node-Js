const User = require("../models/User.js");
// const PasswordHelper = require("../utils/Passwordhelper.js");

module.exports = {

    registerUser: async (req, res) => {
        let userData = req.body;
            
                Promise.all([User.insertLogin(userData)]).then((result) => {

                     res.json({status: 200 , message: `registration success inserted rows ${result[0].rows}`});

                }).catch(error => {

                  console.log(error)
           

                })
            .catch(error => { 

           console.log("error")
      
                
            });
          
        
        console.log("error")
     },

 

    getAddUserPage: async (req, res) => {
        
        res.json({status: 200 , message: `registration success inserted rows ${result[0].rows}`});
             
     },


         // registerUser: async (req, res) => {
    //     let userData = req.body;
    //     if(userData) {
    //         const { password_hash } = userData;
    //         PasswordHelper.hashPassword(password_hash).then((data, err) => {
    //             userData.password_hash = data
    //             console.log("userdata" ,userData)
    //             Promise.all([User.insertUser(userData)]).then((result) => {

    //                  res.json({status: 200 , message: `registration success inserted rows ${result[0].rows}`});

    //             }).catch(error => {

    //                res.send(error)

    //             })
    //         }).catch(error => { 

    //              res.send(error)
                
    //         });
          
    //     }
    //      res.json({status: 500 , message: 'invalid data'});
    //  },

 
}