const hbs = require('hbs');
const moment = require('moment');

exports.registerHelper = () => {

    hbs.registerHelper("formatDateHelper", function (timestamp) {
        return moment(timestamp, "X").utcOffset("+0700").format('HH:mm:ss DD/MM/YYYY');
    });

    hbs.registerHelper("formatUnitPeople", function (numberOfPeople) {
        return numberOfPeople.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    });

    // https://stackoverflow.com/questions/34252817/handlebarsjs-check-if-a-string-is-equal-to-a-value
    hbs.registerHelper('ifEquals', function (arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });

    hbs.registerHelper('ifNotEquals', function (arg1, arg2, options) {
        return (arg1 == arg2) ? options.inverse(this) : options.fn(this);
    });
}