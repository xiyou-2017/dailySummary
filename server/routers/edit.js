/**
 * Created by lmy on 17-8-18.
 */
const express = _require('express');
const router = express.Router();

router.get('/edit', (req, res)=> {
    res.json({data: 'edit'});
});
module.exports = router;
