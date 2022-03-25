const { ANDROID_CONFIG } = require("@wdio/cli/build/constants");
const {When, Then} = require("@wdio/cucumber-framework");

const CreateBookingPage = require('../pages/createBooking/createBooking.page');

const createBookingPage = new CreateBookingPage();

When(/^I enter (valid|inValid) details for booking$/, async function (type) {
    if (type === 'valid') {
        await createBookingPage.waitForPageLoad();
        await createBookingPage.selectLocation('Bradford Clinic');
        await createBookingPage.selectProduct('Express RT-PCR Test - Fit To Fly (Results in 3 hours)');
        await createBookingPage.enterFutureDate(2);
        await createBookingPage.enterNumberOfPeople(1);
        await createBookingPage.selectAvailableSlot();
        await createBookingPage.confirmSelectedSlot();
        await createBookingPage.enterPersonalDetails();
        await createBookingPage.payandbookbtn();
        
    } else {
        throw new Error('Method not implemented...');
    }
});

Then(/^I should see my booking submitted$/, async function () {
       // await createBookingPage.waitForPageLoad();
        await createBookingPage.payment();
});




When(/^I chose (.*), (.*), I enter valid details for booking$/, async function (location, pro) {
    await createBookingPage.waitForPageLoad();

    await createBookingPage.selectLocation(location);
    await createBookingPage.selectProduct(pro);

    await createBookingPage.enterFutureDate(2);
        await createBookingPage.enterNumberOfPeople(1);
        await createBookingPage.selectAvailableSlot();
        await createBookingPage.confirmSelectedSlot();
        await createBookingPage.enterPersonalDetails();

});

Then(/^I should see payment page$/, async function () {
    await createBookingPage.payandbookbtn();
});

