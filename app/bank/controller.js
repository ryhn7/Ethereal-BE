const Bank = require('./model');

module.exports = {
    index: async (req, res) => {
        try {
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');

            const alert = { message: alertMessage, status: alertStatus };
            const bank = await Bank.find();


            res.render('admin/bank/view_bank', {
                bank,
                alert,
                name: req.session.user.name,
                title: 'Bank Account'
            })
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/bank');
        }
    },
    viewCreate: async (req, res) => {
        try {
            res.render('admin/bank/create', {
                name: req.session.user.name,
                title: 'Add Bank Account Information'
            })
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/bank');
        }
    },
    actionCreate: async (req, res) => {
        try {
            const { name, bankName, accountNum } = req.body;

            let bank = await Bank({ name, bankName, accountNum });
            await bank.save();

            req.flash('alertMessage', 'Successfully added bank account information');
            req.flash('alertStatus', 'success');
            res.redirect('/bank');
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/bank');
        }
    },
    viewEdit: async (req, res) => {
        try {
            const { id } = req.params;
            const bank = await Bank.findOne({ _id: id });
            res.render('admin/bank/edit', {
                bank,
                name: req.session.user.name,
                title: 'Edit Bank Account Information'
            })
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/bank');
        }
    },
    actionEdit: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, bankName, accountNum } = req.body;

            await Bank.findOneAndUpdate({ _id: id }, { name, bankName, accountNum });

            req.flash('alertMessage', 'bank account information has been updated');
            req.flash('alertStatus', 'success');
            res.redirect('/bank');
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/bank');
        }
    },
    actionDelete: async (req, res) => {
        try {
            const { id } = req.params;
            await Bank.findOneAndRemove({ _id: id });

            req.flash('alertMessage', `Bank account has been deleted`);
            req.flash('alertStatus', 'success');
            res.redirect('/bank');
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/bank');
        }
    }
}