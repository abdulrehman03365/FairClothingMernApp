

exports.newsletter=(req,res)=>{

res.render('newsletter',{csrf:'CSRF token goes here'})}

exports.newsletterSignupProcess=(req,res)=>{
    console.log('Form(form querystring):',req.query.form);
    console.log('CSRF:',req.body.csrf);
    console.log('Name :',req.body.name);
    console.log('Email :',req.body.email);
    res.redirect(303,'/newsletter-signup-thank-you')
}
exports.newsLetterSignupThankYou = (req , res)=>{
    res.render('newsletter-singup-thank-you')}

exports.api={
    newsletterSignup:(req,res)=>{
    console.log('CSRF:',req.body.csrf);
    console.log('Name :',req.body.name);
    console.log('Email :',req.body.email);
    res.send({result:'success'})
},}