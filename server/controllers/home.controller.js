class HomeController {
  returnTestString = async (req, res) => {
    try {
      res.status(200).json({ message: 'IN DEV'})
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }
}

module.exports = new HomeController()