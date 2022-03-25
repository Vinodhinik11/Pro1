const moment = require('moment');
const {faker} = require('@faker-js/faker');

const Page = require('../index');
const Actions = require('../actions');

class CreateBookingPage extends Page {
    get bookingScreen() {
        return this.getScreen('createBooking/createBooking.screen');
    }

    async waitForPageLoad() {
        await Actions.waitForVisible(this.bookingScreen.title, 70000);
    }
 

    async selectLocation(location) {
        await Actions.click(this.bookingScreen.bookingLocation());
        await Actions.pause(2);
        await Actions.scrollIntoView(this.bookingScreen.bookingLocation(location));
        await Actions.click(this.bookingScreen.bookingLocation(location));
        await Actions.pause(2);
    }

    async selectProduct(product) {
        await Actions.click(this.bookingScreen.bookingProduct());
        await Actions.pause(2);
        await Actions.scrollIntoView(this.bookingScreen.bookingProduct(product));
        await Actions.click(this.bookingScreen.bookingProduct(product));
        await Actions.pause(2);
    }

    async enterFutureDate(date) {
        
        await Actions.setValue(this.bookingScreen.arrivalDate, moment().add(date, 'days').format('DD/MM/YYYY'));
    }

    async enterNumberOfPeople(count) {
        await Actions.setValue(this.bookingScreen.numberOfPeople, count);
    }

    async selectAvailableSlot() {
        await Actions.click(this.bookingScreen.availableSlot);
    }

    async confirmSelectedSlot() {
        await Actions.waitForVisible(this.bookingScreen.confirmTitle, 7000);
        await Actions.click(this.bookingScreen.agreeConfirm);
    }

    async enterPersonalDetails() {
        await Actions.pause(2);
        await Actions.setValue(this.bookingScreen.firstName, faker.name.firstName());
        await Actions.pause(2);
        await Actions.setValue(this.bookingScreen.lastName, faker.name.lastName());
        await Actions.pause(2);
        await Actions.setValue(this.bookingScreen.dob, '01/01/2000');
        await Actions.pause(2);
        const email = faker.internet.email();
        await Actions.setValue(this.bookingScreen.email, email);
        await Actions.pause(2);
        await Actions.setValue(this.bookingScreen.confirmEmail, email);
        await Actions.pause(2);
        await Actions.setValue(this.bookingScreen.mobileNumber, '07721362398');
        await Actions.pause(2);
        await Actions.setValue(this.bookingScreen.passportNumber, '533380006');
        await Actions.pause(2);
        await Actions.click(this.bookingScreen.sex());
        await Actions.pause(2);
        await Actions.click(this.bookingScreen.sex('Female'));
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.ethnicity());
        await Actions.pause(3);
        await Actions.scrollIntoView(this.bookingScreen.ethnicity('BLACK - AFRICAN'));
        await Actions.click(this.bookingScreen.ethnicity('BLACK - AFRICAN'));
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.vaccinationStatus());
        await Actions.pause(3);
        await Actions.scrollIntoView(this.bookingScreen.vaccinationStatus('Double Vaccinated + Booster'));
        await Actions.click(this.bookingScreen.vaccinationStatus('Double Vaccinated + Booster'));
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.destination());
        await Actions.pause(3);
        await Actions.scrollIntoView(this.bookingScreen.destination('Cambodia'));
        await Actions.click(this.bookingScreen.destination('Cambodia'));
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.travelPurpose());
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.travelPurpose('Holiday'));
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.numberOfPeopleTravelling());
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.numberOfPeopleTravelling('1'));
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.hearAbout());
        await Actions.pause(3);
        await Actions.scrollIntoView(this.bookingScreen.hearAbout('Google'));
        await Actions.click(this.bookingScreen.hearAbout('Google'));
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.continuousCough());
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.continuousCough('No'));
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.changeInSmell());
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.changeInSmell('No'));
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.contactWithSomeOne());
        await Actions.pause(3);
        await Actions.click(this.bookingScreen.contactWithSomeOne('No'));
        await Actions.pause(3);
        await Actions.setValue(this.bookingScreen.streetAddress, 'barbican');
        await Actions.pause(3);
        await Actions.setValue(this.bookingScreen.city, 'Bradford');
        await Actions.pause(3);
        await Actions.setValue(this.bookingScreen.country, 'England');
        await Actions.pause(3);
        await Actions.setValue(this.bookingScreen.zipCode, '608458');
        for await (const checkBoxElement of this.bookingScreen.termsCheckBox) {
            await Actions.click(checkBoxElement);
        }
        await Actions.pause(2);
        
    }
    async payandbookbtn() {
        await Actions.pause(2);
       await Actions.click(this.bookingScreen.payandbook);
        await Actions.pause(3);
    }

    async payment(){
        await Actions.pause(3);
        const email = faker.internet.email();
        await Actions.setValue(this.bookingScreen.email2,email);
        await Actions.pause(3);
        await Actions.setValue(this.bookingScreen.cardnumber,'4242424242424242');
        await Actions.pause(10);
        await Actions.setValue(this.bookingScreen.expirydate,'01/25');
        await Actions.pause(10);
        await Actions.setValue(this.bookingScreen.cvv,'444');
        await Actions.pause(10);
        await Actions.setValue(this.bookingScreen.nameoncard,'Brad');
        await Actions.pause(20);
        await Actions.scrollIntoView(this.bookingScreen.billingcountry('Greece'));
        await Actions.click(this.bookingScreen.billingcountry('Greece'));
        await Actions.pause(10);
        await Actions.click(this.bookingScreen.saveCard);
        await Actions.pause(30);
        await Actions.click(this.bookingScreen.pay);
        await Actions.pause(10);
    }
}

module.exports = CreateBookingPage;
