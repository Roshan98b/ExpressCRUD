// jshint esversion : 6

var express = require('express');

var Models = require('../model/model'); 

var router = express.Router();

// Form: POST
router.post('/view', (req, res) => {
	var model = new Models({
		username: req.body.username,
		email: req.body.email
	});
	Models.addModel(model, (err, model) => {
		if(err) {
			res.send('failed\n');
			console.log('Failed Insert');
		}
		else {
			res.send('success\n');
		}
	});
});

// View: GET all
router.get('/view', (req,res) => {
	Models.getModel((err, model) => {
		if(err) res.send('failed\n');
		else res.json(model);
	});
});

// View: GET
router.get('/view/:username', (req, res) => {
	Models.getModelByUsername(req.params.username, (err, model) => {
		if(err) res.send('failed\n');
		else {
			if(model == null) res.send('Document does not exixt');
			else res.json(model);
		}
	});
});

// View: PUT
router.put('/view/:username', (req, res) => {
	var model = {
		username: req.body.username,
		email: req.body.email
	};
	Models.putModelByUsername(req.params.username, model, (err, model) => {
		if(err) res.send('failed\n');
		else {
			res.json(model);
		}
	});
});

// View: DELETE
router.delete('/view/:username', (req, res) => {
	Models.deleteModelByUsername(req.params.username, (err) => {
		if(err) res.send('failed');
		else {
			res.send('success');
		}
	});
});

module.exports = router;