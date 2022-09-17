const hbs = require('hbs');
const { DateTime } = require('luxon');

exports.registerHelper = () => {

    hbs.registerHelper('formatDateHelper', function (timestamp) {
        const timer = DateTime.fromMillis(timestamp);
        return timer.setLocale('vn').toFormat('HH:mm:ss dd/LL/yyyy');
    });

    hbs.registerHelper('formatUnitPeople', function (numberOfPeople) {
        return numberOfPeople.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    });

    // https://stackoverflow.com/questions/34252817/handlebarsjs-check-if-a-string-is-equal-to-a-value
    hbs.registerHelper('ifEquals', function (arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });

    hbs.registerHelper('ifNotEquals', function (arg1, arg2, options) {
        return (arg1 == arg2) ? options.inverse(this) : options.fn(this);
    });

    hbs.registerHelper('increaseIndex', function (index) {
        try {
            const parser = +index;
            return (parser + 1).toString();
        } catch (err) {
            return 'N/A';
        }
    });

    hbs.registerHelper('formatUnitPeopleWithIcons', function (numberOfPeople) {
        let resultFormater = numberOfPeople.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        let iconChar = '↑';
        if (resultFormater.startsWith('-')) {
            iconChar = '↓';
            resultFormater = resultFormater.replace('-', '');
        } else if (resultFormater === '0') {
            iconChar = '';
        }
        return `${iconChar}${resultFormater}`;
    });

    hbs.registerHelper('renderCaseColor', function (numberOfPeople) {
        return +numberOfPeople > 0 ? "text-danger" : "text-success";
    });
}
