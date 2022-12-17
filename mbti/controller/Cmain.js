exports.main = (req, res) => {
    res.render("index");
  };

exports.test = (req,res)=>{
      res.render("test");
  }

exports.mbtiTest=(req,res)=>{
  res.render('mbtiTest');
}

exports.test_type = (req, res) =>{
  console.log(req.body.type);
  res.send(true);
}

exports.result=(req,res)=>{
  res.render('result');
}