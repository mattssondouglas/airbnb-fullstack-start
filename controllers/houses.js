// Import Packages
const express = require('express')
const router = express.Router()

//Requests
// GET /
router.get('/', async (req, res, next) => {
  res.send('Hello from Houses')
})
// POST /
router.post('/', async (req, res, next) => {})
// GET /create
router.get('/create', async (req, res, next) => {})
// GET /:id
router.get('/:id', async (req, res, next) => {})
// GET /:id/edit
router.get('/:id/edit', async (req, res, next) => {})
// PATCH /:id
router.patch('/:id', async (req, res, next) => {})
// DELETE /:id
router.delete('/:id', async (req, res, next) => {})
// Export module
module.exports = router
