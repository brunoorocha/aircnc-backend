
module.exports = {
  async index (req, res) {
    return res.json({ ok: true })
  },

  async store (req, res) {
    console.log(req.file)
    return res.json({ ok: true })
  }
}