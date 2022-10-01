const hbs = require('hbs');
const { DateTime } = require('luxon');

exports.registerHelper = () => {

    hbs.registerHelper('formatDateHelper', (timestamp) => {
        const timer = DateTime.fromMillis(timestamp);
        return timer.setLocale('vn').toFormat('HH:mm:ss dd/LL/yyyy');
    });

    hbs.registerHelper('formatUnitPeople', (numberOfPeople) => {
        return numberOfPeople.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    });

    // https://stackoverflow.com/questions/34252817/handlebarsjs-check-if-a-string-is-equal-to-a-value
    hbs.registerHelper('ifEquals', (arg1, arg2, options) => {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });

    hbs.registerHelper('ifNotEquals', (arg1, arg2, options) => {
        return (arg1 == arg2) ? options.inverse(this) : options.fn(this);
    });

    hbs.registerHelper('increaseIndex', (index) => {
        try {
            const parser = +index;
            return (parser + 1).toString();
        } catch (err) {
            return 'N/A';
        }
    });

    hbs.registerHelper('formatUnitPeopleWithIcons', (numberOfPeople) => {
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

    hbs.registerHelper('renderCaseColor', (numberOfPeople) => {
        return +numberOfPeople > 0 ? "text-danger" : "text-success";
    });

    hbs.registerHelper('renderNavClass', (reqPath, currentPath) => {
        return `nav-link text-white d-flex justify-content-center align-items-center header-nav-item${reqPath === currentPath ? ' header-selected' : ''}`
    });

    hbs.registerHelper('getDateUpdated', () => {
        return DateTime.now().setLocale('vn').toFormat('HH:mm:ss dd/LL/yyyy');
    });
};
