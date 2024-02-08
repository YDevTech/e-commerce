var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name:"IPHONE 14",
      category:"Mobile",
      description:"launched in September 2021",
      image:"https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg"
    },
    {
      name:"One Plus 7T",
      category:"Mobile",
      description:"launched in September 2021",
      image:"https://media.mobex.in/media/catalog/product/o/n/oneplus_7t_frosted_silver_8gb_ram.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover"
    },
    {
      name:"Samasung S22",
      category:"Mobile",
      description:"launched in September 2021",
      image:"https://m.media-amazon.com/images/I/71wGLBDEsvL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name:"MI note 9 pro",
      category:"Mobile",
      description:"launched in September 2021",
      image:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1583932998.16321918!400x400!85.png"
    },
  ]
  res.render('index', { products,admin:false });
});

module.exports = router;
