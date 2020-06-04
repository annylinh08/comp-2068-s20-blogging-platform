const viewPath = ('pages')


exports.home = (req, res) =>{
    // res.send('Welcome home, from the controller')
    res.render(`${viewPath}/home`, {
        pageTitle: 'Welcome Home'
    });
};
exports.about = (req, res) =>{
    // res.send('About me from the controller')
    res.render(`${viewPath}/about`, {
        pageTitle: 'About Me'
    });
};
exports.contact = (req, res) =>{
    res.render(`${viewPath}/contact`, {
        pageTitle: 'Contact Me'
    });
};
