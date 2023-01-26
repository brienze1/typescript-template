import { after, before, binding, given, then, when } from 'cucumber-tsflow';
import * as console from 'console';

@binding()
export class DataDigestSteps {
    @before()
    async before(): Promise<void> {
        console.log('Test started');
    }

    @after()
    async after() {
        console.log('Test finished');
    }

    @given('this test is created correctly')
    async thisTestIsCreatedCorrectly() {
        console.log('Test created');
    }

    @when('I start the test')
    async iStartTheTest() {
        console.log('Test started');
    }

    @then('the test should be run successfully')
    async theTestShouldRunSuccessfully() {
        console.log('Test ran successfully');
    }
}
