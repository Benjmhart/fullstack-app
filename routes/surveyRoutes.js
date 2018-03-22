const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const Survey = mongoose.model("surveys");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = app => {
	app.get('/api/surveys/thanks', (req, res) => {
		res.send('thanks for voting!')
	})

	app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			body,
			subject,
			recipients: recipients.split(",").map(x => ({ email: x.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});
		try{
			const mailer = new Mailer(survey, surveyTemplate(survey));
			mailresponse = await mailer.send();
			await survey.save()
			req.user.credits -= 1
			const user = await req.user.save()
			res.send(user)
		} catch (err){
			res.status(422).send(err)
		}
	});
};