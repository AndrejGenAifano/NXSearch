import { generateTests } from './utilities/syncTestFactory';

describe('IFS Sync API Tests', () => {
    const tableName = 'language_sys_tab';

    describe(tableName, () => {
        generateTests(tableName, ["ATTRIBUTE", "LANG_CODE", "PATH"], [], "BULK");
    });
});
