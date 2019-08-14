const controller = {

  post: (req, res) => {
    console.log('successful post')
    res.status(201).redirect('/api')
  }

}

module.exports = controller;