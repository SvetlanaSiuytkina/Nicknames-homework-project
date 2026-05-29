export default class Validator {
    validateUsername(username) {
        if (typeof username !== 'string') {
            return false;
        }

        // ^[a-z||A-Z]
        // [a-z||A-Z]$
        // [\d{4}]*
        // [0-9_-]*

        const regex = ;

        return regex.test(username);
    }
}