// Import Packages
const express = require('express')
const router = express.Router()

//Requests
// GET /
router.get('/', async (req, res, next) => {
  res.render('./houses/list')
})
// POST /
router.post('/', async (req, res, next) => {})
// GET /create
router.get('/create', async (req, res, next) => {
  res.render('./houses/create')
})
// GET /:id
router.get('/:id', async (req, res, next) => {
  res.render('./houses/one')
})
// GET /:id/edit
router.get('/:id/edit', async (req, res, next) => {
  res.render('./houses/edit')
})
// PATCH /:id
router.patch('/:id', async (req, res, next) => {})
// DELETE /:id
router.delete('/:id', async (req, res, next) => {})
// Export module
module.exports = router
